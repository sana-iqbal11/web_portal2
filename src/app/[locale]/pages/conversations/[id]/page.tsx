"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import chatIcon from "/public/chat-icon.svg";
import chatShawraLogo from "/public/chat/chat-shwra-logo.svg";
import tickIcon from "/public/chat/tick.svg";
import calenderIcon from "/public/chat/calender-icon.svg";
import personalIcon from "/public/chat/me-user.svg";
import shwraUser from "/public/chat/shwra-user.svg";
import { getChat, postChat, useUser } from "../../../../../../lib/auth";
import Spinner from "@/app/[locale]/components/atoms/Spinner";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { IMAGE_URL } from "../../../../../../lib/backend";
import { FaFilePdf } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa";
import UploadPdf from "@/app/[locale]/components/atoms/uploadfies/UploadPdf";

function Conversations({ params }: { params: { loacle: string; id: string } }) {
  const t = useTranslations("Chat");
  const queryClient = useQueryClient();
  const [message, setMessage] = useState("");
  const [uploadFileArray, setUploadFileArray] = useState([]);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [sendFile, setSendFile] = useState(false);
  const { data: user } = useUser();
  const { data, error, isLoading, isError } = getChat(
    params.id,
    user?.result.id!
  );

  // if (data) console.log(data.result);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [data, isLoading]);

  const { mutate, isPending, error: postChatError } = postChat();

  if (isLoading || !data) {
    return (
      <div className="loading-container">
        <Spinner />
      </div>
    );
  }

  function handleSubmit() {
    mutate(
      { id: params.id, message, MarkCompleted: false },
      {
        onError: (error) => console.log("message post error", error),
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ["Chat-messages"] });
          setMessage("");
        },
      }
    );
  }

  return (
    <div className="flex flex-col gap-6 items-center custom-font bg-white rounded-xl max-w-6xl mx-auto p-5 md:p-0">
      {data && (
        <Link
          href={`${params.id}/lawyer`}
          className="font-semibold text-lg w-full p-5 border-b-2 flex items-center gap-3"
        >
          <Image src={chatShawraLogo} alt="logo" width={35} />
          {data?.result?.lawyer?.firstName +
            " " +
            data?.result?.lawyer?.lastName ?? "Lawer Name"}
        </Link>
      )}

      <LawerCard data={data?.result} locale={params.loacle} />
      {data && (
        <div
          ref={messagesContainerRef}
          className="flex flex-col gap-10 w-full md:px-16 py-6 max-h-[500px] overflow-auto hide-scroll"
        >
          {data?.result?.masterRequestApprovedChat?.map(
            (message: any, i: number) => {
              const isPersonal = message.createdBy === user?.result.id;
              return isPersonal ? (
                <PersonalMessage key={i} message={message} />
              ) : (
                <LawerMessage key={i} message={message} />
              );
            }
          )}
          <div />
        </div>
      )}
      <CompleteMessage status={data?.result.status} />
      {data?.result.status !== "Completed" && (
        <div className="w-full max-w-5xl mx-auto flex gap-4 py-2 flex-col">
          <div
            className={`flex gap-4 flex-1 ${
              sendFile ? "" : "items-center"
            } w-full`}
          >
            {!sendFile ? (
              <input
                value={message}
                disabled={isPending || isLoading}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type message"
                className="flex-1 outline-gray-400 p-4 bg-gray-100 rounded-xl"
              />
            ) : (
              <div className="flex-1">
                <UploadPdf setUploadFileArray={setUploadFileArray} />
              </div>
            )}
            <div className={`flex gap-2 ${sendFile ? "pt-[5.2rem]" : ""}`}>
              <button
                onClick={handleSubmit}
                disabled={isPending}
                className="text-white font-semibold rounded-xl h-12 min-w-[50px] px-2 grid place-content-center bg-[#DDB669] opacity-90 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send
              </button>
              <button
                onClick={() => setSendFile(!sendFile)}
                disabled={isPending}
                className="text-white font-semibold rounded-xl h-12 min-w-[50px] px-2 grid place-content-center bg-[#DDB669] opacity-90 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FaUpload />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Conversations;

const LawerCard = ({ data, locale }: { data: any; locale: string }) => {
  const t = useTranslations("Chat");
  return (
    <div className="md:p-4 p-3 rounded-xl border border-gray-300 flex flex-col md:flex-row gap-4 w-full max-w-5xl mx-auto">
      <div>
        <Image src={chatIcon} alt="chat-icon" width={75} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center pt-5">
          <h2 className="text-xl font-bold text-[#DDB669]">
            {locale === "en"
              ? data?.masterCategory?.name
              : data?.masterCategory?.arabicName}
          </h2>
          <span className="border-2 border-[#DDB669] text-[#DDB669] rounded-full p-2 text-sm flex gap-2 items-center px-6">
            <Image src={tickIcon} alt="tick" />
            {t(data?.status)}
          </span>
        </div>
        <div className="flex flex-col divide-y-2 pt-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-3">
            <span className="font-bold">{t("Lawyer specialty")}</span>
            <span className="font-medium">{t("Labor Relations")}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between py-3">
            <span className="font-bold">{t("Reference Number")}</span>
            <span className="font-medium">{data?.referenceNumber}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between py-3">
            <span className="font-bold">{t("Appointment Date")}</span>
            <div className="flex items-center gap-3">
              <Image src={calenderIcon} alt="tick" />
              <span className="font-medium">19-07-2023 11:30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getFileDetail = (message: any) => {
  if (!message?.files || message?.files?.length === 0) return null;
  if (
    [".pdf", ".docx", ".txt", ".zip", ".rar"].some(
      (el) => message?.files[0].toLowerCase().indexOf(el) !== -1
    )
  ) {
    return "document";
  } else if (
    [".jpg", ".jpeg", ".svg", ".png"].some(
      (el) => message?.files[0].toLowerCase().indexOf(el) !== -1
    )
  ) {
    return "image";
  } else {
    return null;
  }
};

const PersonalMessage = ({ message }: { message: any }) => {
  const fileType = getFileDetail(message);

  return (
    <div className="flex gap-2 self-end">
      <div className="p-3 flex flex-col rounded-xl bg-[#EAECF2] gap-2 max-w-lg md:w-max px-6">
        {message?.message ?? ""}
        {fileType === "image" && (
          <img
            alt="image"
            className="max-h-96 object-contain"
            src={IMAGE_URL + message?.files[0]}
          />
        )}

        {fileType === "document" && (
          <div className="flex items-center gap-2">
            <a href={`${IMAGE_URL + message?.files[0]}`}>{message?.files[0]}</a>
            <FaFilePdf className="text-2xl text-[#DDB669]" />
          </div>
        )}
      </div>
      <Image src={personalIcon} alt="icon" />
    </div>
  );
};
const LawerMessage = ({ message }: { message: any }) => {
  const fileType = getFileDetail(message);

  return (
    <div className="p-3 rounded-xl bg-[#F4F2EC] flex flex-col gap-2 max-w-2xl md:w-max md:px-6 px-2">
      <div className="flex items-start gap-2">
        <Image src={shwraUser} alt="icon" />
        {message?.message ?? ""}
      </div>
      {fileType === "image" && (
        <img
          alt="image"
          className="max-h-96 object-contain"
          src={IMAGE_URL + message?.files[0]}
        />
      )}

      {fileType === "document" && (
        <div className="flex items-center gap-2">
          <a href={`${IMAGE_URL + message?.files[0]}`}>{message?.files[0]}</a>
          <FaFilePdf className="text-2xl text-[#DDB669]" />
        </div>
      )}
    </div>
  );
};

const CompleteMessage = ({ status }: { status: string }) => {
  const t = useTranslations("Chat");
  return status === "Completed" ? (
    <div className="text-[#DDB669] font-bold">
      {t(
        "You cannot send any more messages because the consultation has been completed"
      )}
    </div>
  ) : null;
};
