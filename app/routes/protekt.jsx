import Banner from "../components/Sections/Banner/banner.jsx";
import Footer from "~/components/Footer/Footer";
import ProjectsNav from "../components/Nav/projectsNav";
import Logo from "../../public/assets/images/logo.png";
import PCs from "../../public/assets/images/pcs.jpg";
import MapView from "../../public/assets/images/MapView.png";
import Menu from "../../public/assets/images/Menu.png";
import History from "../../public/assets/images/History.png";
import Event from "../../public/assets/images/Event.png";
import SectionTitle from "~/components/Sections/Section_Title/Section-title.jsx";
import { Container, Alert } from "react-bootstrap";
import { SiJavascript, SiBootstrap, SiPython, SiFlask } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
export default function Protekt() {
  const Python = <SiPython />;
  const JS = <SiJavascript />;
  const Bootstrap = <SiBootstrap />;
  const CSS = <FaCss3Alt />;
  const Flask = <SiFlask />;
  return (
    <div>
      <ProjectsNav
        Style="Project_Nav"
        LinkStyle="Project_Nav"
        url="/"
        btn="button_Style"
        content="Home"
        Blogcontent="Blog"
        Blogbtn="BlogButton"
      />
      <Banner
        subheaderCss="subheader_protekt"
        headerCss="header_protekt"
        style="banner_protekt"
        image={Logo}
      />{" "}
      <Container className="layout Problem-Statement-Text">
        <div>
          <SectionTitle title="Problem Statment" style="Problem_Statment" />
        </div>
        <p>
          Matt Penhall is the Director of Pro-Tekt, Matt. An auto electrician by
          trade, had heard a lot of stories where people had lost their assets
          or had their assets stolen, and this is how he came up with the
          concept of Pro-Tekt back in 2015.
        </p>
        <p>
          Matt needed a platform which could track people's assets, such as
          their cars, motorbikes, caravans, trucks, etc., and this is where I
          was engaged as a contractor to join a team to help build this project
          out.
        </p>
        <div>
          <SectionTitle
            title="How I Helped Solve The Issue"
            style="Problem_Statment"
          />
        </div>
        <div className="flex-text">
          <img className="Protekt_pc" src={PCs}></img>
          <p>
            My role was Lead Frontend Developer on this project, where I was
            responsible for building out the UI/UX and design of the business
            app called the Fleet Screen. The Fleet Screen is a platform built on
            JavaScript / HTML 5 / CSS3 and a Python backend. It’s purpose is to
            allow the user to view and track their vehicles from any device at
            any time using the 3G and 4G network, depending on which device you
            get.
          </p>
        </div>

        <SectionTitle title="Technologies Used" style="Problem_Statment_Tech" />
        <div className="tech-flex Tech_div">
          <div className="Python">{Python}</div>
          <div className="Bootstrap">{Bootstrap}</div>
          <div className="JS">{JS}</div>
          <div className="CSS">{CSS}</div>
          <div className="Flask">{Flask}</div>
        </div>
        <SectionTitle title="Pro-Tekt Overview" style="Problem_Statment" />
        <p>
          In this section, I will run over the core features of Pro-Tekt and
          what they do. You can visit the official site for more information, or
          to purchase a tracker for yourself, by clicking this link {""}
          <a
            className="Pro-Tekt-Link"
            href="https://www.pro-tekt.com.au/"
            target="_blank"
          >
            Pro-Tekt
          </a>
          .
        </p>
        <SectionTitle title="Fleet Screen" style="Problem_Statment_map" />
        <p>
          The map view is the main viewpoint of the fleet screen. It has all
          your details, from where your vehicles are, to how many km they have
          driven or how long the drive took and so on.
        </p>
        <div className="flex-image-left">
          <p>
            Below is a screen shot of the map view and as you can see I have two
            vehicles listed on the map, and to the right there is a menu which
            lists all of my tracked vehicles.
          </p>
          <img className="Map" src={MapView}></img>
        </div>
        <p>
          If I click on one of the Assets, it will open up a new menu which only
          focuses on that one particular vehicle, it also lists several options
          to explore. In this example I will open up my pride and joy, my
          motorbike - the ZX600R.
        </p>
        <div className="flex-image-right">
          <p>
            Once we are in here the map view will only show the one selected
            Asset. The main difference now is the menu itself – as you can see
            in the image there is a multitude of different options in the menu.
          </p>

          <img className="Menu" src={Menu}></img>
        </div>

        <p>Let's run through the main functions.</p>
        <SectionTitle title="Live Tracking" style="Problem_Statment_map" />
        <p>
          Pro-Tekt will allow you to live track your asset (vehicle), so if the
          worst case happens, and your Motorbike or car is stolen, or if you
          just want to see how your workers are operating, all you have to do it
          hit the “Live Track” button - this will in turn refresh the location
          of the asset every 5 seconds
        </p>
        <SectionTitle title="Events Log" style="Problem_Statment_map" />
        <p>
          The Events Log can tell you many things involving your asset. These
          include:
        </p>
        <div className="flex-image-right">
          <img className="Event" src={Event} />
          <ul type="none">
            <li className="Problem_Statment_Event">Tamper Alarm</li>
            <p>
              The Tamper Alarm notifies you if someone or something is moving
              your asset. For example, You have a motorbike and you have enabled
              the tamper alarm. Along comes Bazza, he’s had one too many drinks,
              and he has decided to test out how your motor bike feels. (and yes
              this happens).{" "}
            </p>
            <p>
              In response, Pro-Tekt will send you a notification informing you
              someone is tampering with your bike.
            </p>
            <li className="Problem_Statment_Event">Power Cut Alarm</li>
            <p>
              The Power Cut Alarm will notify you if the power source from the
              asset to the tracker is cut. However the Pro-tekt tracking device
              comes with a built-in battery that will last up to 4 hours by
              itself and will continue to push out geo-locations until power has
              expired.
            </p>
            <p>
              Power cut are most commonly due to the battery on your vehicle
              being disconnected, which can occur for a variety of reasons.
            </p>
            <li className="Problem_Statment_Event">Geo Limit Breach</li>
            <p>
              {" "}
              The Geo limit alarm tells you when you're asset has moved, and you
              have the option to set the geolocation. Should the asset move
              beyond that set 360-degree radius, a message will be sent to your
              phone informing you of said Geo Limit breach.
            </p>
          </ul>
        </div>
        <SectionTitle title="Route History" style="Problem_Statment_map" />
        <div className="flex-image-left">
          <img className="History" src={History}></img>
          <p>
            The final function we will talk about is the Route history section.
            In this section you can choose a date from and the past and the Pro
            Tekt will display the route taken by that asset on that day.
          </p>
        </div>
        <p>
          This is a fabulous tool to help recall shortcuts, scenic roads, etc
          from a previous trip and retravel them again as required.
        </p>
        <div>
          <Alert variant="info">
            Pro-Tekt keeps up to 12 months of historical data for you to delve
            through.
          </Alert>
        </div>
        <SectionTitle title="Conclusion" style="Problem_Statment" />
        <p>
          Pro-Tekt is an asset tracking device which can be placed onto just
          about anything with a power source and track it for peace of mind.
        </p>
        <p>
          We covered the main features of the fleet screen above, however there
          are some more features in the app, which you can check out once you
          have a Pro-Tekt Device!
        </p>
        <p>here is a small list of things that Pro-Tekt can and does track.</p>
        <ul type="bullet">
          <li>Cars</li>
          <li>Trucks</li>
          <li>Motorbikes</li>
          <li>Caravans</li>
          <li>Tradie Trailers</li>
          <li>Boats</li>
          <li>Shipping containers</li>
        </ul>
        <p>
          Pro-Tekt is also avaliable as an Andriod and Apple App you can find
          that{" "}
          <a
            className="Pro-Tekt-Link"
            href="https://play.google.com/store/apps/details?id=com.protekt.app"
            target="_blank"
          >
            here
          </a>{" "}
        </p>
        <p>
          {" "}
          Head to{" "}
          <a
            className="Pro-Tekt-Link"
            href="https://www.pro-tekt.com.au/"
            target="_blank"
          >
            Pro-Tekt
          </a>{" "}
          today to grab your tracker!
        </p>
      </Container>
      <Footer />
    </div>
  );
}
