import React, { Children } from "react";
import moreLogo from "/public/more/more-logo.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const layout = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("More");
  return (
    <div className="flex flex-col gap-2 items-center custom-font bg-white max-w-6xl mx-auto rounded-xl  overflow-hidden p-2 lg:p-0">
      <div className="min-h-[250px] more-gradient w-full flex justify-center items-center p-4 rounded-tr-xl rounded-tl-xl">
        <div>
          <Image src={moreLogo} alt="logo" className="w-full" />
          <p className="font-bold text-lg pt-3">
            {t("Our lawyers are licensed by the Ministry of Justice")}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default layout;
