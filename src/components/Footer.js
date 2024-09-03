import React from "react";
import Images from "../components/Images";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FooterLogo from "../assets/images/FooterLogo.png";
import MainLayOut from "../Layout/MainLayOut";

function Footer() {
  return (
    <Container>
      <MainLayOut style="p-3">
        <Row>
          <MainLayOut style="col-12 col-sm-6 text-center text-lg-start">
            <Images style="w-10" link={FooterLogo} />
          </MainLayOut>
          <div className="col-12 col-sm-6 text-center pt-2">
            Copyright © 2022 Rainbow-Themes. All Rights Reserved.
          </div>
        </Row>
      </MainLayOut>
    </Container>
  );
}

export default Footer;
