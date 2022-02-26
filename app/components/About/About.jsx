import SectionTitle from "../Sections/Section_Title/Section-title";

export default function About() {
  return (
    <div className="AboutContainer">
      <SectionTitle style="Section-Title-Header" title="About me" />
      <div className=" About-content ">
        <p>
          My Name is Matt, I have been doing web development as a hobby for the
          past 5 years, however in the last year I have started my own business
          called{" "}
          <b>
            <a href="https://fulcrumsoftwaresolutions.com.au/">
              fulcrumsoftwaresolutions
            </a>
          </b>
        </p>
        <p>
          I am mainly a React Developer who actually loves CSS! I love all
          things web development related and just can't get enough of that
          feeling you get when you fianlly get that project done, or even that
          one part of the project that's been a bit of a pain, and now it's
          compelete and you get a great sense of satisfaction.
        </p>

        <p>
          {" "}
          I've also just started to learn Remix which you can find out more
          about at{" "}
          <b>
            <a href="https://remix.run/"> Remix.run</a>
          </b>
          . Infact this portfolio is built on Remix!{" "}
        </p>
      </div>
    </div>
  );
}
