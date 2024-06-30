import * as React from 'react';

const steps = [
  'استلام الطلب',
  'الاطلاع على الطلب',
  'تقديم العرض',
  'استعداد  المحامي',
  'الاتصال',
];

export default function ProgressCheck() {
  return (
    <div className="w-full mt-4 mb-3 md:block hidden">
      <div className="flex justify-between items-center relative">
        {steps.map((label, index) => (
          <div 
            key={index} 
            className={`relative flex flex-col items-center flex-1 ${index === 0 ? 'mr-[-59px]' : ''} ${index === steps.length - 1 ? 'ml-[-32px]' : ''}`}
          >
            {index > 0 && (
              <div className="absolute left-0 right-[-154px] mx-auto top-[29%] -mt-1 w-full h-[1px] bg-gray-300 z-0"></div>
            )}
            <div
              className={`relative rounded-full h-7 w-7 flex items-center justify-center z-10 ${
                index < 3 ? 'bg-[#DDB669] text-white' : 'bg-white border border-gray-300 text-gray-600'
              }`}
            >
              {index < 3 ? '✔' : ''}
            </div>
            <div className="mt-2 font-medium text-sm text-center z-20">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
