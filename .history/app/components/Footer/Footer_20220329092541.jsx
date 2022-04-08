import { useState, useRef } from "react";
import { Form, Link } from "remix";
import MainButton from "../button/main_button";
import SectionTitle from "../Sections/Section_Title/Section-title";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlinePhoneIphone } from "react-icons/md";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    // remove user ID when testing
    emailjs
      .sendForm(
        "service_laihw1g",
        "template_8d7hq2j",
        form.current,
        "user_d26VhSs3DYJc5NEo7CNfY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setData(result.text);
        },
        (error) => {
          console.log(error.text);
          setError(error);
        }
      );
  }

  // Get average runtime of successful runs in seconds
  function averageRuntimeInSecond() {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].runtime > 0) {
        sum += data[i].runtime;
        count++;
      }
    }
    return sum / count;
  }
  console.log(averageRuntimeInSecond(sum / count));

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

        <Form ref={form} onSubmit={sendEmail} id="#contact" className="myForm">
          <SectionTitle
            style="Section-Title-Header"
            title="Reach Out"
            subtitle="Lets chat about your web needs"
          />
          <div className="contact">
            <input
              name="user_name"
              placeholder="Your Name"
              type="text"
              id="name"
              required
              minLength={3}
            />

            <input
              name="user_email"
              placeholder="Email"
              type="email"
              id="email"
              required
              minLength={3}
            />

            <div className="img_message">
              <textarea
                rows="10"
                className="messageBox"
                placeholder="Message"
                id="msg"
                name="message"
                required
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
