"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";


import PDFVector from "/public/requestPageImages/pdf.png";
import BalanceImage from "/public/balance.png";

import MoneyVector from "/public/requestPageImages/Money.png";


import CalenderVector from "/public/calender.png";
import CheckVector from "/public/requestPageImages/Check.png";

import { useLocale, useTranslations } from "next-intl";

import VectorButton from "@/app/[locale]/components/atoms/VectorButton";
import { useParams, useRouter } from "next/navigation";
import { GrClose } from "react-icons/gr";
import { getAppointmentsDetail } from "../../../../../../../lib/auth";
import moment from "moment";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import SingleFileHandler from "@/app/[locale]/components/atoms/SingleFileHandler";
// import EmptyDataComp from "@/app/[locale]/components/organisms/EmptyDataComp";

const CompletedAppointmentsDetails = ({searchParams}:{searchParams:any}) => {
  const t = useTranslations("Appointments");
  const selectedLocale = useLocale();
  const router = useRouter();

  const testFilesArray = [1, 2, 3];

  const { slug:appointmentId } = useParams();
  const { data,isError,isLoading,isRefetching } = getAppointmentsDetail(String(appointmentId))
 const detailsData = data?.result;




console.log(detailsData)

  if(isLoading || isRefetching)
{
  return <div className="loading-container">
    <Spinner/>
  </div>
}

if(!isLoading && isError)
{
  return <div className="loading-container">
    <p className="text-[var(--cancel-color)] card-subHeading">An Error Occured</p>
  </div>
}

  return (
    <div>
      <Box
        sx={{
          width: {
            xs: "auto",
            lg: "72%",
          },
          marginX: "auto",
          mt: 4,
          p: 4,
        }}
      >
        <Card
          style={{
            backgroundColor: "white",
            padding: "20px 15px",
            borderRadius: "16px",
            border: "1px solid #87959A",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                gap: { xs: 1, md: 4 },
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Box
                sx={{
                  width: "56px",
                  height: "48px",
                  position: "relative",
                }}
              >
                <Image src={BalanceImage} alt="" fill objectFit="contain" />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  mt: 1,
                }}
              >
                <Stack
                  gap={1}
                  alignItems={{
                    xs: "flex-start",
                    md: "center",
                  }}
                  flexDirection={{
                    xs: "column",
                    md: "row",
                  }}
                  justifyContent={"space-between"}
                >
                  <Stack flexDirection={"row"} alignItems={"center"} gap={4}>
                    <Box>
                      <Typography
                        color={"var(--tertiary-color)"}
                        fontWeight={600}
                        fontSize={"18px"}
                      >
                        {t("legal_advice")}
                      </Typography>
                    </Box>
                  </Stack>
                  <VectorButton
                    text={t("completed")}
                    vector={CheckVector}
                    boxTailwindStyle={"rounded-[36px]"}
                    textStyling={{
                      fontSize:'12px',
                      fontWeight:'500'
                    }}
                    vectorStyle={{
                      width:'20px',
                      height:'20px'
                    }}
                  />
                </Stack>

                <Stack
                  sx={{
                    mt: 2,
                    gap: 1,
                  }}
                >
                  <Stack
                    alignItems={{ sm: "center" }}
                    flexDirection={{
                      xs: "column",
                      sm: "row",
                    }}
                  >
                    <Typography
                      width={170}
                      color={"var(--text-gray-2)"}
                     className="card-heading"
                    >
                      {t("reference_number")}
                    </Typography>
                    <Typography
                      color={"var(--text-gray-2)"}
                      className="card-subHeading"

                    >
                      { detailsData?.referenceNumber }
                    </Typography>
                  </Stack>

                  <hr className="md:hidden" />

                  {/* ------ */}
                  <Stack
                    alignItems={{ sm: "center" }}
                    flexDirection={{
                      xs: "column",
                      sm: "row",
                    }}
                  >
                    <Typography
                      width={170}
                      color={"var(--text-gray-2)"}
                      className="card-heading"

                    >
                      {t("appointment_date")}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: { sm: "center" },
                        alignItems: "center",
                        border: "4px solid #000",
                        gap: "8px",
                      }}
                    >
                      <Image
                        src={CalenderVector}
                        alt=""
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "contain",
                        }}
                      />
                      <Typography
                        color={"var(--text-gray-2)"}
                        className="card-subHeading"

                      >
                      {moment(detailsData?.appointmentDateTime).format("hh:mm DD-MM-YYYY")}

                      </Typography>
                    </Box>
                  </Stack>

                  {/* ------ */}
                  <hr className="md:hidden" />
                  <Stack
                    justifyContent={"space-between"}
                    flexDirection={{
                      xs: "column",
                      xl: "row",
                    }}
                    gap={{
                      xs: 2,
                      xl: 1,
                    }}
                  >
                    <Stack
                      alignItems={{ sm: "center" }}
                      flexDirection={{
                        xs: "column",
                        sm: "row",
                      }}
                    >
                      <Typography
                        width={170}
                        color={"var(--text-gray-2)"}
                        className="card-heading"

                      >
                        {t("service_fees")}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: { sm: "center" },
                          alignItems: "center",
                          border: "4px solid #000",
                          gap: "8px",
                        }}
                      >
                        <Image
                          src={MoneyVector}
                          alt=""
                          style={{
                            width: "20px",
                            height: "20px",
                            objectFit: "contain",
                          }}
                        />
                        <Typography
                          color={"var(--text-gray-2)"}
                          className="card-subHeading"
                        >
                 {detailsData?.totalAmount} {selectedLocale=='ar'?' ر.س': ' SAR' }

                        </Typography>
                      </Box>
                    </Stack>
                    <div>
                      <Button
                      onClick={()=>
                        router.push(`/${selectedLocale}/pages/servicesLawyer/?lawyerId=${searchParams?.lawyerid}`)
     
                      }
                        className={`button_filled !text-[12px] !px-3 md:!px-6 `}
                      >
                        {t("request_legal_service_from_same_lawyer")}
                      </Button>
                    </div>
                  </Stack>
                  {/* ---- */}

                  <Box mt={1}>
                  {/* <Stack alignItems={"center"} gap={2} flexDirection={"row"}>
                      <Typography
                 className="card-heading" >
                        {t("consultation_draft")} {" : "}
                      </Typography>
                      <Typography
                    color={'var(--text-gray-3)'}
                     className="card-text"
                      
                      >
                        {t("download_attorney_report")}
                      </Typography>
                    </Stack> */}
                      
                        {/*
                    <Box mt={2} mb={3} mx={{ md: 12 }}>
                        
                        <Stack
                          className="border border-[EBEDEF] rounded-[4px]"
                          borderColor={"#EBEDEF"}
                          width={{
                            xs: "100%",
                            md: "300px",
                          }}
                          flexDirection={
                            selectedLocale == "ar" ? "row-reverse" : "row"
                          }
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
                              width: "36px",
                              height: "35px",
                              objectFit: "contain",
                            }}
                          />
                          <Typography
                    color={'var(--text-gray-3)'}

                            fontSize={{
                              xs: "11px",
                              md: "13px",
                            }}
                            fontWeight={"400"}
                          >
                            A2915468..page.pdf
                          </Typography>

                          <Box
                            sx={{
                              flexGrow: 1,
                              display: "flex",
                              justifyContent:
                                selectedLocale == "ar"
                                  ? "flex-start"
                                  : "flex-end",
                            }}
                          >
                            <IconButton sx={{}}>
                              <GrClose
                                fontSize={15}
                                color="var(--secondary-color)"
                              />
                            </IconButton>
                          </Box>
                        </Stack> 
                    </Box>
                        */}
                     

                    <Stack alignItems={"center"} gap={2} flexDirection={"row"}>
                      <Typography 
                     className="card-heading"
                     >
                        {t("supporting_files")} {" : "}
                      </Typography>
                      <Typography
                    color={'var(--text-gray-3)'}
                      
                    className="card-text">
                        {t("all_files_and_details_supporting_the_application")}
                      </Typography>
                    </Stack>

                     {
                    detailsData?.attachedFiles.length==0 && 
                    <Typography className="card-text">
                    {t("no_files_found")} 
                  </Typography>
                  }

                 <Box my={2} mx={{md:12}}>
                  { detailsData?.attachedFiles?.map((data:any) => (
                
                <SingleFileHandler fileName={data}/>
                        
                      ))}
                    </Box>
                    <Typography
                      className="mt-4 mb-2 card-heading"
                      
                    >
                      {t("consultation_details")}
                    </Typography>

                    <Box className="border border-[#87959A] rounded-[6px] px-4 py-2 mb-2">
                      <Typography className="card-details">
                         { detailsData?.details }
                   </Typography>
                    </Box>
                  </Box>

                  <Typography
                    color={"var(--tertiary-color)"}
                    className="card-subHeading"
                    textAlign={"center"}
                  >
                    {t("consultantion_completed_successfully")}
                  </Typography>

                  {/*  */}
                  <div>
                    <Button
                      onClick={() => router.back()}
                      className={`button_outlined_2
                     `}
                    >
                      {t("return")}
                    </Button>
                  </div>
                </Stack>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default CompletedAppointmentsDetails;
