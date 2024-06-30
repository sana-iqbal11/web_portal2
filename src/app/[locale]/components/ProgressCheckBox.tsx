// components/ProgressCheckbox.tsx
"use client";
import { useState } from "react";

interface ProgressCheckboxProps {
  steps: number;
}

const ProgressCheckbox: React.FC<ProgressCheckboxProps> = ({ steps }) => {
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    Array(steps).fill(false)
  );

  const toggleStep = (index: number) => {
    const newSteps = [...completedSteps];
    newSteps[index] = !newSteps[index];
    setCompletedSteps(newSteps);
  };

  return (
    <div className="flex items-center justify-center w-full gap-2">
      {completedSteps.map((completed, index, arr) => (
        <div key={index} className=" col-span-1 flex items-center gap-2">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleStep(index)}
            className="appearance-none h-6 aspect-square border-2 border-gray-300 rounded-full checked:bg-blue-500 checked:border-blue-500"
          />
          {index !== arr.length - 1 && (
            <div
              className={`rounded-lg h-2 w-24 flex-1 ${
                completedSteps[index + 1] ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressCheckbox;
