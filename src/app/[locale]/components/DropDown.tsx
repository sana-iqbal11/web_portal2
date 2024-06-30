import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

interface CustomDropdownProps {
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
  label: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  selected,
  setSelected,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLocale = useLocale();
  const t = useTranslations("demo");

  return (
    <div className={`mb-4 text-${selectedLocale === "ar" ? "right" : "left"}`}>
      <label className="block mb-2 text-sm checkbox-signin font-medium text-[#344054]">
        {label}
      </label>
      <div className="relative">
      <button
  onClick={() => setIsOpen(!isOpen)}
  className={`block text-start appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2.5 pr-8 rounded-lg leading-tight text-${
    selectedLocale === "ar" ? "right" : "left"
  } flex justify-between items-center`}
>
  <span>
    {selected ? (
      <p className="text-base checkbox-signin">{selected}</p>
    ) : (
      <p className="text-start checkbox-signin">{t("option")}</p>
    )}
  </span>
  <span className="flex items-center px-2 text-[#98A2B3]">
    <svg
      className={`fill-current h-4 w-4 ${isOpen ? "transform rotate-180" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </span>
</button>

        {isOpen && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className={`checkbox-signin text-sm cursor-pointer px-4 py-2 flex justify-between items-center 
          ${selected === option ? "bg-gray-200" : ""}
          ${selectedLocale === "ar" ? "text-right" : "text-left"}
        `}
              >
                <span
                  className={`${selected === option ? "text-orange-500" : ""}`}
                >
                  {option}
                </span>

                {selected === option && (
                <svg
                className={`fill-current text-orange-500 ${
                  selectedLocale === "ar" ? "ml-2" : "mr-2"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" // Increase the viewBox size
                width="16" // Increase the width
                height="16" // Increase the height
              >
                <path
                  fillRule="evenodd"
                  d="M18.364 5.636a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L8 14.586l9.95-9.95a1 1 0 011.414 0z"
                  clipRule="evenodd"
                //   stroke="black" // Add a stroke to make it more visible
                  strokeWidth="0.5" // Adjust the stroke width as needed
                />
              </svg>
              
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
