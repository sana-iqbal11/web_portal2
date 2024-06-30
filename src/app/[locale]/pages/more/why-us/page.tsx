import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import moreLogo from "/public/more/more-logo.svg";

function More() {
  const t = useTranslations("More");

  return (
    <div className="flex flex-col justify-center gap-4 py-6 w-full max-w-5xl min-h-[300px] px-5">
      <h2 className="font-bold text-xl">
        {t("About Shura for legal services and consultations")}
      </h2>
      <p className="font-medium text-gray-800">{t("why-us-text")}</p>
    </div>
  );
}

export default More;
