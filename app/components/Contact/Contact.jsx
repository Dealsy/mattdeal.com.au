import { Form } from "remix";
import MainButton from "../button/main_button";
import SectionTitle from "../Sections/Section_Title/Section-title";
import Image from "../../../public/assets/images/home-2-img.png";

export default function Contact() {
  return (
    <div className="backgroundStripe3">
      <SectionTitle
        style="Section-Title-Header"
        title="Reach Out"
        subtitle="Lets chat about your web needs"
      />

      <Form id="#contact" className="myForm">
        <div className="message">
          <img className="Contact_Image" src={Image} alt="contact us" />
        </div>
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
          <MainButton children="Send" />
        </div>
      </Form>
    </div>
  );
}
