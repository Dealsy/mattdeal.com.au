export default function SectionTitle(props) {
  return (
    <div>
      <h1 className="@apply  text-center font-sans text-5xl font-bold">
        {props.title}
      </h1>
      <p className="@apply Section-Title mb-10 text-center font-sans text-lg">
        {props.subtitle}
      </p>
    </div>
  );
}
