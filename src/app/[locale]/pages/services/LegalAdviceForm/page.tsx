"use client";
import { Box, Button, Grid, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import stamp from "/public/stamp.png";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import CardsAlkood from "@/app/[locale]/components/cards/CardsAlkood";
import UploadPdf from "@/app/[locale]/components/atoms/uploadfies/UploadPdf";
import CardsModel from "@/app/[locale]/components/cards/CardsModel";
import ModalBack from "@/app/[locale]/components/cards/ModalBack";
import blance from "/public/balance.png";
import RadioCards from "@/app/[locale]/components/atoms/RadioCards";
import CalenderModal from "@/app/[locale]/components/atoms/CalenderModal";
import PackagesModal from "@/app/[locale]/components/atoms/PackagesModal";
import moment from "moment";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import SpeechToText from "@/app/[locale]/components/speechToText/SpeechToText";

function LegalAdviceForm() {
  const t = useTranslations("ServiceForm");
  const selectedLocale = useLocale();
  const [inputValue, setInputValue] = useState(""); // State to hold input value
  const [inputValue1, setInputValue1] = useState(""); // State to hold input value
  const [error, setError] = useState(false); // State to track error
  const [error1, setError1] = useState(false); // State to track error
  const [error2, setError2] = useState(false); // State to track error
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedCards, setSelectedCards] = useState<any[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<any>([]);
  const [uploadFileArray, setUploadFileArray] = useState([]);
  const [selectedPackageCards, setSelectedPackageCards] = useState<any[]>([]);
  const now = new Date();
  const dateString = moment(now).format("YYYY-MM-DD");
  const [selectedDateCards, setSelectedDateCards] = useState<any[]>([]);
  const [selectedTime, setSelectedTime] = useState<any[]>([]);

  //speech
  const [speechText, setSpeechText] = useState("");
  const [speechAudioKey, setSpeechAudioKey] = useState<string[] | null>(null);

  function handleSpeechToText(speechText: string, speechAudioKey: string[]) {
    setSpeechAudioKey(speechAudioKey);
  }

  const handleCardClick = (card: any) => {
    if (selectedCards.includes(card)) {
      setSelectedCards([]);
    } else {
      setSelectedCards([card]);
      setError2(false);
    }
  };
  const handleChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
    setError(value.trim() === ""); // Set error to true if value is empty
  };

  const handleSubmit = () => {
    if (
      // s!inputValue.trim() || 
      selectedCards.length === 0) {
      setError(true);
      setError2(selectedCards.length === 0);
    } else {
      setError(false);
      setError2(false);
      const newPathname = `/${selectedLocale}/pages/services/PaymentMethod`;
      // Manually set the window location to navigate to the new pathname
      window.location.pathname = newPathname;
    }
  };

  const renderCalenderModal = () => (
    <CalenderModal
      buttonClicked={buttonClicked}
      setButtonClicked={setButtonClicked}
      selectedCards={selectedDateCards}
      setSelectedCards={setSelectedDateCards}
      isSelectedPackage={selectedCards[0]?.companyTags?.length === 0}
      categoryId={selectedCards[0]?.mobileRequestCategoryId}
      packageId={selectedPackageCards[0]?.id}
      date={dateString}
      selectedTime={selectedTime}
      setSelectedTime={setSelectedTime}
    />
  );

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
                  src={blance}
                  alt="Your Image"
                  style={{ width: "50px", objectFit: "contain" }}
                />
                <Typography
                  className={`signin-form ${
                    selectedLocale === "ar" ? "mr-" : "ml-"
                  }3 text-sm text-[#454646]`}
                  sx={{ marginRight: "50px" }}
                >
                  {t("advice")}
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
                className={`input input-bordered placeholder:text-[11px] focus:border-0 w-full max-w-x text-start h-10 rounded-lg placeholder-orange-200 px-3.5 py-[17.8px] max-w-x border ${
                  error ? "border-red-500" : "" // Apply red border if error is true
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

          <Typography className="signin-form mr-3 mt-3 text-sm text-[#173039]">
            {t("topic")}
          </Typography>
          <CardsModel
            buttonClicked={buttonClicked}
            setButtonClicked={setButtonClicked}
            selectedCards={selectedCards}
            handleCardClick={handleCardClick}
            setSelectedCards={setSelectedCards}
            error2={error2}
          />
          {/* {selectedCards.length > 0 && (
            <RadioCards
              selectedCard={selectedCards}
              setSelectedSubCategory={setSelectedSubCategory}
            />
          )} */}

          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Typography className="signin-form mr-3 mt-3 text-sm text-[#454646] ">
                {t("explaination")}
              </Typography>
              <Typography className="text-font mt-[1.5px]  mr-3 text-xs text-[#808283]">
                {t("write_or_add")}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <SpeechToText
                handleResult={handleSpeechToText}
                text={speechText}
                setText={setSpeechText}
              />
            </Grid>
          </Grid>

          {/* Pdf Upload */}
          <UploadPdf setUploadFileArray={setUploadFileArray} />

          {/* {selectedCards[0]?.companyTags?.length === 0 && (
            <PackagesModal
              selectedCards={selectedPackageCards}
              setSelectedCards={setSelectedPackageCards}
            />
          )} */}
          {/* {selectedCards[0]?.companyTags?.length === 0 &&
          selectedPackageCards.length > 0
            ? renderCalenderModal()
            : selectedCards[0]?.companyTags?.length > 0 &&
              renderCalenderModal()} */}
          {/* <CalenderModal/> */}
                {renderCalenderModal()}
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
                className="bg-[#173039] text-white w-[55%] h-9 mt-10"
                onClick={handleSubmit}
              >
                {t("servicenext")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default LegalAdviceForm;
