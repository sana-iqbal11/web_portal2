"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "@mui/material";
import ProgressCheckbox from "../components/ProgressCheckBox";
import left from "../../../../public/left.png";
import right from "../../../../public/icon.png";
import Dropdown from "./Dropdown";
import Link from "next/link";
function FinalMessage() {
  const t = useTranslations("demo");
  const selectedLocale = useLocale();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const openModal = () => {
    setSelectedDate(selectedDate || new Date());
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="absolute left-4 top-4">
        <img src="/Shwra presentation.png" alt="Logo" />
      </div>
      <div className="bg-white shadow-xl rounded-xl">
        <div className="p-8">
          <ProgressCheckbox steps={4} />
          <div className="border-t my-3"></div>
          <div className="flex items-center justify-center">
            <div className="overflow-hidden min-w-[350px] shadow-xl rounded-2xl  flex flex-col justify-center">
              {selectedDate && typeof selectedDate !== "undefined" && (
                <div
                  className="flex gap-12 justify-center text-center mt-2 bg-[#EAECF0] p-3"
                  onClick={openModal}
                >
                  <img src={left.src} className="object-contain" />
                  <p className="text-[#475467]">
                    {" "}
                    {selectedDate.toLocaleDateString()}
                  </p>
                  <img src={right.src} className="object-contain" />
                </div>
              )}

              <Modal
                open={modalIsOpen}
                onClose={closeModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                className="flex items-center justify-center"
              >
                <div className="bg-[#fff9eb] p-4 rounded-xl outline-none flex items-center justify-center gap-5 flex-col">
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    inline // Render calendar directly without input field
                    calendarClassName="custom-calendar" // Add custom class to calendar
                    dayClassName={(date) =>
                      date.getDate() ===
                        (selectedDate ? selectedDate.getDate() : 0) &&
                      date.getMonth() ===
                        (selectedDate ? selectedDate.getMonth() : 0) &&
                      date.getFullYear() ===
                        (selectedDate ? selectedDate.getFullYear() : 0)
                        ? "selected-date"
                        : ""
                    }
                  />
                  <div className="flex gap-4 w-full">
                    <button
                      type="submit"
                      className="bg-[#D49E24] text-white px-4 py-1 rounded flex-1"
                      onClick={closeModal}
                    >
                      {t("calenderB1")}
                    </button>
                    <button
                      type="submit"
                      className="border-2 border-[#D49E24] text-[#D49E24] rounded px-4 py-1 flex-1"
                      onClick={closeModal}
                    >
                      {t("calenderB2")}
                    </button>
                  </div>
                </div>
              </Modal>

              <Dropdown
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#F9FAFB]">
        <Link href={`/${selectedLocale}/confirmationForm`}>
          <div className="form-control border-0 px-8 pb-5">
            <button
              type="submit"
              className="md:mt-5 btn text-font font-normal text-base px-3.5 bg-[#D49E24] border border-[#DDB669] h-9
              rounded-md text-white hover:bg-[#D49E24] hover:outline-none active:bg-[#D49E24] focus:bg-[#DDB669]"
            >
              {t("continue")}
            </button>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FinalMessage;
