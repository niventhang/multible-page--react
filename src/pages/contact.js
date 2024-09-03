import React from "react";
import Footer from "../components/Footer";
import MainLayOut from "../Layout/MainLayOut";
import { Container, Row } from "react-bootstrap";
import Bannerlogo from "../assets/images/Bannerlogo.jpg";
import Images from "../components/Images";
import Contact from "../components/Contact";
function Contacts() {
  return (
    <MainLayOut>
      <MainLayOut style="bg-color py-5">
        <Container className="my-lg-5">
          <Row>
            <MainLayOut style="col-12 col-md-6">
              <Contact />
            </MainLayOut>
            <MainLayOut style="col-12 col-md-6">
              <Images style="w-100 mt-5 mt-lg-0" link={Bannerlogo} />
            </MainLayOut>
          </Row>
        </Container>
      </MainLayOut>
      <Footer />
    </MainLayOut>
  );
}

export default Contacts;
