import ProvidesTheQueryClient from "@/api/ProvidesTheQueryClient";
import SignUpForm from "@/app/[locale]/components/forms/signup";
import Redirect from "@/app/[locale]/components/redirect";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import logo from "../../../../public/registarion.png"
import Schedualform from "../components/forms/Schedualform";
export default function SigninPage() {
  const t = useTranslations("demo");
  const selectedLocale = useLocale();
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-64 " >
        <img src={logo.src} alt="registration" className="pt-40 md:block hidden" />
    <div className=" lg:space-y-3 md:space-y-0 pt-12">
      <div className="signin-form mb-3 font-bold text-[25px] text-[#173039]"
       style={{ direction: selectedLocale === 'ar' ? 'rtl' : 'ltr', textAlign: 'start', justifyContent: 'start' }}
      >
       {t('Schedule')}
      </div>
      <p className="text-[#475467] text-sm checkbox-signin" style={{ direction: selectedLocale === 'ar' ? 'rtl' : 'ltr'}}>{t('legal_needs')}</p>
      <ProvidesTheQueryClient>
        <Schedualform />
      </ProvidesTheQueryClient>
      {/* <Redirect
        url={`/${selectedLocale}/auth/signin`}
        // redirectText={t("you_have_an_account")}
        buttonText={t("login")}
      /> */}
    </div>

    </div>
  );
}
