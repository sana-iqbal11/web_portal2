"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { FormEvent, useEffect, useState } from "react";
import Spinner from "../atoms/Spinner";
import { toast } from "react-toastify";
import { useRequestOtp, useUser } from "../../../../../lib/auth";
import { useLocale, useTranslations } from "next-intl";
import flag from "../../../../../public/SA.png";
import Link from "next/link";
export default function Schedualform() {
  const t = useTranslations("demo");
  const router = useRouter();
  const selectedLocale = useLocale();

  const { data: user, isLoading } = useUser();
  const [loading, setIsLoading] = useState(false);

  const { mutate: requestOtp, isPending: isLogining } = useRequestOtp();

  const [telephone, setTelephone] = useState("");
  const isValid = telephone.length === 9;

  console.log({ telephone });
  const handlePhoneNumbereChange = (e: any) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setTelephone(inputValue);
  };

  //   useEffect(() => {
  //     if (user) {
  //       // setTimeout(() => {
  //       router.push(`/`);
  //       // }, 1000)
  //     }
  //   }, [user]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when form is submitted
    requestOtp(
      {
        countryCode: "966",
        phone: telephone,
      },
      {
        onSuccess: (data) => {
          setIsLoading(false); // Set loading state to false upon successful request
          if (data?.result === "otp sent successfully") {
            toast.success(data?.result);
            router.push(`/${selectedLocale}/auth/otp?${telephone}`);
          } else {
            toast.error(data?.errors[0]);
          }
        },
        onError: (error: any, variables: any, context: any) => {
          setIsLoading(false); // Set loading state to false upon error
          console.log({
            error,
            variables,
            context,
          });
        },
      }
    );
  };

  return (
    <form>
      <div
        className=" mt-5 flex flex-col gap-2"
        style={{
          direction: selectedLocale === "ar" ? "rtl" : "ltr",
        }}
      >
        <div>
          <p className="text-[#344054] checkbox-signin mb-3"> {t("name")} </p>
          <label
            className="relative text-gray-400 focus-within:text-gray-600 block"
            style={{
              textAlign: "start",
              justifyContent: "start",
            }}
          >
            <input
              type="text"
              name="text"
              id="text"
              placeholder={t("example")}
              className={`input input-bordered w-full max-w-x  placeholder-[#667085] px-3.5 py-[17.8px] max-w-x border ${
                !isValid ? "border-red-500" : "border-[#87959A]"
              } rounded-lg placeholder:text-base focus:border-[#87959A] focus:outline-none ${
                selectedLocale === "ar" ? "text-start" : "text-start"
              }`}
            />
          </label>
        </div>
        <div>
          <p className="text-[#344054] checkbox-signin mb-3">
            {t("company_name")}
          </p>
          <label
            className="relative text-gray-400 focus-within:text-gray-600 block"
            style={{
              textAlign: "start",
              justifyContent: "start",
            }}
          >
            <input
              type="text"
              name="text"
              id="text"
              placeholder={t("company_example")}
              className={`input input-bordered w-full max-w-x  placeholder-[#667085] px-3.5 py-[17.8px] max-w-x border rounded-lg placeholder:text-base focus:border-[#87959A] border-[#87959A] focus:outline-none ${
                selectedLocale === "ar" ? "text-start" : "text-start"
              }`}
            />
          </label>
        </div>
        <div className="form-control border-0">
          <p className="text-[#344054] checkbox-signin">{t("mob_no")}</p>
          <label
            className={`relative text-gray-400 focus-within:text-gray-600 block lg:mt-5 mt-5 ${
              selectedLocale === "ar" ? "rtl" : "ltr"
            }`}
            style={{
              direction: selectedLocale === "ar" ? "rtl" : "ltr",
              textAlign: selectedLocale === "ar" ? "end" : "start",
            }}
          >
            <div className="flex items-center relative">
              <input
                type="tel"
                name="telephone"
                id="telephone"
                maxLength={9}
                value={telephone}
                onChange={handlePhoneNumbereChange}
                required
                placeholder={t("number")}
                className={`input input-bordered w-full max-w-x placeholder-[#667085] px-3.5 
          py-[17.8px] border ${
            !isValid ? "border-red-500" : "border-[#87959A]"
          } rounded-lg placeholder:text-base focus:border-[#87959A] focus:outline-none ${
                  selectedLocale === "ar" ? "text-end" : ""
                } pr-36`}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center"
               style={{ direction: selectedLocale === 'ar' ? 'rtl' : 'ltr'}}
              >
                <img src={flag.src} alt="flag" className="w-6 h-6" />
                <span className="ml-2 text-[#101828] checkbox-signin">
                  {t("saudi")}
                </span>
              </span>
            </div>
          </label>
          {!isValid ? (
            <p className={`text-red-500 text-sm mt-1 ${selectedLocale === "ar" ? "text-start" : "text-start"} `}>
              {t("please_enter")}
            </p>
          ) : (
            <p className="text-[#DDB669] text-sm mt-1 text-end">
             ""
            </p>
          )}
        </div>
        <div>
          <p className="text-[#344054] checkbox-signin mb-3">
            {t("email")}
          </p>
          <label
            className="relative text-gray-400 focus-within:text-gray-600 block"
            style={{
              textAlign: "start",
              justifyContent: "start",
            }}
          >
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="lawyer@shwra.sa"
              className={`input input-bordered w-full max-w-x  placeholder-[#667085] px-3.5 py-[17.8px] max-w-x border rounded-lg placeholder:text-base focus:border-[#87959A] border-[#87959A] focus:outline-none ${
                selectedLocale === "ar" ? "text-start" : "text-start"
              }`}
            />
          </label>
        </div>
       
      </div>

      {loading ? (
        <div className="">
          <Spinner />
        </div>
      ) : (
        <Link href={`/${selectedLocale}/schedualforms`}>
        <div className="form-control border-0 ">
          <button
            type="submit"
            className="md:mt-5 btn checkbox-signin text-lg px-3.5 bg-[#DDB669] border border-[#DDB669] h-9
          rounded-md text-white hover:bg-[#DDB669] hover:outline-none active:bg-[#DDB669] focus:bg-[#DDB669]"
          >
            {t("continuation")}
          </button>
        </div>
        </Link>
      )}
      <div>
      <label className="flex items-center gap-1  rtl:space-x-reverse justify-start"
       style={{ direction: selectedLocale === 'ar' ? 'rtl' : 'ltr'}}
      >
            <span className="checkbox-signin text-[#344054] ">
                {t('agree')}
                <a href="#" className="text-orange-500">{t('service')}</a>
                {t('and')}
                <a href="#" className="text-orange-500">{t('policy')}</a>
            </span>
            <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500" />

        </label>
      </div>
    </form>
  );
}
