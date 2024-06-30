import Image from 'next/image'
import React from 'react'
import DocumentVector from "/public/requestPageImages/Document.png";
import { Typography } from '@mui/material';


const NoDataFoundComponet = ({ text,children }:{ text:string,children?:React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-1 justify-center items-center'>

        <Image 
        src={DocumentVector}
        style={{
            width:'100px',
            height:'100px',
            objectFit:'contain'
        }}
        alt='No-Data-Found'
        />
        <Typography
        fontSize={'23px'}
        color={'#DFE1E3'}
        >{ text }</Typography>

        { children }
    </div>
  )
}

export default NoDataFoundComponet