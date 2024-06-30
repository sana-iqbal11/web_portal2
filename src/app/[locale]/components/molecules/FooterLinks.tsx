import React from 'react'
// import { Stack } from 'react-bootstrap'
import styled from 'styled-components'
import Image from 'next/image'

import playStore from '../../../../images/contact/Icon_PlayStore.png'
import apple from '../../../../images/contact/Icon_Apple.png'
import huwaei from '../../../../images/contact/Icon_Huwaei.png'

const ImageLink = styled.a`


`

const FooterLinks = () => {
  return (
    <div className='d-flex gap-5' dir='ltr'>

      <a className='Footer-ImageLink '
        href="https://play.google.com/store/apps/details?id=sa.shwra.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={playStore}
          alt="logo"
          placeholder={"blur"}
          width={30}
          height={40}
          style={{ objectFit: 'contain' }}
        />
        <div className='Footer-LinkText'>
          <span style={{ fontSize: '1.2rem', fontWeight: '800' }}>Google Play</span>

        </div>
      </a>

      <a
        href="https://apps.apple.com/sa/app/shwra-%D8%B4%D9%88%D8%B1%D9%89/id1550113344"
        target="_blank"
        rel="noopener noreferrer"
        className='Footer-ImageLink '
      >

        <Image
          src={apple}
          alt="logo"
          placeholder={"blur"}
          width={30}
          height={40}
          style={{ objectFit: 'contain' }}
        />
        <div className='Footer-LinkText'>
          <span style={{ fontSize: '1rem', fontWeight: '500' }}>Available on</span>
          <span style={{ fontSize: '1.5rem', marginTop: -5 }} className='fw-bolder'>App Store</span>

        </div>
      </a>

      <a
        href="https://appgallery.huawei.com/app/C106460597"
        target="_blank"
        rel="noopener noreferrer"
        className='Footer-ImageLink '
      >
        <Image
          src={huwaei}
          alt="logo"
          placeholder={"blur"}
          width={30}
          height={40}
          style={{ objectFit: 'contain' }}
        />
        <div className='Footer-LinkText'>
          <span style={{ fontSize: '1rem', fontWeight: '500' }}>Available on</span>
          <span style={{ fontSize: '1.5rem', marginTop: -5 }} className='fw-bolder'>App Store</span>
        </div>
      </a>

    </div>
  )
}

export default FooterLinks