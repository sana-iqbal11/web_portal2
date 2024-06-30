import { Box, Stack, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import PDFVector from "/public/requestPageImages/pdf.png";
import { GrClose } from "react-icons/gr";
import { useLocale } from "next-intl";
import { IMAGE_URL } from "../../../../../lib/backend";

const SingleFileHandler = ({ fileName }: { fileName: string }) => {
  const selectedLocale = useLocale();

  const fileFirstName = fileName.split(".")[0];
  const fileSecondName = fileName.split(".")[1];

  return (
    <Stack
      onClick={() => {
        window.open(IMAGE_URL + fileName, "_blank", "noopener,noreferrer");
      }}
      className="border border-[EBEDEF] rounded-[4px] cursor-pointer"
      borderColor={"#EBEDEF"}
      width={{
        xs: "100%",
        md: "280px",
      }}
      flexDirection={selectedLocale == "ar" ? "row-reverse" : "row"}
      alignItems={"center"}
      gap={2}
      px={{
        xs: 1,
        md: 2,
      }}
      py={1}
      my={1}
    >
      <Image
        src={PDFVector}
        alt=""
        style={{
          width: "31px",
          height: "30px",
          objectFit: "contain",
        }}
      />
      <Typography className="card-text">
        {fileFirstName.slice(0, 8)}
        {"."}
        {fileSecondName}
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: selectedLocale == "ar" ? "flex-start" : "flex-end",
        }}
      >
        <IconButton sx={{}}>
          <GrClose fontSize={15} color="var(--secondary-color)" />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default SingleFileHandler;
