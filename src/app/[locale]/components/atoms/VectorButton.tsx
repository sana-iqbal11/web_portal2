import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface VectorButtonProps {
  text: string;
  vector: StaticImageData;
  boxStyle?: any;
  boxTailwindStyle?: any;
  textStyling?: any;
  vectorStyle?: any;
  props?: any;
}

const VectorButton = ({ text,vector,boxTailwindStyle,boxStyle,vectorStyle,textStyling,props } : VectorButtonProps) => {
  return (
    <Box
      className={
        `rounded-[6px] self-start border-[1.5px] border-[var(--tertiary-color)] py-1 px-4 ${boxTailwindStyle}`
      }
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        background: "#F4F2EC",
        border: "1px solid #87959A",
        ...boxStyle,
      }}
      {...props}
    >
      <Image
        src={vector}
        alt=""
        style={{
          width: "18px",
          height: "18px",
          objectFit: "contain",
          ...vectorStyle,
        }}
      />
      <Typography
       fontWeight={"500"}
       fontSize={"14px"}
       color={'var(--tertiary-color)'}
       style={{
           
         ...textStyling
       }}
      
      >
        {text}
      </Typography>
    </Box>
  );
};

export default VectorButton;
