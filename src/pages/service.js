import React from "react";
import Footer from "../components/Footer";
import MainLayOut from "../Layout/MainLayOut";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Text from "../components/Text";
import Images from "../components/Images";
import Cards from "../components/Cards";
import { CardItems } from "../components/Cards";
import Contact from "../components/Contact";
import Bannerlogo from "../assets/images/Bannerlogo.jpg";

function Service() {
  return (
    <MainLayOut>
      <MainLayOut style="text-center pt-5">
        <Text style="h7 fw-bold lh-base" text="My Awesome Service " />
        <Text
          style="w50 m-auto"
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
        />
        <Container>
          <Row className="my-5">
            <Cards />
          </Row>
        </Container>
      </MainLayOut>
      <MainLayOut style="text-center">
        <Text style="h7 fw-bold lh-base" text="My Latest Project" />
        <Text
          style="w50 m-auto"
          text="There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration. Development Getting tickets 
          to the big show View Details Development Getting tickets to the big 
          show View Details"
        />
        <Container>
          <Row>
            <CardItems />
          </Row>
          <Button variant="danger" className="px-4 py-2 fs-5 my-5 uppercase">
            View More{" "}
          </Button>{" "}
        </Container>
      </MainLayOut>
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

export default Service;
