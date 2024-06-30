import styled from "styled-components";
import Image from "next/image";
import consult from "./../../images/Mobile/ServicesMobile/Group 14341.png";
import contract from "../../../images/Mobile/ServicesMobile/Group 14299.png";
import doc from "./../../images/Mobile/ServicesMobile/doc.png";
import contract2 from "../../../images/Mobile/ServicesMobile/contract.png";

import notes from "./../../images/Mobile/ServicesMobile/Group 14281.png";
import cases from "./../../images/Mobile/ServicesMobile/Group 14253.png";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../components/organisms/Footer";
import ThemeButton from "../components/atoms/ThemeButton";
import { Media } from "../components/atoms/Media";
import MenuNax from "../components/atoms/MenuNax";

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

const Title = styled.h5`
  color: var(--text-dark);
  font-size: 2rem;
  font-family: "IBM Plex Sans Arabic", sans-serif !important;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0% 12%;
  @media (min-width: 768px) {
    width: 60%;
    margin-top: 19rem;
  }

  @media (min-width: 580px) and (max-width: 768px) {
    width: 80%;
  }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFF",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
});

const ContractPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <MenuNax />
      <Wrapper>
        <div
          dir="rtl"
          className="flex-column flex-lg-row "
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginBlockEnd: "4rem",
            marginBlockStart: "-5rem",
            backgroundColor: "white",
            height: "108rem",
            boxShadow: " 0 0 20px 0 rgba(0,0,0,0.25)",
          }}
        >
          <div style={{ width: "85%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginBlockStart: "5rem",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <h2 style={{ fontFamily: "bold", fontSize: "23px" }}>
                العـــقود
              </h2>
              <Image
                src={contract}
                alt="العقود"
                placeholder={"blur"}
                width={82}
                height={60}
                style={{ objectFit: "contain" }}
                className=" w-40"
              />
            </div>
            <div
              style={{
                marginBlockStart: "3rem",
                flexDirection: "column",
                display: "flex",
                gap: "1rem",
              }}
            >
              <h2 style={{ fontFamily: "bold", fontSize: "20px" }}>
                عـــنوان الـــخــدمة
              </h2>
              <input
                placeholder="اعطي الطلب عنوانا"
                style={{
                  border: "1px solid #87959A",
                  borderRadius: "8px",
                  height: "56px",
                  width: "100%",
                  padding: "1rem!important",
                }}
              ></input>
            </div>

            <div
              style={{
                marginBlockStart: "3rem",
                flexDirection: "column",
                display: "flex",
                gap: "1rem",
              }}
            >
              <h2 style={{ fontFamily: "bold", fontSize: "20px" }}>
                نوع العقد
              </h2>
              <p
                style={{
                  marginBlockStart: "-1rem",
                  color: "#ADB6B9",
                  fontSize: "1.2rem",
                }}
              >
                اختر نوع العقد الذي تود طلبه
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "2rem",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  height: "23rem",
                  width: "19.5rem",
                  border: "1px solid #87959A",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src={contract2}
                  alt="العقود"
                  placeholder={"blur"}
                  width={82}
                  height={75}
                  style={{ objectFit: "contain" }}
                  className="h-50 w-40"
                />
                <div
                  style={{
                    gap: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "500",
                      marginBlockStart: "-1rem",
                    }}
                  >
                    صياغة عقد
                  </h1>
                  <p
                    style={{
                      color: "#ADB6B9",
                      fontSize: "1.4rem",
                      textAlign: "right",
                      paddingInline: "1rem",
                    }}
                  >
                    هذه الخدمة مخصصة لكتابة عقد و صياغته
                  </p>
                </div>
              </div>
              <div
                style={{
                  height: "23rem",
                  width: "19.5rem",
                  border: "1px solid #87959A",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src={contract2}
                  alt="العقود"
                  placeholder={"blur"}
                  width={82}
                  height={75}
                  style={{ objectFit: "contain" }}
                  className="h-50 w-40"
                />
                <div
                  style={{
                    gap: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "500",
                      marginBlockStart: "-1rem",
                    }}
                  >
                    مراجعة عقد
                  </h1>
                  <p
                    style={{
                      color: "#ADB6B9",
                      fontSize: "1.4rem",
                      textAlign: "right",
                      paddingInline: "1rem",
                    }}
                  >
                    هذه الخدمة مخصصة للمرجاعة والتدقيق القانوني للتأكد من سلامة
                    العقد.
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                marginBlockStart: "3rem",
                flexDirection: "column",
                display: "flex",
                gap: "1rem",
              }}
            >
              <h2 style={{ fontFamily: "bold", fontSize: "20px" }}>
                تخصص المحامي
              </h2>
              <p
                style={{
                  marginBlockStart: "-1rem",
                  color: "#ADB6B9",
                  fontSize: "1.2rem",
                }}
              >
                اختر تخصص المحامي حسب مجال الطلب
              </p>
              <input
                placeholder="اختر تخصص المحامي"
                style={{
                  border: "1px solid #87959A",
                  borderRadius: "8px",
                  height: "56px",
                  width: "100%",
                  padding: "1rem!important",
                }}
              ></input>
            </div>
            <div
              style={{
                marginBlockStart: "3rem",
                flexDirection: "column",
                display: "flex",
                gap: "1rem",
              }}
            >
              <h2 style={{ fontFamily: "bold", fontSize: "20px" }}>
                شرح الطلب
              </h2>
              <p
                style={{
                  marginBlockStart: "-1rem",
                  color: "#ADB6B9",
                  fontSize: "1.2rem",
                }}
              >
                أكتب او اظف تعليقا صوتيا عن الطلب بشكل مبسط
              </p>
              <input
                placeholder="مثال خلاف بين شركاء"
                style={{
                  border: "1px solid #87959A",
                  borderRadius: "8px",
                  height: "56px",
                  width: "100%",
                  padding: "1rem!important",
                }}
              ></input>
            </div>
          </div>
        </div>
      </Wrapper>

      <Media at="sm">
        {/* <FooterMobile /> */} <></>
      </Media>

      <Media greaterThan="sm">
        <Footer />
      </Media>
      {/* </Stack> */}

      <Gradient />

      {/* <WhatsappButton /> */}
    </ThemeProvider>
  );
};

export default ContractPage;
