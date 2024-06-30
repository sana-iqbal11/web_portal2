"use client";

import { useUser } from "../../../lib/auth";
import { useRouter } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import profilePic from "../../../public/IMAGE.png";
import { useLocale, useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Index");
  const selectedLocale = useLocale();
  const { data: user, isLoading, isRefetching } = useUser();
  const SocialIcon = `
  width: 30px;
  height: 30px;
  margin:10px 0 10px 10px;
  color: var(--bussiness-white-color);
  &:hover {
    color: var(--secondary-color);
  }
`;
  const router = useRouter();
  const [open, setOpen] = useState(0);
  const [openAlert, setOpenAlert] = useState(true);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  if (isLoading || isRefetching) {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "95vh",
          }}
          role="status"
        >
          <Image
            src={profilePic}
            alt="Profile Picture"
            width={195}
            height={182}
          />
          <div>
            <p
              className="sr-only"
              style={{ color: "#DDB669", fontSize: "1.6rem" }}
            >
              Loading...
            </p>
          </div>
        </div>
      </>
    );
  }
  if (!user) {
    return router.push(`/${selectedLocale}/SplashScreen`);
  }
  if (user) {
    return router.push(`/${selectedLocale}/pages/services`);
  }

  return <h1>Hello, shwra</h1>;
}
