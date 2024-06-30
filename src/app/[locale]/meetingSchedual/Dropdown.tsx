"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import moon from '../../../../public/moon.png'
import sun from '../../../../public/sunset-2.png'
export default function Dropdown({
  setSelectedTime,
  selectedTime,
}: {
  setSelectedTime: (value: string) => void;
  selectedTime: string;
}) {
  const t = useTranslations("demo");
  const selectedLocale = useLocale();
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-white py-5 px-8 flex flex-col divide-y checkbox-signin" style={{ direction: selectedLocale === 'ar' ? 'rtl' : 'ltr'}}>
      <div className="flex gap-2">
        <img src={moon.src} className="object-contain" />
      <p className="py-4 text-sm">{t("appoinmnet_available")}</p>

      </div>
      <div className="flex gap-2">
      <img src={sun.src} className="object-contain" />
      <p className="text-sm flex w-full justify-between items-center cursor-pointer py-4">
        {t("8_appoinments")}
        <FaChevronDown className={`transition-all duration-300`} />
      </p>
      </div>
      <div className="flex flex-col gap-4 py-4">
      <div className="flex flex-row gap-2">
        <img src={sun.src} className="object-contain" />
        <div
          className="flex w-full justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="text-sm">13 مواعيد متاحه </span>
          </div>
          <FaChevronDown
            className={`${open && "rotate-180"} transition-all duration-300`}
          />
        </div>
        {open && (
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 7 })
              .fill("01:10 مساءً")
              .map((_, i) => (
                <div
                  onClick={() => setSelectedTime(String(i))}
                  className={`${
                    selectedTime === String(i)
                      ? "bg-[#D49E24] text-white"
                      : "bg-[#EAECF0]"
                  } rounded-xl p-3 text-sm`}
                >
                  {t("pm")}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
