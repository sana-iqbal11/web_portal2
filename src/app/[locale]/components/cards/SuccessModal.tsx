import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Modal,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import ArrowIcon from "/public/Arrow 1.png"; // Importing arrow icon
import { useRouter } from "next/navigation";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface SuccessModalProps {
  modalOpen: boolean;
  setModalOpen: any;
  title: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  modalOpen,
  setModalOpen,
  title,
}) => {
  const t = useTranslations("ServiceForm");
  const selectedLocale = useLocale();
  const router = useRouter(); // Access next router

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNoClick = () => {
    setModalOpen(false); // Close the modal
  };

  const handleYesClick = () => {
    setModalOpen(false); // Close the modal
    router.push(`/${selectedLocale}/pages/services`);
  };

  return (
    <>
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
                      {t("to_be_sure")}
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
};

export default SuccessModal;
