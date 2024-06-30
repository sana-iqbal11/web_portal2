import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function ModalBack() {
  const t = useTranslations("ServiceForm");
  const selectedLocale = useLocale();
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter(); // Access next router
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const handleDivClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNoClick = () => {
    setModalOpen(false); // Close the modal
  };

  const handleYesClick = () => {
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
    }, 5000);
    setModalOpen(false); // Close the modal
    router.push(`/${selectedLocale}/pages/services`);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <div
            className={`checkbox-signin hover:border-0 hover:bg-[#DDB669] hover:rounded-[16px] px-[10px] py-[5px] hover:text-white cursor-pointer`}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",

                fontSize: "12px",
              }}
              onClick={handleDivClick}
            >
              <span>
                {selectedLocale === "ar" ? (
                  <FaArrowRightLong
                    className="text-base"
                    style={{ marginLeft: "5px" }}
                  />
                ) : (
                  <FaArrowLeftLong
                    className="text-base"
                    style={{ marginRight: "5px" }}
                  />
                )}
              </span>
              {t("return")}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="custom-modal"
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Card className="p-8">
              <CardContent style={{ textAlign: "center" }}>
                <div className="flex justify-center">
                  <svg
                    width="90"
                    height="90"
                    viewBox="0 0 140 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.1"
                      width="140"
                      height="140"
                      rx="16"
                      fill="#DDB669"
                    />
                    <path
                      d="M33.333 100H106.666L69.9997 36.667L33.333 100ZM73.333 90.0003H66.6663V83.3337H73.333V90.0003ZM73.333 76.667H66.6663V63.3337H73.333V76.667Z"
                      fill="#DDB669"
                    />
                  </svg>
                </div>
                {/* Typography */}
                <Typography className="signin-form text-[#173039] text-[20px] mt-2">
                  {t("warning")}
                </Typography>
                <Typography className="checkbox-signin text-sm text-[#173039] mb-4">
                  {t("back_and_cancel")}
                </Typography>
                {/* Buttons */}
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button
                      className="checkbox-signin border border-[#DDB669] rounded-[4px] text-[#DDB669] px-[33px] py-[6px]"
                      onClick={handleNoClick}
                    >
                      {t("back_page")}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      className="checkbox-signin border-0 bg-[#DDB669] text-white rounded-[4px] px-[33px] py-[6px]"
                      onClick={handleYesClick}
                    >
                      {buttonLoading ? <p>{t("load")}</p> : t("to_be_sure")}
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalBack;
