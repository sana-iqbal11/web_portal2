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

import { useLocale, useTranslations } from "next-intl";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import VectorButton from "@/app/[locale]/components/atoms/VectorButton";
import { GrClose } from "react-icons/gr";
import { useParams, useRouter } from "next/navigation";
import { cancelNewRequest, getNewRequestDetail } from "../../../../../../../lib/auth";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import moment from "moment";
import SingleFileHandler from "@/app/[locale]/components/atoms/SingleFileHandler";
import CustomModal from "@/app/[locale]/components/cards/CustomModal";
import { toast } from "react-toastify";

const NewRequestsDetails = () => {
  const t = useTranslations("Offers");
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef<any>(null);
  const [height, setHeight] = useState(0);
  const selectedLocale = useLocale();

  const testFilesArray = [1, 2, 3];
  const router = useRouter();
  const { slug:masterRequestId } = useParams();
  const { data,isError,isLoading,isRefetching } = getNewRequestDetail(String(masterRequestId))

 const detailsData = data?.result;
console.log(detailsData)

const [modalOpen,setModalOpen] = useState(false)

const  { mutateAsync:deleteRequest,data:deleteRequestResponse,isPending,isSuccess } =  cancelNewRequest(String(masterRequestId));

const handleNoClick=()=>{
  setModalOpen(false)
}


const handleYesClick= async ()=>{
 await deleteRequest();

 
  if (deleteRequestResponse?.status === false) {
    toast.error(deleteRequestResponse?.errors[0]);
  } else {
    toast.success(t('request_delete_success'));
 router.back();

  }
 
}

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
                    {/* <Image
                    src={StampImage}
                    alt=""
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  /> */}
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
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "4px solid #000",
                        gap: "8px",
                      }}
                    >
                      <Image
                        src={TimeVector}
                        alt=""
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "contain",
                        }}
                      />
                      <Typography
                    className="card-subHeading"
                      color={'var(--text-gray-3)'}
                      > 
                       {moment(detailsData?.maxRequestFulfillExpiryDateTime).format("HH:mm  M-DD-YYYY")}
                      </Typography>
                    </Box>
                    <VectorButton
                    text={t("offer_has_been_made")}
                    vector={DocumentVector}
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
                      {t('offer')} :
                    </Typography>

                    <Stack 
                    sx={{
                        cursor:'pointer'
                    }}
                    onClick={()=>{
                        if(showMore)
                        {
                            setHeight(0);
                            setShowMore(false)
                        }
                        else{
                            setHeight(contentRef.current.scrollHeight);
                            setShowMore(true)
                        }

                    }}
                    flexDirection={"row"} alignItems={"center"} gap={1}>
                      {/* <FaChevronDown/> */}

                      <Typography
                        color={"var(--tertiary-color)"}
                        className="card-subHeading"
                        sx={{
                          textDecoration: "underline",
                        }}
                      >
                       {t('offer_details')}
                      </Typography>
                      {
                        showMore ?
                        <FaChevronDown size={12} color="var(--tertiary-color)" />
                        :
                        <FaChevronRight size={12} color="var(--tertiary-color)" />
                      }
                     
                     
                    </Stack>
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
                    {t('time_will_be_set_soon')}

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
            {/* {detailsData?.priorityPrice} {selectedLocale=='ar'?' ر.س': ' SAR' } */}
            {t('no_offers')}

                      </Typography>
                    </Box>
                  </Stack>
                </Stack>

                <Box
                ref={contentRef}
                className= 'transition-all'
                
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'start',
                    gap:2,
                    marginTop:0,
                    // marginBottom:2,
                    height:height,
                    overflow:'hidden'
                    // transition: 'height 0.5s ease'
                    
                }}
                >
                    <Box className='border w-full border-[#87959A] rounded-[6px] px-4 py-2 mt-3'>
                    <Typography className="card-details">
                      {detailsData?.details}
                    </Typography>
                    </Box>
                    <VectorButton
                    text={t("discuss_offer")}
                    vector={DocumentVector}
                    boxTailwindStyle={'!border-[#188AFC] !mb-1'}

                    vectorStyle={{
                      filter: "invert(43%) sepia(99%) saturate(2171%) hue-rotate(192deg) brightness(97%) contrast(105%)",
                      width:'20px',
                      height:'20px'

                      
                    }}
                    textStyling={{
                      color:'#188AFC',
                      fontSize:'12px',
                      fontWeight:'500'
                    }}
                    />
                   
                </Box>

                <Box mt={2}>
                  <Stack alignItems={"center"} gap={2} flexDirection={"row"}>
                    <Typography className="card-heading">
                      {t("supporting_files")} {" : "}
                    </Typography>
                    <Typography className="card-text">
                      {t("all_files_and_details_supporting_the_application")}
                    </Typography>
                  </Stack>
                  {
                    detailsData?.files.length==0 && 
                    <Typography className="card-text">
                    {t("no_files_found")} 
                  </Typography>
                  }
                <Box  my={2} >
                  {detailsData?.files?.map((data:any) => (
                 <SingleFileHandler fileName={data}/>
                    
                  ))}
</Box>
                  <Typography
                 className="mt-4 mb-2 card-heading"
                  >
                  {t('consultation_details')}
                  </Typography>

                  <Box className="border w-full border-[#87959A] rounded-[6px] px-4 py-2 mb-6">
                    <Typography className="card-details">
                   { detailsData?.details}
                    </Typography>
                  </Box>
                </Box>

               <Stack
            flexDirection={
                {
                    xs:'column',
                    md:'row'
                }
            }
            justifyContent={'space-between'}
            gap={2}
            >

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: {md:"flex-start"},
                    gap: 2,
                    flexDirection: {
                      xs: "column",
                      md: "row",
                    },
                  }}
                >
                <Button className={`button_filled !px-8`}>
                    {t("accept_offer")}
                  </Button>
                  
                  <Button
                  onClick={()=>router.back()}
                  className={`button_outlined_2 !px-8`}>
                  {t('return')}
                  </Button>
                  
                </Box>

                  <Button 
                  onClick={()=> setModalOpen(true)}
                  className={`button_filled
                    !bg-transparent
                    !text-[var(--cancel-color)]
                    !border-[var(--cancel-color)]
                    !px-8
                 `}>
                  {t('cancel_order')}
                  </Button>
                </Stack> 
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

{/* Delete Request Modal */}
 <CustomModal
title="warning"
description="sure_to_delete"
modalOpen={modalOpen}
setModalOpen={setModalOpen}
handleNoClick={handleNoClick}
handleYesClick={handleYesClick}
yesButtonText="yes"
noButtonText="no"
/>

    </div>
  );
};

export default NewRequestsDetails;
