import { Form } from "remix";
import MainButton from "../button/main_button";
import SectionTitle from "../Sections/Section_Title/Section-title";
import Image from "../../../public/assets/images/home-2-img.png";

export default function Contact() {
  return (
    <div className="backgroundStripe3 pb-10">
      <SectionTitle
        title="Reach Out"
        subtitle="Lets chat about your web needs"
      />

      <Form className="myForm">
        <div className="message">
          <img className="Contact_Image" src={Image} alt="contact us" />
        </div>
        <div className="contact">
          <input placeholder="Your Name" type="text" id="name" />

          <input placeholder="Email" type="email" id="email" />

          <div className="img_message">
            <textarea
              rows="5"
              cols="45"
              className="messageBox"
              placeholder="Message"
              id="msg"
            ></textarea>
          </div>
          <div className="Contact_Button ">
            <MainButton children="Send" />
          </div>
        </div>
      </Form>
    </div>
  );
}
