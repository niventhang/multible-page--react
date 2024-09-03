import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Text from "./Text";

function Contact() {
  const [value, setValue] = useState();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2cer1wn", "template_xpburnt", form.current, {
        publicKey: "U0vN6ww9BrU7Y_JSF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <Text style="h7 fw-bold lh-base" text="Hire Me." />
      <Text text="I am available for freelance work. Connect with me via phone: 7339628276 or email: prakashvadakadu8@gmail.com" />
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group type="text">
          <Form.Control
            name="user_name"
            type="text"
            className="my-3 p-3"
            placeholder="Enter Name"
          />
          <Form.Control
            name="user_email"
            type="email"
            placeholder="Enter email"
            className="p-3"
          />
        </Form.Group>
        <Form.Control
          International
          name="user_password"
          type="password"
          placeholder="Password"
          className="my-3 p-3"
        />
        <Form.Control name="message" as="textarea" rows={5} placeholder="Your Message" />
        <PhoneInput
          placeholder="Enter phone number"
          className="my-3 "
          name="user_phone"
          value={value}
          defaultCode="IN"
          defaultCountry="IN"
          keyboardType="phone-pad"
          onChange={setValue}
        />
        <Button variant="danger px-4 py-2 fs-5" type="submit">
          Submit
        </Button>
      </Form>
      
    </>
  );
}
export default Contact;
