import { Link } from "remix";
import { Row } from "react-bootstrap";
import styles from "~/styles/card.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Cards() {
  return (
    <Row>
      <div className="card">
        <div className="card-content">
          <p className="card-title"> Pro-Tekt Asset Protection </p>
          <p className="card-body">
            Pro-tekt is an Australian made GPS vehicle tracking system that
            helps you keep track of your assets{" "}
          </p>
          <Link to="/protekt" className="button">
            Learn More
          </Link>
        </div>
      </div>

      <div className="fulcrum_card">
        <div className="fulcrum_card-content">
          <p className="fulcrum_card-title"> Fulcrum Software Solutions </p>
          <p className="card-body">
            Fulcrum Software Solutions is my business website, I help you build
            your Dream website or business app.{" "}
          </p>
          <Link to="/fulcrum" className="fulcrum_button">
            Learn More
          </Link>
        </div>
      </div>
      <div className="La_card">
        <div className="La_card-content">
          <p className="La_card-title"> LA Neon Events </p>
          <p className="card-body">
            LA Neon Events is a Ecommerce website, that sell Neon lights, this
            site is built fully with React and uses Storyblok as a Headless CMS
          </p>
          <Link to="/laneon" className="La_button">
            Learn More
          </Link>
        </div>
      </div>
    </Row>
  );
}
