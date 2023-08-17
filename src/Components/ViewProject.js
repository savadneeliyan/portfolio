import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ViewProject() { 


  return (
    <>
      <Section>
        <Container>
          <>
            <PWrapper>
              <P
                key="there"
                initial={{ y: "0px" }}
                whileInView={{ x: "20px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                exit={{
                  y: 200,
                  transition: {
                    duration: 0,
                    delay: 0,
                  },
                }}
              >
                THERE'S MORE
              </P>
            </PWrapper>
            <Head>
              <motion.div
                key="black"
                initial={{
                  width: "0%",
                  height: "100%",
                  position: "absolute",
                  background: "#000",
                }}
                whileInView={{ width: "100%", transform: "translateX(100%)" }}
                transition={{ duration: 1 }}
                exit={{
                  y: 200,
                  transition: {
                    duration: 0,
                    delay: 0,
                  },
                }}
              ></motion.div>
              {/* <Link
                key="view"
                to="/work"
                initial={{ y: "50px" }}
                whileInView={{ y: "0px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                exit={{
                  y: 200,
                  transition: {
                    duration: 0,
                    delay: 0,
                  },
                }}
              >
                view all projects
                <svg width="50" height="30" viewBox="0 0 10 6" fill="none">
                  <path
                    d="M6.71627 0L6.27434 0.441934L8.14928 2.31688H0V2.94189H8.14922L6.27434 4.81678L6.71627 5.25871L9.34566 2.62936L6.71627 0Z"
                    fill="black"
                  />
                </svg>
              </Link> */}
              <H2
                initial={{ y: "50px" }}
                whileInView={{ y: "0px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                exit={{
                  y: 200,
                  transition: {
                    duration: 0,
                    delay: 0,
                  },
                }}
              >
                REACH ME ON <a href="tel:8086053060" style={{ color: "black",textDecoration:"none"}}> 8086053060</a>
              </H2>
            </Head>
          </>
        </Container>
      </Section>
    </>
  );
}

export default ViewProject;

const Section = styled.div`
  height: 500px;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

const Head = styled.h1`
  overflow: hidden;
  position: relative;
  width: fit-content;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 10px;
`;

const Span = styled(motion.a)`
  text-decoration: none;
  color:#000;
  overflow-y: hidden;
  /* animation:slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both; */
  display:flex;
  align-items: center;
  justify-content: center;
  gap:20px;
  transition: 0.5s ease;
  &:hover{
    margin-left:30px;
  }
`;

const H2 = styled(motion.h2)`
  font-size: 30px;
  transition: 0.5s ease;
  &:hover {
    margin-left: 30px;
  }
`;
const PWrapper = styled.div`
  overflow-y: hidden;
  margin-top: 100px;
`;

const P = styled(motion.p)`
  /* position: relative; */
  width: fit-content;
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 10px;
  height: 20px;
  /* animation: slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both; */
`;
