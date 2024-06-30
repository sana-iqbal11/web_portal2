"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import stamp from "/public/stamp.png";
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
import SpeechToText from "@/app/[locale]/components/speechToText/SpeechToText";

function ServiceForm() {
  const t = useTranslations("ServiceForm");
  const selectedLocale = useLocale();
  const { mutate: CreateMasterRequestAqood, isPending: isLoading } =
    useCreateMAsterRequestAqood();
  const [inputValue, setInputValue] = useState("");
  // const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedCards, setSelectedCards] = useState<any[]>([]);
  const [selectedModelCards, setSelectedModelCards] = useState<any[]>([]);
  const [uploadFileArray, setUploadFileArray] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const router = useRouter(); // Access next router

  //speech
  const [speechText, setSpeechText] = useState("");
  const [speechAudioKey, setSpeechAudioKey] = useState<string[] | null>(null);

  function handleSpeechToText(speechText: string, speechAudioKey: string[]) {
    setSpeechAudioKey(speechAudioKey);
  }

  const handleCardClick = (id: any) => {
    console.log("Selected Card ID:", id);
    if (selectedCards.includes(id)) {
      setSelectedCards([]);
    } else {
      setSelectedCards([id]);
      setError1(false);
    }
  };

  const handleModelCardClick = (card: any) => {
    console.log("Selected Model Card:", card);
    if (selectedModelCards.includes(card)) {
      setSelectedModelCards([]);
    } else {
      setSelectedModelCards([card]);
      setError2(false);
    }
  };
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
    // setError(false);
  };
  const handleSubmit = () => {
    if (
      // !inputValue.trim() ||
      selectedCards.length === 0 ||
      selectedModelCards.length === 0
    ) {
      // setError(!inputValue.trim());
      setError1(selectedCards.length === 0);
      setError2(selectedModelCards.length === 0);
    } else {
      // setError(false);
      setError1(false);
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
            setIsModalOpen(true); // Show modal on successful submission
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

  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push(`/${selectedLocale}/pages/services`); // Navigate to services page after closing the modal
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
                  src={stamp}
                  alt="Your Image"
                  style={{ width: "50px", objectFit: "contain" }}
                />
                <Typography
                  className={`signin-form ${
                    selectedLocale === "ar" ? "mr-" : "ml-"
                  }3 text-sm text-[#454646]`}
                  sx={{ marginRight: "50px" }}
                >
                  {t("return")}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          {/* <Grid container spacing={2}> */}
            {/* <Grid
              item
              xs={12}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Typography className="signin-form mr-3 text-sm text-[#454646]">
                {t("service_address")}
              </Typography>
            </Grid> */}
            {/* <Grid
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
            )} */}
          {/* </Grid> */}
   {/* MOdalCards */}
   <Typography className="signin-form mr-3 mt-3 text-sm text-[#454646]">
            {t("specialty")}
          </Typography>

          <CardsModel
            buttonClicked={buttonClicked}
            setButtonClicked={setButtonClicked}
            selectedCards={selectedModelCards}
            handleCardClick={handleModelCardClick}
            setSelectedCards={setSelectedModelCards}
            error2={error2}
          />
          <Typography className="signin-form mr-3 mt-3 text-sm text-[#454646]">
            {t("type")}
          </Typography>
          <Typography
            className={`checkbox-signin mr-3  mb-3 text-sm  ${
              error1 ? "text-red-500" : "text-[#808283]"
            }`}
          >
            {t("orders")}
          </Typography>
          {/* cards */}
          <CardsAlkood
            selectedCards={selectedCards}
            handleCardClick={handleCardClick}
          />
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
                setText={setSpeechText}
                text={speechText}
              />
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
