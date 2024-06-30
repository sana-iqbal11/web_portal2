"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import insta from "/public/more/insta.svg";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Spinner from "@/app/[locale]/components/atoms/Spinner";

function Faq({ params }: { params: { locale: string } }) {
  const t = useTranslations("More");

  const [open, setOpen] = useState<number | null>(0);

  function handleOpen(n: number) {
    setOpen((p) => (p === n ? null : n));
  }

  const router = useRouter();

  useEffect(() => {
    router.replace("https://www.shwra.sa/faqs/");
  }, []);

  const isLoading = true;

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-4 py-6 w-full max-w-5xl mx-auto min-h-[300px] px-5">
      <h2 className="font-bold text-xl">{t("faq-heading")}</h2>
      <div className="flex gap-6 flex-col w-full justify-center py-8">
        {data.map((el, i) => (
          <div
            onClick={() => handleOpen(i)}
            key={i}
            className="p-3 rounded-xl border-2 flex divide-y flex-col cursor-pointer"
          >
            <p className="py-2 font-bold flex justify-between items-center ">
              {params.locale === "en" ? el.qen : el.qar}
              <FaChevronDown
                className={`${
                  open === i && "rotate-180"
                } transition-transform duration-300`}
              />
            </p>
            <AnimatePresence>
              {open === i && (
                <motion.p
                  exit={{ height: 0 }}
                  initial={{ height: 0 }}
                  animate={{
                    height: "auto",
                  }}
                  className=" font-bold overflow-hidden"
                >
                  <div className="py-4">
                    {params.locale === "en" ? el.aen : el.aar}
                  </div>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;

const data = [
  {
    qar: "الجرائم المعلوماتية",
    aar: "نعم، شورى شركة سعودية مسجلة في وزارة التجارة والاستثمار، وجميع المحامين القانونيين المسجلين في شورى مرخصين من قبل وزارة العدل برخصة سارية ونظامية.",
    qen: "Information crimes",
    aen: "Yes, Shura is a Saudi company registered in the Ministry of Commerce and Investment, and all legal lawyers registered in Shura are licensed by the Ministry of Justice with a valid and regular license.",
  },
  {
    qar: "الجرائم المعلوماتية",
    aar: "نعم، شورى شركة سعودية مسجلة في وزارة التجارة والاستثمار، وجميع المحامين القانونيين المسجلين في شورى مرخصين من قبل وزارة العدل برخصة سارية ونظامية.",
    qen: "Information crimes",
    aen: "Yes, Shura is a Saudi company registered in the Ministry of Commerce and Investment, and all legal lawyers registered in Shura are licensed by the Ministry of Justice with a valid and regular license.",
  },
];
