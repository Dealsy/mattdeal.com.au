import PhonePlaceHolder from "../../public/assets/images/Frame_5.svg";
import MainButton from "~/components/button/main_button";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../components/Cards/Cards";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <div className="backgroundStripe">
        <Container>
          <Row>
            <Col md={6}>
              <div>
                <div className="Responsive-Container">
                  <h1 className="@apply  Text-distance-Header mt-24 pb-5 font-sans  text-7xl leading-none">
                    Frontend Developer & UI / UX Designer
                  </h1>
                  <p className=" 	Text-distance pb-5 text-lg leading-7 text-gray-300">
                    {" "}
                    I build beautiful and responsive websites and applications
                    for small businesses and the every day Joe a like
                  </p>
                </div>
              </div>
              <div>
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
        </Container>
      </div>
      <div className="backgroundStripe2">
        <Container>
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
