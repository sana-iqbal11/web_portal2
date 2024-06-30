"use client";
import React from "react";
import { Card } from "react-bootstrap";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import documentservice from "../../../../../public/Vector.png";
import calenderservice from "../../../../../public/calender.png";
import phone from "../../../../../public/phone.png";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Box, Button, CardContent, Grid, Typography } from "@mui/material";
import { ServicesCards } from "../../constants";
import {
  useRequestCount,
  useUpcomingCount,
  useUser,
} from "../../../../../lib/auth";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
function Service() {
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
  return (
    <div>
      <Grid container spacing={5} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} lg={4} md={6}>
          <Card
            style={{
              background:
                "linear-gradient(81.77deg, #FFFFFF -20.37%, #F0E8D7 179.55%)",
              padding: "24px 0px",
              borderRadius: "8px",
            }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6} sx={{ display: "flex", gap:'7px' }}>
                  <Image
                    src={documentservice}
                    alt=""
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "contain",
                    }}
                  />
                  <Typography
                    className="signin-form"
                    sx={{
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      [selectedLocale === "ar" ? "marginRight" : "marginLeft"]:
                        "16px",
                      color: "#173039",
                    }}
                  >
                    {t("request")}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  {requestLoading ? (
                    <Spinner />
                  ) : (
                    <Typography
                      className="signin-form"
                      sx={{
                        textAlign: "end",
                        fontSize: "16px",
                        color: "#173039",
                      }}
                    >
                      {request?.result}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4} md={6} className="spacingcards">
          <Card
            style={{
              background:
                "linear-gradient(81.77deg, #FFFFFF -20.37%, #F0E8D7 179.55%)",
              padding: "24px 0px",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6} sx={{ display: "flex", gap:'7px' }}>
                  <Image
                    src={calenderservice}
                    alt=""
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "contain",
                    }}
                  />
                  <Typography
                    className="signin-form"
                    sx={{
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      [selectedLocale === "ar" ? "marginRight" : "marginLeft"]:
                        "16px",
                      color: "#173039",
                    }}
                  >
                    {t("upcoming")}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  {upComingLoading ? (
                    <Spinner />
                  ) : (
                    <Typography
                      className="signin-form"
                      sx={{
                        textAlign: "end",
                        fontSize: "16px",
                        color: "#173039",
                      }}
                    >
                      {upComing?.result?.total}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "center", marginTop: "10px" }}
      >
        <Grid item xs={12} lg={9}>
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
                    src={phone}
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
          <Grid item key={index} lg={11/5} xs={12}>
            <Card
              style={{
                backgroundColor: "white",
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
                    padding:'9px 0px',
                    textAlign:'center',
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
                sx={{ justifyContent: "center", display: "flex", paddingBottom:'12px' }}
              >
                <Link href={`/${selectedLocale}/${card.link}`}>
                  <Button
                    className={`checkbox-signin mx-3  text-[12px] bg-white border border-[#DDB669] rounded-[3px] text-[#DDB669] ${
                      selectedLocale === "ar"
                        ? "px-[39px] py-[3px]"
                        : "px-[24px] py-[3px]"
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

export default Service;
