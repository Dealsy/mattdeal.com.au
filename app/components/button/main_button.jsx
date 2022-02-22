export default function Button(props) {
  return (
    <button
      id={props.id}
      type="submit"
      className="@apply w-36	 cursor-pointer rounded-lg border-2 border-pink-400 bg-pink-400 p-1 text-center font-sans text-2xl text-white drop-shadow-lg hover:bg-pink-500 active:bg-pink-600	"
    >
      {props.children}
    </button>
  );
}
