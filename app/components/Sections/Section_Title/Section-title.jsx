export default function SectionTitle(props) {
  return (
    <div>
      <h1 className={props.style}>{props.title}</h1>
      <p className=" Section-Title">{props.subtitle}</p>
    </div>
  );
}
