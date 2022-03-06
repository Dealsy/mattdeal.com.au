import { Link } from "remix";
import { Row } from "react-bootstrap";
import SectionTitle from "../Sections/Section_Title/Section-title";
import Bounce from "react-reveal/Bounce";

export default function Cards() {
  return (
    <Row style={{ marginBottom: "5rem" }}>
      <SectionTitle
        style="Section-Title-Header"
        title="Projects"
        subtitle="Listed below are a few projects I have worked on"
      />
      <Bounce left>
        <div className="Protekt_card ">
          <div className="card-content">
            <p className="card-title"> Pro-Tekt Asset Protection </p>
            <p className="card-body">
              Pro-tekt is an Australian made GPS vehicle tracking system that
              helps you keep track of your assets{" "}
            </p>
            <Link prefetch="render" to="/protekt" className="button">
              Learn More
            </Link>
          </div>
        </div>
      </Bounce>
      <Bounce clear>
        <div className="La_card">
          <div className="La_card-content">
            <p className="La_card-title"> LA Neon Events </p>
            <p className="card-body">
              LA Neon Events is a Ecommerce website, that sell Neon lights, this
              site is built fully with React and uses Storyblok as a Headless
              CMS.
            </p>
            <Link prefetch="render" to="/laneon" className="La_button">
              Learn More
            </Link>
          </div>
        </div>
      </Bounce>
      <Bounce right>
        <div className="fulcrum_card">
          <div className="fulcrum_card-content">
            <p className="fulcrum_card-title"> Fulcrum Software Solutions </p>
            <p className="card-body">
              Fulcrum Software Solutions is my business website, I help you
              build your Dream website or business app.{" "}
            </p>
            <Link prefetch="render" to="/fulcrum" className="fulcrum_button">
              Learn More
            </Link>
          </div>
        </div>
      </Bounce>
    </Row>
  );
}
