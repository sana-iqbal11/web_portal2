"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { FormEvent, useEffect, useState } from "react";
import Spinner from "../atoms/Spinner";
import { toast } from "react-toastify";
import { useRequestOtp, useUser } from "../../../../../lib/auth";
import { useLocale, useTranslations } from "next-intl";

export default function SignInForm() {
  const t = useTranslations("Index");
  const router = useRouter();
  const selectedLocale = useLocale();

  const { data: user, isLoading } = useUser();
  const [loading, setIsLoading] = useState(false);

  const { mutate: requestOtp, isPending: isLogining } = useRequestOtp();

  const [telephone, setTelephone] = useState("");
  const isValid = telephone.length === 9;

  console.log({ telephone });
  const handlePhoneNumbereChange = (e: any) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setTelephone(inputValue);
  };

  useEffect(() => {
    if (user) {
      // setTimeout(() => {
      router.push(`/`);
      // }, 1000)
    }
  }, [user]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when form is submitted
    requestOtp(
      {
        countryCode: "966",
        phone: telephone,
      },
      {
        onSuccess: (data) => {
          setIsLoading(false); // Set loading state to false upon successful request
          if (data?.result === "otp sent successfully") {
            toast.success(data?.result);
            router.push(`/${selectedLocale}/auth/otp?${telephone}`);
          } else {
            toast.error(data?.errors[0]);
          }
        },
        onError: (error: any, variables: any, context: any) => {
          setIsLoading(false); // Set loading state to false upon error
          console.log({
            error,
            variables,
            context,
          });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" mt-5">
        <label
          className="relative text-gray-400 focus-within:text-gray-600 block"
          style={{
            direction: selectedLocale === "ar" ? "rtl" : "ltr",
            textAlign: "start",
            justifyContent: "start",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
            width="36"
            height="12"
            viewBox="0 0 36 12"
            fill="none"
          >
            <path
              d="M4.0755 10.68V7.56H1.0675V6.408H4.0755V3.32H5.2275V6.408H8.2675V7.56H5.2275V10.68H4.0755ZM13.0926 11.16C12.7726 11.16 12.4313 11.144 12.0686 11.112C11.706 11.08 11.3593 11.0427 11.0286 11C10.698 10.9573 10.4153 10.9147 10.1806 10.872L10.3086 9.832C10.522 9.85333 10.7833 9.88 11.0926 9.912C11.402 9.944 11.7326 9.97067 12.0846 9.992C12.4366 10.0133 12.7726 10.024 13.0926 10.024C14.042 10.024 14.7513 9.73067 15.2206 9.144C15.7006 8.54667 15.946 7.63467 15.9566 6.408C15.69 6.504 15.3966 6.6 15.0766 6.696C14.7566 6.792 14.4366 6.872 14.1166 6.936C13.8073 6.98933 13.5193 7.016 13.2526 7.016C12.1433 7.016 11.29 6.75467 10.6926 6.232C10.0953 5.70933 9.79663 4.89333 9.79663 3.784C9.79663 3.05867 9.94596 2.43467 10.2446 1.912C10.5433 1.38933 10.9646 0.989333 11.5086 0.712C12.0633 0.424 12.714 0.28 13.4606 0.28C14.3566 0.28 15.082 0.504 15.6366 0.952C16.202 1.38933 16.618 2.01867 16.8846 2.84C17.1513 3.66133 17.2846 4.632 17.2846 5.752C17.2846 6.776 17.1886 7.63467 16.9966 8.328C16.8046 9.02133 16.5273 9.576 16.1646 9.992C15.8126 10.408 15.3753 10.7067 14.8526 10.888C14.3406 11.0693 13.754 11.16 13.0926 11.16ZM13.3646 5.88C13.6313 5.88 13.9246 5.848 14.2446 5.784C14.5646 5.72 14.8793 5.64533 15.1886 5.56C15.498 5.464 15.7593 5.37867 15.9726 5.304C15.962 4.54667 15.8713 3.88 15.7006 3.304C15.5406 2.71733 15.2793 2.25867 14.9166 1.928C14.554 1.58667 14.0686 1.416 13.4606 1.416C12.7353 1.416 12.1593 1.62933 11.7326 2.056C11.3166 2.48267 11.1086 3.05867 11.1086 3.784C11.1086 4.50933 11.3006 5.04267 11.6846 5.384C12.0686 5.71467 12.6286 5.88 13.3646 5.88ZM22.6698 11.16C21.3471 11.16 20.3818 10.6747 19.7738 9.704C19.1764 8.72267 18.8778 7.37867 18.8778 5.672C18.8778 4.712 18.9738 3.89067 19.1658 3.208C19.3578 2.52533 19.6351 1.97067 19.9978 1.544C20.3604 1.10667 20.7978 0.786666 21.3098 0.584C21.8218 0.381333 22.3924 0.28 23.0218 0.28C23.3524 0.28 23.6991 0.296 24.0618 0.327999C24.4244 0.359999 24.7711 0.397333 25.1018 0.44C25.4324 0.482666 25.7098 0.525333 25.9338 0.568L25.8058 1.592C25.6031 1.57067 25.3418 1.54933 25.0218 1.528C24.7124 1.496 24.3818 1.46933 24.0298 1.448C23.6884 1.42667 23.3524 1.416 23.0218 1.416C22.1151 1.416 21.4218 1.72533 20.9418 2.344C20.4618 2.96267 20.2164 3.848 20.2057 5C20.3018 4.97867 20.4404 4.936 20.6218 4.872C20.8138 4.808 21.0324 4.73867 21.2778 4.664C21.5338 4.58933 21.7951 4.52533 22.0618 4.472C22.3284 4.41867 22.5844 4.392 22.8298 4.392C23.9924 4.392 24.8724 4.65867 25.4698 5.192C26.0671 5.72533 26.3658 6.552 26.3658 7.672C26.3658 8.41867 26.2218 9.05333 25.9338 9.576C25.6458 10.0987 25.2244 10.4933 24.6698 10.76C24.1258 11.0267 23.4591 11.16 22.6698 11.16ZM22.6698 10.024C23.4378 10.024 24.0244 9.82133 24.4298 9.416C24.8458 9.01067 25.0538 8.42933 25.0538 7.672C25.0538 6.94667 24.8458 6.408 24.4298 6.056C24.0244 5.704 23.4591 5.528 22.7338 5.528C22.4458 5.528 22.1418 5.56 21.8218 5.624C21.5018 5.688 21.1978 5.768 20.9098 5.864C20.6218 5.94933 20.3818 6.03467 20.1898 6.12C20.2004 6.856 20.2857 7.52267 20.4457 8.12C20.6058 8.70667 20.8671 9.17067 21.2298 9.512C21.5924 9.85333 22.0724 10.024 22.6698 10.024ZM31.6229 11.16C30.3002 11.16 29.3349 10.6747 28.7269 9.704C28.1295 8.72267 27.8309 7.37867 27.8309 5.672C27.8309 4.712 27.9269 3.89067 28.1189 3.208C28.3109 2.52533 28.5882 1.97067 28.9509 1.544C29.3135 1.10667 29.7509 0.786666 30.2629 0.584C30.7749 0.381333 31.3455 0.28 31.9749 0.28C32.3055 0.28 32.6522 0.296 33.0149 0.327999C33.3775 0.359999 33.7242 0.397333 34.0549 0.44C34.3855 0.482666 34.6629 0.525333 34.8869 0.568L34.7589 1.592C34.5562 1.57067 34.2949 1.54933 33.9749 1.528C33.6655 1.496 33.3349 1.46933 32.9829 1.448C32.6415 1.42667 32.3055 1.416 31.9749 1.416C31.0682 1.416 30.3749 1.72533 29.8949 2.344C29.4149 2.96267 29.1695 3.848 29.1589 5C29.2549 4.97867 29.3935 4.936 29.5749 4.872C29.7669 4.808 29.9855 4.73867 30.2309 4.664C30.4869 4.58933 30.7482 4.52533 31.0149 4.472C31.2815 4.41867 31.5375 4.392 31.7829 4.392C32.9455 4.392 33.8255 4.65867 34.4229 5.192C35.0202 5.72533 35.3189 6.552 35.3189 7.672C35.3189 8.41867 35.1749 9.05333 34.8869 9.576C34.5989 10.0987 34.1775 10.4933 33.6229 10.76C33.0789 11.0267 32.4122 11.16 31.6229 11.16ZM31.6229 10.024C32.3909 10.024 32.9775 9.82133 33.3829 9.416C33.7989 9.01067 34.0069 8.42933 34.0069 7.672C34.0069 6.94667 33.7989 6.408 33.3829 6.056C32.9775 5.704 32.4122 5.528 31.6869 5.528C31.3989 5.528 31.0949 5.56 30.7749 5.624C30.4549 5.688 30.1509 5.768 29.8629 5.864C29.5749 5.94933 29.3349 6.03467 29.1429 6.12C29.1535 6.856 29.2389 7.52267 29.3989 8.12C29.5589 8.70667 29.8202 9.17067 30.1829 9.512C30.5455 9.85333 31.0255 10.024 31.6229 10.024Z"
              fill="#87959A"
            />
          </svg>
          <input
            type="tel"
            name="tel"
            id="tel"
            maxLength={9}
            value={telephone}
            onChange={handlePhoneNumbereChange}
            required
            placeholder={t("phonenumber")}
            className={`input input-bordered w-full max-w-x text-end placeholder-orange-200 px-3.5 py-[17.8px] max-w-x border ${
              !isValid ? "border-red-500" : "border-[#87959A]"
            } rounded-lg placeholder:text-base focus:border-[#87959A] focus:outline-none`}
          />
        </label>
        {!isValid ? (
          <p
            className="text-red-500 text-sm mt-1"
            style={{
              direction: selectedLocale === "ar" ? "rtl" : "ltr",
              textAlign: "start",
              justifyContent: "start",
            }}
          >
            {t("please_enter")}
          </p>
        ) : (
          <p
            className="text-[#DDB669] text-sm mt-1"
            style={{
              direction: selectedLocale === "ar" ? "rtl" : "ltr",
              textAlign: "start",
              justifyContent: "start",
            }}
          >
            {t("valid_phone_number")}
          </p>
        )}
        <p
          className="checkbox-signin text-[#DDB669] text-sm  mt-4 xl:mb-9 lg:mb-6"
          style={{
            direction: selectedLocale === "ar" ? "rtl" : "ltr",
            textAlign: "start",
            justifyContent: "start",
          }}
        >
          {t("login_using_Phone")}
        </p>
      </div>

      {loading ? (
        <div className=" mt-36">
          <Spinner />
        </div>
      ) : (
        <div className="form-control border-0 mt-32">
          <button
            type="submit"
            className="md:mt-5 btn checkbox-signin text-lg px-3.5 bg-[#DDB669] border border-[#DDB669] h-9
          rounded-md text-white hover:bg-[#DDB669] hover:outline-none active:bg-[#DDB669] focus:bg-[#DDB669]"
          >
            {t("sign_in")}
          </button>
        </div>
      )}
    </form>
  );
}
