"use client";
import { Box, Stack, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface ITABS {
  tabs: {
    text: string;
    link: string;
  }[];
  translationSource: string;
}
const Tabs = ({ tabs,translationSource }: ITABS) => {
 
  const router = useRouter();
  const selectedLocale = useLocale();
  const path = usePathname().split('/');
  const t = useTranslations(translationSource);

function  findIndex(){

  tabs.forEach((data:any)=>{
    if(path.includes(data?.text))
    {
        setActiveTab(data.text)
    }
  })

  }
const [activeTab,setActiveTab] = useState('');
useEffect(()=>{

  findIndex()

},[path])



  return (
    <div className="px-4">
      <Stack
        columnGap={{
          xs: 1,
          md: 0,
        }}
        rowGap={1}
        justifyContent={{
          //   xs:'center',
          md: "space-between",
        }}
        alignItems={"center"}
        direction={"row"}
        sx={{
          boxShadow: {
            md: "0 4px 12px 0 rgba(0, 0, 0, 0.12)",
          },
          borderRadius: {
            xs: 10,
            sm: 64,
          },

          paddingY: 1,
          paddingX: {md:3},
          width: {
            xs: "97%",
            lg: "70%",
            // lg: "55%",
            // xl: "45%",
          },
          marginX: "auto",
          flexWrap: {
            xs: "wrap",
            md: "nowrap",
          },
        }}
      >
        {tabs.map((data, ind) => (
          <Box
            className="transition-all"
            onClick={() => {
              // setActiveTab(data.text)
              router.push(`/${selectedLocale}/pages/${data.link}`)
              
            }}
            sx={{
              background: activeTab == data.text ? "var(--active-tab-bg)" : "",
              boxShadow: {
                xs: "0 4px 12px 0 rgba(0, 0, 0, 0.12)",
                md: "none",
              },
              color: activeTab == data.text ? "var(--tertiary-color)" : "",
              borderRadius: 100,
              paddingX: 2,
              paddingY: 1,
              cursor: "pointer",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <Typography className=" transition-all line-clamp-1">
              {t(data.text)}
            </Typography>
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default Tabs;
