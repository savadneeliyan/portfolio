import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components'
import Footer from '../Components/Footer';
import Nav2 from '../Components/Nav2';
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();
  const [Successs,setSuccesss] = useState(true);
  const [Error,setError] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_ui1zv9l",
      "template_74qtqzi",
      form.current,
      "dhWq6M73klRpSL5RC"
    )
    .then(
      (result) => {
        console.log(result.text);
        setSuccesss(!Successs);
      },
      (error) => {
        console.log(error.text);
        setError(true);
      }
    );
};


  return (
    <>
      <Nav2 />
      <Section>
        {Successs ? (
          <>
            <motion.div
              className="page"
              key="index"
              exit={{ width: "100%", transition: { duration: 1 } }}
            ></motion.div>
            <AnimatePresence>
              <Start
                animate={{
                  left: "auto",
                  right: 0,
                  width: "0",
                  transition: { duration: 0.5 },
                }}
              ></Start>
            </AnimatePresence>
            <div
              style={{
                position: "fixed",
                transform: "rotate(-90deg)",
                top: "50%",
                left: "50px",
                margin: "auto",
              }}
            >
              <Overflow style={{ position: "relative", marginBottom: "60px" }}>
                <motion.div
                  initial={{
                    width: "0%",
                    top: 0,
                    height: "100%",
                    position: "absolute",
                    background: "#000",
                  }}
                  whileInView={{ width: "100%", x: ["0%", "0%", "0%", "100%"] }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                ></motion.div>
                <Side
                  initial={{ y: 10 }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: 1, transition: 1 }}
                  viewport={{ once: true }}
                >
                  CONTACT
                </Side>
              </Overflow>
            </div>
            <Container>
              <div style={{ paddingTop: "150px" }}>
                <Overflow
                  style={{ position: "relative", marginBottom: "60px" }}
                >
                  <motion.div
                    initial={{
                      width: "0%",
                      top: 0,
                      height: "100%",
                      position: "absolute",
                      background: "#000",
                    }}
                    whileInView={{
                      width: "100%",
                      x: ["0%", "0%", "0%", "100%"],
                    }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                  <H2
                    initial={{ y: 60 }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: 1, transition: 1 }}
                    viewport={{ once: true }}
                  >
                    Get in touch.
                  </H2>
                </Overflow>
                <Overflow style={{ marginBottom: "100px" }}>
                  <P
                    initial={{ y: 30 }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: 1, transition: 1 }}
                    viewport={{ once: true }}
                  >
                    Do you fancy saying hi to me or you want to get started with
                    your project and you need my help? Feel free to contact me.{" "}
                  </P>
                </Overflow>
              </div>
              <motion.form
                ref={form}
                onSubmit={sendEmail}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, transition: 1 }}
                viewport={{ once: true }}
              >
                <Label>Your Name</Label>
                <Input type="text" name="user_name" required />
                <Label>Your email</Label>
                <Input type="email" name="user_email" required />
                <Label>Subject</Label>
                <Input
                  required
                  name="subject"
                  type="textarea"
                  style={{ height: "200px", marginBottom: "100px" }}
                />
                <Anchor type="submit" value="Send">
                  Submit
                  <svg width="30" height="18" viewBox="0 0 10 6" fill="none">
                    <path
                      d="M6.71627 0L6.27434 0.441934L8.14928 2.31688H0V2.94189H8.14922L6.27434 4.81678L6.71627 5.25871L9.34566 2.62936L6.71627 0Z"
                      fill="black"
                    />
                  </svg>
                </Anchor>
              </motion.form>
            </Container>
          </>
        ) : (
          <SuccessContainer>
            <Success>
              Thank you for contacting me. I will reply you soon....
            </Success>
          </SuccessContainer>
        )}
      </Section>
      {Error && (
        <SuccessContainer>
          <Success>
            Thank you for contacting me. I will reply you soon....
          </Success>
        </SuccessContainer>
      )}
      <Footer />
    </>
  );
}

export default Contact;

const SuccessContainer = styled(motion.div)`
  display:flex;
  align-items:center;
  justify-content:center;
  height:100vh;
`;
const Success = styled(motion.h3)` 
  text-align: center;
  margin:auto;
  border:2px solid black;
  padding:20px 30px;
  width:fit-content;
`;
const Section = styled(motion.div)`
    position: relative;
    min-height: 100vh;
    margin-bottom:100px;
`;

const Container = styled(motion.div)`
    max-width: 1200px;
    margin: auto;
`;

const Start = styled(motion.div)`
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    z-index: 999;
    overflow-x: hidden;
`;

const Overflow = styled(motion.div)`
    overflow: hidden;
    width: fit-content;
    position: relative;
`;
const H2 = styled(motion.h2)`
    font-size :50px;
    line-height: 60px;
`;

const P = styled(motion.p)`
    font-size :20px;
    line-height: 30px;
`;

const Label = styled(motion.h5)`
    font-size: 20px;
    font-weight: 400;
    margin-top: 30px;
`;
const Input = styled(motion.input)`
    font-size :20px;
    line-height: 30px;
    width: 100%;
    height: 60px;
    border: 0;
    border-bottom: 1px solid #000;
    outline: none;
`;

const Side = styled(motion.h4)`
    font-size: 12px;
    line-height: 10px;
    font-weight: 400;
`;
const Anchor = styled(motion.button)`
  text-decoration: none;
  font-size: 18px;
  text-transform: capitalize;
  position: relative;
  background: none;
  border: none;
  outline: none;
  color: #000;
  margin-top: 50px;
  display: block;
  text-decoration: none;
  padding: 20px 40px;
  z-index: 1;
  width: fit-content;
  display: flex;
  align-items: center;
  position: relative;
  gap: 20px;
  animation: slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both;
  cursor: pointer;

  &::after {
    position: absolute;
    content: "";
    width: 50px;
    height: 50px;
    background: #e8e8e8;
    z-index: -1;
    display: block;
    left: 0px;
    top: 0;
    bottom: 0;
    transition: 0.8s ease;
    border-radius: 50%;
    text-decoration: none;
  }
  &:hover::after {
    border-radius: 30px;
    width: 100%;
    height: 100%;
  }
`;