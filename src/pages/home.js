import "bootstrap/dist/css/bootstrap.css";
import MainLayOut from "../Layout/MainLayOut";
import Footer from "../components/Footer";
import Text from "../components/Text";
import Images from "../components/Images";
import { Container, Row } from "react-bootstrap";
import Bannerlogo from "../assets/images/Bannerlogo.jpg";
import About from "../assets/images/about-1.jpg";
import Navtabs from "../components/Navtabs";
import Cards from "../components/Cards";
import { CardItems } from "../components/Cards";
import "../App.css";
import Contact from "../components/Contact";
import Animation from "../components/Animation";

function Home() {
  return (
    <MainLayOut>
      <Container>
        <Row className="text-center text-lg-start">
          <MainLayOut style="col-12 col-lg-6 d-flex flex-column justify-content-center vh-100">
            <Text style="letterspecing text-capitalize" text="Welcome to my World" />
            <Text style="h7 fw-bold" text="Hi, I’m Niventhan" />
            <Animation style="h7 fw-bold text-danger" />
            <Text style="h0" text="based in India." />
          </MainLayOut>
          <MainLayOut style="col-12 col-lg-6 mt-3 mt-lg-0">
            <Images style="w-100" link={Bannerlogo} />
          </MainLayOut>
        </Row>
      </Container>

      <MainLayOut style="bg-color py-lg-5">
        <Container>
          <Row className="my-lg-5">
            <MainLayOut style="col-12 col-lg-6">
              <Images style="w-100" link={About} />
            </MainLayOut>
            <MainLayOut style="col-12 col-lg-6 mt-5">
              <Text style="h7 fw-bold text-center text-lg-start" text="About Me" />
              <Text style="mb-4 text-center text-lg-start" text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour, or randomised words which don't look even slightly believable." />
              <Navtabs />
            </MainLayOut>
          </Row>
        </Container>
      </MainLayOut>

      <MainLayOut>
        <Container>
          <MainLayOut style="text-center pt-5">
            <Text style="h7 fw-bold lh-base" text="My Awesome Service" />
            <Text style="w50 m-auto" text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />
          </MainLayOut>
          <Row className="my-5">
            <Cards />
          </Row>
        </Container>
      </MainLayOut>

      <MainLayOut style="text-center">
        <Text style="h7 fw-bold lh-base" text="My Latest Project" />
        <Text style="w50 m-auto py-3" text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. Development Getting tickets to the big show. View Details." />
        <Container>
          <Row>
            <CardItems />
          </Row>
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

export default Home;
