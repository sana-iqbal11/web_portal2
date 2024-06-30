import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import {
  getScheduleAvailability,
  useMobileRequestCategoryLanguageWise,
} from "../../../../../lib/auth";
import {
  IoChevronBackSharp,
  IoChevronDown,
  IoChevronForward,
} from "react-icons/io5";
import Spinner from "../atoms/Spinner";
import moment from "moment";
import Image from "next/image";
import calender from '../../../../../public/calen.png'
import clock from '../../../../../public/clo.png'
interface CardsAlkoodProps {
  buttonClicked: boolean;
  setButtonClicked: Dispatch<SetStateAction<boolean>>;
  selectedCards: any[];
  setSelectedCards: any;
  isSelectedPackage: boolean;
  categoryId: string;
  packageId: string;
  date: string;
  setSelectedTime: any;
  selectedTime: any[];
}

const generateDateList = (numberOfDays: number, setSelectedCards: Function) => {
  const startDate = moment();
  const dates = [];

  for (let i = 0; i < numberOfDays; i++) {
    const date = startDate.clone().add(i, "days");
    dates.push({
      id: i + 1,
      dateYear: date.format("YYYY"),
      datemonth: date.format("MMM"),
      dayOfWeek: date.format("dddd"),
      date: date.format("Do"),
      isCurrentDate: date.isSame(moment(), "day"),
      fulldate: date.format("YYYY-MM-DD"),
    });
  }

  return dates;
};

