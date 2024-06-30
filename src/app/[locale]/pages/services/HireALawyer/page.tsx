"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import phone from "/public/phone.png";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import CardsAlkood from "@/app/[locale]/components/cards/CardsAlkood";
import UploadPdf from "@/app/[locale]/components/atoms/uploadfies/UploadPdf";
import CardsModel from "@/app/[locale]/components/cards/CardsModel";
import ModalBack from "@/app/[locale]/components/cards/ModalBack";
import { useCreateMAsterRequestAqood } from "../../../../../../lib/auth";
import { toast } from "react-toastify";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import { useRouter } from "next/navigation";
import RequestAdedModal from "@/app/[locale]/components/atoms/RequestAdedModal";

function ServiceForm() {
  const t = useTranslations("ServiceForm");
  const selectedLocale = useLocale();
  const { mutate: CreateMasterRequestAqood, isPending: isLoading } =
    useCreateMAsterRequestAqood();
  const [inputValue, setInputValue] = useState(""); // State to hold input value
  const [error2, setError2] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedCards, setSelectedCards] = useState<any[]>([]);
  const [selectedModelCards, setSelectedModelCards] = useState<any[]>([]);
  const [uploadFileArray, setUploadFileArray] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter(); // Access next router


  
  const handleModelCardClick = (card: any) => {
    console.log("Selected Model Card:", card);
    if (selectedModelCards.includes(card)) {
      setSelectedModelCards([]);
    } else {
      setSelectedModelCards([card]);
      setError2(false);

    }
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push(`/${selectedLocale}/pages/services`); // Navigate to services page after closing the modal
  };

  const handleSubmit = () => {
    if (selectedModelCards.length === 0) {
      
      setError2(selectedModelCards.length === 0); 
    } else {
      setError2(false); 
      try {
        let data = new FormData();
        data.append("MasterCategoryId", selectedCards[0]);
        data.append(
          "MobileRequestCategoryId",
          selectedModelCards[0].mobileRequestCategoryId
        );
        data.append("Details", inputValue);
        if (uploadFileArray.length > 0) {
          data.append("Files", uploadFileArray.join());
        }
        data.append("MasterRequestType", String(1));
  
        CreateMasterRequestAqood(data, {
          onSuccess: (data) => {
            toast.success(data?.result);
            setIsModalOpen(true);
          },
          onError: (error, variables, context) => {
            console.log({
              error,
              variables,
              context,
            });
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  
  
  return (
    <div>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid
          item
          lg={9}
          xs={12}
          sx={{
            backgroundColor: "white",
            justifyContent: "center",
            padding: "10px 46px",
            paddingLeft: "61px",
            borderRadius: "16px",
            direction: selectedLocale === "ar" ? "rtl" : "ltr",
          }}
          className="pl-[61px]"
        >
          <ModalBack />
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={phone}
                  alt="Your Image"
                  style={{ width: "50px", objectFit: "contain" }}
                />
                <Typography
                  className={`signin-form ${
                    selectedLocale === "ar" ? "mr-" : "ml-"
                  }3 text-sm text-[#454646]`}
                  sx={{ marginRight: "50px" }}
                >
                  {t("hires")}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Typography className="signin-form mr-3 text-sm text-[#454646]">
                {t("service_address")}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <input
                type="text"
                name="text"
                id="text"
                value={inputValue}
                onChange={handleChange}
                required
                placeholder={t("request_title")}
                className={`input input-bordered placeholder:text-[11px] focus:border-0 w-full max-w-x text-start h-10 rounded-lg placeholder-[#808283] px-3.5 py-[17.8px] max-w-x border ${
                  error ? "border-red-500" : "" 
                }`}
              />
            </Grid>
            {error && ( 
              <Grid
                item
                xs={12}
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <Typography className="text-red-500">
                  {t("mandatory_to_give")}
                </Typography>
              </Grid>
            )}
          </Grid> */}
           {/* MOdalCards */}
           <Typography className="signin-form mr-3 mt-3 text-sm text-[#454646]">
            {t("specialty")}
          </Typography>
          {/* <Typography
            className={`checkbox-signin mr-3  mb-3 text-sm  ${
              error2 ? "text-red-500" : "text-[#808283]"
            }`}
          >
            {t("according")}
          </Typography> */}
          <CardsModel
            buttonClicked={buttonClicked}
            setButtonClicked={setButtonClicked}
            selectedCards={selectedModelCards}
            handleCardClick={handleModelCardClick}
            setSelectedCards={setSelectedModelCards}
            error2={error2}
          />
          {/* <Typography className="signin-form mr-3 mt-3 text-sm text-[#454646]">
            {t("type")}
          </Typography>
          <Typography
            className={`checkbox-signin mr-3  mb-3 text-sm  ${
              error1 ? "text-red-500" : "text-[#808283]"
            }`}
          >
            {t("orders")}
          </Typography> */}
          {/* cards */}
          {/* <CardsAlkood
            selectedCards={selectedCards}
            handleCardClick={handleCardClick}
          /> */}
         
          
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Typography className="signin-form mr-3 mt-3 text-sm text-[#454646] ">
                {t("explaination")}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                // marginTop: "10px",
              }}
            >
              <div
                className="text-font input text-[10px] input-bordered w-full max-w-x text-start h-12 rounded-lg placeholder-[#BCBDBF] px-3.5 py-[3.8px] max-w-x border"
                style={{
                  flex: "1",
                  textAlign: "center",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between", // Center horizontally
                  cursor: "pointer",
                }}
              >
                <div className="absolute flex justify-between items-center w-[96%]">
                  <Typography className="text-font text-xs text-[#808283] text-end ml-3">
                    {t("write_or_add")}
                  </Typography>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20" cy="20" r="20" fill="#F4F2EC" />
                    <g clip-path="url(#clip0_2059_1153)">
                      <path
                        d="M20 22C21.66 22 23 20.66 23 19V13C23 11.34 21.66 10 20 10C18.34 10 17 11.34 17 13V19C17 20.66 18.34 22 20 22ZM19 13C19 12.45 19.45 12 20 12C20.55 12 21 12.45 21 13V19C21 19.55 20.55 20 20 20C19.45 20 19 19.55 19 19V13ZM25 19C25 21.76 22.76 24 20 24C17.24 24 15 21.76 15 19H13C13 22.53 15.61 25.43 19 25.92V29H21V25.92C24.39 25.43 27 22.53 27 19H25Z"
                        fill="#EAD7B2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2059_1153">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(8 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Grid>
          </Grid>
          {/* Pdf Upload */}
          <UploadPdf setUploadFileArray={setUploadFileArray} />
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
              {isLoading ? (
                <div className={"mt-10"}>
                  <Spinner />
                </div>
              ) : (
                <Button
                  className="bg-[#173039] text-white w-[55%] h-9 mt-10"
                  onClick={handleSubmit}
                >
                  {t("send_request")}
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Modal */}
      <RequestAdedModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default ServiceForm;
