"use client";
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


import BalanceImage from "/public/balance.png";

import CheckVector from "/public/requestPageImages/Check.png";

import MoneyVector from "/public/requestPageImages/Money.png";
import CalenderVector from "/public/calender.png";

import { useLocale, useTranslations } from "next-intl";
import VectorButton from "@/app/[locale]/components/atoms/VectorButton";
import { useRouter } from "next/navigation";
import { getAppointments } from "../../../../../../lib/auth";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import NoDataFoundComponet from "@/app/[locale]/components/atoms/NoDataFoundComponet";
import moment from "moment";
// import EmptyDataComp from "@/app/[locale]/components/organisms/EmptyDataComp";

const CompletedAppointments = () => {
  const t = useTranslations("Appointments");
  const selectedLocale = useLocale();
  const router = useRouter();

  const [statusId,setStatusId] = useState(5);
  const [size,setSize] = useState(20);
  const [page,setPage] = useState(1);



const { data:CompletedAppointmentsData, isLoading, isError,isRefetching } = getAppointments(page,size,statusId)

console.log(CompletedAppointmentsData)

if(isLoading || isRefetching)
{
  return <div className="loading-container">
    <Spinner/>
  </div>
}

if(!isLoading && (isError || CompletedAppointmentsData===null))
{
  return <div className="loading-container">
    <p className="text-[var(--cancel-color)] card-subHeading">An Error Occured</p>
  </div>
}

if(!isLoading && CompletedAppointmentsData?.result?.appointments.length==0)
{
  return <div className="loading-container">
    <NoDataFoundComponet text={t('no_completed_appointments')}></NoDataFoundComponet>
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
          mt: 4,
          p: 4,
          height:'60vh',
          overflow:'scroll'
        }}
      >

{ CompletedAppointmentsData?.result?.appointments.map((item:any,index:number)=>{

const { referenceNumber,appointmentDate,appointmentTime,totalAmount,appointmentId,lawyerId } = item;
return(
        <Card
        key={index}
          style={{
            backgroundColor: "white",
            padding: "20px 15px",
            borderRadius: "16px",
            border: "1px solid #87959A",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom:'24px'

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
                    sm: "row",
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
                       { referenceNumber }
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
                        { appointmentTime }
                        {" "}
                       {moment(appointmentDate).format("DD-MM-YYYY")}
                      </Typography>
                    </Box>
                  </Stack>

                  {/* ------ */}
                  <hr className="md:hidden" />
                  <Stack
                    justifyContent={"space-between"}
                    flexDirection={{
                      xs: "column",
                      md: "row",
                    }}
                    gap={{
                      xs: 2,
                      md: 0,
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
                          {totalAmount} {selectedLocale=='ar'?' ر.س': ' SAR' }
                        </Typography>
                      </Box>
                    </Stack>
                    <Button
                      onClick={() =>
                        router.push(
                          `/${selectedLocale}/pages/appointments/completed/${appointmentId}/?lawyerid=${lawyerId}`
                        )
                      }
                      className={`button_outlined`}
                    >
                      {t("order_details")}
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </CardContent>
        </Card>
            )
          })
        }
        <div className="flex justify-center mt-24">
        <Button className={`button_filled !border-[var(--tertiary-color)]  !bg-[var(--tertiary-color)]  w-[70%]`}>احجز موعد جديد</Button>
        </div>
      </Box>
    </div>
  );
};

export default CompletedAppointments;
