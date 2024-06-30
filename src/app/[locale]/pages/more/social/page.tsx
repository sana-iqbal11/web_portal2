import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import insta from "/public/more/insta.svg";
import linkedin from "/public/more/linkedin.svg";
import twitter from "/public/more/twitter.svg";

import moreLogo from "/public/more/more-logo.svg";

function Social() {
  const t = useTranslations("More");

  return (
    <div className="flex flex-col justify-center gap-4 py-6 w-full max-w-5xl min-h-[300px] px-5">
      <h2 className="font-bold text-xl">{t("Social media")}</h2>
      <div className="flex gap-10 flex-wrap w-full justify-center py-8">
        {social.map((item) => (
          <a
            href={item.href}
            className="flex flex-col gap-3 items-center justify-center"
            key={item.title}
          >
            <Image src={item.icon} alt="icon" />
            <span className="font-bold">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Social;

const social = [
  {
    title: "Linkedin",
    icon: linkedin,
    href: "https://linkedin.com/company/shwraapp",
  },
  { title: "Twitter", icon: twitter, href: "https://twitter.com/shwraapp" },
  { title: "Instagram", icon: insta, href: "https://instagram.com/shwraapp" },
];
