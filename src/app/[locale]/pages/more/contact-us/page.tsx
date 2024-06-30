"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import insta from "/public/more/insta.svg";
import linkedin from "/public/more/linkedin.svg";
import twitter from "/public/more/twitter.svg";
import phone from "/public/more/callphone.svg";

function ContactUs() {
  const t = useTranslations("More");

  const [data, setData] = useState({ name: "", email: "", message: "" });

  function handleInput(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setData((p) => ({ ...p, [name]: value }));
  }

  return (
    <div className="flex flex-col justify-center gap-4 py-6 w-full max-w-5xl min-h-[300px] px-5">
      <h2 className="font-bold text-xl">{t("Call Us")}</h2>
      <p className="font-semibold">{t("call-us-text")}</p>
      <form className="flex flex-col gap-10 w-full justify-center py-8">
        <input
          type="text"
          required
          placeholder={t("Name *")}
          className="border-2 p-3 max-w-4xl mx-auto w-full"
          name="name"
          value={data.name}
          onChange={handleInput}
        />
        <input
          type="email"
          placeholder={t("Email")}
          className="border-2 p-3 max-w-4xl mx-auto w-full"
          name="email"
          value={data.email}
          onChange={handleInput}
        />
        <textarea
          value={data.message}
          required
          placeholder={t("Add text here *")}
          name="message"
          rows={8}
          onChange={handleInput}
          className="border-2 p-3 max-w-4xl mx-auto w-full"
        ></textarea>

        <button className="text-white py-2 max-w-4xl mx-auto w-full bg-[#DDB669]">
          {t("Submit")}
        </button>
      </form>

      <div className="flex items-center font-bold text-lg gap-16 max-w-4xl mx-auto w-full">
        <div className="flex-1 h-[2px] bg-gray-200"></div>
        <div>{t("OR")}</div>
        <div className="flex-1 h-[2px] bg-gray-200"></div>
      </div>

      <a
        href={`tel:${920033635}`}
        className="border-2 p-3 max-w-4xl mx-auto w-full flex items-center justify-between font-semibold mt-5"
      >
        <span>{t("Contact us")}</span>
        <span className="flex items-center gap-6">
          <Image src={phone} alt="phone" />
          920033635
        </span>
      </a>
    </div>
  );
}

export default ContactUs;

const social = [
  { title: "Linkedin", icon: linkedin, href: "#" },
  { title: "Twitter", icon: twitter, href: "#" },
  { title: "Instagram", icon: insta, href: "#" },
];
