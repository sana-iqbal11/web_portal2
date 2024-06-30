import { useLocale } from "next-intl";
import Link from "next/link";

export default function Redirect({
  url,
  redirectText,
  buttonText,
}: {
  url: string;
  redirectText: string;
  buttonText: string;
}) {
  const selectedLocale = useLocale();

  return (
    <div className="space-x-2 text-end checkbox-signin" style={{ direction: selectedLocale === 'ar' ? 'rtl' : 'ltr', textAlign: 'start', justifyContent: 'start' }}>
      <span className="text-[#808283] md:text-sm text-2xl">{redirectText}</span>
      <Link
        href={url}
        className="font-bold text-sm underline text-[#DDB669] hover:text-[#DDB669] active:text-[#DDB669] focus:text-[#DDB669]"
      >
        {buttonText}
      </Link>
    </div>
  );
}
