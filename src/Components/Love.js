import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
 
function Love() {

  return (
    <Section>
      <Container >
          <>
            <Head >
              <Span initial={{color:"#fff"}} whileInView={{color:"#000",y:"20px"}} transition={{ delay:1}}>Crafted with love.</Span>
              <motion.div initial={{width:"0%",top:0, height:"100%", position:"absolute", background:"#000"}} whileInView={{width:"100%", transform:"translateX(100%)"}} transition={{ duration:1}}></motion.div>
            </Head>
            <PWrapper>
              <P initial={{y:"30px"}} whileInView={{y:"0px" }} transition={{ duration:0.5}}>These are a selection of my recent works.</P>
            </PWrapper>
          </>
      </Container>
    </Section>
  );
}

export default Love


const Section = styled.div`
    height: 500px;
    background-color:#fff;
    color: #000;
    display: flex;
    align-items:center;
    justify-content:start;
`;

const Container = styled.div`
    max-width: 1200px;
    width:100%;
    margin:auto;
`;

const Head = styled(motion.h1)`
    overflow: hidden;
    position: relative;
    width: fit-content;
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 10px;
`;

const Span = styled(motion.span)`
`;

const PWrapper = styled.div`
    overflow-y: hidden;
    margin-top:100px;
`;

const P = styled(motion.p)`
    position: relative;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 10px;
    height: 20px;
    /* animation: slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both; */
`;