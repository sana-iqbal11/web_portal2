"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import chatIcon from "/public/chat-icon.svg";
import chatShawraLogo from "/public/chat/chat-shwra-logo.svg";
import tickIcon from "/public/chat/tick.svg";
import starIcon from "/public/chat/star.svg";
import capIcon from "/public/chat/cap.svg";
import hammerIcon from "/public/chat/hammer.svg";
import idCardIcon from "/public/chat/id-card.svg";
import { getChat, postChat, useUser } from "../../../../../../../lib/auth";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { IMAGE_URL } from "../../../../../../../lib/backend";

function Lawyer({ params }: { params: { id: string; locale: string } }) {
  const t = useTranslations("Chat");

  const { data: user } = useUser();
  const { data, error, isLoading, isError } = getChat(
    params.id,
    user?.result.id!
  );

  // if (data) console.log(data.result);

  if (isLoading || !data) {
    return (
      <div className="loading-container">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 items-center custom-font bg-white rounded-xl max-w-6xl mx-auto p-5 md:p-0">
      <div className="font-semibold text-lg w-full p-5 border-b-2 flex items-center gap-3">
        <Image src={chatShawraLogo} alt="logo" width={35} />
        {params.locale === "en"
          ? data?.result.masterCategory.name
          : data?.result.masterCategory.arabicName}
      </div>

      <div className="flex flex-col gap-2 w-full max-w-5xl max-h-[500px] overflow-auto hide-scroll">
        <LawerCard data={data} />
      </div>

      <div className="flex flex-col gap-5 w-full md:px-16 py-6 border-2 rounded-xl max-w-5xl mx-auto">
        <h1 className="text-lg font-bold">تخصــصات المحامي</h1>
        <div className="flex gap-4 flex-wrap">
          {["القضايا الجزائية", "الخلافات العمالية", "الاحوال الشخصية"].map(
            (text) => (
              <CustomButton text={text} key={text} />
            )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full md:px-16 py-6 border-2 rounded-xl max-w-5xl mx-auto">
        <h1 className="text-lg font-bold"> اللـــغات</h1>
        <div className="flex gap-4 flex-wrap">
          {["العربية", "الانجليزية"].map((text) => (
            <CustomButton text={text} key={text} />
          ))}
        </div>
      </div>

      <button className="font-bold text-white bg-[#173039] rounded-lg max-w-2xl py-2 w-full mx-auto text-center">
        طلب خمة من عند المحامي
      </button>
    </div>
  );
}

export default Lawyer;

const LawerCard = ({ data }: { data: any }) => {
  const t = useTranslations("Chat");
  return (
    <div className="md:p-6 p-3 rounded-xl border-2 border-gray-200 flex flex-col md:flex-row gap-8 w-full">
      <div className="flex flex-col gap-4 flex-[0.3]">
        <span className="font-bold text-xl">الصورة</span>
        <div className="flex justify-center flex-col gap-1 items-center bg-[#F4F2EC80] rounded-xl p-5 border-2 border-dashed aspect-square">
          <img
            className="max-w-full rounded-xl"
            src={
              data?.result?.lawyer?.profileImageUrl
                ? IMAGE_URL + data?.result?.lawyer?.profileImageUrl
                : chatIcon
            }
            alt="chat-icon"
          />
          <span className="font-bold text-sm whitespace-nowrap">
            {data?.result?.lawyer?.firstName +
              " " +
              data?.result?.lawyer?.lastName}
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-5 justify-between">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{t("About the lawyer")}</h2>
          <span className="font-bold flex items-center">
            <Image src={starIcon} alt="tick" />
            4.45
          </span>
        </div>
        <p className="pt-8">
          لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل
          وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
          ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة
          مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب
        </p>
        <div className="flex gap-4 flex-wrap">
          {LawerDetails.map((el) => (
            <LawyerDetailItem key={el.text} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

const LawyerDetailItem = ({ icon, text }: { icon: string; text: string }) => {
  const t = useTranslations("Chat");
  return (
    <div className="flex items-center gap-3 border-2 border-[#DDB669] text-[#DDB669] rounded-md font-bold px-4 py-1.5">
      <Image src={icon} alt="icon" width={25} />
      <span>{t(text)}</span>
    </div>
  );
};

const CustomButton = ({ text }: { text: string }) => {
  return (
    <span className="p-2 px-8 rounded-full flex justify-center items-center chat-button-gradient">
      {text}
    </span>
  );
};

const LawerDetails = [
  { icon: idCardIcon, text: "Years" },
  { icon: hammerIcon, text: "Licensed attorney" },
  { icon: capIcon, text: "Masters" },
];
