import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

interface RadioCardsProps {
  selectedCard: any[]; // Ensure this is properly typed as per your data structure
  setSelectedSubCategory: React.Dispatch<React.SetStateAction<any>>;
 
}

const RadioCards: React.FC<RadioCardsProps> = ({
  selectedCard,
  setSelectedSubCategory,
 
}) => {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [error3, setError3] = useState<boolean>(false); // State to manage error

  const t = useTranslations("RadioCards");

  // Function to handle radio button selection
  const handleOptionChange = (optionId: any, option: any) => {
    setSelectedOption(optionId);
    setSelectedSubCategory(option);
  };

  return (
    <div>
      <Typography className="signin-form mr-3 mt-3 text-sm text-[#454646]">
        {t("topic")}
      </Typography>
      <Typography
        className={`checkbox-signin mr-3 mb-3 text-sm ${
          error3 ? "text-red-500" : "text-[#808283]"
        }`}
      >
        {t("according-consultant")}
      </Typography>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {selectedCard[0]?.subCategoreies?.map((option: any) => (
          <div
            key={option?.mobileRequestCategoryId}
            className="bg-white p-1 input-bordered border rounded-lg py-[0.8rem]"
          >
            <label className="cursor-pointer flex items-center">
              <input
                type="radio"
                value={option?.mobileRequestCategoryId}
                checked={selectedOption === option?.mobileRequestCategoryId}
                onChange={() =>
                  handleOptionChange(option?.mobileRequestCategoryId, option)
                }
                className="form-radio h-4 w-4 focus:ring-red-500 ml-4 mr-6"
              />
              <span className="checkbox-signin text-sm ml-2 text-[#173039]">
                {option.name}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioCards;
