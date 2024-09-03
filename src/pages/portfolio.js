import React from 'react'
import Navbars from "../components/Navbars";
import Footer from "../components/Footer";
import Text from "../components/Text";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CardItems } from "../components/Cards";
import Contact from "../components/Contact";
import Images from "../components/Images";
import MainLayOut from "../Layout/MainLayOut";
import Bannerlogo from "../assets/images/Bannerlogo.jpg";

function Portfolio() {
    return (
        <MainLayOut>
        <MainLayOut style="text-center">
          <Text style="h7 fw-bold lh-base" text="My Latest Project" />
          <Text
            style="w50 m-auto py-3"
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
    )
}

export default Portfolio