import React from 'react';
import { motion } from 'framer-motion';
import AboutBanner from '../Components/AboutBanner';
import { AnimatePresence } from "framer-motion";
import Footer from '../Components/Footer';
import Nav2 from '../Components/Nav2';
import styled from 'styled-components';


function Projectpage() {
  return (
    <div>
      <Nav2 />
      <Start
        animate={{
          left: "auto",
          right: 0,
          width: "0",
          transition: { duration: 0.5 },
        }}
      ></Start>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          className="page2"
          animate={{
            left: "auto",
            right: 0,
            width: "0",
            transition: { duration: 0.5 },
          }}
        ></motion.div>
      </AnimatePresence>
      <motion.div
        className="page"
        key="index"
        exit={{ width: "100%", transition: { duration: 1 } }}
      ></motion.div>
      <AboutBanner />
      <Footer />
    </div>
  );
}

export default Projectpage

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