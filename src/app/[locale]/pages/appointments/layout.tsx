import React, { Children } from 'react'
import Tabs from '../../components/organisms/Tabs'

const tabs = [
    {
      text:'pending',
      link:'appointments/pending'
    },
    {
      text:'coming',
      link:'appointments/coming'
    },
    {
      text:'completed',
      link:'appointments/completed'

    }
  ]

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
 <Tabs
       tabs={tabs}
       translationSource='Appointments'
       />
        {children}
    </div>
  )
}

export default layout