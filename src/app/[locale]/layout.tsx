import { cookies } from "next/headers";

import "react-toastify/dist/ReactToastify.css";

import { COOKIE_NAME_JWT_TOKEN } from "./constants";
import secureLocalStorage from "react-secure-storage";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "../../styles/MobileView.css";
import "../../styles/global.css";
import "../../styles/home-page.css";
import "../../styles/feature.css";
import "./globals.css";
// @ts-ignore
import { getUserByJwt } from "@/api";
import ProvidesTheQueryClient from "@/api/ProvidesTheQueryClient";
import ToastProvider from "@/providers/ToastProvider";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Boards",
  description: "Collaborate with your team",
};

async function getUser() {
  const cookieStore = cookies();
  const jwtToken = cookieStore.get(COOKIE_NAME_JWT_TOKEN);
  if (jwtToken) {
    try {
      const user = await getUserByJwt(jwtToken.value);
      return user;
    } catch (e) {
      return null;
    }
  }
  return null;
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  // const user = await getUser();
  const accessToken = secureLocalStorage.getItem("access_token");

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error("Failed to load messages:", error);
    notFound();
  }
  return (
    <html dir="ltr" lang={locale} data-theme="lofi">
      <body>
        <div className="bg-scroll bg-[url('./../../../public/back.png')] ">
          <ProvidesTheQueryClient>
            {/* <Navbar /> */}
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              {/* <MenuNax/> */}
              <NextIntlClientProvider locale={locale} messages={messages}>
                <main>{children}</main>
              </NextIntlClientProvider>
            </AppRouterCacheProvider>
          </ProvidesTheQueryClient>
          <ToastProvider />
          {/* <BootstrapClient /> */}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
