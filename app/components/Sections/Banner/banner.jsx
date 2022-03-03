export default function Banner(props) {
  return (
    <div className={props.style}>
      <h1 className={props.headerCss}>{props.header}</h1>
      <img className={props.imageCss} src={props.image}></img>
      <p className={props.subheaderCss}>{props.subheader}</p>
    </div>
  );
}
