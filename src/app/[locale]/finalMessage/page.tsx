"use client"
import React, { useState } from 'react';
import CustomDropdown from '../components/DropDown';
import { useLocale, useTranslations } from "next-intl";
import mail from '../../../../public/mail.png'
import ProgressCheckbox from '../components/ProgressCheckBox';
import Link from 'next/link';
function finalMessage() {
  const t = useTranslations("demo");
  const selectedLocale = useLocale();
  

  return (
    <div className="flex h-screen items-center justify-center bg-white"
      style={{
        direction: selectedLocale === "ar" ? "rtl" : "ltr",
      }}
    >
      <div className="absolute left-4 top-4">
        <img src="/Shwra presentation.png" alt="Logo" />
      </div>
      <div className="bg-white shadow-xl rounded-xl  w-[40%]">
        <div className='p-8'>
       
      <div className="flex  justify-center">
        <img src="/star.png" alt="Logo" />
      </div>
        <h1 className={`text-center text-2xl signin-form font-medium mb-4 mt-10`}>
          {t('reservation')}
        </h1>
        <p className={`mb-1 text-center text-sm text-[#475467] checkbox-signin `}>
          {t("scheduled_at")}
        </p>
        <p className={`mb-4 text-center text-sm text-[#475467] checkbox-signin `}>
          {t("zoom")}
        </p>

    <div className='flex justify-center items-center gap-2 mt-10'>
       <p className='text-base text-[#475467]' >info@shwra.sa</p>
       <img src={mail.src} />
    </div>

        </div>
        <div className='bg-[#F9FAFB]'>
        <Link href={`/${selectedLocale}/SplashScreen`}>
    <div className="form-control border-0 px-8 pb-5">
          <button
            type="submit"
            className=" md:mt-5 btn text-font font-normal text-base px-3.5  bg-[#D49E24] border border-[#DDB669] h-9
           rounded-md text-white hover:bg-[#D49E24] hover:outline-none active:bg-[#D49E24] focus:bg-[#DDB669]"
          >
            {t("home_back")}
          </button>
        </div>
</Link>
        </div>
      </div>
    </div>
  );
}

export default finalMessage;