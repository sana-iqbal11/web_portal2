

import { useLocale } from "next-intl";
import { redirect } from "next/navigation";

export default function RootPage() {

  const selectedLocale = useLocale();

  
  redirect(`/${selectedLocale}/pages/requests/offers`);
}
