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
import DocumentVectorGray from "/public/requestPageImages/Document.png";

import TimeVector from "/public/requestPageImages/Access time.png";
import MoneyVector from "/public/requestPageImages/Money.png";
import TimeVectorColor from "/public/requestPageImages/Access time golden.png";

import { useLocale, useTranslations } from "next-intl";

import VectorButton from "@/app/[locale]/components/atoms/VectorButton";
import { useRouter } from "next/navigation";
import NoDataFoundComponet from "@/app/[locale]/components/atoms/NoDataFoundComponet";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import { getNewRequestAndOffers } from "../../../../../../lib/auth";
import moment from "moment";
import ModalBack from "@/app/[locale]/components/cards/ModalBack";
import SuccessModal from "@/app/[locale]/components/cards/SuccessModal";
import CustomModal from "@/app/[locale]/components/cards/CustomModal";
import ProgressCheck from "@/app/[locale]/components/atoms/ProgressCheck";
const NewRequests = () => {
  const t = useTranslations("Offers");
  const [showMore,setShowMore] = useState(false);
  const contentRef = useRef<any>(null);
  const [height, setHeight] = useState(0);

  const selectedLocale = useLocale()
  const router = useRouter();


const requestTestArray = [1,2,3,4,5]

const [status,setStatus] = useState(0);
  const [size,setSize] = useState(20);
  const [requestType,setRequestType] = useState(0);
  const [page,setPage] = useState(1);



const { data:NewRequestData, isLoading, isError, refetch, isRefetching } = getNewRequestAndOffers(status,size,requestType,page)




if(isLoading || isRefetching)
{
  return <div className="loading-container">
    <Spinner/>
  </div>
}

if(!isLoading && (isError || NewRequestData===null))
{
  return <div className="loading-container">
    <p className="text-[var(--cancel-color)] card-subHeading">An Error Occured</p>
  </div>
}

if(!isLoading && NewRequestData?.result?.totalCount==0)
{
  return <div className="loading-container">
    <NoDataFoundComponet text={t('no_new_request')}></NoDataFoundComponet>
    </div>
}

console.log(NewRequestData)
  
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
          {NewRequestData?.result?.totalCount} {t("applications")} 
           </Typography>
        </Stack>
        {
          NewRequestData?.result?.data.map((item:any,index:number) => 
          {
            const { requestFulFillDateTime ,totalAmount,masterCategory,mobileRequestCategory, createdDate,masterRequestId,referenceNumber } = item;


            return (
              <>
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
                        >
                          {t('contract_drafting')}
                        </Typography>
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
                      {
                      requestFulFillDateTime ?  <VectorButton
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

            :   <VectorButton
                      text={t("no_offers")}
                      vector={DocumentVectorGray}
                      boxTailwindStyle={'bg-[#F4F2EC] border-[#DFE1E3]'}
                      boxStyle={{
                        background:'#DFE1E3',
                        borderColor:'#F4F2EC'
                      }}
                      textStyling={{
                        fontSize:'12px',
                        fontWeight:'500',
                        color:'#BCBDBF'
                      }}
                      vectorStyle={{
                        width:'20px',
                        height:'20px',
                        filter:' brightness(90%) '
                      }}
                      />}
                    
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
                    <hr/>

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
                   
                
  
                    {/* ------ */}
{                requestFulFillDateTime &&    <Stack
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
              {moment(requestFulFillDateTime).format("HH:mm  M-DD-YYYY")}

                        </Typography>
                      </Box>
                    </Stack>
                    
                    }
  
                    {/* ------ */}
                  {requestFulFillDateTime &&  
                  <hr />}
  
  
  {  totalAmount &&
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
                          {totalAmount} {selectedLocale=='ar'?' ر.س': ' SAR' }
                        </Typography>
                      </Box>
                    </Stack>}
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
                 <Box sx={{
                  display:'flex',
                  justifyContent:'end',
                  alignItems:{md:'flex-start'},
                  marginTop:'6px',
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
                    {/* <Button 
                    onClick={()=> 
                    router.push(`/${selectedLocale}/pages/requests/new/${masterRequestId}`)
                    }
                    className={`button_outlined`}>
                      {t('order_details')}
                    </Button> */}
                    <Button className={`button_filled`}>
                      {t('accept_offer')}
                    </Button>
                 </Box>
                </Box>
              </Box>
            </CardContent>
           
          </Card>
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
                    justifyContent={'space-between' }
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
                          justifyContent={'space-between' }
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
                    justifyContent={'space-between' }
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

                   
                  </Stack>
                  <hr />
                  {/* ------ */}
                  <Stack
                    alignItems={{ sm: "center" }}
                    justifyContent={'space-between' }
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
                          {/* {priorityPrice} {selectedLocale=='ar'?' ر.س': ' SAR' } */}
                      </Typography>
                    </Box>
                  </Stack>
                </Stack> 
           <ProgressCheck/>
                    
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
              </>
          
          )}
        )
      }
      </Box>

      
   
   

    </div>
  );
};

export default NewRequests;
