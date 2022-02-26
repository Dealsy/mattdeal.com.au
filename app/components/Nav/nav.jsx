import { Link } from "remix";

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
          <Link to="/blog/posts" prefetch="intent">
            Blog
          </Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
