import PhonePlaceHolder from "../../public/assets/images/Frame_5.svg";
import MainButton from "~/components/button/main_button";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../components/Cards/Cards";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Row className="backgroundStripe">
        <Col md={6}>
          <div>
            <div>
              <p className="@apply mt-24 ml-32 p-10 font-sans text-7xl  ">
                Frontend Developer & UI / UX Designer
              </p>
            </div>
          </div>
          <div className="ml-40 ">
            <MainButton children="Learn More" />
          </div>
        </Col>
        <Col>
          <img
            src={PhonePlaceHolder}
            className="PhoneImage mt-24 ml-20 drop-shadow-lg "
          />
        </Col>
      </Row>
      <div className="backgroundStripe2">
        <p className="@apply   text-center font-sans text-5xl font-bold">
          Projects
        </p>
        <p className="@apply mb-36 text-center font-sans text-lg">
          Listed below are a few projects I have worked on
        </p>
        <Container className="mb-20">
          <Cards />
        </Container>
        <Container>
          <About />
        </Container>
        <Contact />
      </div>
    </div>
  );
}
