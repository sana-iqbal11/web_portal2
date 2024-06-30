// import * as React from "react";
// import styled from "styled-components";
// //
// // hooks
// // react-bootstrap
// import { Container } from "react-bootstrap";
// // atoms
// import NavBar from "../atoms/NavBar";
// // molecules
// import NavItemList from "../molecules/NavItemList";
// import NavMobile from "../molecules/NavMobile";
// import Image from "next/image";
// import logo from "./../../../../public/Group 127.webp";

// type HeaderProps = {
//   business?: boolean;
// };

// export default function Header({ business }: HeaderProps) {
//   // offsetHeight: 139px
//   const [isScrolled, setIsScrolled] = React.useState(false);
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [isOpenMenu, setIsOpenMenu] = React.useState(false);

//   const handleScroll = () => {
//     const isScrolled = window.scrollY > 40;
//     setIsScrolled(isScrolled);
//   };

//   React.useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <NavBar
//       className="navbar-expand-sm d-md-block"
//       expand="lg"
//       isScrolled={isScrolled}
//     >
//       <Container
//         fluid
//         className="align-items-center nav-Container  justify-content-space-between"
//       >
//         {/* NavBar.Brand*/}

//         <div className="mx-auto mx-md-0 ">
//           <Image
//             src={logo}
//             alt="logo"
//             placeholder={"blur"}
//             width={82}
//             height={75}
//           />
//         </div>

//         {/* <Media  greaterThan="sm">
//              <VLogo />
//             </Media> */}

//         {/* NavBar. */}

//         <NavItemList business={business} className="d-none d-lg-flex" />
//         <div className="d-lg-none">
//           <NavMobile />
//         </div>
//       </Container>
//     </NavBar>
//   );
// }
