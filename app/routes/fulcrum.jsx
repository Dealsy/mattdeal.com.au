import Banner from "../components/Sections/Banner/banner.jsx";
import SectionTitle from "~/components/Sections/Section_Title/Section-title.jsx";
import { Link } from "remix";
import { Container } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

export default function Fulcrom() {
  const Arrow = <FaArrowLeft />;
  return (
    <div>
      <div className="Ful_Nav">
        <nav className="Ful_Nav">
          <Link className="La-home" to="/">
            <button className="Ful_Button_style ">
              <div className="flex-Button">
                <div className="ArrowSpace">{Arrow}</div>
                <div>Home</div>
              </div>
            </button>
          </Link>
        </nav>
      </div>
      <Banner
        subheaderCss="subheader_Fulcrum"
        headerCss="header_Fulcrum"
        style="banner_Fulcrum"
        header="Fulcrum Software Solutions"
        subheader="Desgin Your Dream Website "
      />
      <Container className="layout Problem-Statement-Text">
        <div></div>
        <SectionTitle title="Problem Statment" style="Problem_Statment" />
        <p>
          I started to do freelancing but typically found that customers where
          after a busssiness to work with not, just some guy named Matt. I
          needed a better way to advertise myself and promote my work"
        </p>
        <SectionTitle
          title="How I Helped Solve The Issue"
          style="Problem_Statment"
        />
        <p>
          I created Fulcrum Software Solutions to help get more freelancing
          opportunities.
        </p>
        <p>
          I built Fulcrums website with React and hooked the form up using
          Email.JS
        </p>
        <p>
          Currently the website is just a single page with a list of things we
          can do for you, I plan to completly rebuild this webpage at some stage
          to have a lot more functionallity with it's own blog and portfolio
          section.
        </p>
        You can check out Fulcrum Software Solutions{" "}
        <a href="https://fulcrumsoftwaresolutions.com.au/" target="_blank">
          here
        </a>
        {/* <SectionTitle title="Technologies Used" style="Problem_Statment_Tech" /> */}
      </Container>
    </div>
  );
}
