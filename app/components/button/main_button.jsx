export default function Button(props) {
  return (
    <button
      type="submit"
      className="@apply w-36  cursor-pointer rounded-lg border-2 border-pink-400 bg-pink-400 p-1 text-center font-sans text-xl text-white drop-shadow-lg active:bg-pink-600	"
    >
      {props.children}
    </button>
  );
}
