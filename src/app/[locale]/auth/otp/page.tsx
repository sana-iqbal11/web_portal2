import ProvidesTheQueryClient from "../../../../api/ProvidesTheQueryClient";
import OtpForm from "@/app/[locale]/components/forms/otp";
import { useLocale, useTranslations } from "next-intl";

export default function OtpPage() {
  const t = useTranslations("Index");
  const selectedLocale = useLocale();

  return (
    <div className=" lg:space-y-3 md:space-y-0 ">
      <div className="signin-form mb-3  font-bold text-[25px] text-[#173039]"
      style={{ direction: selectedLocale === 'ar' ? 'rtl' : 'ltr', textAlign: 'start', justifyContent: 'start' }}
      >
        {" "}
        {t("verification_code")}
      </div>
      <div className="card-subtitle text-font text-[#87959A] text-end text-sm">
        {" "}
        {t("please_enter_six_digit")}
      </div>
      <ProvidesTheQueryClient>
        <OtpForm />
      </ProvidesTheQueryClient>
    </div>
  );
}
