"use client";
import { Box, Button, Grid, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import CardsModel from "@/app/[locale]/components/cards/CardsModel";
import ModalBack from "@/app/[locale]/components/cards/ModalBack";
import writtext from "/public/textwrite.png";
import CardsDairy from "@/app/[locale]/components/cards/CardsDairy";
import {
  useCreateMAsterRequestAqood,
  useCreateMAsterRequestMuzakirat,
} from "../../../../../../lib/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import RequestAdedModal from "@/app/[locale]/components/atoms/RequestAdedModal";
import SpeechToText from "@/app/[locale]/components/speechToText/SpeechToText";

function IssuesForm() {
  const t = useTranslations("ServiceForm");
  const selectedLocale = useLocale();
  const { mutate: CreateMasterRequestMuzakirat, isPending: isLoading } =
    useCreateMAsterRequestMuzakirat();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedCards, setSelectedCards] = useState<any[]>([]);
  const [selectedModelCards, setSelectedModelCards] = useState<any[]>([]);
  const router = useRouter(); // Access next router

  //speech
  const [speechText, setSpeechText] = useState("");
  const [speechAudioKey, setSpeechAudioKey] = useState<string[] | "">("");

  function handleSpeechToText(speechText: string, speechAudioKey: string[]) {
    setSpeechAudioKey(speechAudioKey);
  }

  const handleCardClick = (id: any) => {
    if (selectedCards.includes(id)) {
      setSelectedCards([]);
    } else {
      setSelectedCards([id]);
      setError1(false);
    }
  };
  const handleModelCardClick = (card: any) => {
    if (selectedModelCards.includes(card)) {
      setSelectedModelCards([]);
    } else {
      setSelectedModelCards([card]);
      setError2(false);
    }
  };
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
    setError(false);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push(`/${selectedLocale}/pages/services`); // Navigate to services page after closing the modal
  };

  const handleSubmit = () => {
    if (
      // !inputValue.trim() ||
      selectedCards.length === 0 ||
      selectedModelCards.length === 0
    ) {
      setError(!inputValue.trim());

      setError1(selectedCards.length === 0);
      setError2(selectedModelCards.length === 0);
    } else {
      setError(false);
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
        data.append("MasterRequestType", String(1));
        data.append("audio", speechAudioKey[0] ?? "");
        data.append("speechText", speechText);
        CreateMasterRequestMuzakirat(data, {
          onSuccess: (data) => {
            toast.success(data?.result);
            setIsModalOpen(true);
          },
          onError(error, variables, context) {
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
                  src={writtext}
                  alt="Your Image"
                  style={{ width: "50px", objectFit: "contain" }}
                />
                <Typography
                  className={`signin-form ${
                    selectedLocale === "ar" ? "mr-" : "ml-"
                  }3 text-sm text-[#454646]`}
                  sx={{ marginRight: "50px" }}
                >
                  {t("DairyForm")}
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
                {t("service")}
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
            {error && ( // Render error message if error is true
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
          <CardsDairy
            selectedCards={selectedCards}
            handleCardClick={handleCardClick}
          />
          

          {/* <Grid
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
          </Grid> */}

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

export default IssuesForm;
