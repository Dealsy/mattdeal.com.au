import { Link } from "remix";

export default function Nav() {
  return (
    <nav className="navbar1">
      <Link to="/" className="logo @apply font-sans text-white">
        Matt Deal
      </Link>

      <ul className=" @apply font-sans text-white">
        <li>
          <Link to="#projects">Projects</Link>
        </li>
        <li>
          <Link to="#about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
