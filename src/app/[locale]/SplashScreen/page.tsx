"use client";
import React, { useState } from "react";
import shwraLogo from "../../../../public/ShwraLogo.png";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import user from "../../../../public/user-check-01.png";
import agree from "../../../../public/agreement-01.png";
import audit from "../../../../public/audit-02.png";
import legal from "../../../../public/legal-01.png";
import scale from "../../../../public/justice-scale-01.png";
import approve from "../../../../public/validation-approval.png";
import build from "../../../../public/building-03.png";
import ele from "../../../../public/elements.png";
import sheep from "../../../../public/elements (1).png";
import vallet from "../../../../public/wallet-02.png";
import ana from "../../../../public/analytics-up.png";
import check from "../../../../public/checkmark-badge-01.png";
import depart from "../../../../public/departement.png";
import stucture from "../../../../public/structure-check.png";
import elements from "../../../../public/elements (2).png";
import group from "../../../../public/user-group.png";
import down from "../../../../public/arrow-down-02-round.png";
import { useEffect, useRef } from "react";
import Link from "next/link";

function LandingPage() {
  const selectedLocale = useLocale();
  const t = useTranslations("Landing");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isIconVisible, setIsIconVisible] = useState(true);
  const [prevScrollTop, setPrevScrollTop] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const currentScrollTop = scrollContainerRef.current.scrollTop;
      if (currentScrollTop < prevScrollTop) {
        // Scrolling up
        setIsIconVisible(true);
      }
      setPrevScrollTop(currentScrollTop);
    }
  };

  const handleScrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
      setIsIconVisible(false);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollTop]);
  return (
    <div className="bg-[#07242E] overflow-hidden">
      <div
        className="shwra-image grid md:grid-cols-2 grid-cols-1 xl:gap-x-32 md:gap-x-14"
        style={{
          direction: selectedLocale === "ar" ? "rtl" : "ltr",
        }}
      >
        <div className={selectedLocale === "ar" ? "pr-10 md:pl-0 pl-10" : "pl-10 md:pr-0 pr-10"}>
          <Image src={shwraLogo} alt="" className="pt-5" />
          <div
            className={`flex flex-col lg:gap-6 md:gap-4 gap-8 ${
              selectedLocale === "ar" ? "lg:pr-10 md:pr-4 mt-14" : "lg:pl-10 md:pr-4 lg:mt-9 md:mt-0 mt-9"
            }`}
          >
            <p className="text-[#D49E24] lg:text-4xl md:text-2xl">{t("Shura_Business")}</p>
            <p className="text-white lg:text-normal md:text-sm"> {t("platform")} </p>
            <div className="flex flex-row gap-4">
              <div className="bg-[#D49E24] text-white border-0 py-2 w-[33%] rounded-[42.67px] flex items-center justify-center">
                <Link href={`/${selectedLocale}/auth/signin`}>
                  <p >
                    {t("in")}
                  </p>
                </Link>
              </div>
              <div className="bg-[#D49E24] text-white border-0 py-2 w-[33%] rounded-[42.67px] flex items-center justify-center">
                <Link href={`/${selectedLocale}/auth/signup`}>
                  <p >
                    {t("up")}
                  </p>
                </Link>
              </div>
            </div>
            <div>
            <Link href={`/${selectedLocale}/SchedualADemo`}>
              <button
                className="flex items-center  gap-3 border-[#D49E24] text-[14px] text-[#D49E24] border 
              p-4 pt-2 pb-2 rounded-[42.67px]"
              >
                
                {" "}
                {t("demo")}{" "}
                {selectedLocale === "ar" ? <FaArrowLeft /> : <FaArrowRight />}
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative md:block hidden">
          <div
            className={`scroll-container ${
              selectedLocale === "ar" ? "pl-10 md:pr-0 pr-10" : "pr-10  md:pl-0 pl-10"
            } md:block hidden` }
            ref={scrollContainerRef}
          >
            <div className="scroll-content border-l border-r border-[#DFDFDF]">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`flex ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-[240.67px] lg:h-[214.67px] md:h-[360.67px] flex-1"></div>
                  <div className="w-[240.67px] lg:h-[214.67px] md:h-[360.67px] bg-[#D49E24] flex-1">
                    <div className="flex justify-center mb-4 mt-3">
                      <Image
                        src={item.imgsrc}
                        alt={
                          selectedLocale === "ar"
                            ? item.title_ar
                            : item.title_en
                        }
                        width={60}
                        height={60}
                      />
                    </div>
                    <p className="text-center text-white text-base font-bold mb-3">
                      {selectedLocale === "ar" ? item.title_ar : item.title_en}
                    </p>
                    <p className="text-center text-white text-sm font-medium px-4">
                      {selectedLocale === "ar" ? item.desc_ar : item.desc_en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {isIconVisible && (
            <div
              className={`cursor-pointer icon-wrapper fixed  transform -translate-y-1/2 
        ${
          selectedLocale === "ar"
            ? "top-[87%] left-[22%]"
            : "top-[87%] right-[22%]"
        } `}
              onClick={handleScrollToBottom}
            >
              <Image src={down} alt="Fixed Icon" width={60} height={60} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
const data = [
  {
    imgsrc: user,
    title_ar: "الاستشارات القانونية",
    desc_ar:
      "نقوم بتقديم الاستشارات القانونية والشرعية للعمـــــــــلاء في كافة الأنظمة",
    title_en: "Legal Advice",
    desc_en: "We provide legal and legal advice to clients in all systems",
  },
  {
    imgsrc: agree,
    title_ar: "التسويات الودية",
    desc_ar:
      "العمل على تسوية الخلافات التي تنشأ بين أصحاب الامتياز التجاري ومانحيه بالطرق..",
    title_en: "Amicable Settlements",
    desc_en:
      "Working on settling disputes that arise between franchise owners and grantors in amicable ways..",
  },
  {
    imgsrc: audit,
    title_ar: "صياغة ومراجعة العقود",
    desc_ar:
      "نقوم بالإعداد والصياغة القانونية للعقود بأنواعها، بما فيها عقود المقاولات والتوريد ..",
    title_en: "Contract Drafting and Review",
    desc_en:
      "We prepare and legally draft contracts of all kinds, including construction and supply contracts..",
  },
  {
    imgsrc: legal,
    title_ar: "محاسبة قانونية",
    desc_ar:
      "المحاسبة القانونية تخصصت بالكشف عن أي مخالفات قانونية متعلقة بالأنشطة والأعمال..",
    title_en: "Legal Accounting",
    desc_en:
      "Legal accounting specializes in detecting any legal violations related to activities and businesses..",
  },
  {
    imgsrc: scale,
    title_ar: "التحكيم",
    desc_ar:
      "يعتبر التحكيم من أكثر الوسائل تفضيلا لدى المستثمرين لتسوية المنازعات. ولذا يهدف المركز..",
    title_en: "Arbitration",
    desc_en:
      "Arbitration is one of the most preferred methods for investors to settle disputes. Therefore, the center aims..",
  },
  {
    imgsrc: approve,
    title_ar: "التراخيص",
    desc_ar:
      "القضايا (العمالية، الجنائية، التجارية، الإدارية، المرورية، قضايا التنفيذ) ,الترافع أمام كافة..",
    title_en: "Licensing",
    desc_en:
      "Cases (labor, criminal, commercial, administrative, traffic, enforcement cases) and representing clients in all..",
  },
  {
    imgsrc: build,
    title_ar: "تأسيس الشركات",
    desc_ar:
      "تقدم هذه الخدمة لمساعدة المنشآت الجديدة تجميع المستندات اللازمة والدعم الشامل..",
    title_en: "Company Formation",
    desc_en:
      "This service helps new establishments gather the necessary documents and comprehensive support..",
  },
  {
    imgsrc: ele,
    title_ar: "التوثيق",
    desc_ar:
      "إقرار بالوثائق (أي التوقيع بحضور شاهد أنك وقعت أو شاهدت شخصًا آخر يوقع شيئًا ما) ؛",
    title_en: "Notarization",
    desc_en:
      "Document acknowledgment (i.e., signing in the presence of a witness that you signed or witnessed someone else signing something);",
  },
  {
    imgsrc: sheep,
    title_ar: "التمثيل القضائي",
    desc_ar:
      "تمثيل العملاء في كافة أنواع القضايا بكل مراحل الدعوى في درجات التقاضي المختلفة..",
    title_en: "Litigation Representation",
    desc_en:
      "Representing clients in all types of cases at all stages of litigation in various courts..",
  },
  {
    imgsrc: vallet,
    title_ar: "تحصيل المبالغ",
    desc_ar: "متابعة مدفوعات الديون المستحقة على الأفراد أو الشركات أو البنوك",
    title_en: "Debt Collection",
    desc_en:
      "Following up on debt payments owed by individuals, companies, or banks",
  },
  {
    imgsrc: ana,
    title_ar: "الأدراج و أسواق المال",
    desc_ar:
      "أن تقوم الشركة ببيع أسهمها للجمهور العام. يسمح ذلك للشركة بتحصيل الأموال من..",
    title_en: "Listings and Capital Markets",
    desc_en:
      "The company sells its shares to the general public, allowing the company to raise funds from..",
  },
  {
    imgsrc: check,
    title_ar: "العلامات التجارية والملكية الفكرية",
    desc_ar:
      "هي الإبداعات التي تكون على شكل أسماء، كلمات ، إمضاءات، حروف، رموز، وأرقام،",
    title_en: "Trademarks and Intellectual Property",
    desc_en:
      "These are creations in the form of names, words, signatures, letters, symbols, and numbers,",
  },
  {
    imgsrc: depart,
    title_ar: "الاندماجات والاستحواذات",
    desc_ar:
      "يعني استحواذ الشركات، السيطرة المالية والإدارية لأحد الشركات على نشاط شركة..",
    title_en: "Mergers and Acquisitions",
    desc_en:
      "This means corporate acquisitions, financial and administrative control of one company over the activities of another company..",
  },
  {
    imgsrc: stucture,
    title_ar: "الشراكة بين القطاعين العام والخاص",
    desc_ar:
      "اتفاقية تعاون بين وكالة حكومية ومؤسسة خاصة؛ توفر هذه الشراكة إمكانية تبادل..",
    title_en: "Public-Private Partnership",
    desc_en:
      "A cooperation agreement between a government agency and a private institution; this partnership provides the possibility of exchanging..",
  },
  {
    imgsrc: elements,
    title_ar: "حوكمة الشركات",
    desc_ar:
      "من خلال ضبط القوانين والمعايير التي تحدد العلاقة بين إدارة الشركة من ناحية و الأطراف..",
    title_en: "Corporate Governance",
    desc_en:
      "By regulating the laws and standards that define the relationship between the company's management on the one hand and the parties..",
  },
  {
    imgsrc: group,
    title_ar: "حل منازعات الشركاء والشركات",
    desc_ar: "حـل المنــازعــات بالطرق الوديــة أو عن طريق التقاضي.",
    title_en: "Partner and Company Dispute Resolution",
    desc_en:
      "Resolving disputes through amicable methods or through litigation.",
  },
];
