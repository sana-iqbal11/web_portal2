import ProvidesTheQueryClient from "@/api/ProvidesTheQueryClient";
import SignUpForm from "@/app/[locale]/components/forms/signup";
import Redirect from "@/app/[locale]/components/redirect";
import { useLocale, useTranslations } from "next-intl";

export default function SigninPage() {
  const t = useTranslations("Index");
  const selectedLocale = useLocale();
  return (
    <div className=" lg:space-y-3 md:space-y-0 ">
      <div className="signin-form mb-3 font-bold text-[25px] text-[#173039]"
       style={{ direction: selectedLocale === 'ar' ? 'rtl' : 'ltr', textAlign: 'start', justifyContent: 'start' }}
      >
        {t("create_an_account_for_shwra")}
      </div>
      <ProvidesTheQueryClient>
        <SignUpForm />
      </ProvidesTheQueryClient>
      <Redirect
        url={`/${selectedLocale}/auth/signin`}
        redirectText={t("you_have_an_account")}
        buttonText={t("login")}
      />
    </div>
  );
}
