import React, { useState } from 'react'
import Tabs from '../../components/organisms/Tabs'

const tabs = [
    {
      text:'offers',
      link:'requests/offers'
    },
    {
      text:'new',
      link:'requests/new'
    },
    {
      text:'under_implementation',
      link:'requests/under_implementation'
    },
    {
      text:'completed',
      link:'requests/completed'

    }
  ]

const layout = ({children}:{children:React.ReactNode}) => {


  return (
    <div>
        <Tabs
       tabs={tabs}
       translationSource='Requests'
       />

        {children}
    </div>
  )
}

export default layout