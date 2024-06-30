// import React, { useState } from "react";
// //
// import styled from "styled-components";
// // hooks
// // react-bootstrap
// import { Navbar, Nav } from "react-bootstrap";
// // atoms

import { CiCalendar } from "react-icons/ci";
import { GrDocumentText } from "react-icons/gr";
import { IoIosMenu, IoIosNotificationsOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineChat } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";

// import ButtonLink from "../atoms/ButtonLink";
// import Link from "next/link";

// const NAV_ITEMS = [
//   {
//     id: "home",
//     label: "الرئيسية",
//     href: "/",
//   },
//   // {
//   //   id: "homeBusiness",
//   //   label: "شورى للأعمال",
//   //   href: "/business",
//   // },
//   {
//     id: "about",
//     label: "عن شورى",
//     href: "/WhyUs",
//   },
//   {
//     id: "features",
//     label: "فريق العمل",
//     href: "/BoardOfDirectors",
//   },
//   {
//     id: "services",
//     label: "اطلب خدمة قانونية",
//     href: "/LegalAdvisor",
//   },
//   {
//     id: "usage",
//     label: "خدمات شورى",
//     href: "/Services",
//   },
//   {
//     id: "team",
//     label: "طريقة استخدام شورى",
//     href: "/UseGuide",
//   },
//   {
//     id: "contact",
//     label: "الأسئلة الشائعة",
//     href: "/faqs",
//   },
// ];

// type NavBarProps = {
//   className?: string;
//   style?: React.CSSProperties;
//   business?: boolean;
// };

// export default function NavItemList({
//   className,
//   style,
//   business,
// }: NavBarProps) {
//   const classes = className ? `navbar-nav ${className}` : "navbar-nav";
//   const pathName = window.location.pathname;
//   //const pathName = window.location.pathname;
//   const PathName =
//     pathName.slice(-1) == "/" && pathName.length > 1
//       ? pathName.substring(0, pathName.length - 1)
//       : pathName;

//   return (
//     <Nav
//       className={classes}
//       style={{
//         marginRight: "0",
//         display: "flex",
//         width: "90%",
//         justifyContent: "space-between",
//         alignItems: "center",
//         color: "red",
//         ...style,
//       }}
//     >
//       {NAV_ITEMS.map((item, i) => (
//         <div
//           className={
//             PathName == item.href
//               ? "round-NavLink-Wrapper-Active"
//               : business
//               ? " round-NavLink-Wrapper-business"
//               : " round-NavLink-Wrapper"
//           }
//         >
//           <Link
//             href={item.href}
//             aria-current="page"
//             style={{
//               color: "inherit",
//             }}
//           >
//             {item.label}
//           </Link>
//         </div>
//       ))}

//       <div
//         style={{
//           // marginRight: "20px",
//           display: "flex",
//         }}
//       >
//         <ButtonLink
//           color={business ? "var(--secondary-color)" : "var(--text-dark)"}
//           href="/business"
//         >
//           شورى للاعمال
//         </ButtonLink>
//       </div>
//     </Nav>
//   );
// }

export const items = [
  { id: 1, text: "main", iconActive: <IoHomeOutline />, iconInactive: <IoHomeOutline />, link: "/pages/services" },
  { id: 2, text: "requests", iconActive: <GrDocumentText />, iconInactive: <GrDocumentText />, link: "/pages/requests" },
  { id: 3, text: "appointments", iconActive: <IoCalendarClearOutline />, iconInactive: <IoCalendarClearOutline />, link: "/pages/appointments" },
  { id: 4, text: "conversations", iconActive: <MdOutlineChat />, iconInactive: <MdOutlineChat />, link: "/pages/conversations" },
  {
    id: 5,
    text: "notification",
    iconActive: <FiBell />,
    iconInactive: <FiBell />,
    link: "/pages/notification",
  },
  { id: 6, text: "more", iconActive: <IoIosMenu />, iconInactive: <IoIosMenu />, link: "/pages/more" },
  
  
];
