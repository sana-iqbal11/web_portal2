"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Icon,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import styles from "../../requests.module.css";

import PDFVector from "/public/requestPageImages/pdf.png";
import StampImage from "/public/requestPageImages/stamp.png";
import DocumentVector from "/public/requestPageImages/Vector.png";
import TimeVector from "/public/requestPageImages/Access time.png";
import MoneyVector from "/public/requestPageImages/Money.png";
import MessageVector from "/public/requestPageImages/icon.png";
import TimeVectorColor from "/public/requestPageImages/Access time golden.png";
import CheckVector from "/public/requestPageImages/Check.png";

import { useLocale, useTranslations } from "next-intl";

import VectorButton from "@/app/[locale]/components/atoms/VectorButton";

import { useParams, useRouter } from "next/navigation";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import { getCompletedAndProcessingRequestDetail } from "../../../../../../../lib/auth";
import moment from "moment";

const CompletedRequestDetails = () => {
  const t = useTranslations("Offers");
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef<any>(null);
  const [height, setHeight] = useState(0);
  const selectedLocale = useLocale();

  const testFilesArray = [1, 2, 3];
  const router = useRouter();

  const { slug:masterRequestId } = useParams();
  const { data,isError,isLoading,isRefetching } = getCompletedAndProcessingRequestDetail(String(masterRequestId))

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
              padding: "10px 15px",
              borderRadius: "8px",
              border: "1px solid #87959A",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              marginBottom:'24px'
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  gap: {xs:1,md:4},
                  flexDirection:{
                      xs:'column',
                      md:'row'
                  }
                }}
              >
                <Box
                    sx={{
                      width:'56px',
                      height:'48px',
                      position:'relative'
                    }}
                  >
                    <Image
                      src={StampImage}
                      alt=""
                      fill
                      objectFit="contain"
                    />
                  </Box>
                <Box
                  sx={{
                    width:'100%',
                    mt: 1,
                  }}
                >
                  <Stack
                    alignItems={{
                      xs:'flex-start',
                      md:'center'
                  }}
                    flexDirection={{
                      xs: "column",
                      md: "row",
                    }}
                    justifyContent={"space-between"}
                  >
                    <Stack flexDirection={"row"} alignItems={"center"}
                    gap={4}>
           
                      <Box>
                        <Typography
                          color={"var(--tertiary-color)"}
                          fontWeight={600}
                          fontSize={"18px"}
                        >
                          { selectedLocale=='ar'? detailsData?.masterCategory?.arabicName : detailsData?.masterCategory?.name }
                        </Typography>
                        <Typography
                        color={'var(--text-gray-3)'}
                        fontSize={'13px'}
                        fontWeight={500}
                        >{t('contract_drafting')}</Typography>
                      </Box>
                    </Stack>
  
                    <Stack
                      //  flexDirection={{
                      //     xs:'column',
                      //     md:'row'
                      //  }}
                     
                      justifyItems={'center'}
                      justifyContent={'center'}
                      flexDirection={{
                          xs:'column',
                          md:'row'
                      }}
                      gap={{
                          xs:1,
                          md:3
                      }}
                    >
                     


                      <VectorButton
                    text={t("complete")}
                    vector={CheckVector}
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
                        {t('lawyer_specialty')}
                      </Typography>
                      <Typography
                        color={"var(--text-gray-2)"}
                        className="card-subHeading"
                      >
                    { selectedLocale=='ar'? detailsData?.mobileRequestCategory?.arabicName : detailsData?.mobileRequestCategory?.name }

                      </Typography>
                    </Stack>
  
                   
  
    
                    <hr className="md:hidden"/>

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
                            {/* {t("lawyer_specialty")} */}
                            {t("reference_number")}
                          </Typography>
                          <Typography
                            color={"var(--text-gray-2)"}
                            className="card-subHeading"
                          >
                            {detailsData?.referenceNumber}
                          </Typography>
                        </Stack>
  
    
                    <hr className="md:hidden"/>
  
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
                       {t('delivery_time')}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "4px solid #000",
                          gap: "8px",
                          alignSelf:'start'
                        }}
                      >
                        <Image
                          src={TimeVectorColor}
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
                     {moment(detailsData?.requestFulFillDateTime).format("HH:mm  M-DD-YYYY")}

                        </Typography>
                      </Box>
                    </Stack>
  
                    {/* ------ */}
                    <hr className="md:hidden"/>
  
  
  
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
                        {t('service_fees')}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "4px solid #000",
                          gap: "8px",
                          alignSelf:'start'
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
                      {detailsData?.totalAmountWithVat} {selectedLocale=='ar'?' ر.س': ' SAR' }
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
  
                  <Box mt={2}>
                  {/* <Stack alignItems={"center"} gap={2} flexDirection={"row"}>
                    <Typography className="card-heading">
                      {t("supporting_files")} {" : "}
                    </Typography>
                    <Typography className="card-text">
                      {t("all_files_and_details_supporting_the_application")}
                    </Typography>
                  </Stack>
                <Box  my={2} >
                  {testFilesArray.map((data) => (
                    <Stack
                      className="border border-[EBEDEF] rounded-[4px]"
                      borderColor={"#EBEDEF"}
                      width={{
                        xs:'100%',
                        md:"300px"}}
                      flexDirection={  
                    selectedLocale=='ar'? "row-reverse":"row"}
                      alignItems={"center"}
                      gap={2}
                      px={{
                        xs:1,
                        md:2
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
                      fontSize={{
                        xs:'11px',
                        md:'13px'
                      }} fontWeight={"400"}>
                        A2915468..page.pdf
                      </Typography>

                      <Box
                        sx={{
                          flexGrow: 1,
                          display: "flex",
                          justifyContent:selectedLocale=='ar' ?"flex-start":'flex-end',
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
                  ))}
</Box> */}
                  <Typography
                 className="mt-4 mb-2 card-heading"
                  >
                  {t('consultation_details')}
                  </Typography>

                  <Box className="border border-[#87959A] rounded-[6px] px-4 py-2 mb-6">
                    <Typography className="card-details">
                   {detailsData?.details}
                    </Typography>
                  </Box>
                </Box>
                <div>
                     <Button
                     onClick={()=>router.back()}
                     className={`button_outlined_2 
                     `}>
                       {t('return')}
                     </Button>
                     </div>
                </Box>
              </Box>
            </CardContent>
          </Card>
      </Box>
    </div>
  );
};

export default CompletedRequestDetails;
