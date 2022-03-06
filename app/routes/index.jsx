import PhonePlaceHolder from "../../public/assets/images/devices_1.svg";
import MainButton from "~/components/button/main_button";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../components/Cards/Cards";
import About from "../components/About/About";
import TechStack from "../components/TechStack/TechStack";
import Contact from "../components/Contact/Contact";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Nav from "../components/Nav/nav";
import MobileNav from "../components/Nav/mobileNav";

export default function Home() {
  return (
    <div>
      <div className="backgroundStripe">
        <MobileNav />
        <Nav />

        <Container className="TopContainer">
          <Row>
            <Col md={2}>
              <div>
                <div className="Responsive-Container">
                  <h1 className="topHeader">
                    Frontend Developer & UI / UX Designer
                  </h1>
                  <p className=" TopSubHeader">
                    {" "}
                    I build beautiful responsive websites and applications for
                    small businesses and the every day Joe a like
                  </p>
                </div>
              </div>
              <div>
                <AnchorLink href="#projects">
                  <MainButton children="Learn More" />
                </AnchorLink>
              </div>
            </Col>
            <Col>
              <img src={PhonePlaceHolder} className="PhoneImage " />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="backgroundStripe2">
        <Container id="projects">
          <Cards />
        </Container>
        <Container>
          <TechStack />
        </Container>
        <Container id="about">
          <About />
        </Container>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
