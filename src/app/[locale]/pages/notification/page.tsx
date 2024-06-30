"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import chatIcon from "/public/chat-icon.svg";
import Link from "next/link";
import errorIcon from "/public/notifications/error.svg";
import greenIcon from "/public/notifications/green.svg";
import blueIcon from "/public/notifications/blue.svg";
import waitIcon from "/public/notifications/wait.svg";
import { getNotifications } from "../../../../../lib/auth";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "@/app/[locale]/components/atoms/Spinner";

interface Notification {
  date: String;
  isRead: Boolean;
  message: String;
  messageType: String;
  time: String;
}

function Notifications() {
  const t = useTranslations("Notifications");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = getNotifications(page, 10);
  const [dataToShow, setdataToShow] = useState<any[]>([]);

  const fetchMoreData = () => {
    setPage((p) => p + 1);
  };

  useEffect(() => {
    if (data) {
      setdataToShow((p) => [...p, ...data.result.data]);
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
    <div className="flex flex-col gap-6 items-center custom-font bg-white p-6 w-full max-w-6xl mx-auto">
      <h2 className="font-semibold text-lg">{t("Notifications")}</h2>
      {dataToShow.length > 0 && (
        <div>
          <InfiniteScroll
            hasMore={dataToShow.length < data?.result?.totalCount}
            next={fetchMoreData}
            dataLength={dataToShow.length}
            loader={
              <div className="flex justify-center items-center p-3 pb-20">
                <Spinner />
              </div>
            }
            className="flex flex-col gap-2 w-full max-w-5xl lg:min-w-[64rem] max-h-[500px] overflow-auto hide-scroll"
          >
            {dataToShow.map((el: Notification, i: number) => (
              <NotificationItem key={i} icon={greenIcon} notification={el} />
            ))}
          </InfiniteScroll>
        </div>
      )}
      <div className="flex justify-center items-center">
        {isLoading && dataToShow.length > 0 && <Spinner />}
      </div>
    </div>
  );
}

export default Notifications;

const NotificationItem = ({
  icon,
  notification,
}: {
  icon: string;
  notification: Notification;
}) => {
  const t = useTranslations("Notifications");
  const locale = useLocale();
  return (
    <div className="p-6 rounded-md bg-[#FAFAFA] flex flex-col gap-3 w-full">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="">
            <Image src={icon} alt="chat-icon" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{"تم إلغاء الموعد"}</span>
            <span className="text-gray-500 text-sm" dir="ltr">
              {notification.date} | {notification.time}
            </span>
          </div>
        </div>
        {!notification.isRead && (
          <span className="text-xs bg-[#DDB669] text-white p-2 rounded-lg h-max">
            New
          </span>
        )}
      </div>
      <p className="ps-2 text-gray-500">{notification.message}</p>
    </div>
  );
};
