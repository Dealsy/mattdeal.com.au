import { Form } from "remix";
import { Row, Col } from "react-bootstrap";
import MainButton from "../button/main_button";

export default function Contact() {
  return (
    <div className="backgroundStripe3 pb-10 drop-shadow-lg">
      <h1 className="@apply mb-10  text-center font-sans text-5xl font-bold">
        {" "}
        Reach Out{" "}
      </h1>
      <div className="BorderSize m-auto border-2 border-gray-400 bg-white">
        <Form className="text-center" method="post">
          <Row>
            <Col className="mt-10">
              <label>
                Name:{" "}
                <input
                  className=" border-b-2 border-gray-400"
                  type="text"
                  name="title"
                />
              </label>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>
                Email:
                <input
                  className="border-b-2 border-gray-400"
                  type="text"
                  name="slug"
                />
              </label>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <label className="mt-10" htmlFor="markdown">
                  Message:
                </label>
                <br />
                <textarea
                  className="w-96 border-2 border-gray-400"
                  id="markdown"
                  rows={10}
                  name="markdown"
                />
              </p>
            </Col>
            <p>
              <div className="p-5">
                <MainButton children="Send Message" />
              </div>
            </p>
          </Row>
        </Form>
      </div>
    </div>
  );
}
