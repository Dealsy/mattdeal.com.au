import { Link } from "remix";

export default function MobileNav() {
  return (
    <nav className="navbar2">
      <div id="menuToggle">
        <ul id="menu" type="none" className=" Nav-list ">
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
        <hr className="hrColor"></hr>
      </div>
    </nav>
  );
}
