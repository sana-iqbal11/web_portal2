import { Box, Button, Typography, Modal } from "@mui/material";
import React from "react";
import { useTranslations } from "next-intl";
import { Image } from "react-bootstrap";
import imgsrc from "../../../../../public/Frame 762173.png"
interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequestAdedModal: React.FC<ModalComponentProps> = ({ isOpen, onClose }) => {
  const t = useTranslations("ServiceForm");

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          display:'flex',
          flexDirection:"column",
          gap:'15px',
          justifyContent:'center'
        }}
      >
        <div className="flex justify-center">
        <Image src={imgsrc.src} alt="" width={56} height={56} />

        </div>
        <Typography id="modal-modal-title"  textAlign='center' fontSize={'24px'} fontWeight={"700"}>
          {t("uploaded")}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} textAlign='center' fontSize={"12px"}>
          {t("recieve")}
        </Typography>
        <Button onClick={onClose} className="w-full rounded-sm bg-[#DDB669] p-[10px] text-white">{t("ok")}</Button>
      </Box>
    </Modal>
  );
};

export default RequestAdedModal;
