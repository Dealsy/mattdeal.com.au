import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Fulcrum from "../../../public/assets/images/Fulcrum.svg";
import Protekt from "../../../public/assets/images/protekt.svg";
import LA from "../../../public/assets/images/Laneon.svg";
import { Link } from "remix";

export default function Cards() {
  const [hover, setHover] = React.useState();
  const [laHover, setLaHover] = React.useState();
  const [proHover, setProHover] = React.useState();

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };
  const handleMouseInPro = () => {
    setProHover(true);
  };

  const handleMouseOutPro = () => {
    setProHover(false);
  };
  const handleMouseInLa = () => {
    setLaHover(true);
  };

  const handleMouseOutLa = () => {
    setLaHover(false);
  };

  return (
    <Row>
      <Col md={4}>
        {hover ? (
          <div className="relative">
            <Link
              className=" absolute  w-full bg-purple-700  text-center text-lg font-bold text-white"
              to="/projects"
            >
              Learn More
              <Card.Img
                onMouseOver={handleMouseIn}
                onMouseOut={handleMouseOut}
                className=" cursor-pointer opacity-50 "
                variant="top"
                src={Fulcrum}
              />
            </Link>
          </div>
        ) : (
          <Card.Img
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            variant="top"
            src={Fulcrum}
          />
        )}
      </Col>

      <Col md={4}>
        {laHover ? (
          <div className="relative">
            <Link
              className=" absolute  w-full bg-gray-300  text-center text-lg font-bold text-white"
              to="/projects"
            >
              Learn More
              <Card.Img
                onMouseOver={handleMouseInLa}
                onMouseOut={handleMouseOutLa}
                className=" cursor-pointer opacity-50 "
                variant="top"
                src={LA}
              />
            </Link>
          </div>
        ) : (
          <Card.Img
            onMouseOver={handleMouseInLa}
            onMouseOut={handleMouseOutLa}
            variant="top"
            src={LA}
          />
        )}
      </Col>
      <Col md={4}>
        {proHover ? (
          <div className="relative">
            <Link
              className=" absolute  w-full bg-gray-800  text-center text-lg font-bold text-white"
              to="/projects"
            >
              Learn More
              <Card.Img
                onMouseOver={handleMouseInPro}
                onMouseOut={handleMouseOutPro}
                className=" cursor-pointer opacity-50 "
                variant="top"
                src={Protekt}
              />
            </Link>
          </div>
        ) : (
          <Card.Img
            onMouseOver={handleMouseInPro}
            onMouseOut={handleMouseOutPro}
            variant="top"
            src={Protekt}
          />
        )}
      </Col>
    </Row>
  );
}
