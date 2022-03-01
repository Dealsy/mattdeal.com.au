import Banner from "../components/Sections/Banner/banner.jsx";
import Logo from "../../public/assets/images/logo.png";
import PCs from "../../public/assets/images/pcs.jpg";
import SectionTitle from "~/components/Sections/Section_Title/Section-title.jsx";
import Text from "../components/Sections/Text/ProblemText";
import { Container } from "react-bootstrap";

export default function Protekt() {
  return (
    <div>
      <Banner
        subheaderCss="subheader_protekt"
        headerCss="header_protekt"
        style="banner_protekt"
        homeButton="Protekt_Home_button "
        arrow="Protekt-arrow left"
        image={Logo}
      />{" "}
      <Container className="layout">
        <div>
          <SectionTitle title="Problem Statment" style="Problem_Statment" />
        </div>

        <Text text="Matt Penhall is the Director of Pro-Tekt, Matt is an auto eletrican by trade, and had had enough of hearing about stories of peoples assets being soten. " />

        <Text
          text=" Matt came up with the idea of Pro-Tekt back in 2015, he needed a platform that could track people's assets such as their cars, motorbikes, carvens, trucks etc. I was hired as a contractor
          to join a team to help build this project out."
        />

        <div>
          <SectionTitle
            title="How I Helped Solve The Issue"
            style="Problem_Statment"
          />
        </div>
        <div className="flex-text">
          <img className="Protekt_pc" src={PCs}></img>
          <Text
            text="I was given the role of the Lead Frontend Developer for this job, and was responseible for building out the UI/UX and design of the business app called the fleet screen, the fleet screen
           is a platform that was built on Javascript / HTML 5 / CSS3 and a Python backend and it's purpose is to allow the user to view and track their vehicles from any device at anytime"
          />
        </div>
        <Text
          text="I was given the role of the Lead Frontend Developer for this job, and was responseible for building out the UI/UX and design of the business app called the fleet screen, the fleet screen
           is a platform that was built on Javascript / HTML 5 / CSS3 and a Python backend"
        />
        <Text text="" />
      </Container>
    </div>
  );
}
