export default function Tech(props) {
  return (
    <div className="tech-flex">
      <div className="React">{props.React} </div>
      <div className="Redux">{props.Redux}</div>
      <div className="JS">{props.JS}</div>
      <div className="CSS">{props.CSS}</div>
      <div className="Tailwind">{props.Tailwind}</div>
      <div className="Bootstrap">{props.Bootstrap}</div>
      <div className="Storyblok">{props.Storyblok}</div>
      <div className="Stripe">{props.Stripe}</div>
      <div className="Netlify">{props.Netlify}</div>
      <div className="Firebase">{props.Firebase}</div>
      <div className="Python">{props.Python}</div>
    </div>
  );
}