const CalenderModal: React.FC<CardsAlkoodProps> = ({
  buttonClicked,
  setButtonClicked,
  selectedCards,
  setSelectedCards,
  isSelectedPackage,
  categoryId,
  packageId,
  date,
  setSelectedTime,
  selectedTime,
}) => {
  const t = useTranslations("CalenderCards");
  const numberOfDaysToShow = 6;
  const dateList = generateDateList(numberOfDaysToShow, setSelectedCards);

  const selectedLocale = useLocale();
  const [newDate, setNewDate] = useState(date);
  const {
    data: scheduleAvailability,
    isLoading: upComingLoading,
    refetch: fetchScheduleAvailability,
  } = getScheduleAvailability(
    isSelectedPackage,
    categoryId,
    packageId,
    newDate
  );

  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const { data, isLoading } = useMobileRequestCategoryLanguageWise();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState<
    { id: number; name: string; description: string }[]
  >([]);
  const [morningArray, setMorningArray] = useState([]);
  const [eveningArray, setEveningArray] = useState([]);

  let AmPm = moment(new Date()).format("A");
  const [isAmChecked, setIsAmChecked] = useState(AmPm === "AM");

  const [isPmChecked, setIsPmChecked] = useState(AmPm === "PM");
  const [checkedItems, setCheckedItems] = useState(
    Array(morningArray.length).fill(false)
  );
  const handleFirstCheckboxChange = () => {
    setIsAmChecked(false);
    setIsPmChecked(true);
  };
  const handleSecondCheckboxChange = () => {
    setIsPmChecked(false);
    setIsAmChecked(true);
  };

  const handleCheckboxChange = (index: any) => {
    const newCheckedItems = Array(morningArray.length).fill(false);
    newCheckedItems[index] = true;
    setCheckedItems(newCheckedItems);
  };

  useEffect(() => {
    scheduleAvailability?.result?.map((item: any) => {
      if (String(item?.time) <= "1130") {
        // @ts-ignore
        setMorningArray((prevState) => [...prevState, item]);
      } else {
        // @ts-ignore
        setEveningArray((prevState) => [...prevState, item]);
      }
    });
  }, [scheduleAvailability]);

  const handleButtonClick = () => {
    if (!selectedTime.length) return alert("Please Select Time");

    if (Array.isArray(data)) {
      const selectedData = data.filter((card: any, index: number) =>
        selectedCards.includes(index)
      );
      setSelectedCardData(selectedData);
    }
    setButtonClicked(true);
    setModalOpen(false); // Close the modal
  };

  const handleDivClick = () => {
    setModalOpen(true);
  };
  const handledropdown = (val: string) => {
    setDropdownOpen((p) => (p === val ? null : val));
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  //   };
  const handleCardClick = async (packageObj: any) => {
    // @ts-ignore
    setSelectedCards([packageObj]);
    await setNewDate(packageObj?.fulldate);
    fetchScheduleAvailability();
  };
  const handleTimeClick = (packageObj: any, index: number) => {
    setSelectedTime([packageObj]);
    handleCheckboxChange(index);
  };

  // to select current date
  useEffect(() => {
    let currentDate = dateList?.find((item) => item.isCurrentDate === true);
    setSelectedCards([currentDate]);
  }, []);

  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Typography className="signin-form mr-3 text-sm text-[#454646]">
          {t("appointmnet")}
        </Typography>
        <Typography className="text-font mt-[1.5px] mb-3  mr-3 text-xs text-[#808283]">
          {t("appropiate")}
        </Typography>
        <div
          className="text-font input text-[10px] input-bordered w-full max-w-x text-start rounded-lg placeholder-[#BCBDBF] px-3.5 py-[3.8px] max-w-x border min-h-[50px]" // Add min-h-[50px] to ensure a minimum height
          style={{
            textAlign: "center",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            background: selectedCards.length > 0 ? 'linear-gradient(89.79deg, #F5E9CF -4.39%, #EDD9A7 102.4%)' : "transparent",

          }}
        >
          <div className="absolute flex justify-between items-center w-[96%]">
            {selectedCards?.length > 0 && selectedTime?.length > 0 ? (
              <Grid container justifyContent="start">
                <Grid item>
                  <div className="flex items-center">
                    {/* <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V10H20V21ZM20 8H4V5H20V8Z"
                        fill="#F0E8D7"
                      />
                    </svg> */}
                    <Image src={calender.src} alt='' width={16} height={16} />

                    <Typography
                      className="text-font text-xs text-[#173039] text-end ml-3 mr-2"
                      onClick={handleDivClick}
                    >
                      {selectedCards[0]?.fulldate}
                    </Typography>

                    <div
                      className={`border-l-2 border-[#F0E8D7] h-8 ${
                        selectedLocale === "ar" ? "ml-2" : "mr-2"
                      }`}
                    />
                    {/* <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM10.5 5H9V11L14.25 14.15L15 12.92L10.5 10.25V5Z"
                        fill="#F0E8D7"
                      />
                    </svg> */}
                    <Image src={clock.src} alt='' width={16} height={16} />

                    <Typography
                      className="text-font text-xs text-[#173039] text-end ml-3 mr-2"
                      onClick={handleDivClick}
                    >
                      {moment(selectedTime[0]?.time, ["HH.mm"]).format(
                        "hh:mm A"
                      )}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            ) : (
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V10H20V21ZM20 8H4V5H20V8Z"
                    fill="#F0E8D7"
                  />
                </svg>
                <Typography
                  className="text-font  text-xs text-[#DDB669] text-end ml-3 mr-2"
                  onClick={handleDivClick}
                >
                  {moment().format("MMM Do, YYYY")}
                </Typography>

                <div
                  className={`border-l-2 border-[#F0E8D7] h-8 ${
                    selectedLocale === "ar" ? "ml-2" : "mr-2"
                  }`}
                />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM10.5 5H9V11L14.25 14.15L15 12.92L10.5 10.25V5Z"
                    fill="#F0E8D7"
                  />
                </svg>

                <Typography
                  className="text-font text-xs text-[#DDB669] text-end ml-3 mr-2"
                  onClick={handleDivClick}
                >
                  00:00 PM
                </Typography>
              </div>
            )}

            {selectedLocale === "ar" ? (
              <IoChevronBackSharp
                className="text-base"
                onClick={handleDivClick}
                style={{color: selectedCards.length > 0 ? "#173039": "#DFE1E3"}}
              />
            ) : (
              <IoChevronForward
                className="text-base"
                onClick={handleDivClick}
                style={{color: selectedCards.length > 0 ? "#173039": "#DFE1E3"}}
              />
            )}
          </div>
        </div>
      </Grid>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="custom-modal "
      >
        <Grid container justifyContent="center">
          <Grid
            item
            xs={10}
            sx={{
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "16px",
              padding: "40px 30px",
              maxHeight: "80vh",
              overflowY: "scroll",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                direction: selectedLocale === "ar" ? "ltr" : "rtl",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: "10px", cursor: "pointer" }}
                onClick={handleCloseModal}
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="#DDB669"
                />
              </svg>
              <Typography className="signin-form text-right mr-3 mt-3 text-sm text-[#454646]">
                {t("counsling")}
              </Typography>
            </div>
            <Typography
              className={`text-font  mt-[1.5px] mr-3 mb-10 text-xs
                
                ${
                  selectedCards.length === 0 && buttonClicked
                    ? "text-red-500"
                    : "text-[#808283]"
                }`}
              style={{ textAlign: selectedLocale === "ar" ? "right" : "left" }}
            >
              {t("right-day")}
            </Typography>

            <>
              <Grid
                container
                spacing={2}
                style={{ direction: selectedLocale === "ar" ? "rtl" : "ltr" }}
              >
                {dateList.map((item: any) => (
                  <Grid
                    key={item?.id}
                    item
                    xs={12}
                    sm={6}
                    md={2}
                    className="justify-center"
                  >
                    <Card
                      className={`shadow-lg lg:w-32 w-full h-28 rounded-xl border cursor-pointer ${
                        selectedCards.find((card: any) => card.id === item.id)
                          ? // || item.isCurrentDate
                            "custom-gradient"
                          : ""
                      }`}
                      onClick={() => handleCardClick(item)}
                    >
                      <CardContent>
                        <Typography className="font-medium text-base text-center mb-2 mt-2">
                          {item.dayOfWeek}
                        </Typography>
                        <Typography className="font-bold text-base text-center mb-2">
                          {item.date}
                        </Typography>
                        <Typography className="text-medium text-base text-center">
                          {item.datemonth}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              {isLoading ? (
                <div className="mt-12 mb-5">
                  <Spinner />
                </div>
              ) : (
                <>
                  <Grid
                    container
                    spacing={2}
                    style={{
                      direction: selectedLocale === "ar" ? "ltr" : "rtl",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "end",
                      }}
                    >
                      <Typography className="signin-form mt-3 mr-3 text-sm text-[#454646]">
                        {t("consultantion-time")}
                      </Typography>
                      <Typography className="text-font mt-[1.5px] mb-3  mr-3 text-xs text-[#808283]">
                        {t("choose-right")}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid sx={{ display: "flex", gap: "45px" }}>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                      style={{
                        direction: selectedLocale === "ar" ? "ltr" : "rtl",
                      }}
                    >
                      <div
                        className="text-font custom-gradient input text-[10px] input-bordered w-full max-w-x text-start rounded-lg placeholder-[#BCBDBF] px-3.5 py-[3.8px] max-w-x border min-h-[50px]"
                        style={{
                          textAlign: "center",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          cursor: "pointer",
                        }}
                        onClick={() => handledropdown("pm")} // Toggle dropdown on click
                      >
                        <div className="absolute flex justify-between items-center w-[96%]">
                          <IoChevronDown className="text-base text-[#DFE1E3]" />
                          <div className="flex items-center">
                            <Typography className="text-font font-bold text-sm text-start ml-3 mr-2">
                              {t("pm")}
                            </Typography>
                          </div>
                        </div>
                      </div>
                      {dropdownOpen === "pm" && (
                        <div
                          className="grid grid-cols-1 items-center justify-end gap-3 border-0 shadow-lg px-3 py-3 rounded-md "
                          style={{
                            direction: selectedLocale === "ar" ? "ltr" : "rtl",
                          }}
                        >
                          {dropdownOpen === "pm" && (
                            <>
                              {(isAmChecked ? morningArray : eveningArray)
                                ?.length > 0 ? (
                                <div
                                  className="grid grid-cols-1 items-center justify-end gap-3 border-0 shadow-lg px-3 py-3 rounded-md"
                                  style={{
                                    direction:
                                      selectedLocale === "ar" ? "ltr" : "rtl",
                                  }}
                                >
                                  {upComingLoading ? (
                                    <div className="my-2">
                                      <Spinner />
                                    </div>
                                  ) : (
                                    (isAmChecked
                                      ? morningArray
                                      : eveningArray
                                    ).map((checkbox: any, index: any) => (
                                      <>
                                        <div
                                          key={checkbox.id}
                                          className={`flex items-center text-sm checkbox-signin ${
                                            selectedLocale === "ar"
                                              ? "justify-end"
                                              : "justify-end"
                                          }`}
                                          onClick={() =>
                                            handleTimeClick(checkbox, index)
                                          }
                                        >
                                          <label
                                            htmlFor={checkbox.id}
                                            className="mr-3"
                                          >
                                            {moment(checkbox.time, [
                                              "HH.mm",
                                            ]).format("hh:mm A")}
                                          </label>
                                          <input
                                            type="checkbox"
                                            id={checkbox.id}
                                            name={checkbox.id}
                                            disabled={checkbox?.isBooked}
                                            checked={
                                              checkedItems[index] == true
                                            }
                                            className="mr-2 accent-[#DDB669]"
                                          />
                                        </div>
                                        <div className="border-b-2 border-[#f3f1f1]"></div>
                                      </>
                                    ))
                                  )}
                                </div>
                              ) : (
                                <Typography className="text-sm text-yellow-500 text-center">
                                  {t("error")}
                                </Typography>
                              )}
                            </>
                          )}
                        </div>
                      )}
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                      style={{
                        direction: selectedLocale === "ar" ? "ltr" : "rtl",
                      }}
                    >
                      {/* <Typography className="signin-form text-end mr-3 text-sm text-[#454646]">
                        {t("consultation-appointmnet")}
                      </Typography>
                      <Typography className="text-font mt-[1.5px] text-end mb-3  mr-3 text-xs text-[#808283]">
                        {t("appo-time")}
                      </Typography> */}
                      <div
                        className="text-font custom-gradient input text-[10px] input-bordered w-full max-w-x text-start rounded-lg placeholder-[#BCBDBF] px-3.5 py-[3.8px] max-w-x border min-h-[50px]"
                        style={{
                          textAlign: "center",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          cursor: "pointer",
                        }}
                        onClick={() => handledropdown("am")} // Toggle dropdown on click
                      >
                        <div className="absolute flex justify-between items-center w-[96%] ">
                          <IoChevronDown className="text-base text-[#DFE1E3]" />
                          <div className="flex items-center">
                            <Typography className="text-font text-sm font-bold text-start ml-3 mr-2">
                              {t("am")}
                            </Typography>
                          </div>
                        </div>
                      </div>
                      {dropdownOpen === "am" && (
                        <div
                          className="grid grid-cols-1 items-center justify-end gap-3 border-0 shadow-lg px-3 py-3 rounded-md "
                          style={{
                            direction: selectedLocale === "ar" ? "ltr" : "rtl",
                          }}
                        >
                          {dropdownOpen === "am" && (
                            <>
                              {(isAmChecked ? morningArray : eveningArray)
                                ?.length > 0 ? (
                                <div
                                  className="grid grid-cols-1 items-center justify-end gap-3 border-0 shadow-lg px-3 py-3 rounded-md"
                                  style={{
                                    direction:
                                      selectedLocale === "ar" ? "ltr" : "rtl",
                                  }}
                                >
                                  {upComingLoading ? (
                                    <div className="my-2">
                                      <Spinner />
                                    </div>
                                  ) : (
                                    (isAmChecked
                                      ? morningArray
                                      : eveningArray
                                    ).map((checkbox: any, index: any) => (
                                      <>
                                        <div
                                          key={checkbox.id}
                                          className={`flex items-center text-sm checkbox-signin ${
                                            selectedLocale === "ar"
                                              ? "justify-end"
                                              : "justify-end"
                                          }`}
                                          onClick={() =>
                                            handleTimeClick(checkbox, index)
                                          }
                                        >
                                          <label
                                            htmlFor={checkbox.id}
                                            className="mr-3"
                                          >
                                            {moment(checkbox.time, [
                                              "HH.mm",
                                            ]).format("hh:mm A")}
                                          </label>
                                          {/* <input
                                            type="checkbox"
                                            id={checkbox.id}
                                            name={checkbox.id}
                                            disabled={checkbox?.isBooked}
                                            checked={
                                              checkedItems[index] == true
                                            }
                                            className="mr-2 accent-[#DDB669]"
                                          /> */}
                                        </div>
                                        <div className="border-b-2 border-[#f3f1f1]"></div>
                                      </>
                                    ))
                                  )}
                                </div>
                              ) : (
                                <Typography className="text-sm text-yellow-500 text-center">
                                  {t("error")}
                                </Typography>
                              )}
                            </>
                          )}
                        </div>
                      )}
                    </Grid>
                  </Grid>
                </>
              )}
            </>

            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Button
                  className="bg-[#173039] text-white w-[45%] h-9 mt-8 checkbox-signin"
                  onClick={handleButtonClick}
                >
                  موافق
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default CalenderModal;
