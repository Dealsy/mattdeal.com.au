import { Link } from "remix";

export default function Banner(props) {
  return (
    <div className={props.style}>
      <Link className={props.homeButton} to="/">
        <i className={props.arrow}></i> Home
      </Link>
      <h1 className={props.headerCss}>{props.header}</h1>
      <p className={props.subheaderCss}>{props.subheader}</p>
    </div>
  );
}
