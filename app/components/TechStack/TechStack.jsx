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
        <div className="React">{ReactIcon}</div>
        <img className="Remix" src={RemixIcon}></img>
        <div className="JS">{JSIcon}</div>
        <div className="HTML">{HTML}</div>
        <div className="CSS">{CSS}</div>
        <div className="Tailwind">{TailwindIcon}</div>
        <div className="Bootstrap">{BootstrapIcon}</div>
        <div className="Netlify">{NetlifyIcon}</div>
      </div>
    </div>
  );
}
