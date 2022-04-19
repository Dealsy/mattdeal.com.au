import { FaArrowLeft } from "react-icons/fa";
import { Link } from "remix";
const Arrow = <FaArrowLeft />;

export default function ProjectsNav(props) {
  return (
    <nav className={props.Style}>
      <div className="projects-btn-flex">
        <Link className={props.LinkStyle} to={props.url}>
          <button className={props.btn}>
            <div className="flex-Button">
              <div className="ArrowSpace">{Arrow}</div>
              <div className="btnContent">{props.content}</div>
            </div>
          </button>
        </Link>
        <Link className={props.LinkStyle} prefetch="render" to="/blog/posts">
          <button className={props.Blogbtn}>
            <div className="flex-Button">
              <div className="btnContent">{props.Blogcontent}</div>
            </div>
          </button>
        </Link>
      </div>
    </nav>
  );
}
