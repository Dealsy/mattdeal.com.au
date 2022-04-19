import { Link } from "remix";

export default function BackButton(props) {
  return (
    <Link prefetch="render" to={props.url}>
      <button className={props.btnStyle}>
        {props.image} {props.title}
      </button>
    </Link>
  );
}
