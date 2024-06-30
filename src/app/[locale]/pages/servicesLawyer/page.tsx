"use client";
import React from "react";
import { Card } from "react-bootstrap";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import documentservice from "../../../../../public/Vector.png";
import calenderservice from "../../../../../public/calender.png";
import blance from "../../../../../public/balance.png";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  Box,
  Button,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ServicesCards } from "../../constants";
import {
  getLawyerDetail,
  useRequestCount,
  useUpcomingCount,
  useUser,
} from "../../../../../lib/auth";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import ModalBack from "../../components/cards/ModalBack";
import { IMAGE_URL } from "../../../../../lib/backend";

function ServicesFromSameLawyer({ searchParams }: { searchParams: any }) {
  const t = useTranslations("Service");
  const selectedLocale = useLocale();
  const { data: currentUser } = useUser();
  const { data: request, isLoading: requestLoading } = useRequestCount();
  const { data: upComing, isLoading: upComingLoading } = useUpcomingCount();
  const [showMore, setShowMore] = React.useState(
    Array(ServicesCards.length).fill(false)
  );
  const [buttonLoading, setButtonLoading] = React.useState(false);

  // Function to toggle showMore state for a specific card
  const toggleShowMore = (index: any) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };
  const [cardLoading, setCardLoading] = React.useState(
    Array(ServicesCards.length).fill(false)
  );
  const handleButtonClick = (index: any) => {
    const updatedCardLoading = [...cardLoading];
    updatedCardLoading[index] = true;
    setCardLoading(updatedCardLoading);
    setTimeout(() => {
      updatedCardLoading[index] = false;
      setCardLoading(updatedCardLoading);
    }, 2000);
  };
  const handleButtonClicks = () => {
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
    }, 2000);
  };

  const { data: LawyerDetails, isLoading } = getLawyerDetail(
    String(searchParams.lawyerId)
  );

  console.log(LawyerDetails);
  //
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "center", marginTop: "10px" }}
      >
        <Grid item xs={12} lg={9} mx={"0.1px"}>
          <ModalBack />
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <Card
            className=" bg-gradient-to-r from-gray-100 to-[var(--tertiary-color)]"
            style={{
              padding: "5px 0px",
              borderRadius: "8px",

              // border: "1px solid #87959A",
              // height:'100%'
            }}
          >
            {isLoading ? (
              <div className="flex justify-center items-center h-full p-2 ">
                <Spinner />
              </div>
            ) : (
              <CardContent>
                <Stack className="flex flex-row  rounded-md justify-start items-center gap-2 ">
                  <img
                    className=" object-center object-cover rounded-full"
                    style={{
                      width: "70px",
                      height: "70px",
                      border: "1px solid black",
                    }}
                    alt="Lawyer Image"
                    src={IMAGE_URL + LawyerDetails?.result?.profileImageUrl}
                  />

                  <Typography className="card-heading">
                    {LawyerDetails?.result?.firstName +
                      " " +
                      LawyerDetails?.result?.lastName}
                  </Typography>
                </Stack>
              </CardContent>
            )}
          </Card>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Card
            style={{
              backgroundColor: "white",
              padding: "11px 0px",
              borderRadius: "8px",
              border: "1px solid #87959A",
            }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={2}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={blance}
                    alt=""
                    style={{
                      width: "98px",
                      height: "58px",
                      objectFit: "contain",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={10}>
                  <Box>
                    <Typography
                      className="signin-form"
                      sx={{
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        marginRight: "16px",
                        color: "#173039",
                      }}
                    >
                      {t("advice")}
                    </Typography>
                  </Box>

                  <Typography
                    className="text-font "
                    sx={{
                      fontSize: "13.4px",
                      display: "flex",
                      alignItems: "center",
                      marginRight: "16px",
                      color: "#808283",
                      textAlign: "justify",
                    }}
                  >
                    {t("legal_advice")}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ justifyContent: "end", display: "flex" }}
                >
                  <Link
                    href={`/${selectedLocale}/pages/services/LegalAdviceForm`}
                  >
                    <Button
                      className="checkbox-signin text-[12px] py-[3px] px-[61px] bg-[white] border
                         border-[#DDB669]  rounded-[3px] text-[#DDB669]"
                      onClick={handleButtonClicks}
                    >
                      {buttonLoading ? (
                        <p>{t("load")}</p>
                      ) : (
                        t("service_request")
                      )}
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "13px" }}
      >
        {ServicesCards.map((card: any, index: any) => (
          <Grid item key={index} lg={3} md={4} xs={12}>
            <Card
              style={{
                backgroundColor: "white",
                padding: "11px 0px",
                borderRadius: "8px",
                border: "1px solid #87959A",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Image
                    src={card.imgsrc}
                    alt=""
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  />
                </Grid>
                <Typography
                  className="signin-form"
                  sx={{
                    fontSize: "16px",
                    color: "#173039",
                    marginTop: "10px",
                  }}
                >
                  {t(card.title)}
                </Typography>
                <Typography
                  className="text-font"
                  sx={{
                    fontSize: "12px",
                    color: "#808283",
                    marginTop: "8px",
                    textAlign: "justify",
                  }}
                >
                  {showMore[index]
                    ? t(card.description) + " " + t(card.more)
                    : `${t(card.description).slice(0, 100)}...`}
                  <span>
                    <Button
                      className="checkbox-signin text-[12px]  bg-[white]
                        border-0   text-[#DDB669]"
                      onClick={() => toggleShowMore(index)}
                    >
                      {showMore[index] ? t("show_less") : t("more")}
                      {showMore[index] ? (
                        <FaChevronUp style={{ marginLeft: "5px" }} />
                      ) : (
                        <FaChevronDown style={{ marginLeft: "5px" }} />
                      )}
                    </Button>
                  </span>
                </Typography>
              </CardContent>
              <Grid
                item
                xs={12}
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <Link href={`/${selectedLocale}/${card.link}`}>
                  <Button
                    className={`checkbox-signin text-[12px] bg-white border border-[#DDB669] rounded-[3px] text-[#DDB669] ${
                      selectedLocale === "ar"
                        ? "px-[56px] py-[3px]"
                        : "px-[29px] py-[3px]"
                    }`}
                    onClick={() => handleButtonClick(index)}
                  >
                    {cardLoading[index] ? (
                      <p>{t("load")}</p>
                    ) : (
                      t("service_request")
                    )}
                  </Button>
                </Link>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ServicesFromSameLawyer;
