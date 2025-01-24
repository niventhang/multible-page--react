import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Text from "./Text";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Contact() {
  const [value, setValue] = useState();
  const forms = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_esm8ooc", "template_jx8nl2b", forms.current, {
        publicKey: "_hpUuztZKGXTE-cH2",
      })
      .then(
        () => {
          toast.success("Your message has been sent successfully!");
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Text style="h7 fw-bold lh-base" text="Hire Me." />
      <Text text="I am available for freelance work. Connect with me via phone: 8838295382 or email: niventhang6@gmail.com" />

      <Form ref={forms} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="user_name">
          <Form.Control
            name="user_name"
            type="text"
            className="my-3 p-3"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="user_email">
          <Form.Control
            name="user_email"
            type="email"
            placeholder="Enter email"
            className="p-3"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="user_password">
          <Form.Control
            name="user_password"
            type="password"
            placeholder="Password"
            className="my-3 p-3"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Control
            name="message"
            as="textarea"
            rows={5}
            placeholder="Your Message"
            className="my-3 p-3"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="user_phone">
          <PhoneInput
            placeholder="Enter phone number"
            className="my-3 w-100"
            name="user_phone"
            value={value}
            defaultCode="IN"
            defaultCountry="IN"
            keyboardType="phone-pad"
            onChange={setValue}
            required
          />
        </Form.Group>

        <Button variant="danger px-4 py-2 fs-5 w-100" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Contact;
