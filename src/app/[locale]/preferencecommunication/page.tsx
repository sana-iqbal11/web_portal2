"use client"
import React, { useState } from 'react';
import CustomDropdown from '../components/DropDown';
import { useLocale, useTranslations } from "next-intl";
import electronic from '../../../../public/electronic.png'
import call from '../../../../public/call.png'
import ProgressCheckbox from '../components/ProgressCheckBox';
import Link from 'next/link';
function LegalNeedsFormScreen() {
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
      <div className="bg-white shadow-xl rounded-xl p-8 w-[40%]">
      <ProgressCheckbox steps={4}/>
      <div className='border-t my-3'></div>
        <h1 className={`text-2xl signin-form font-medium mb-4 text-${selectedLocale === 'ar' ? 'right' : 'left'}`}>
          {t('meeting')}
        </h1>
        <p className={`mb-4 text-sm text-[#475467] checkbox-signin text-${selectedLocale === 'ar' ? 'right' : 'left'}`}>
          {t("pre_option")}
        </p>

       <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 mt-3' >
         <div className='bg-white shadow-lg rounded-lg '>
          <div className='p-3'>
            <div className='flex  justify-center'>

           <img src={electronic.src} className='object-cover w-100 h-auto' />
            </div>
            <p className='signin-form text-lg text-center mt-3'> {t("online_meeting")} </p>

          </div>
      <div className='bg-[#F9FAFB]'>
      <Link href={`/${selectedLocale}/meetingSchedual`}>
      <div className="form-control border-0 px-3 pb-3">
          <button
            type="submit"
            className="md:mt-5 checkbox-signin btn font-normal  text-lg px-3.5 bg-transparent border border-[#DDB669]
          rounded-md text-[#D49E24] hover:bg-[#D49E24] hover:text-white hover:outline-none hover:border-[#DDB669]"
          >
            {t("choose")}
          </button>
          </div>
          </Link>
      </div>
         </div>
         <div className='bg-white shadow-lg rounded-lg '>
          <div className='p-3'>
            <div className='flex  justify-center'>

           <img src={call.src} className='object-cover w-100 h-auto' />
            </div>
            <p className='signin-form text-lg text-center mt-3'> {t("phone_call")} </p>

          </div>
          <div className='bg-[#F9FAFB]'>
          <Link href={`/${selectedLocale}/meetingSchedual`}>
      <div className="form-control border-0 px-3 pb-3">
          <button
            type="submit"
            className="md:mt-5 checkbox-signin btn font-normal  text-lg px-3.5 bg-transparent border border-[#DDB669]
          rounded-md text-[#D49E24] hover:bg-[#D49E24] hover:text-white hover:outline-none hover:border-[#DDB669]"
          >
            {t("choose")}
          </button>
          </div>
          </Link>
          </div>
         </div>
       </div>
      </div>
    </div>
  );
}

export default LegalNeedsFormScreen;
