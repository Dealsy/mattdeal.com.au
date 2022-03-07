import Banner from "../components/Sections/Banner/banner.jsx";
import { Link } from "remix";
import Logo from "../../public/assets/images/logo.png";
import PCs from "../../public/assets/images/pcs.jpg";
import MapView from "../../public/assets/images/MapView.png";
import Menu from "../../public/assets/images/Menu.png";
import History from "../../public/assets/images/History.png";
import Event from "../../public/assets/images/Event.png";
import SectionTitle from "~/components/Sections/Section_Title/Section-title.jsx";
import { Container, Alert } from "react-bootstrap";
import { SiJavascript, SiBootstrap, SiPython, SiFlask } from "react-icons/si";
import { FaCss3Alt, FaArrowLeft } from "react-icons/fa";
export default function Protekt() {
  const Python = <SiPython />;
  const JS = <SiJavascript />;
  const Bootstrap = <SiBootstrap />;
  const CSS = <FaCss3Alt />;
  const Flask = <SiFlask />;
  const Arrow = <FaArrowLeft />;
  return (
    <div>
      <nav className="Project_Nav">
        <Link className="Protekt-home" to="/">
          <button className="button_Style ">
            <div className="flex-Button">
              <div className="ArrowSpace">{Arrow}</div>
              <div>Home</div>
            </div>
          </button>
        </Link>
      </nav>
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
          Matt Penhall is the Director of Pro-Tekt, Matt is an auto electrician
          by trade, and had had enough of hearing about stories of peoples
          assets being stolen. "{" "}
        </p>
        <p>
          Matt came up with the idea of Pro-Tekt back in 2015, he needed a
          platform that could track people's assets such as their cars,
          motorbikes, caravans, trucks, etc. I was hired as a contractor to join
          a team to help build this project out."
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
            I was given the role of the Lead Frontend Developer for this job,
            and was responsible for building out the UI/UX and design of the
            business app called the fleet screen, the fleet screen is a platform
            that was built on Javascript / HTML 5 / CSS3 and a Python backend
            and its purpose is to allow the user to view and track their
            vehicles from any device at any time using the 3G and 4G network
            depending on which device you get."
          </p>
        </div>
        <p>
          I was given the role of the Lead Frontend Developer for this job, and
          was responsible for building out the UI/UX and design of the business
          app called the fleet screen
        </p>
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
          what they do, you can visit the official site for more information and
          to purchase a tracker for yourself by clicking this link -
          <a
            className="Pro-Tekt-Link"
            href="https://www.pro-tekt.com.au/"
            target="_blank"
          >
            Pro-Tekt
          </a>
          ."
        </p>
        <SectionTitle title="Fleet Screen" style="Problem_Statment_map" />
        <p>
          The map view is the main viewpoint of the fleet screen, it has all of
          your details, from where your vehicles are, to how many km they have
          driven or how long the drive took and so on."
        </p>
        <div className="flex-image-left">
          <p>
            Here is a Screen shot of the map view, you can see I have two
            vehicles listed on the map, and to the right there is a menu which
            lists all of my tracked Vehicles."
          </p>
          <img className="Map" src={MapView}></img>
        </div>
        <p>
          If I click on one of the Assets, it will open up a new menu that only
          focuses on that one particular one, and gives you a bunch of options
          to play with, in this case I will open up my Pride and joy Motorbike
          the ZX600R."
        </p>
        <div className="flex-image-right">
          <p>
            Now once we are in here the map view will only show the one selected
            Asset, the main differnce now is the menu, you can see in the image
            has a heap of diffrent options in the menu. Let's run through the
            main functions."
          </p>
          <img className="Menu" src={Menu}></img>
        </div>
        <SectionTitle title="Live Tracking" style="Problem_Statment_map" />
        <p>
          Pro-Tekt will allow you to live track your asset, So if the worst case
          happens, and your Motorbike or car is stolen, or if you just want to
          see how your workers are operating, you can hit the live track button,
          this will then update the location of the asset every 5 seconds.
        </p>
        <SectionTitle title="Events Log" style="Problem_Statment_map" />
        <p>
          The Events Log tells you all of the things that have happened to your
          asset, these include:
        </p>
        <div className="flex-image-right">
          <img className="Event" src={Event} />
          <ul type="none">
            <li className="Problem_Statment_Event">Tamper Alarm</li>
            <p>
              The Tamper Alarm notifies you if someone or something is moving
              your asset, so for example if you have a motorbike and enable the
              tamper alarm, let's say old mate barry had one too many drinks and
              has decided to test out how your motorbike feels.. yes this
              happens.{" "}
            </p>
            <p>
              Pro-Tekt will send you a notification that tells you that someone
              is tampering with your bike.
            </p>
            <li className="Problem_Statment_Event">Power Cut Alarm</li>
            <p>
              The Power Cut Alarm will notify you if the power source from the
              asset is cut, neatly the Pro-tekt tracking device comes with a
              built-in battery that will last up to 4 hours by itself and will
              continue to push out geo-locations.
            </p>
            <p>
              Your Power being cut is probably due to someone disconnecting the
              battery of your vehicle.
            </p>
            <li className="Problem_Statment_Event">Geo Limit Breach</li>
            <p>
              {" "}
              The Geo limit alarm tells you when you're asset has moved, you
              have the option to set the geolocation, and if it moves out of
              that 360-degree radius, you will get a message to your Phone that
              will inform you of a Geo limit breach.
            </p>
          </ul>
        </div>
        <SectionTitle title="Route History" style="Problem_Statment_map" />
        <div className="flex-image-left">
          <img className="History" src={History}></img>
          <p>
            The final function will talk about is the Route history section, the
            route history lets you choose a date from the past, and will lay out
            the route that you took that day.
          </p>
        </div>
        <p>
          This is fantastic, if like me you forget some of those awesome roads
          you went down last month, now all you need to do is punch in the date
          and bam, you can see the route you took. It's also handy if you need
          to see where a work vehicle was a month ago.
        </p>
        <div>
          <Alert variant="info">
            Pro-tekt keeps up to 12 months of past data for you to dive through.
          </Alert>
        </div>
        <SectionTitle title="Conclusion" style="Problem_Statment" />
        <p>
          Pro-Tekt is an asset tracking device that you can place onto just
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
    </div>
  );
}
