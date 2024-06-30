"use client"
import React, { useState } from 'react';
import CustomDropdown from '../components/DropDown';
import { useLocale, useTranslations } from "next-intl";
import mail from '../../../../public/mail.png'
import ProgressCheckbox from '../components/ProgressCheckBox';
import Link from 'next/link';
function confirmationForm() {
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
      <div className="bg-white shadow-xl rounded-xl w-[40%]">
        <div className='p-8'>
        <ProgressCheckbox steps={4}/>
        <div className='border-t my-3'></div>
        <h1 className={`text-2xl signin-form font-medium mb-2 text-${selectedLocale === 'ar' ? 'right' : 'left'}`}>
          {t('reveiw_appointment')}
        </h1>
        <p className={`mb-4 text-sm text-[#475467] checkbox-signin text-${selectedLocale === 'ar' ? 'right' : 'left'}`}>
          {t("pre_option")}
        </p>

        <ul className="list-disc list-inside flex flex-col gap-2">
        <li className='text-[#D49E24] font-bold text-base' ><span className="checkbox-signin text-[#475467] ">{t("meeting_date")}</span> {t("amendment")}</li>
        <li className='text-[#D49E24] font-bold text-base'><span className="checkbox-signin text-[#475467]">{t("meeting_time")}</span>  {t("amendment")}</li>
        <li className='text-[#D49E24] font-bold text-base'><span className="checkbox-signin text-[#475467]">{t("meeting_platform")}</span> {t("amendment")}</li>
    </ul>
    <div className='flex justify-center items-center gap-2 mt-10'>
       <p className='text-base text-[#475467]' >info@shwra.sa</p>
       <img src={mail.src} />
    </div>

        </div>
        <div className='bg-[#F9FAFB]'>
        <Link href={`/${selectedLocale}/finalMessage`}>
    <div className="form-control border-0 px-8 pb-5">
          <button
            type="submit"
            className=" md:mt-5 btn checkbox-signin text-lg px-3.5  bg-[#D49E24] border border-[#DDB669] h-9
           rounded-md font-normal text-white hover:bg-[#DDB669] hover:outline-none active:bg-[#DDB669] focus:bg-[#DDB669]"
          >
            {t("confirm_appo")}
          </button>
        </div>
</Link>
        </div>
      </div>
    </div>
  );
}

export default confirmationForm;
