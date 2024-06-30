"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import chatIcon from "/public/chat-icon.svg";
import Link from "next/link";
import { getChatList } from "../../../../../lib/auth";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "@/app/[locale]/components/atoms/Spinner";

interface Chat {
  createdDate: String;
  isActive: Boolean;
  lawyerName: String;
  masterCategory: String;
  masterCategoryLanguageWise: String;
  masterRequestApprovedId: String;
  profileImageUrl: String;
  referenceNumber: String;
  type: String;
  unReadMsgCount: Number;
}

function Conversations({ params }: { params: { locale: string } }) {
  const t = useTranslations("Chat");
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isError } = getChatList(page, 10);

  const [dataToShow, setdataToShow] = useState<any[]>([]);

  const fetchMoreData = () => {
    setPage((p) => p + 1);
  };

  // if (data) console.log(data);

  useEffect(() => {
    if (data) {
      if (
        !dataToShow.some(
          (chat: Chat) =>
            chat.referenceNumber === data.result.data[0].referenceNumber
        )
      ) {
        setdataToShow((p) => [...p, ...data.result.data]);
      }
    }
  }, [data, isLoading]);

  if (isLoading && dataToShow.length === 0) {
    return (
      <div className="loading-container">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 custom-font p-5 md:p-0 max-w-5xl mx-auto">
      <h2 className="font-semibold text-lg text-center">
        {t("Previous Converstaion")}
      </h2>
      <InfiniteScroll
        hasMore={dataToShow.length < data?.result?.totalCount}
        next={fetchMoreData}
        dataLength={dataToShow.length}
        loader={
          <div className="flex justify-center items-center p-3">
            <Spinner />
          </div>
        }
        className="flex flex-col gap-2 w-full max-w-5xl max-h-[500px] overflow-auto hide-scroll"
      >
        {dataToShow.map((el: Chat, i: number) => (
          <ChatItem key={i} chat={el} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Conversations;

const ChatItem = ({ chat }: { chat: Chat }) => {
  const t = useTranslations("Chat");
  const locale = useLocale();
  return (
    <Link
      href={
        "/" + locale + "/pages/conversations/" + chat.masterRequestApprovedId
      }
      className="p-4 rounded-md border-2 border-[#EBDCBD] bg-[#FCFBFB] flex flex-col sm:flex-row justify-between w-full "
    >
      <div className="flex gap-2 items-center">
        <div className="bg-[#f1e1ba] p-2 rounded-full aspect-square">
          <Image src={chatIcon} alt="chat-icon" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">
            {locale === "en"
              ? chat.masterCategory
              : chat.masterCategoryLanguageWise}
          </span>
          <span className="text-gray-500 text-sm">
            {chat.isActive ? t("In Progress") : t("Completed")}
          </span>
        </div>
      </div>
      <span className="text-sm self-end sm:self-auto">
        {chat.createdDate.substring(0, 10)}
      </span>
    </Link>
  );
};
