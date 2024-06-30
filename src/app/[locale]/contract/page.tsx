"use client";

import { useRouter } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";
import { useUser } from "../../../../lib/auth";
import ContractPage from "./ContractPage";

export default function Page() {
  const { data: user, isLoading } = useUser();
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

  return <ContractPage />;
}
