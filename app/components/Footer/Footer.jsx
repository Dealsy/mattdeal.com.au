import { Form, Link } from "remix";
import MainButton from "../button/main_button";
import SectionTitle from "../Sections/Section_Title/Section-title";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlinePhoneIphone } from "react-icons/md";

export default function Footer() {
  return (
    <div className="backgroundStripe3">
      <div className="flex-contact">
        <div className="message">
          <div className="footer-text">
            <SectionTitle style="Section-Title-Header" title="Blog" />
            <div className="Footer-center-text">
              <Link className="Footer-Link" to="/blog/posts" prefetch="intent">
                Blog
              </Link>
            </div>

            <SectionTitle style="Section-Title-Header" title="Projects" />
            <div className="Footer-center-text footer-list">
              <Link className="Footer-Link" to="/protekt" prefetch="intent">
                Pro-Tekt
              </Link>

              <Link className="Footer-Link" to="/laneon" prefetch="intent">
                La Neon Events
              </Link>

              <Link className="Footer-Link" to="/fulcrum" prefetch="intent">
                Fulcrum Software Solutions
              </Link>
            </div>
          </div>
        </div>

        <Form id="#contact" className="myForm">
          <SectionTitle
            style="Section-Title-Header"
            title="Reach Out"
            subtitle="Lets chat about your web needs"
          />
          <div className="contact">
            <input placeholder="Your Name" type="text" id="name" />

            <input placeholder="Email" type="email" id="email" />

            <div className="img_message">
              <textarea
                rows="10"
                className="messageBox"
                placeholder="Message"
                id="msg"
              ></textarea>
            </div>
            <div className="contact-Button">
              <MainButton children="Send" />
            </div>
          </div>
        </Form>
        <div className="footer-info">
          <div>
            {" "}
            <SiMinutemailer className="Mail" /> 0400 640 639{" "}
          </div>
          <div>
            {" "}
            <MdOutlinePhoneIphone className="Phone" /> contact@mattdeal.com.au{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
