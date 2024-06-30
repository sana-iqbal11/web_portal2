import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import iconOne from "/public/more/iconOne.svg";
import iconTwo from "/public/more/iconTwo.svg";
import iconThree from "/public/more/icon3.svg";
import iconFour from "/public/more/iconFour.svg";
import iconFive from "/public/more/iconFive.svg";
import moreLogo from "/public/more/more-logo.svg";

function More() {
  const t = useTranslations("More");

  return (
    <div className="flex flex-col divide-y-2 w-full max-w-5xl max-h-[500px] px-5  overflow-auto hide-scroll">
      {dataArray.map((el, i) => (
        <MoreItem key={i} icon={el.img} text={el.text} link={el.link} />
      ))}
    </div>
  );
}

export default More;

const MoreItem = ({
  icon,
  text,
  link,
}: {
  icon: string;
  text: string;
  link: string;
}) => {
  const t = useTranslations("More");
  const locale = useLocale();
  return (
    <Link
      href={link}
      className="flex gap-2 items-center py-4 cursor-pointer hover:bg-gray-100 transition-all duration-300"
    >
      <div className="p-2 bg-gray-100 rounded-full aspect-square">
        <Image src={icon} alt="chat-icon" width={25} />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{t(text)}</span>
      </div>
    </Link>
  );
};

const dataArray = [
  {
    text: "About Shwra",
    img: iconOne,
    link: "more/why-us",
  },
  {
    text: "Privacy Policy",
    img: iconTwo,
    link: "more/privacy-policy",
  },
  {
    text: "Common Questions",
    img: iconThree,
    link: "more/faq",
  },
  {
    text: "Call Us",
    img: iconFour,
    link: "more/contact-us",
  },
  {
    text: "Social Media",
    img: iconFive,
    link: "more/social",
  },
];
