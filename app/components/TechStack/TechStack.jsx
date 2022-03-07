import {
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
  SiNetlify,
  SiHtml5,
} from "react-icons/si";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import RemixIcon from "../../../public/assets/images/Remix.png";
import SectionTitle from "../Sections/Section_Title/Section-title";
import Fade from "react-reveal/Fade";

export default function TechStck() {
  const ReactIcon = <FaReact />;
  const HTML = <SiHtml5 />;
  const JSIcon = <SiJavascript />;
  const CSS = <FaCss3Alt />;
  const TailwindIcon = <SiTailwindcss />;
  const BootstrapIcon = <SiBootstrap />;
  const NetlifyIcon = <SiNetlify />;

  return (
    <div>
      <SectionTitle style="Section-Title-Header" title="Tech Stack" />
      <div className="tech-flex Tech_div_Index">
        <Fade top>
          <div className="React">{ReactIcon}</div>
        </Fade>
        <Fade bottom>
          <img className="Remix" src={RemixIcon}></img>
        </Fade>
        <Fade top>
          <div className="JS">{JSIcon}</div>
        </Fade>
        <Fade bottom>
          <div className="HTML">{HTML}</div>
        </Fade>
        <Fade top>
          <div className="CSS">{CSS}</div>
        </Fade>
        <Fade bottom>
          <div className="Tailwind">{TailwindIcon}</div>
        </Fade>
        <Fade top>
          <div className="Bootstrap">{BootstrapIcon}</div>
        </Fade>
        <Fade bottom>
          <div className="Netlify">{NetlifyIcon}</div>
        </Fade>
      </div>
    </div>
  );
}
