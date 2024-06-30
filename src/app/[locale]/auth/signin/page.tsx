import SignInForm from "@/app/[locale]/components/forms/signin";
import Redirect from "@/app/[locale]/components/redirect";
import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { cookies } from "next/headers";
import ProvidesTheQueryClient from "@/api/ProvidesTheQueryClient";

export default function SigninPage() {
  const t = useTranslations("Index");
  const selectedLocale = useLocale();

  return (
    <div
      className="lg:space-y-3 md:space-y-0"
      style={{ direction: selectedLocale === "ar" ? "rtl" : "ltr" }}
    >
      <div
        className="signin-form  font-bold text-[25px] text-[#173039]"
        style={{
          direction: selectedLocale === "ar" ? "rtl" : "ltr",
          textAlign: "start",
          justifyContent: "start",
        }}
      >
        {t("sign_in")}
      </div>
      <ProvidesTheQueryClient>
        <SignInForm />
      </ProvidesTheQueryClient>
      <Redirect
        url={`/${selectedLocale}/auth/signup`}
        redirectText={t("you_dont_have_account")}
        buttonText={t("create_an_account")}
      />
    </div>
  );
}
