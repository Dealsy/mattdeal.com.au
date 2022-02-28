import { Link } from "remix";
import { SocialIcon } from "react-social-icons";

export default function Nav() {
  return (
    <nav className="navbar1">
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
          <Link prefetch="intent" to="/blog/posts" prefetch="intent">
            Blog
          </Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
      <div className="SocialBackground">
        <SocialIcon
          className="Twittersocials "
          color="currentColor"
          url="https://twitter.com/Dealsy01"
          style={{ height: 25, width: 25 }}
        />
        <SocialIcon
          color="currentColor"
          className="Linkedinsocials socials"
          url="https://www.linkedin.com/in/matt-deal-038177b5/"
          style={{ height: 25, width: 25 }}
        />
        <SocialIcon
          color="currentColor"
          className="Gitsocials "
          url="https://github.com/Dealsy?tab=repositories"
          style={{ height: 25, width: 25 }}
        />
      </div>
    </nav>
  );
}
