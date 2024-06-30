"use client"
import React, { useState } from 'react';
import CustomDropdown from '../components/DropDown';
import { useLocale, useTranslations } from "next-intl";
import ProgressCheckbox from '../components/ProgressCheckBox';
import Link from 'next/link';

function LegalNeedsFormScreen() {
  const t = useTranslations("demo");
  const selectedLocale = useLocale();
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');

  const industryOptions = {
    en: [
      'Technology',
      'Marketing',
      'Banking',
      'Engineering Companies',
      'Transport and Logistics',
      'Contracting',
      'Supply',
      'Car Rental',
      'Finance',
      'Insurance',
      'Restaurants and Cafes',
      'Airports',
      'Medical Devices',
      'Other'
    ],
    ar: [
      'التكنولوجيا',
      'التسويق',
      'البنوك',
      'الشركات الهندسية',
      'النقل و اللوجستيات',
      'مقاولات',
      'توريد',
      'تأجير السيارات',
      'التمويل',
      'التأمين',
      'المطاعم و كفيهات',
      'مطارات',
      'أجهزة طبية',
      'اخرى'
    ]
  };

  const dropdown2Options = {
    en: [
      'Lawsuit Statement',
      'Response to Lawsuit',
      'Objection to Ruling',
      'Legal Consultation',
      'Contract Preparation and Review',
      'Internal Company Regulations',
      'Company Conversion',
      'Company Establishment',
      'Other'
    ],
    ar: [
      'كتابة صحيفة دعوى',
      'الرد على صحيفة دعوى',
      'لائحة اعتراضية على حكم صادر',
      'تقديم الاستشارات القانونية',
      'اعداد العقود و صياغتها بالإضافة إلى مراجعة العقود',
      'اعداد اللوائح الداخلية للشركة و مراجعتها',
      'تحويل من مؤسسة لشركة',
      'تأسيس الشركات',
      'أخرى'
    ]
  };

  return (
    <div className="flex h-screen items-center justify-center bg-white"
      style={{
        direction: selectedLocale === "ar" ? "rtl" : "ltr",
      }}
    >
      <div className="absolute left-4 top-4">
        <img src="/Shwra presentation.png" alt="Logo"  />
      </div>
      <div className="bg-white shadow-xl border border-[#EAECF0] rounded-2xl w-[40%]">
        <div className='p-8'>
        <ProgressCheckbox steps={4}/>
        <div className='border-t my-3'></div>
        <h1 className={`text-2xl signin-form font-medium mb-4 text-${selectedLocale === 'ar' ? 'right' : 'left'}`}>
          {t('meeting')}
        </h1>
        <p className={`mb-4 text-sm text-[#475467] checkbox-signin text-${selectedLocale === 'ar' ? 'right' : 'left'}`}>
          {t("appointment")}
        </p>

        <CustomDropdown
          label={t("industry")}
          options={selectedLocale === 'ar' ? industryOptions.ar : industryOptions.en}
          selected={dropdown1}
          setSelected={setDropdown1}
        />

        <CustomDropdown
          label={t("issues")}
          options={selectedLocale === 'ar' ? dropdown2Options.ar : dropdown2Options.en}
          selected={dropdown2}
          setSelected={setDropdown2}
        />
        </div>
        <div className='bg-[#F9FAFB] border-b border-[#EAECF0] rounded-2xl'>
      <Link href={`/${selectedLocale}/preferencecommunication`}>
      <div className="form-control border-0 px-8 pb-5">
          <button
            type="submit"
            className="md:mt-5 btn font-normal checkbox-signin text-lg px-3.5 bg-transparent border border-[#DDB669] h-9
          rounded-md text-[#DDB669] hover:bg-transparent hover:border-[#DDB669] hover:outline-none active:bg-transparent focus:bg-transparent"
          >
            {t("continuation")}
          </button>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LegalNeedsFormScreen;
