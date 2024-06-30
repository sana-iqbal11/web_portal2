import * as React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
//

//
import { Stack, Container, Row, Col, Nav } from "react-bootstrap";
//

import Typography from "../atoms/Typography";
//

import Link from "next/link";
import FooterLinks from "../molecules/FooterLinks";
import Image from "next/image";
import logo from "../../../../images/Mobile/logo@3x.png";
import logo2 from "../../../../images/Payment/_W036@2x.png";
import mastercard from "../../../../images/Payment/Mastercard@2x.png";
import visa from "../../../../images/Payment/Visa@2x.png";
import applepay from "../../../../images/Payment/ApplePay2x.png";
import mada from "../../../../images/Payment/MadaLogo@2x.png";

const NAV_ITEMS = [
  {
    id: "home",
    label: "الرئيسية",
    href: "/",
  },
  {
    id: "home",
    label: "شورى للأعمال",
    href: "/business",
  },
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

const RootStyle = styled.footer`
  height: auto;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #fbf7ee;
  padding: 6rem 16rem 1rem 16rem;
  margin-top: 15rem;
  direction: rtl;
  @media (max-width: 1200px) {
    padding: 6rem 8rem 1rem 8rem;
  }
  @media (max-width: 1100px) {
    padding: 6rem 4rem 1rem 4rem;
  }
`;

const ButtonLink = styled(Link)`
  position: relative;
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

const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  color: var(--primary-color);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 4px;
`;

const SocialIcon = styled(Icon)`
  width: 30px;
  height: 30px;
  margin: 10px 0 10px 10px;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
  }
`;

const FooterDivider = styled.hr`
  opacity: 1;
  color: #f6ebd3 !important;
  font-weight: 800;
  width: 100%;
`;

const ImageLink = styled.a`
  width: 20rem;
  height: 5rem;
  transition: all 250ms;
  background: white;
  border: 2px solid #f6ebd3;
  border-radius: 12px;
  padding: 0.5rem 2rem;
  margin-right: auto;
  display: flex;
  justify-content: center;
  color: black;
  align-items: center;
`;

export default function Footer({
  showStoreLinkGroup = false,
  showSocialMedia = false,
  collapse,
  showContact = false,
}: {
  showStoreLinkGroup?: boolean;
  showSocialMedia?: boolean;
  collapse?: boolean;
  showContact?: boolean;
}) {
  return (
    <RootStyle>
      <Container fluid>
        <Row className="mb-3 ">
          <Col md={6}>
            <Stack direction="horizontal" gap={3}>
              <div className="Footer-Logo">
                <Image
                  src={logo}
                  alt="logo"
                  placeholder={"blur"}
                  width={82}
                  height={75}
                />
                <div
                  style={{
                    background: "#D7B674",
                    height: "30px",
                    alignSelf: "center",
                    width: "2px",
                  }}
                  className="vr"
                ></div>
                <Typography
                  variant="h5"
                  className="text-center"
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: "bold",
                    color: "var(--primary-color)",
                  }}
                >
                  على يمناك
                </Typography>
              </div>
            </Stack>
          </Col>
          <Col md={3}>
            <Stack
              gap={5}
              direction="horizontal"
              className={`d-flex justify-content-end align-items-center h-100`}
            >
              <div
                onClick={() => window.open("mailto:info@shwra.sa")}
                style={{
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="h5"
                  className="d-flex justify-content-end align-items-center fw-bold"
                  style={{
                    padding: 8,
                  }}
                >
                  info@shwra.sa
                  <Icon
                    fontSize={"2.5rem"}
                    icon="basil:envelope-outline"
                    className="me-3  align-self-start"
                    color="#cc9a28"
                  />
                </Typography>
              </div>

              <div>
                <Typography
                  variant="h5"
                  className="d-flex justify-content-center align-items-center fw-bold"
                  style={{
                    padding: 8,
                  }}
                >
                  920033635
                  <Icon
                    icon="ph:phone-light"
                    fontSize={"2.5rem"}
                    className="me-3 align-self-start"
                    color="#cc9a28"
                  />
                </Typography>
              </div>
            </Stack>
          </Col>
          <Col>
            <Stack
              gap={5}
              direction="horizontal"
              className="d-flex justify-content-center align-items-center "
            >
              <div
                style={{ color: "var(--tertiary-color)" }}
                className="vr"
              ></div>
              <div className="bg-red-500">
                <h5
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "500",
                    fontSize: "1.5rem",
                  }}
                >
                  تابعنا على منصات التواصل الاجتماعي
                </h5>

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
            </Stack>
          </Col>
        </Row>

        <Row>
          <Col className="my-4" md={6} lg={4}>
            <Typography className="fw-bold fs-5" variant="p">
              شورى هي منصة إلكترونية تعنى بالوساطه لتقديم الاستشارات والخدمات
              القانونية من خلال ربط نخبة من المحامين المرخصين من وزارة العدل
              السعودية مع طالبي الخدمات القانونية، وهي منصه مرخصه بموجب سجل
              تجاري رقم 4650222665.
            </Typography>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col className="my-4">
            <Stack direction="horizontal" gap={3}>
              <Image
                src={logo2}
                alt="logo2"
                placeholder={"blur"}
                width={25}
                height={25}
                style={{ objectFit: "contain" }}
              />

              <Image
                src={mastercard}
                alt="mastercard"
                placeholder={"blur"}
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />
              <Image
                src={visa}
                alt="visa"
                placeholder={"blur"}
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />

              <Image
                src={applepay}
                alt="applepay"
                placeholder={"blur"}
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />
              <Image
                src={mada}
                alt="mada"
                placeholder={"blur"}
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </Stack>
          </Col>
          <Col>
            <FooterLinks />
          </Col>
        </Row>
      </Container>

      <FooterDivider />

      <CopyRight>shwra © 2020 All Right Reserved</CopyRight>
    </RootStyle>
  );
}
