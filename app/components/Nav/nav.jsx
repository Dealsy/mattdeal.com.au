import { Link } from "remix";
import { SocialIcon } from "react-social-icons";
import Fade from "react-reveal/Fade";

export default function Nav() {
  return (
    <nav className="navbar1">
      <Fade right big>
        <Link to="/" className="logo ">
          Matt Deal
        </Link>
        <ul type="none" className=" Nav-list ">
          <li>
            <Link to="#projects">Projects</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link prefetch="intent" to="/blog/posts">
              Blog
            </Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </Fade>
      <Fade right big>
        <div className="SocialBackground">
          <SocialIcon
            className="Twittersocials "
            color="currentColor"
            target="_blank"
            url="https://twitter.com/Dealsy01"
            style={{ height: 25, width: 25 }}
          />
          <SocialIcon
            color="currentColor"
            target="_blank"
            className="Linkedinsocials socials"
            url="https://www.linkedin.com/in/matt-deal-038177b5/"
            style={{ height: 25, width: 25 }}
          />
          <SocialIcon
            color="currentColor"
            target="_blank"
            className="Gitsocials "
            url="https://github.com/Dealsy?tab=repositories"
            style={{ height: 25, width: 25 }}
          />
        </div>
      </Fade>
    </nav>
  );
}
