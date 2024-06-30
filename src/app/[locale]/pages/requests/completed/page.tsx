"use client"
import {
  Box,
  Button,
  Card,
  CardContent,

  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ProgressCheck from "@/app/[locale]/components/atoms/ProgressCheck";



import StampImage from "/public/requestPageImages/stamp.png";
import TimeVector from "/public/requestPageImages/Access time.png";
import MoneyVector from "/public/requestPageImages/Money.png";
import TimeVectorColor from "/public/requestPageImages/Access time golden.png";
import CheckVector from "/public/requestPageImages/Check.png";




import { useLocale, useTranslations } from "next-intl";

import VectorButton from "@/app/[locale]/components/atoms/VectorButton";
import { useRouter } from "next/navigation";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import NoDataFoundComponet from "@/app/[locale]/components/atoms/NoDataFoundComponet";
import { getCompletedAndUnderImplementationRequest } from "../../../../../../lib/auth";
import moment from "moment";

const CompletedRequests = () => {
  const t = useTranslations("Offers");

  const selectedLocale = useLocale()
  const router = useRouter();

const requestTestArray = [1,2,3,4,5]

const [status,setStatus] = useState(1);
  const [size,setSize] = useState(20);




const { data:CompletedRequestsData, isLoading, isError,isRefetching } = getCompletedAndUnderImplementationRequest(status,size)


if(isLoading || isRefetching)
{
  return <div className="loading-container">
    <Spinner/>
  </div>
}

if(!isLoading && (isError || CompletedRequestsData===null))
{
  return <div className="loading-container">
    <p className="text-[var(--cancel-color)] card-subHeading">An Error Occured</p>
  </div>
}

if(!isLoading && CompletedRequestsData?.result?.totalCount==0)
{
  return <div className="loading-container">
    <NoDataFoundComponet text={t('no_completed_request')}></NoDataFoundComponet>
    </div>
}

console.log(CompletedRequestsData)
  
  return (
    <div>
      <Box
      className='no-scrollbar'
        sx={{
          width: {
            xs: "auto",
            lg: "72%",
          },
          marginX: "auto",
          mt: 2,
          p: 4,
          height:'60vh',
          overflow:'scroll'
        }}
      >
        <Stack mb={2} gap={'4px'} direction={'row'}>
           <Typography
           fontWeight={'700'}
           fontSize={'14px'}
           >{t("completed_orders")} :</Typography>
        
            <Typography
            fontWeight={'500'}
            fontSize={'14px'}
           >
           {CompletedRequestsData?.result?.totalCount} {t("applications")} 
           </Typography>
        </Stack>
        {
          CompletedRequestsData?.result?.data?.map((data:any,index:number) =>  {
         
            const { totalAmountWithVat, requestFulFillDateTime, mobileRequestCategory, masterCategory, createdDate, masterRequestApprovedId,referenceNumber,lawyerId } = data
          
            return(

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
                      sm: "row",
                    }}
                    gap={{
                      xs:1,
                      sm:0
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
               { selectedLocale=='ar'? masterCategory?.arabicName : masterCategory?.name }

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
                          xs:2,
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
                      gap: 2,
                    }}
                  >
                       <Stack
                        alignItems={{ sm: "center" }}
                         justifyContent={'space-between'} 
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
                    { selectedLocale=='ar'? mobileRequestCategory?.arabicName : mobileRequestCategory?.name }

                      </Typography>
                    </Stack>
  
                    <hr />

                    <Stack
                          alignItems={{ sm: "center" }}
                           justifyContent={'space-between'} 
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
                            {referenceNumber}
                          </Typography>
                        </Stack>
  
    
                    <hr />

                     {/* ------ */}
                     <Stack
                        alignItems={{ sm: "center" }}
                         justifyContent={'space-between'} 
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
                       {t('date_created')}
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
                          {moment(requestFulFillDateTime).format("HH:mm  M-DD-YYYY")}
                        </Typography>
                      </Box>
                    </Stack>

                    <hr />

  
                    {/* ------ */}
                    <Stack
                        alignItems={{ sm: "center" }}
                         justifyContent={'space-between'} 
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
                       {t('delivery_date')}
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
                          src={CheckVector} 
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
                          {moment(createdDate).format("HH:mm  M-DD-YYYY")}
                        </Typography>
                      </Box>
                    </Stack>
  
                    {/* ------ */}
                    <hr />
  
  
  
                    <Stack
                        alignItems={{ sm: "center" }}
                         justifyContent={'space-between'} 
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
            {totalAmountWithVat} {selectedLocale=='ar'?' ر.س': ' SAR' }

                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                  <ProgressCheck/>
      
                 <Box sx={{
                  display:'flex',
                  justifyContent:'end',
                  alignItems:{md:'flex-start'},
                  gap:2,
                  flexDirection:{
                      xs:'column',
                      md:'row'
                  },
                  mt:{
                    xs:2,
                    md:1
                 }
                 }}>
                    <Button 
                     onClick={()=> 
                      router.push(`/${selectedLocale}/pages/requests/completed/${masterRequestApprovedId}`)
                      }
                    className={`button_outlined`}>
                      {t('order_details')}
                    </Button>
                    <Button
                    onClick={()=> router.push(`/${selectedLocale}/pages/servicesLawyer/?lawyerId=${lawyerId}`)}
                    className={`button_outlined_2 !text-[var(--text-light)] !bg-[var(--tertiary-color)] !border-[var(--tertiary-color)] !px-4 `}>
      {t('request_legal_service_from_same_lawyer')}
    
    </Button>

  
                 </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
          
          )}
        )
      }
      </Box>

      
   
   

    </div>
  );
};

export default CompletedRequests;


