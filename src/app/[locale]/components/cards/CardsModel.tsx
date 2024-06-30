import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
} from "@mui/material";
import { FaCheck, FaPlus } from "react-icons/fa";
import contract from "/public/contract.png"; // Assuming you have an image file named contract.png
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useMobileRequestCategoryLanguageWise } from "../../../../../lib/auth";
import { IoChevronBackSharp, IoChevronForward } from "react-icons/io5";
import Spinner from "../atoms/Spinner";
import { IMAGE_URL } from "../../../../../lib/backend";

interface CardsAlkoodProps {
  buttonClicked: boolean;
  setButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCards: any[];
  handleCardClick: (index: number) => void;
  setSelectedCards: Dispatch<SetStateAction<any[]>>;
  error2:any;
}

const CardsModel: React.FC<CardsAlkoodProps> = ({
  buttonClicked,
  setButtonClicked,
  selectedCards,
  handleCardClick,
  setSelectedCards,
  error2
}) => {
  const t = useTranslations("ServiceForm");
  const selectedLocale = useLocale();
  const { data, isLoading } = useMobileRequestCategoryLanguageWise();
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(false); // Close the modal
  };

  const handleDivClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


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
        <div
          className="text-font input text-[10px] input-bordered
          w-full max-w-x text-start rounded-lg placeholder-[#BCBDBF] py-[3.8px] max-w-x
          border min-h-[50px]" // Add min-h-[50px] to ensure a minimum height
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            background: selectedCards.length > 0 ? 'linear-gradient(89.79deg, #F5E9CF -4.39%, #EDD9A7 102.4%)' : "transparent",
          }}
        >
          <div className=" flex justify-between items-center w-full">
            {selectedCards?.length > 0 ? (
              <Grid container justifyContent="start">
                {selectedCards?.map((card, index) => (
                  <Grid key={index} >
                    <div
                      className={`flex justify-start items-center gap-4 px-[10px] py-[6px] ${
                        selectedLocale === "ar" ? "ml-5" : "ml-0"
                      }`}
                      onClick={handleDivClick}
                    >
                      <img
                            src={`${IMAGE_URL}${card?.icon}`}
                            alt="card"
                            style={{
                              width: "20px",
                              height: "20px",
                              objectFit: "contain",
                            }}
                          />
                      <Typography>{card?.name}</Typography>
                    </div>
                  </Grid>
                ))}
                
              </Grid>
            ) : (
              <Typography
              className={`checkbox-signin mr-3 text-[12px]  ${
                error2 ? "text-red-500" : "text-[#5e6569]"
              }`}
                onClick={handleDivClick}
              >
                {t("according")}
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
                {t("specialty_lawyer")}
              </Typography>
            </div>
            <Typography
              className={`text-font  mt-[1.5px] mr-3 mb-10 text-xs
                ${
                  selectedCards.length === 0
                    ? // && buttonClicked
                      "text-red-500"
                    : "text-[#808283]"
                }`}
              style={{ textAlign: selectedLocale === "ar" ? "right" : "left" }}
            >
              {t("field_of_application")}
            </Typography>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <Grid
                  container
                  spacing={2}
                  style={{ direction: selectedLocale === "ar" ? "rtl" : "ltr" }}
                >
                  {data?.result?.map((card: any, index: number) => (
                    <Grid key={card.id} item xs={12} sm={6} md={2}>
                      <Card
                        style={{
                          background: `${
                            card?.companyTags.length > 0
                              ? "linear-gradient(91.77deg, #FFFFFF -20.37%, #F0E8D7 179.55%)"
                              : "white"
                          }`,
                        }}
                        className={`border ${
                          selectedCards.includes(card)
                            ? "border-[#DDB669]"
                            : "border-[#87959A]"
                        } rounded-[16px] h-[19rem] `}
                        onClick={() => handleCardClick(card)}
                      >
                        <CardContent
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            padding: "20px 2px",
                            position: "relative",
                          }}
                        >
                          {selectedCards?.includes(card) && (
                            <FaCheck
                              style={{
                                color: "#DDB669",
                                position: "absolute",
                                right: "5px",
                                top: "5px",
                              }}
                            />
                          )}
                          <img
                            src={`${IMAGE_URL}${card?.icon}`}
                            alt="card"
                            style={{
                              width: "60px",
                              height: "50px",
                              objectFit: "contain",
                            }}
                          />
                          <Typography
                            className={`signin-form mr-3 mt-3 mb-2 text-sm`}
                            style={{
                              color: selectedCards.includes(index)
                                ? "#DDB669"
                                : "#454646",
                            }}
                          >
                            {card?.name}
                          </Typography>
                          <Typography className="checkbox-signin mr-3 text-justify mb-3 text-sm text-[#808283]">
                            {card?.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </>
            )}
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
                  onClick={handleButtonClick}
                >
                  {t("selected_speciality")}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default CardsModel;
