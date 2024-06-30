import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Media } from "../atoms/Media";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import Typography from "../atoms/Typography";

// const LinkButton = styled(Link)`
//   font-size: 14px;
//   font-weight: 500;
//   text-decoration: none;
//   padding: 0px 20px;
//   border: none;
//   background-color: #f5f5f5;
//   outline: none;
//   cursor: pointer;
//   border-radius: 26px;
//   line-height: 35px;
//
//   &:hover {
//     color: #000;
//     text-decoration: none;
//   }
//   &:focus {
//     outline: none;
//   }
//   &:active {
//     outline: none;
//     color: red;
//     border: 1px solid #000;
//     background-color: red;
//   }
//   color: black;
//   &.active-btn {
//     color: #cc9a28;
//     border: 1px solid #cc9a28;
//     background-color: white;
//   }
// `;

export default function ToolBarSection({ business }: { business: boolean }) {
  const ToolBar = styled.section`
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom:100px
  border-bottom: 1px solid #e6e6e6;
  position: absolute;
  height: 45px;
  padding: 5px 0px;
  background-color:${business ? "#07242E" : "#fff"} ;
  color:${business ? "#fff" : undefined} ;
`;

  return (
    <Media greaterThan="sm">
      <ToolBar>
        <Container>
          {/*<Col xs={12} sm={6} md={6} lg={6} className="sm-none">

              <Stack
                gap={5}
                direction="horizontal"
                className="d-flex justify-content-start"
              >
                <LinkButton
                  to="/"
                  activeClassName="active-btn"
                  className="d-flex justify-content-center active-btn"
                >
                  العربية
                </LinkButton>
              </Stack>
  </Col> */}

          <Stack
            gap={5}
            direction="horizontal"
            className={`d-flex  justify-content-center align-items-center`}
          >
            <div
              onClick={() => window.open("mailto:info@shwra.sa")}
              style={{ cursor: "pointer" }}
            >
              <Typography
                variant="h4"
                className="d-flex justify-content-center align-items-center "
                style={{
                  padding: 8,
                  cursor: "pointer",
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
                variant="h4"
                className="d-flex justify-content-center align-items-center"
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
        </Container>
      </ToolBar>
    </Media>
  );
}
