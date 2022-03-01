import Banner from "../components/Sections/Banner/banner.jsx";
import SectionTitle from "~/components/Sections/Section_Title/Section-title.jsx";
import { Container } from "react-bootstrap";
import Text from "../components/Sections/Text/ProblemText";

export default function LaNeon() {
  return (
    <div>
      <Banner
        subheaderCss="subheader_LA"
        headerCss="header_LA"
        style="banner_LA"
        header="LA Neon Events"
      />
      <Container className="layout">
        <div></div>
        <SectionTitle title="Problem Statment" style="Problem_Statment" />

        <Text
          text=" Commodo labore consequat sunt proident fugiat proident dolore eiusmod
  commodo cupidatat est ipsum voluptate mollit voluptate laborum mollit
  pariatur occaecat. Amet quis Lorem labore deserunt exercitation anim
  sunt quis velit sunt. In dolor ex est esse laboris voluptate non eiusmod
  ut. Commodo minim aute tempor officia nulla enim cupidatat ullamco quis
  labore do ex sint laborum qui. Sint duis laboris id ea labore aliqua non
  nisi sint aute minim fugiat mollit. Ut irure ex ea enim minim
  consectetur nostrud nulla eiusmod consectetur enim. Est adipisicing
  eiusmod qui adipisicing dolore ea elit consectetur non quis adipisicing.
  Elit aliqua laborum veniam id elit nulla est anim eiusmod ut non et.
  Laboris proident excepteur est laboris quis sit nisi ullamco quis sunt
  et id laboris occaecat non eiusmod ad qui sunt. Laboris minim
  reprehenderit non incididunt aute commodo non aliqua ea qui pariatur ut
  sint adipisicing est incididunt amet irure ut. Do voluptate aliqua non
  labore. Incididunt dolor do veniam velit duis exercitation quis veniam
  aute non adipisicing ipsum dolor laboris voluptate pariatur dolore. Anim
  nisi quis pariatur quis reprehenderit officia eiusmod reprehenderit
  adipisicing nisi et in ut cupidatat tempor. Amet elit proident nostrud
  culpa do duis quis in ex pariatur duis."
        />

        <SectionTitle
          title="How I Helped Solve The Issue"
          style="Problem_Statment"
        />
        <Text
          text=" Commodo labore consequat sunt proident fugiat proident dolore eiusmod
  commodo cupidatat est ipsum voluptate mollit voluptate laborum mollit
  pariatur occaecat. Amet quis Lorem labore deserunt exercitation anim
  sunt quis velit sunt. In dolor ex est esse laboris voluptate non eiusmod
  ut. Commodo minim aute tempor officia nulla enim cupidatat ullamco quis
  labore do ex sint laborum qui. Sint duis laboris id ea labore aliqua non
  nisi sint aute minim fugiat mollit. Ut irure ex ea enim minim
  consectetur nostrud nulla eiusmod consectetur enim. Est adipisicing
  eiusmod qui adipisicing dolore ea elit consectetur non quis adipisicing.
  Elit aliqua laborum veniam id elit nulla est anim eiusmod ut non et.
  Laboris proident excepteur est laboris quis sit nisi ullamco quis sunt
  et id laboris occaecat non eiusmod ad qui sunt. Laboris minim
  reprehenderit non incididunt aute commodo non aliqua ea qui pariatur ut
  sint adipisicing est incididunt amet irure ut. Do voluptate aliqua non
  labore. Incididunt dolor do veniam velit duis exercitation quis veniam
  aute non adipisicing ipsum dolor laboris voluptate pariatur dolore. Anim
  nisi quis pariatur quis reprehenderit officia eiusmod reprehenderit
  adipisicing nisi et in ut cupidatat tempor. Amet elit proident nostrud
  culpa do duis quis in ex pariatur duis."
        />
      </Container>
    </div>
  );
}
