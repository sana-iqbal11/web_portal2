import Image from "next/image";
import logo from "../../../../public/Group 127.webp";
import payment1 from "../../../../public/Payment/_W036@2x.png";
import payment2 from "../../../../public/Payment/Mastercard@2x.png";
import payment3 from "../../../../public/Payment/Visa@2x.png";
import payment4 from "../../../../public/Payment/ApplePay2x.png";
import payment5 from "../../../../public/Payment/MadaLogo@2x.png";
import huawei from "../../../../public/contact/Icon_Huwaei.png";
import apple from "../../../../public/contact/Icon_Apple.png";
import google from "../../../../public/contact/Icon_PlayStore.png";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box, Divider, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

export default function FooterShwra() {
  const t = useTranslations("Footer");
  const selectedLocale = useLocale();

  return (
    <Box
      sx={{
        direction: selectedLocale === "ar" ? "rtl" : "ltr",
        backgroundColor: "#F4F2EC",
        padding: "25px 4rem 12px",
        position: "absolute",
        zIndex: "1",
        width: "100%",
        marginTop: "10px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item lg={4} md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
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
                  margin: "0px 25px",
                }}
                className="vr"
              ></div>
              <div
                className="h5 text-center signin-form"
                style={{
                  lineHeight: "1.5",
                  marginBottom: 0,
                  fontWeight: "bold",
                  color: "#173039",
                  alignSelf: "center",
                  fontSize: "16px",
                }}
              >
                {t("on_your_right")}
              </div>
            </Box>
            <Box>
              <Typography
              className="mt-[0.5rem]"
                sx={{ fontSize: "11px", color: "#212529", marginTop: "0.5rem" }}
              >
                {t("shwra_is_an_elctronic")}
              </Typography>
            </Box>
          </Grid>

          <Grid item lg={8} md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
              className="justify-spacing"
            >
              <Box
                sx={{
                  display: "flex",
                  [selectedLocale === "ar" ? "marginLeft" : "marginRight"]:
                    "35px",
                }}
              >
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 14.9893C15.11 14.9293 14.24 14.7793 13.41 14.5393L12.21 15.7393C13.41 16.1493 14.68 16.4093 16 16.4993L16 14.9893ZM3.98 5.1293C3.74 4.2793 3.59 3.4093 3.53 2.5293L2.04 2.5293C2.13 3.8493 2.39 5.1193 2.79 6.3293L3.98 5.1293ZM18 14.0293L18 17.5293C18 18.0793 17.55 18.5293 17 18.5293C7.61 18.5293 -4.54161e-07 10.9193 -4.37114e-08 1.5293C-1.96701e-08 0.979296 0.450001 0.529296 1 0.529296L4.49 0.529296C5.04 0.529296 5.49 0.979296 5.49 1.5293C5.49 2.7693 5.69 3.9793 6.06 5.0993C6.1 5.1993 6.11 5.3093 6.11 5.4093C6.11 5.6693 6.01 5.9193 5.82 6.1193L3.62 8.3193C5.07 11.1493 7.38 13.4693 10.21 14.9093L12.41 12.7093C12.69 12.4293 13.08 12.3493 13.43 12.4593C14.55 12.8293 15.75 13.0293 17 13.0293C17.55 13.0293 18 13.4793 18 14.0293Z"
                    fill="#DDB669"
                  />
                </svg>

                <Box style={{ cursor: "pointer" }}>
                  <Box
                    sx={{
                      marginBottom: 0,
                      fontSize: "13px",
                      marginTop: selectedLocale === "ar" ? "2px" : "-1px",
                      [selectedLocale === "ar" ? "marginRight" : "marginLeft"]:
                        "8px",
                      color: "#173039",
                    }}
                  >
                    920033635
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{ display: "flex" }}
                className={`spacing-${
                  selectedLocale === "ar" ? "left" : "right"
                }`}
              >
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2.5293C20 1.4293 19.1 0.529297 18 0.529297L2 0.529297C0.9 0.529297 0 1.4293 0 2.5293L0 14.5293C0 15.6293 0.9 16.5293 2 16.5293L18 16.5293C19.1 16.5293 20 15.6293 20 14.5293L20 2.5293ZM18 2.5293L10 7.5293L2 2.5293L18 2.5293ZM18 14.5293L2 14.5293L2 4.5293L10 9.5293L18 4.5293L18 14.5293Z"
                    fill="#DDB669"
                  />
                </svg>

                <Box style={{ cursor: "pointer" }}>
                  <Box
                    style={{
                      lineHeight: "1.5",
                      marginBottom: 0,
                      fontSize: "13px",
                      marginTop: "-1px",
                      [selectedLocale === "ar" ? "marginRight" : "marginLeft"]:
                        "8px",
                      color: "#173039",
                    }}
                  >
                    info@shwra.sa
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <Box
                  sx={{
                    background: "#D7B674",
                    height: "75px",
                    alignSelf: "center",
                    width: "1px",
                    [selectedLocale === "ar" ? "marginRight" : "marginLeft"]:
                      "-12px",
                  }}
                  className="vr"
                ></Box>
                <Box>
                  <Typography
                  className="text-[#173039], text-sm mt-[-75px]"
                   
                  >
                    {t("follow_us")}
                  </Typography>
                  <Box className="flex" sx={{ marginTop: "9px" }}>
                    <a
                      href="https://twitter.com/shwraApp"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        [selectedLocale === "ar"
                          ? "marginLeft"
                          : "marginRight"]: "10px",
                      }}
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.9638 6.69979C28.92 7.16229 27.7988 7.47479 26.62 7.61604C27.8363 6.88828 28.7462 5.74287 29.18 4.39354C28.0373 5.07228 26.7867 5.55003 25.4825 5.80604C24.6055 4.86962 23.4438 4.24895 22.1779 4.04038C20.912 3.83182 19.6126 4.04703 18.4816 4.6526C17.3505 5.25818 16.451 6.22024 15.9227 7.38942C15.3944 8.5586 15.2669 9.86948 15.56 11.1185C13.2446 11.0023 10.9796 10.4005 8.9118 9.35217C6.84404 8.30386 5.01982 6.83249 3.55752 5.03354C3.05752 5.89604 2.77002 6.89604 2.77002 7.96104C2.76946 8.91978 3.00556 9.86384 3.45737 10.7095C3.90917 11.5551 4.56272 12.2761 5.36002 12.8085C4.43536 12.7791 3.53111 12.5293 2.72252 12.0798V12.1548C2.72243 13.4995 3.18756 14.8028 4.039 15.8435C4.89043 16.8843 6.07573 17.5985 7.39377 17.8648C6.536 18.0969 5.63669 18.1311 4.76377 17.9648C5.13564 19.1218 5.86001 20.1336 6.83548 20.8584C7.81094 21.5833 8.98866 21.985 10.2038 22.0073C8.14106 23.6266 5.59363 24.5049 2.97127 24.501C2.50674 24.5012 2.04261 24.474 1.58127 24.4198C4.24311 26.1313 7.34169 27.0396 10.5063 27.036C21.2188 27.036 27.075 18.1635 27.075 10.4685C27.075 10.2185 27.0688 9.96604 27.0575 9.71604C28.1966 8.89226 29.1799 7.87216 29.9613 6.70354L29.9638 6.69979Z"
                          fill="#173039"
                        />
                      </svg>
                    </a>

                    <a
                      href="https://www.instagram.com/shwraapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        [selectedLocale === "ar"
                          ? "marginLeft"
                          : "marginRight"]: "10px",
                      }}
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.74125 1.8618C11.2075 1.7943 11.675 1.7793 15.41 1.7793C19.145 1.7793 19.6125 1.79555 21.0775 1.8618C22.5425 1.92805 23.5425 2.1618 24.4175 2.50055C25.3338 2.8468 26.165 3.38805 26.8525 4.08805C27.5525 4.7743 28.0925 5.6043 28.4375 6.5218C28.7775 7.3968 29.01 8.3968 29.0775 9.8593C29.145 11.328 29.16 11.7955 29.16 15.5293C29.16 19.2643 29.1438 19.7318 29.0775 21.198C29.0113 22.6605 28.7775 23.6605 28.4375 24.5355C28.0925 25.4532 27.5516 26.2845 26.8525 26.9718C26.165 27.6718 25.3338 28.2118 24.4175 28.5568C23.5425 28.8968 22.5425 29.1293 21.08 29.1968C19.6125 29.2643 19.145 29.2793 15.41 29.2793C11.675 29.2793 11.2075 29.263 9.74125 29.1968C8.27875 29.1305 7.27875 28.8968 6.40375 28.5568C5.48615 28.2118 4.65478 27.6709 3.9675 26.9718C3.26798 26.2851 2.72665 25.4542 2.38125 24.5368C2.0425 23.6618 1.81 22.6618 1.7425 21.1993C1.675 19.7305 1.66 19.263 1.66 15.5293C1.66 11.7943 1.67625 11.3268 1.7425 9.8618C1.80875 8.3968 2.0425 7.3968 2.38125 6.5218C2.72716 5.6044 3.2689 4.77344 3.96875 4.0868C4.65505 3.38742 5.48559 2.8461 6.4025 2.50055C7.2775 2.1618 8.27875 1.9293 9.74125 1.8618ZM20.9663 4.3368C19.5163 4.27055 19.0813 4.2568 15.41 4.2568C11.7388 4.2568 11.3038 4.27055 9.85375 4.3368C8.5125 4.39805 7.785 4.6218 7.3 4.81055C6.65875 5.06055 6.2 5.3568 5.71875 5.83805C5.26256 6.28186 4.91148 6.82215 4.69125 7.4193C4.5025 7.9043 4.27875 8.6318 4.2175 9.97305C4.15125 11.423 4.1375 11.858 4.1375 15.5293C4.1375 19.2005 4.15125 19.6355 4.2175 21.0855C4.27875 22.4268 4.5025 23.1543 4.69125 23.6393C4.91125 24.2355 5.2625 24.7768 5.71875 25.2205C6.1625 25.6768 6.70375 26.028 7.3 26.248C7.785 26.4368 8.5125 26.6605 9.85375 26.7218C11.3038 26.788 11.7375 26.8018 15.41 26.8018C19.0825 26.8018 19.5163 26.788 20.9663 26.7218C22.3075 26.6605 23.035 26.4368 23.52 26.248C24.1613 25.998 24.62 25.7018 25.1013 25.2205C25.5575 24.7768 25.9088 24.2355 26.1288 23.6393C26.3175 23.1543 26.5413 22.4268 26.6025 21.0855C26.6688 19.6355 26.6825 19.2005 26.6825 15.5293C26.6825 11.858 26.6688 11.423 26.6025 9.97305C26.5413 8.6318 26.3175 7.9043 26.1288 7.4193C25.8788 6.77805 25.5825 6.3193 25.1013 5.83805C24.6574 5.38189 24.1171 5.03081 23.52 4.81055C23.035 4.6218 22.3075 4.39805 20.9663 4.3368ZM13.6538 19.768C14.6346 20.1763 15.7267 20.2314 16.7437 19.9239C17.7606 19.6165 18.6392 18.9654 19.2295 18.0821C19.8198 17.1988 20.0851 16.1379 19.9801 15.0807C19.8751 14.0235 19.4063 13.0355 18.6538 12.2855C18.174 11.8061 17.594 11.4391 16.9554 11.2107C16.3168 10.9824 15.6355 10.8985 14.9606 10.9651C14.2857 11.0316 13.6339 11.247 13.0523 11.5957C12.4706 11.9444 11.9734 12.4177 11.5966 12.9816C11.2198 13.5455 10.9727 14.1859 10.8731 14.8567C10.7736 15.5276 10.8239 16.2122 11.0207 16.8612C11.2174 17.5102 11.5556 18.1076 12.0109 18.6102C12.4662 19.1128 13.0273 19.5083 13.6538 19.768ZM10.4125 10.5318C11.0688 9.87552 11.8479 9.35493 12.7054 8.99975C13.5628 8.64457 14.4819 8.46176 15.41 8.46176C16.3381 8.46176 17.2572 8.64457 18.1146 8.99975C18.9721 9.35492 19.7512 9.87552 20.4075 10.5318C21.0638 11.1881 21.5844 11.9672 21.9396 12.8247C22.2947 13.6821 22.4775 14.6012 22.4775 15.5293C22.4775 16.4574 22.2947 17.3765 21.9396 18.2339C21.5844 19.0914 21.0638 19.8705 20.4075 20.5268C19.0821 21.8522 17.2844 22.5968 15.41 22.5968C13.5356 22.5968 11.7379 21.8522 10.4125 20.5268C9.08708 19.2014 8.34247 17.4037 8.34247 15.5293C8.34247 13.6549 9.08708 11.8572 10.4125 10.5318ZM24.045 9.5143C24.2076 9.36088 24.3378 9.1764 24.4279 8.97176C24.5179 8.76713 24.566 8.54651 24.5693 8.32296C24.5725 8.09941 24.5309 7.87748 24.4469 7.67031C24.3628 7.46314 24.238 7.27494 24.08 7.11685C23.9219 6.95876 23.7337 6.83399 23.5265 6.74994C23.3193 6.66589 23.0974 6.62427 22.8738 6.62753C22.6503 6.63078 22.4297 6.67886 22.225 6.76892C22.0204 6.85897 21.8359 6.98917 21.6825 7.1518C21.3841 7.46808 21.2208 7.8882 21.2271 8.32296C21.2335 8.75772 21.409 9.1729 21.7164 9.48035C22.0239 9.78781 22.4391 9.96333 22.8738 9.96967C23.3086 9.97601 23.7287 9.81266 24.045 9.5143Z"
                          fill="#173039"
                        />
                      </svg>
                    </a>

                    <a
                      href="https://www.linkedin.com/company/shwraapp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.63875 9.52469C8.14925 9.52469 9.37375 8.30019 9.37375 6.78969C9.37375 5.27919 8.14925 4.05469 6.63875 4.05469C5.12825 4.05469 3.90375 5.27919 3.90375 6.78969C3.90375 8.30019 5.12825 9.52469 6.63875 9.52469Z"
                          fill="#173039"
                        />
                        <path
                          d="M11.9562 11.5977V26.7714H16.6675V19.2677C16.6675 17.2877 17.04 15.3702 19.495 15.3702C21.9162 15.3702 21.9462 17.6339 21.9462 19.3927V26.7727H26.66V18.4514C26.66 14.3639 25.78 11.2227 21.0025 11.2227C18.7087 11.2227 17.1712 12.4814 16.5425 13.6727H16.4787V11.5977H11.9562ZM4.27875 11.5977H8.9975V26.7714H4.27875V11.5977Z"
                          fill="#173039"
                        />
                      </svg>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              className="items-center w-2/3 space-x-2"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Image
                src={payment1}
                alt="logo"
                style={{
                  marginRight: "7px",
                  width: "30px",
                  height: "18px",
                  objectFit: "contain",
                }}
              />
              <Image
                src={payment2}
                alt="logo"
                style={{
                  marginRight: "7px",
                  width: "30px",
                  height: "18px",
                  objectFit: "contain",
                }}
              />
              <Image
                src={payment3}
                alt="logo"
                style={{
                  marginRight: "7px",
                  width: "30px",
                  height: "18px",
                  objectFit: "contain",
                }}
              />

              <Image
                src={payment4}
                alt="logo"
                style={{
                  marginRight: "7px",
                  width: "30px",
                  height: "18px",
                  objectFit: "contain",
                }}
              />
              <Image
                src={payment5}
                alt="logo"
                style={{
                  marginRight: "7px",
                  width: "30px",
                  height: "18px",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <Box className="justify-spacing" sx={{ display: "flex" }}>
              <Box
                sx={{
                  backgroundColor: "white",
                  border: "1px solid #D2B77D",
                  borderRadius: "4px",
                  display: "flex",
                  gap: "1em",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: "1px",
                  marginRight: "20px",
                  padding: "10px 16px",
                }}
              >
                <Box
                  className="w-90 "
                  sx={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    className=""
                    sx={{
                      color: "black",
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      marginInlineEnd: "0.8rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "8px",
                        fontWeight: "500",
                        marginBottom: "-5px",
                      }}
                    >
                      Available on
                    </span>
                    <span style={{ fontSize: "10px", fontWeight: "bolder" }}>
                      GooglePlay
                    </span>
                  </Box>
                  <Box>
                    <Image
                      src={google}
                      alt="logo"
                      placeholder={"blur"}
                      objectFit="contain"
                      width="20"
                      height="20"
                      style={{ display: "flex" }}
                    />
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  backgroundColor: "white",
                  border: "1px solid #D2B77D",
                  borderRadius: "4px",
                  display: "flex",
                  gap: "1em",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: "1px",
                  marginRight: "20px",
                  padding: "10px 16px",
                }}
              >
                <Box
                  className="w-90 "
                  sx={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      color: "black",
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      marginInlineEnd: "0.8rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "8px",
                        fontWeight: "500",
                        marginBottom: "-5px",
                      }}
                    >
                      Available on
                    </span>
                    <span style={{ fontSize: "10px", fontWeight: "bolder" }}>
                      App Store
                    </span>
                  </Box>
                  <Box className="">
                    <Image
                      src={apple}
                      alt="logo"
                      placeholder={"blur"}
                      objectFit="contain"
                      width="20"
                      height="20"
                      style={{ display: "flex" }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  border: "1px solid #D2B77D",
                  borderRadius: "4px",
                  display: "flex",
                  gap: "1em",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: "1px",
                  marginRight: "10px",
                  padding: "10px 16px",
                }}
              >
                <Box
                  className="w-90 "
                  sx={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      color: "black",
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      marginInlineEnd: "0.8rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "8px",
                        fontWeight: "500",
                        marginBottom: "-5px",
                      }}
                    >
                      Available on
                    </span>
                    <span style={{ fontSize: "10px", fontWeight: "bolder" }}>
                      Huawei Store
                    </span>
                  </Box>
                  <Box className="">
                    <Image
                      src={huawei}
                      alt="logo"
                      placeholder={"blur"}
                      objectFit="contain"
                      width="20"
                      height="20"
                      style={{ display: "flex" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12}>
            <Divider className="mt-[20px] bg-[#F6EBD3]" />
            <Typography
              sx={{
                color: "#173039",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "0.7rem",
                fontWeight: "bold",
                marginTop: "1rem",
                textAlign: "center",
              }}
            >
              shwra © 2020 All Right Reserved
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
