import { useLocale } from 'next-intl';
import { redirect } from 'next/navigation';
import React from 'react'

function Appointments() {
 
    const selectedLocale = useLocale();

  
  redirect(`/${selectedLocale}/pages/appointments/coming`);
  
}

export default Appointments