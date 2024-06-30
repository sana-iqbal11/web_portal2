import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
// react-bootstrap
import { Offcanvas, Nav, Stack } from "react-bootstrap";
// atoms
import IconBotton from "../atoms/IconBotton";
import { Container } from "@mui/material";
import { Media } from "../atoms/Media";
import Link from "next/link";

const MobileNavList = styled(Nav)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  position: relative;
  opacity: 1;
  color: black;
`;

const MobileNavListItem = styled(Link)`
  display: block;
  padding: 18px 0;
  text-align: center;
  width: 50%;
  border-bottom: 2px solid #dee2f079;
  font-weight: bolder;
  font-size: 2rem;
  color: var(--text-dark);

  &:hover {
    color: #cc9a28;
    border-bottom: 2px solid #cc9a28;
  }
  &:active {
    color: var(--tertiary-color);
  }

  @media (min-width: 768px) {
    transition: all;
    transition-duration: 0.1s;
    font-size: 1.6rem;
    border-radius: 4px;
    width: 30%;
    &:hover {
      background: #f3f5fa 0% 0% no-repeat padding-box;
      border-bottom: 2px solid #dee2f079;
      color: var(--text-dark);
      font-size: 1.7rem;
    }
  }
`;

// const ImageLink = styled.a`
// width: 20rem;
// height:5rem;
// transition: all 250ms;
// background: #07242E;
// border:2px solid #07242E;
// border-radius: 12px;
// padding: .5rem 2rem;
// display:flex;
// justify-content:center;
// align-items:center;
// &:hover {
// box-shadow:0 0 7px 3px rgba(0,0,0,0.9)
// }
// `

const ImageLink = styled.a`
  width: 220px;
  height: 50px;
  transition: all 250ms;
  background: #07242e;
  border-radius: 6px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  &:hover {
    box-shadow: 1px 1px 5px 1px black;
  }
  @media (max-width: 300px) {
    width: 95% !important;
  }
`;

const SocialIcon = styled(Icon)`
  width: 30px;
  height: 30px;
  margin: 10px;
  color: var(--text-gray);
  &:hover {
    color: var(--secondary-color);
  }
`;

const Copyright = styled.span`
  color: var(--primary-color);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  font-weight: normal;
`;

const FooterDivider = styled.div`
  width: 80%;
  border-bottom: 2px solid #dee2f070;
`;

const Gradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(-130deg, #dee2f0 0%, #fbfbfb00 60%);
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: -1;
  @media (max-width: 768px) {
    display: none;
  }
`;
const ButtonLink = styled(Link)`
  width: 115px;
  height: 38px;
  border: 1px solid #ffffff;
  border-radius: 26px;
  opacity: 1;
  text-align: center;
  line-height: 3.5rem;
  background: var(--primary-color);
  &:hover {
    background: var(--tertiary-color);
    color: black;
    border: 0;
  }
`;

const NAV_ITEMS = [
  {
    id: "home",
    label: "الرئيسية",
    href: "/",
  },
  // {
  //   id: "homeBusiness",
  //   label: "شورى للأعمال",
  //   href: "/business",
  // },
  {
    id: "about",
    label: "عن شورى",
    href: "/WhyUs",
  },
  {
    id: "features",
    label: "فريق العمل",
    href: "/BoardOfDirectors",
  },
  {
    id: "services",
    label: "اطلب خدمة قانونية",
    href: "/LegalAdvisor",
  },
  {
    id: "usage",
    label: "خدمات شورى",
    href: "/Services",
  },
  {
    id: "team",
    label: "طريقة استخدام شورى",
    href: "/UseGuide",
  },
  {
    id: "contact",
    label: "الأسئلة الشائعة",
    href: "/faqs",
  },
];

const ButtonContainer = [
  {
    dbBtn: (
      <ImageLink
        href="https://play.google.com/store/apps/details?id=sa.shwra.app"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4"
      >
        {/* <StaticImage
    src="./../../images/general/google-play-4@3x.png"
    alt="app-image"
    placeholder="blurred"
    objectFit="contain"
    style={{width:'60%',height:'90%'}}/> */}
      </ImageLink>
    ),
  },
  {
    dbBtn: (
      <ImageLink
        href="https://apps.apple.com/sa/app/shwra-%D8%B4%D9%88%D8%B1%D9%89/id1550113344"
        target="_blank"
        rel="noopener noreferrer"
        className="my-5"
      >
        {/* <StaticImage
    src="./../../images/general/Apple_St.png"
   alt='logo'
   placeholder='blurred'
   objectFit='contain'
   className='ms-4'
   style={{width:'80%',height:'90%'}}/> */}
      </ImageLink>
    ),
  },
  {
    dbBtn: (
      <ImageLink
        href="https://appgallery.huawei.com/app/C106460597"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <StaticImage
    src="./../../images/general/huawei-appgallery-black.png"
    alt="app-image"
    placeholder="blurred"
   objectFit='contain'
    style={{width:'90%'}}/> */}
      </ImageLink>
    ),
  },
];

type NavBarProps = {
  className?: string;
  style?: React.CSSProperties;
  // show: boolean;
  // handleClose: () => void;
};

export default function MobileNav({ className, style, ...props }: NavBarProps) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <IconBotton
        icon={<Icon color="black" icon={"gg:menu-left"} />}
        onClick={handleShow}
      />

      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="New-Nav-Mobile"
      >
        <Offcanvas.Header>
          <div></div>
          <div>
            <Media at="sm">
              <h1
                style={{
                  color: "var(--text-dark)",
                  fontSize: "3rem",
                  marginRight: "3rem",
                }}
              >
                القائمة الرئيسية
              </h1>
            </Media>
          </div>
          <div className="d-none d-md-flex justify-content-between p-5 w-100">
            {/* <StaticImage placeholder="blurred" alt='logo'
            src="../../images/Mobile/logo@3x.png"
            style={{width:'75px'}}/> */}

            <IconBotton
              icon={
                <Icon
                  fontSize={"3rem"}
                  color="var(--text-gray)"
                  icon={"akar-icons:cross"}
                />
              }
              onClick={handleClose}
            />
          </div>
          <Media at="sm">
            <IconBotton
              icon={
                <Icon
                  fontSize={"3rem"}
                  color="var(--text-gray)"
                  icon={"ic:round-arrow-back-ios-new"}
                />
              }
              onClick={handleClose}
            />
          </Media>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <MobileNavList>
            {NAV_ITEMS.map((item) => (
              <MobileNavListItem
                onClick={handleClose}
                key={item.id}
                href={item.href}
              >
                {item.label}
              </MobileNavListItem>
            ))}

            <div className="w-100 d-flex justify-content-center align-items-center mt-5 gap-3">
              <ButtonLink onClick={handleClose} href="/business">
                شورى للاعمال
              </ButtonLink>
              <ButtonLink
                onClick={handleClose}
                href="https://portal.shwra.sa"
                target="_blank"
              >
                شورى للمحامين
              </ButtonLink>
            </div>

            <Media at="sm">
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2rem",
                  marginTop: "1rem",
                }}
              >
                <div>
                  <a
                    href="https://twitter.com/shwraApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon icon="akar-icons:twitter-fill" />
                  </a>

                  <a
                    href="https://www.instagram.com/shwraapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon icon="akar-icons:instagram-fill" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/shwraapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon icon="bxl:linkedin" />
                  </a>
                </div>

                <FooterDivider />

                <Copyright className="my-auto">
                  shwra © 2020 All Right Reserved
                </Copyright>
              </Container>
            </Media>
          </MobileNavList>
        </Offcanvas.Body>
        <Gradient />
      </Offcanvas>
    </>
  );
}
