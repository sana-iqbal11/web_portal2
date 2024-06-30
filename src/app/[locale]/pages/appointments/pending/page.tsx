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
import MoneyVector from "/public/requestPageImages/Money.png";
import TimeVectorColor from "/public/requestPageImages/Access time golden.png";
import CalenderVector from "/public/calender.png";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import NoDataFoundComponet from "@/app/[locale]/components/atoms/NoDataFoundComponet";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import { getAppointments } from "../../../../../../lib/auth";
// import EmptyDataComp from "@/app/[locale]/components/organisms/EmptyDataComp";

const PendingAppointments = () => {
  const t = useTranslations("Appointments");
  const selectedLocale = useLocale();
  const router = useRouter();

  const [statusId, setStatusId] = useState(1);
  const [size, setSize] = useState(20);
  const [page, setPage] = useState(1);

  const {
    data: PendingAppointmentsData,
    isLoading,
    isError,
    isRefetching,
  } = getAppointments(page, size, statusId);

  console.log(PendingAppointmentsData);

  if (isLoading || isRefetching) {
    return (
      <div className="loading-container">
        <Spinner />
      </div>
    );
  }

  if (!isLoading && (isError || PendingAppointmentsData === null)) {
    return (
      <div className="loading-container">
        <p className="text-[var(--cancel-color)] card-subHeading">
          An Error Occured
        </p>
      </div>
    );
  }

  if (!isLoading && PendingAppointmentsData?.result?.appointments.length == 0) {
    return (
      <div className="loading-container">
        <NoDataFoundComponet
          text={t("no_pending_appointments")}
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
        {PendingAppointmentsData?.result?.appointments.map(
          (item: any, index: number) => {
            const { referenceNumber, totalAmount, appointmentId } = item;
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
                          justifyContent={"center"}
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
                              {t("not_confirmed")}
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
                          justifyContent={"space-between"}
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
                            {referenceNumber}
                          </Typography>
                        </Stack>

                        <hr />

                        {/* ------ */}
                        <Stack
                          alignItems={{ sm: "center" }}
                          justifyContent={"space-between"}
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
                              {t("time_will_be_set_soon")}
                            </Typography>
                          </Box>
                        </Stack>

                        {/* ------ */}
                        <hr />
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
                            justifyContent={"space-between"}
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
                          <Stack
                            flexDirection={{
                              xs: "column",
                              md: "row",
                            }}
                            gap={1}
                          >
                            <Button
                              onClick={() =>
                                router.push(
                                  `/${selectedLocale}/pages/appointments/pending/${appointmentId}`
                                )
                              }
                              className={`button_outlined !px-9`}
                            >
                              {t("order_details")}
                            </Button>

                            <Button className={`button_filled !px-9 `}>
                              {t("complete_order")}
                            </Button>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            );
          }
        )}

        <div className="flex justify-center mt-24">
          <Button
            className={`button_filled !border-[var(--tertiary-color)]  !bg-[var(--tertiary-color)]  w-[70%]`}
          >
            احجز موعد جديد
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default PendingAppointments;
