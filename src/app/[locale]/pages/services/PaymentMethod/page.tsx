"use client";

import ModalBack from "@/app/[locale]/components/cards/ModalBack";
import { Button, Grid, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import ternuma from "../../../../../../public/tarnama.png";
import card from "../../../../../../public/card.png";
import React from "react";
import Image from "next/image";

function PaymentMethod() {
  const t = useTranslations("payments");
  const selectedLocale = useLocale();
  return (
    <div>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid
          item
          lg={9}
          xs={12}
          sx={{
            backgroundColor: "white",
            justifyContent: "center",
            padding: "10px 46px",
            paddingLeft: "61px",
            borderRadius: "16px",
            direction: selectedLocale === "ar" ? "rtl" : "ltr",
          }}
          className="pl-[61px]"
        >
          <ModalBack />
          <Typography className="text-base text-black font-bold signin-form text-center mt-2">
            {" "}
            {t("method")}
          </Typography>
          <Typography className="text-base text-black font-bold signin-form text-center mt-4 mb-4">
            {t("tax")}{" "}
            <span className="font-medium text-[#808283]">
              8548756221598456855
            </span>{" "}
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <div>
                <Typography className="text-[#DDB669] text-sm signin-form mt-2">
                  {" "}
                  {t("details")}{" "}
                </Typography>
                <Typography className=" text-sm text-black signin-form mt-2">
                  {" "}
                  {t("consultation")}{" "}
                </Typography>
                <Typography className=" text-sm text-black signin-form mt-2">
                  {" "}
                  {t("specialty")}{" "}
                </Typography>
                <Typography className=" text-sm text-black signin-form mt-2">
                  {" "}
                  {t("duration")}{" "}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="text-end">
                <Typography className="text-[#173039] text-sm mt-2 checkbox-signin flex justify-end">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-4.36677e-07 10.01C-1.9539e-07 15.53 4.48 20 10 20C15.52 20 20 15.53 20 10.01C20 4.48 15.52 -6.78401e-07 10 -4.37114e-07C4.48 -1.95827e-07 -6.78401e-07 4.48 -4.36677e-07 10.01ZM18 10C18 14.42 14.42 18 10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10ZM5 9.5L5 11L11 11L14.15 5.75L12.92 5L10.25 9.5L5 9.5Z"
                      fill="#DDB669"
                    />
                  </svg>
                  <span className={selectedLocale === "ar" ? "mr-3" : "ml-3"}>
                    {t("date")}
                  </span>
                </Typography>
                <Typography className="text-[#173039] text-sm mt-2 checkbox-signin">
                  {" "}
                  {t("lawyer_call")}{" "}
                </Typography>
                <Typography className="text-[#173039] text-sm mt-2 checkbox-signin">
                  {" "}
                  {t("case")}{" "}
                </Typography>
                <Typography className="text-[#173039] text-sm mt-2 checkbox-signin">
                  {t("minute")}
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <div className="mt-12">
                <Typography className="text-[#DDB669] text-sm signin-form mt-2">
                  {" "}
                  {t("detail")}{" "}
                </Typography>
                <Typography className=" text-sm text-black signin-form mt-2">
                  {" "}
                  {t("fees")}{" "}
                </Typography>
                <Typography className=" text-sm text-black signin-form mt-2">
                  {" "}
                  {t("taxes")}{" "}
                </Typography>
                <Typography className=" text-sm text-black signin-form mt-2">
                  {" "}
                  {t("amount")}{" "}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="text-end">
                <Typography className="text-[#173039] text-sm mt-2 checkbox-signin flex justify-end">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-4.36677e-07 10.01C-1.9539e-07 15.53 4.48 20 10 20C15.52 20 20 15.53 20 10.01C20 4.48 15.52 -6.78401e-07 10 -4.37114e-07C4.48 -1.95827e-07 -6.78401e-07 4.48 -4.36677e-07 10.01ZM18 10C18 14.42 14.42 18 10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10ZM5 9.5L5 11L11 11L14.15 5.75L12.92 5L10.25 9.5L5 9.5Z"
                      fill="#DDB669"
                    />
                  </svg>
                  <span className={selectedLocale === "ar" ? "mr-3" : "ml-3"}>
                    {t("date")}
                  </span>
                </Typography>
                <Typography className="text-[#173039] text-sm mt-2 checkbox-signin">
                  {" "}
                  95 SAR
                </Typography>
                <Typography className="text-[#173039] text-sm mt-2 checkbox-signin">
                  {" "}
                  2% SAR
                </Typography>
                <Typography className="text-[#173039] text-sm mt-2 signin-form">
                  110 SAR
                </Typography>
              </div>
            </Grid>
          </Grid>

          <div className="mt-6 flex items-center input-bordered justify-center px-3.5 py-[3.8px] w-full max-w-x border rounded-md">
            <Typography className="text-font text-sm text-black text-end ml-3 mr-2 signin-form">
              {t("apple")}{" "}
            </Typography>
            <svg
              width="23"
              height="28"
              viewBox="0 0 23 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_271_13610)">
                <path
                  d="M15.5076 4.825C16.5113 3.61719 17.0049 2.06576 16.8836 0.5C15.3441 0.656974 13.9182 1.38133 12.8836 2.532C12.3841 3.0918 12.0001 3.7447 11.7535 4.45325C11.5069 5.1618 11.4026 5.91206 11.4466 6.661C12.2222 6.71423 12.999 6.5745 13.7074 6.25429C14.4159 5.93408 15.034 5.44337 15.5066 4.826L15.5076 4.825ZM16.8836 7.054C14.6556 6.923 12.7546 8.3 11.7056 8.3C10.6566 8.3 9.01956 7.119 7.24656 7.119C6.10155 7.15255 4.98518 7.48465 4.00802 8.08242C3.03086 8.68019 2.22683 9.52287 1.67556 10.527C-0.686438 14.655 1.02056 20.752 3.37556 24.091C4.49756 25.729 5.87356 27.564 7.64656 27.5C9.34656 27.434 10.0056 26.385 12.0376 26.385C14.0696 26.385 14.6556 27.5 16.4896 27.432C18.3236 27.364 19.5036 25.793 20.6186 24.089C21.43 22.9289 22.0496 21.6459 22.4536 20.289C21.4485 19.8584 20.5818 19.1587 19.9491 18.2669C19.3164 17.3752 18.9422 16.3261 18.8677 15.2352C18.7933 14.1443 19.0214 13.0541 19.5271 12.0846C20.0328 11.1152 20.7963 10.3042 21.7336 9.741C21.1949 8.94183 20.4745 8.28167 19.6315 7.81461C18.7885 7.34756 17.8468 7.0869 16.8836 7.054Z"
                  fill="#173039"
                />
              </g>
              <defs>
                <clipPath id="clip0_271_13610">
                  <rect
                    width="21.907"
                    height="27"
                    fill="white"
                    transform="translate(0.546875 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="mt-6 flex items-center input-bordered justify-center px-3.5 py-[4.9px] w-full max-w-x border rounded-md">
            <Typography className="text-font text-sm text-black text-end ml-3 mr-2 signin-form">
              {t("via")}{" "}
            </Typography>

            <Image src={ternuma} alt="" />
          </div>
          <div className="mt-6 flex items-center input-bordered justify-start px-3.5 py-[6.9px] w-full max-w-x border rounded-md">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9.5L2 4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3L21 3C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V9.5C21.337 9.5 20.7011 9.76339 20.2322 10.2322C19.7634 10.7011 19.5 11.337 19.5 12C19.5 12.663 19.7634 13.2989 20.2322 13.7678C20.7011 14.2366 21.337 14.5 22 14.5V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21L3 21C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20L2 14.5C2.32833 14.5001 2.65345 14.4354 2.95681 14.3099C3.26016 14.1843 3.53581 14.0001 3.768 13.768C4.00013 13.5358 4.18425 13.2602 4.30985 12.9568C4.43545 12.6535 4.50006 12.3283 4.5 12C4.50006 11.6717 4.43545 11.3465 4.30985 11.0432C4.18425 10.7398 4.00013 10.4642 3.768 10.232C3.53581 9.99987 3.26016 9.81575 2.95681 9.69015C2.65345 9.56455 2.32833 9.49994 2 9.5ZM4 7.968C4.75121 8.3403 5.38347 8.91505 5.8255 9.62746C6.26754 10.3399 6.50176 11.1616 6.50176 12C6.50176 12.8384 6.26754 13.6601 5.8255 14.3725C5.38347 15.085 4.75121 15.6597 4 16.032L4 19L20 19V16.032C19.2488 15.6597 18.6165 15.085 18.1745 14.3725C17.7325 13.6601 17.4982 12.8384 17.4982 12C17.4982 11.1616 17.7325 10.3399 18.1745 9.62746C18.6165 8.91505 19.2488 8.3403 20 7.968V5L4 5L4 7.968ZM9 9L15 9V11H9V9ZM9 13H15V15H9V13Z"
                fill="#DDB669"
              />
            </svg>

            <Typography className="text-font text-[11px] text-[#DDB669] text-end ml-3 mr-2 ">
              {t("via")}{" "}
            </Typography>
          </div>
          <div className="mt-6 flex items-center  justify-between  py-[4.9px] w-full max-w-x  rounded-md">
            <Typography className="text-sm text-black text-end ml-3 mr-2 signin-form">
              {t("card")}{" "}
            </Typography>

            <Image src={card} alt="" />
          </div>
          <Typography className="text-sm text-[#87959A] text-start ml-3 mr-2 mt-4 checkbox-signin">
            {t("holder")}{" "}
          </Typography>
          <input
            type="text"
            name="text"
            id="text"
            required
            className="input input-bordered placeholder:text-[11px]
                focus:border-0 w-full max-w-x text-start h-10 rounded-lg mt-3 px-3.5 py-[20.8px] max-w-x border"
          />
          <Typography className="text-sm text-[#87959A] text-start ml-3 mr-2 mt-4 checkbox-signin">
            {t("number")}{" "}
          </Typography>
          <input
            type="text"
            name="text"
            id="text"
            required
            className="input input-bordered placeholder:text-[11px]
                focus:border-0 w-full max-w-x text-start h-10 rounded-lg mt-3 px-3.5 py-[20.8px] max-w-x border"
          />

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5">
            <Typography className="text-[12px] text-black text-start ml-3  mt-4 checkbox-signin">
              CVV
            </Typography>
            <Typography className="text-[12px] text-black text-start ml-3  mt-4 checkbox-signin">
              EX Date
            </Typography>
            <input
              type="text"
              name="text"
              id="text"
              required
              className="input input-bordered placeholder:text-[11px]
                focus:border-0 w-full max-w-x text-start h-10 rounded-lg mt-1 px-3.5 py-[20.8px] max-w-x border"
            />

            <input
              type="text"
              name="text"
              id="text"
              required
              className="input input-bordered placeholder:text-[11px]
                focus:border-0 w-full max-w-x text-start h-10 rounded-lg mt-1 px-3.5 py-[20.8px] max-w-x border"
            />
          </div>

          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Button className="bg-[#173039] text-white w-[55%] h-9 mt-8 checkbox-signin">
                {t("pay")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default PaymentMethod;
