import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { IoChevronBackSharp, IoChevronForward } from "react-icons/io5";
import { useGetPackageLanguageWise } from "../../../../../lib/auth";
import Spinner from "@/app/[locale]/components/atoms/Spinner";

interface PackageProps {
  selectedCards: any[];
  setSelectedCards: any;
}

const PackagesModal: React.FC<PackageProps> = ({
  selectedCards,
  // handleCardClick,
  setSelectedCards,
}) => {
  const t = useTranslations("PackagesCards");
  const selectedLocale = useLocale();
  const { data, isLoading } = useGetPackageLanguageWise();
  const [modalOpen, setModalOpen] = useState(false);
  const handleDivClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCardClick = (packageObj: any) => {
    if (selectedCards.includes(packageObj)) {
      setSelectedCards([]);
    } else {
      setSelectedCards([packageObj]);
    }
  };

  const handleRemoveCard = (indexToRemove: any) => {
    setSelectedCards((prevSelectedCards: any[]) =>
      prevSelectedCards.filter((_, index) => index !== indexToRemove)
    );
  };
  const packagesData = [
    {
      id: 1,
      title: "basic",
      price: "riyal",
      currencysaudi: "currency",
      taxincluded: "addedtext",
      services: [
        "call",
        "justice",
        "duration",
        "discount",
        "changes",
        "draft",
        "installments",
        "customerservice",
        "followup",
        "managerorders",
      ],
      completedServices: ["call", "justice", "duration"],
    },
    {
      id: 2,
      title: "silver",
      price: "riyal",
      currencysaudi: "currency",
      taxincluded: "addedtext",
      services: [
        "call",
        "justice",
        "duration",
        "discount",
        "changes",
        "draft",
        "installments",
        "customerservice",
        "followup",
        "managerorders",
      ],
      completedServices: [
        "call",
        "justice",
        "duration",
        "discount",
        "changes",
        "draft",
        "installments",
        "customerservice",
      ],
    },
    {
      id: 3,
      title: "golden",
      price: "riyal",
      currencysaudi: "currency",
      taxincluded: "addedtext",
      services: [
        "call",
        "justice",
        "duration",
        "discount",
        "changes",
        "draft",
        "installments",
        "customerservice",
        "followup",
        "managerorders",
      ],
      completedServices: [
        "call",
        "justice",
        "duration",
        "discount",
        "changes",
        "draft",
        "installments",
        "customerservice",
        "followup",
        "managerorders",
      ],
    },
  ];

  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Typography className="signin-form mr-3 text-sm text-[#454646]">
          {t("package")}
        </Typography>
        <Typography
        className={`text-font mt-[1.5px] mb-3  mr-3 text-xs text-[#808283]
        }`}
      >
        {t("suits")}
      </Typography>
        <div
          className="text-font input text-[10px] input-bordered w-full max-w-x text-start rounded-lg placeholder-[#BCBDBF] px-3.5 py-[3.8px] max-w-x border min-h-[50px]" // Add min-h-[50px] to ensure a minimum height
          style={{
            textAlign: "center",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            background: selectedCards.length > 0 ? 'linear-gradient(89.79deg, #F5E9CF -4.39%, #EDD9A7 102.4%)' : "transparent",

          }}
          onClick={handleDivClick}
        >
          <div className="absolute flex justify-between items-center w-[96%]">
            {selectedCards?.length > 0 ? (
              <Grid container justifyContent="start">
                {selectedCards?.map(
                  (
                    card: {
                      name:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | React.PromiseLikeOfReactNode
                        | null
                        | undefined;
                    },
                    index: React.Key | null | undefined
                  ) => (
                    <Grid key={index}>
                      <div
                        className={`flex justify-start items-center  px-[10px] py-[6px] ${
                          selectedLocale === "ar" ? "ml-5" : "ml-0"
                        }`}
                      >
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="#DDB669"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleRemoveCard(index)}
                          className={`${
                            selectedLocale === "ar" ? "ml-" : "mr-"
                          }4`}
                        >
                          <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
                        </svg> */}
                        <Typography>{card?.name}</Typography>
                      </div>
                    </Grid>
                  )
                )}
                {/* <div
                  onClick={handleDivClick}
                  className="text-[#DDB669] ml-4  px-[45px] py-[8px] text-[20px] border border-[#DDB669] rounded-md "
                >
                  <FaPlus onClick={handleDivClick} />
                </div> */}
              </Grid>
            ) : (
              <Typography
                className="text-font text-xs text-[#DDB669] text-end"
                onClick={handleDivClick}
              >
                {t("appropiate-package")}
              </Typography>
            )}

            {selectedLocale === "ar" ? (
              <IoChevronBackSharp
                className="text-base"
                onClick={handleDivClick}
                style={{color: selectedCards.length > 0 ? "#173039": "#DFE1E3"}}

              />
            ) : (
              <IoChevronForward
                className="text-base"
                onClick={handleDivClick}
                style={{color: selectedCards.length > 0 ? "#173039": "#DFE1E3"}}

              />
            )}
          </div>
        </div>
      </Grid>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="custom-modal "
      >
        <Grid container justifyContent="center">
          <Grid
            item
            xs={10}
            sx={{
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "16px",
              padding: "40px 30px",
              maxHeight: "80vh",
              overflowY: "scroll",
              maxWidth: "69.333333% !important",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                direction: selectedLocale === "ar" ? "ltr" : "rtl",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: "10px", cursor: "pointer" }}
                onClick={handleCloseModal}
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="#DDB669"
                />
              </svg>
              <Typography className="signin-form text-right mr-3 mt-3 text-sm text-[#454646]">
                {t("package")}
              </Typography>
            </div>
            <Typography
              className="text-font  mt-[1.5px] mr-3 mb-10 text-xs text-[#808283]"
              style={{ textAlign: selectedLocale === "ar" ? "right" : "left" }}
            >
              {t("suits")}
            </Typography>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <>
                  <div
                    className="grid lg:grid-cols-3 grid-cols-1 gap-4 "
                    style={{
                      direction: selectedLocale === "ar" ? "rtl" : "ltr",
                    }}
                  >
                    {data?.result.map((packages: any, index: number) => (
                      <Card
                        key={packages?.id}
                        variant="outlined"
                        className={`pt-8 shadow-xl rounded-xl p-0 cursor-pointer border-2 ${
                          selectedCards?.some((card) => card.id === packages.id)
                            ? "border-yellow-500"
                            : "transparent"
                        }`}
                        onClick={() => handleCardClick(packages)}
                        style={{
                          background: `linear-gradient(${packages?.background})`,
                        }}
                      >
                        <CardContent className="p-0">
                          <Typography className="signin-form text-lg text-[#173039] text-center">
                            {packages?.name}
                          </Typography>
                          <Typography className="mt-4 text-center signin-form text-lg text-[#173039]">
                            {Math.trunc(packages?.totalAmount)}{" "}
                            <span className="checkbox-signin">
                              {t("currency")}
                            </span>
                          </Typography>
                          <Typography className="text-center checkbox-signin mt-2 text-[12px] text-[#87959A]">
                            {/*{packages?.description}*/}
                            {t("addedtext")}
                          </Typography>
                          <div
                            className="mt-2"
                            style={{
                              background:
                                "linear-gradient(89.51deg, #FFFFFF 0.34%, #DDB669 110.73%)",
                              width: "70px",
                            }}
                          >
                            <Typography className="text-center signin-form text-[11px]  text-[#173039]">
                              {t("advantages")}
                            </Typography>
                          </div>
                          <ul className="mt-8 px-3 text-font text-sm h-64">
                            {packages?.packageFeature?.map(
                              (service: any, index: any) => (
                                <li
                                  key={index}
                                  className={`flex mt-2 justify-end items-center
                          ${
                            packages?.packageFeature.includes(
                              packages?.packageFeature
                            )
                              ? "text-[#173039]"
                              : "text-[#BCBDBF]"
                          }`}
                                  style={{
                                    direction:
                                      selectedLocale === "ar" ? "ltr" : "rtl",
                                  }}
                                >
                                  <div
                                    className={` ${
                                      selectedLocale === "ar" ? "mr" : "ml"
                                    }-3`}
                                  >
                                    {service?.detail}{" "}
                                  </div>
                                  {service?.isActive ? (
                                    <svg
                                      width="16"
                                      height="12"
                                      viewBox="0 0 18 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M5.99991 11.1698L1.82991 6.99984L0.409912 8.40984L5.99991 13.9998L17.9999 1.99984L16.5899 0.589844L5.99991 11.1698Z"
                                        fill="#DDB669"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clip-path="url(#clip0_2304_4617)">
                                        <path
                                          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                                          fill="#BCBDBF"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_2304_4617">
                                          <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                          <div
                            className={`mt-52 mb-8 ${
                              selectedLocale === "ar" ? "pr-9" : "pl-9"
                            }`}
                          >
                            <Button className=" btn bg-[#DDB669] xl:px-[2.6rem] lg:px-5 hover-bg-[#DDB669] rounded-lg text-white text-font font-normal xl:text-base lg:text-[0.8rem] text-base">
                              {t("package")}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Button
                      className="bg-[#173039] text-white w-[45%] h-9 mt-8"
                      onClick={handleCloseModal}
                    >
                      {t("package-btn")}
                    </Button>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default PackagesModal;
