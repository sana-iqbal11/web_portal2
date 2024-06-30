import Image from "next/image";
import profilePic from "../../../../public/logo.png";
import paymentPic from "../../../../public/paymentCards.png";
import "../globals.css";
import { ReactNode } from "react";
import { useLocale } from "next-intl";

interface RootLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: Readonly<RootLayoutProps>) {
  const selectedLocale = useLocale();

  return (
    <div
      className="h-screen md:justify-center items-center md:flex grid max-w-7xl mx-auto px-10 "
      style={{ direction: selectedLocale === "ar" ? "ltr" : "rtl" }}
    >
      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-48 md:gap-20 sm:gap-12">
        <div
          className="hidden md:flex  flex-col "
          style={{ direction: selectedLocale === "ar" ? "ltr" : "rtl" }}
        >
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="w-full lg:h-full md:h-96"
          />
          <div className="object-contain">
            <Image
              src={paymentPic}
              alt="Payment Picture"
              className="lg:ml-11 md:ml-9"
            />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default AuthLayout;
