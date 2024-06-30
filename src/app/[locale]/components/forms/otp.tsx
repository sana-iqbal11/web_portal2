"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useLoginWithOtp, useUser } from "../../../../../lib/auth";
import { getCookie, getCookies } from "cookies-next";
import { toast } from "react-toastify";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import { useLocale, useTranslations } from "next-intl";

export default function OtpForm() {
  const router = useRouter();
  const { data: user, isLoading } = useUser();
  const t = useTranslations("Index");
  const selectedLocale = useLocale();

  const cookies = new Cookies(null, { path: "/" });
  getCookies();
  getCookie("token");
  const token = getCookie("token");
  // setCookie('key', 'value');

  const [first, setFisrt] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [fifth, setFifth] = useState("");
  const [sixth, setSixth] = useState("");

  const handleSetFisrt = useCallback(
    (e: { target: { value: any } }) => {
      setFisrt(e.target.value);
    },
    [setFisrt]
  );

  const handleSetSecond = useCallback(
    (e: { target: { value: any } }) => {
      setSecond(e.target.value);
    },
    [setSecond]
  );

  const handleSetThird = useCallback(
    (e: { target: { value: any } }) => {
      setThird(e.target.value);
    },
    [setThird]
  );

  const handleSetFourth = useCallback(
    (e: { target: { value: any } }) => {
      setFourth(e.target.value);
    },
    [setFourth]
  );

  const handleSetFifth = useCallback(
    (e: { target: { value: any } }) => {
      setFifth(e.target.value);
    },
    [setFifth]
  );

  const handleSetSixth = useCallback(
    (e: { target: { value: any } }) => {
      setSixth(e.target.value);
    },
    [setSixth]
  );

  const [loading, setIsLoading] = useState(false);

  const { mutate: LoginWithOtp, isPending: isLogining } = useLoginWithOtp();

  useEffect(() => {
    if (!window.location.href.includes("?")) {
      router.push(`/${selectedLocale}/auth/signin`);
    }
  });

  useEffect(() => {
    if (user) {
      // setTimeout(() => {
      router.push(`/`);
      // }, 1000)
    }
  }, [user]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    LoginWithOtp(
      {
        phoneNumber: String(window.location.href.split("?").pop()),
        otp: first + second + third + fourth + fifth + sixth,
      },
      {
        onSuccess: (data) => {
          setIsLoading(false);
          if (data?.result?.status === false) {
            toast.error(data?.errors[0]);
          } else {
            toast.success(data?.result?.message);
            cookies.set("token", data.result.token);
          }
        },
        onError(error, variables, context) {
          setIsLoading(false);
          console.log({
            error,
            variables,
            context,
          });
        },
      }
    );
  };

  useEffect(() => {
    const inputs = document?.querySelectorAll<HTMLInputElement>("#otp > *[id]");

    function handleInput(event: Event, index: number) {
      const value = (event.target as HTMLInputElement).value;
      if (!/^\d*$/.test(value)) {
        // Show error message or handle invalid input
        // For example, you can show a toast message or set an error state
        toast.error("Please enter numeric value only");
        // Clear the input value
        (event.target as HTMLInputElement).value = "";
      } else if (value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", (event) => handleInput(event, i));

      inputs[i].addEventListener("keydown", function (event) {
        if (event.key === "Backspace") {
          inputs[i].value = "";
          if (i !== 0) inputs[i - 1].focus();
        } else {
          if (i === inputs.length - 1 && inputs[i].value !== "") {
            return true;
          } else if (event.keyCode > 47 && event.keyCode < 105) {
            inputs[i].value = event.key;
            if (i !== inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
          }
          setFisrt(inputs[0].value);
          setSecond(inputs[1].value);
          setThird(inputs[2].value);
          setFourth(inputs[3].value);
          setFifth(inputs[4].value);
          setSixth(inputs[5].value);
        }
      });
    }
  }, []);

  console.log(first + second + third + fourth + fifth + sixth);
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-x-3 ">
        <div
          id="otp"
          className="flex flex-row space-x-4 items-center justify-between mx-auto w-full max-w-[42rem] mt-8"
          style={{
            direction: selectedLocale === "ar" ? "ltr" : "ltr",
            textAlign: "start",
            justifyContent: "start",
          }}
        >
          <input
            autoComplete="one-time-code"
            className="w-full flex  flex-col ml-4 items-center justify-center text-center px-2 lg:py-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-red-600 h-16 "
            maxLength={1}
            type="number"
            id="first"
            onChange={handleSetFisrt}
          />
          <input
            className="w-full flex space-x-4 flex-col items-center justify-center text-center px-2 lg:py-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-red-600 h-16"
            type="number"
            id="second"
            maxLength={1}
            onChange={handleSetSecond}
          />
          <input
            className="w-full flex flex-col items-center justify-center text-center px-2 lg:py-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-red-600 h-16"
            type="number"
            id="third"
            maxLength={1}
            onChange={handleSetThird}
          />
          <input
            className="w-full flex flex-col items-center justify-center text-center px-2 lg:py-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-red-600 h-16"
            type="number"
            id="fourth"
            maxLength={1}
            onChange={handleSetFourth}
          />
          <input
            className="w-full flex flex-col items-center justify-center text-center px-2 lg:py-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-red-600 h-16"
            type="number"
            id="fifth"
            maxLength={1}
            onChange={handleSetFifth}
          />
          <input
            className="w-full flex flex-col items-center justify-center text-center px-2 lg:py-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-red-600 h-16"
            type="number"
            id="sixth"
            maxLength={1}
            onChange={handleSetSixth}
          />
        </div>
        <p
          className="checkbox-signin text-[#DDB669] lg:text-base md:text-sm  mt-10 mb-6"
          style={{
            direction: selectedLocale === "ar" ? "rtl" : "ltr",
            textAlign: "start",
            justifyContent: "start",
          }}
        >
          <span className="text-[#173039]">{t("you_did_not_send")}</span>
          {t("you_can_resend")}
        </p>
        {loading ? (
          <div className=" mt-20">
            <Spinner />
          </div>
        ) : (
          <button
            type="submit"
            className="form-control  btn checkbox-signin text-xl px-3.5  bg-[#DDB669] border-[#DDB669]
           rounded-lg text-white mt-20 hover:bg-[#DDB669] hover:outline-none border-0 active:bg-[#DDB669] focus:bg-[#DDB669] "
          >
            {t("to_be_sure")}
          </button>
        )}
      </div>
    </form>
  );
}
