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



import StampImage from "/public/requestPageImages/stamp.png";
import DocumentVector from "/public/requestPageImages/Vector.png";
import TimeVector from "/public/requestPageImages/Access time.png";
import MoneyVector from "/public/requestPageImages/Money.png";
import TimeVectorColor from "/public/requestPageImages/Access time golden.png";

import { useLocale, useTranslations } from "next-intl";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import VectorButton from "@/app/[locale]/components/atoms/VectorButton";
import { useRouter } from "next/navigation";
import { getNewRequestAndOffers, useUser } from "../../../../../../lib/auth";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import NoDataFoundComponet from "@/app/[locale]/components/atoms/NoDataFoundComponet";
import moment from "moment";
import ProgressCheck from "@/app/[locale]/components/atoms/ProgressCheck";

const Offers = () => {
  const t = useTranslations("Offers");
  const selectedLocale = useLocale()
  const router = useRouter();
  const [showMore,setShowMore] = useState(false);
  const contentRef = useRef<any>(null);
  const [height, setHeight] = useState(0);

  const [status,setStatus] = useState(0);
  const [size,setSize] = useState(20);
  const [requestType,setRequestType] = useState(1);
  const [page,setPage] = useState(1);



const { data:RequestOffersData, isLoading, isError, isRefetching} = getNewRequestAndOffers(status,size,requestType,page)

console.log("xyz" , RequestOffersData)


if(isLoading || isRefetching)
{
  return <div className="loading-container">
    <Spinner/>
  </div>
}

if(!isLoading && (isError || RequestOffersData===null))
{
  return <div className="loading-container">
    <p className="text-[var(--cancel-color)] card-subHeading">An Error Occured</p>
  </div>
}

if(!isLoading && RequestOffersData?.result?.totalCount==0)
{
  return <div className="loading-container">
    <NoDataFoundComponet text={t('no_offers')}></NoDataFoundComponet>
    </div>
}
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
           >{t("number_of_applications")} :</Typography>
        
            <Typography
            fontWeight={'500'}
            fontSize={'14px'}
           >
          {RequestOffersData?.result?.totalCount} {t("applications")} 
           </Typography>
        </Stack>
        {
          RequestOffersData?.result?.data.map((item:any,index:number) => 
          {
            const { createdDate ,priorityPrice,masterCategory,mobileRequestCategory,masterRequestId,referenceNumber } = item;


            return (
        <Card
        key={index}
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
              {moment(createdDate).format("HH:mm  M-DD-YYYY")}
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
                          {priorityPrice} {selectedLocale=='ar'?' ر.س': ' SAR' }
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
                    <Box className='border border-[#87959A] rounded-[6px] px-4 py-2 mt-3'>
                    <Typography className="card-details">
                    لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى
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
                   <ProgressCheck/>
                
               <Box
               
               sx={{
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
                  router.push(`/${selectedLocale}/pages/requests/offers/${masterRequestId}`)
                  }
                  className={`button_outlined`}>
                    {t('order_details')}
                  </Button>
                  <Button className={`button_filled`}>
                    {t('accept_offer')}
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

export default Offers;
