export default function Button(props) {
  return (
    <button id={props.id} type="submit" className=" mainButton">
      {props.children}
    </button>
  );
}
