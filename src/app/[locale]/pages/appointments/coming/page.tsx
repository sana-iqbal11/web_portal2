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
import ProgressCheck from "@/app/[locale]/components/atoms/ProgressCheck";

import BalanceImage from "/public/balance.png";
import MoneyVector from "/public/requestPageImages/Money.png";
import TimeVectorColor from "/public/requestPageImages/Access time golden.png";
import CalenderVector from "/public/calender.png";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import NoDataFoundComponet from "@/app/[locale]/components/atoms/NoDataFoundComponet";
import { getAppointments } from "../../../../../../lib/auth";
import moment from "moment";
// import EmptyDataComp from "@/app/[locale]/components/organisms/EmptyDataComp";

const ComingAppointments = () => {
  const t = useTranslations("Appointments");
  const selectedLocale = useLocale();
  const router = useRouter();

  const [statusId, setStatusId] = useState(2);
  const [size, setSize] = useState(20);
  const [page, setPage] = useState(1);

  const {
    data: ComingAppointmentsData,
    isLoading,
    isError,
    isRefetching
  } = getAppointments(page, size, statusId);

  console.log(ComingAppointmentsData);

  if (isLoading || isRefetching)  {
    return (
      <div className="loading-container">
        <Spinner />
      </div>
    );
  }

  if (!isLoading && (isError || ComingAppointmentsData === null)) {
    return (
      <div className="loading-container">
        <p className="text-[var(--cancel-color)] card-subHeading">
          An Error Occured
        </p>
      </div>
    );
  }

  if (!isLoading && ComingAppointmentsData?.result?.appointments.length == 0) {
    return (
      <div className="loading-container">
        <NoDataFoundComponet
          text={t("no_upcoming_appointments")}
        ></NoDataFoundComponet>
      </div>
    );
  }

  return (
    <div>
      <Box
        className="no-scrollbar"
        sx={{
          width: {
            xs: "auto",
            lg: "72%",
          },
          marginX: "auto",
          mt: 4,
          p: 4,
          height: "60vh",
          overflow: "scroll",
        }}
      >
        {ComingAppointmentsData?.result?.appointments?.map(
          (item: any, index: number) => {
            const {
              referenceNumber,
              appointmentDate,
              appointmentTime,
              totalAmount,
              appointmentId,
            } = item;

            const timeSetting =
              appointmentDate.split("T")[0] + "T" + appointmentTime;
            const endTime = moment(timeSetting);
            const now = moment();
            const duration = moment.duration(endTime.diff(now));

            return (
              <Card
                key={index}
                style={{
                  backgroundColor: "white",
                  padding: "20px 15px",
                  borderRadius: "16px",
                  border: "1px solid #87959A",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  marginBottom: "24px",
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
                      <Image
                        src={BalanceImage}
                        alt=""
                        fill
                        objectFit="contain"
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        mt: 1,
                      }}
                    >
                      <Stack
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
                        <Stack
                          flexDirection={"row"}
                          alignItems={"center"}
                          gap={4}
                        >
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

                        <Stack
                          alignItems={{ sm: "center" }}
                           justifyContent={'space-between'}
                          flexDirection={{
                            xs: "column",
                            sm: "row",
                          }}
                          gap={{ md: 2 }}
                        >
                          <Typography
                            width={{
                              xs: 170,
                              md: "auto",
                            }}
                            className="card-subHeading"
                            color={"var(--text-gray-3)"}
                          >
                            {t("consultation_after")} :{" "}
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              // justifyContent: "center",
                              alignItems: "center",
                              // border: "4px solid #000",
                              gap: "8px",
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
                              className="card-subHeading"
                              color={"var(--text-gray-2)"}
                            >
                              {duration.days() > 0 && duration.days() + "d "}
                              {duration.hours() +
                                "h " +
                                duration.minutes() +
                                "m"}
                            </Typography>
                          </Box>
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

                        <hr  />

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
                              className="card-subHeading "
                            >
                              {appointmentTime}{" "}
                              {moment(appointmentDate).format("DD-MM-YYYY")}
                            </Typography>
                          </Box>
                        </Stack>

                        {/* ------ */}
                        <hr  />
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
                                {totalAmount}{" "}
                                {selectedLocale == "ar" ? " ر.س" : " SAR"}
                              </Typography>
                            </Box>
                          </Stack>
                          
                        </Stack>
                      </Stack>
                    </Box>
                  </Box>
                  <ProgressCheck/>
                  <Button
                            onClick={() =>
                              router.push(
                                `/${selectedLocale}/pages/appointments/coming/${appointmentId}`
                              )
                            }
                            className={`button_outlined`}
                          >
                            {t("order_details")}
                          </Button>
                </CardContent>
              </Card>
            );
          }
        )}

        <div className="flex justify-center mt-24">
          <Button
            className={`button_filled !border-[var(--tertiary-color)] !bg-[var(--tertiary-color)]  w-[70%]`}
          >
            احجز موعد جديد
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default ComingAppointments;
