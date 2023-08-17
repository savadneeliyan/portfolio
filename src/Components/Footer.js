import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

function Footer() {
    
    const scrollToSection = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };

   
     
    return (
      <>
        <Section>
          {/* {isRevealed && ( */}
          <AnimatePresence>
            <PWrapperBt>
              <H2
                initial={{ y: "70px" }}
                whileInView={{ y: "0px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                lets work together.
              </H2>
            </PWrapperBt>
            <PWrapperBt>
              <Span
                initial={{ y: "-50px" }}
                whileInView={{ y: "0px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                I'm available for freelance work.
              </Span>
            </PWrapperBt>
            <PWrapperBt>
              <SvgC
                initial={{ y: "33px" }}
                whileInView={{ y: "0px" }}
                transition={{ duration: 0.5 }}
                id="wwm-decor"
                viewBox="0 0 344.53 357.34"
              >
                <defs>
                  <clipPath id="clip-path" transform="translate(78.48 75.46)">
                    <circle className="circ1" cx="97" cy="100" r="98"></circle>
                  </clipPath>
                </defs>
                <g className="circ2">
                  <line
                    className="circ3"
                    x1="194.76"
                    y1="0.34"
                    x2="0.36"
                    y2="207.59"
                  ></line>
                  <line
                    className="circ3"
                    x1="199.58"
                    y1="5.16"
                    x2="5.18"
                    y2="212.41"
                  ></line>
                  <line
                    className="circ3"
                    x1="204.4"
                    y1="9.98"
                    x2="10"
                    y2="217.23"
                  ></line>
                  <line
                    className="circ3"
                    x1="209.22"
                    y1="14.8"
                    x2="14.82"
                    y2="222.05"
                  ></line>
                  <line
                    className="circ3"
                    x1="214.04"
                    y1="19.62"
                    x2="19.64"
                    y2="226.87"
                  ></line>
                  <line
                    className="circ3"
                    x1="218.86"
                    y1="24.44"
                    x2="24.46"
                    y2="231.69"
                  ></line>
                  <line
                    className="circ3"
                    x1="223.68"
                    y1="29.26"
                    x2="29.28"
                    y2="236.51"
                  ></line>
                  <line
                    className="circ3"
                    x1="228.5"
                    y1="34.08"
                    x2="34.1"
                    y2="241.33"
                  ></line>
                  <line
                    className="circ3"
                    x1="233.32"
                    y1="38.9"
                    x2="38.92"
                    y2="246.15"
                  ></line>
                  <line
                    className="circ3"
                    x1="238.14"
                    y1="43.72"
                    x2="43.74"
                    y2="250.97"
                  ></line>
                  <line
                    className="circ3"
                    x1="242.95"
                    y1="48.54"
                    x2="48.56"
                    y2="255.78"
                  ></line>
                  <line
                    className="circ3"
                    x1="247.77"
                    y1="53.36"
                    x2="53.38"
                    y2="260.6"
                  ></line>
                  <line
                    className="circ3"
                    x1="252.59"
                    y1="58.18"
                    x2="58.2"
                    y2="265.42"
                  ></line>
                  <line
                    className="circ3"
                    x1="257.41"
                    y1="63"
                    x2="63.02"
                    y2="270.24"
                  ></line>
                  <line
                    className="circ3"
                    x1="262.23"
                    y1="67.82"
                    x2="67.84"
                    y2="275.06"
                  ></line>
                  <line
                    className="circ3"
                    x1="267.05"
                    y1="72.64"
                    x2="72.66"
                    y2="279.88"
                  ></line>
                  <line
                    className="circ3"
                    x1="271.87"
                    y1="77.46"
                    x2="77.48"
                    y2="284.7"
                  ></line>
                  <line
                    className="circ3"
                    x1="276.69"
                    y1="82.28"
                    x2="82.3"
                    y2="289.52"
                  ></line>
                  <line
                    className="circ3"
                    x1="281.51"
                    y1="87.1"
                    x2="87.12"
                    y2="294.34"
                  ></line>
                  <line
                    className="circ3"
                    x1="286.33"
                    y1="91.92"
                    x2="91.94"
                    y2="299.16"
                  ></line>
                  <line
                    className="circ3"
                    x1="291.15"
                    y1="96.74"
                    x2="96.76"
                    y2="303.98"
                  ></line>
                  <line
                    className="circ3"
                    x1="295.97"
                    y1="101.56"
                    x2="101.58"
                    y2="308.8"
                  ></line>
                  <line
                    className="circ3"
                    x1="300.79"
                    y1="106.37"
                    x2="106.4"
                    y2="313.62"
                  ></line>
                  <line
                    className="circ3"
                    x1="305.61"
                    y1="111.19"
                    x2="111.22"
                    y2="318.44"
                  ></line>
                  <line
                    className="circ3"
                    x1="310.43"
                    y1="116.01"
                    x2="116.04"
                    y2="323.26"
                  ></line>
                  <line
                    className="circ3"
                    x1="315.25"
                    y1="120.83"
                    x2="120.86"
                    y2="328.08"
                  ></line>
                  <line
                    className="circ3"
                    x1="320.07"
                    y1="125.65"
                    x2="125.68"
                    y2="332.9"
                  ></line>
                  <line
                    className="circ3"
                    x1="324.89"
                    y1="130.47"
                    x2="130.5"
                    y2="337.72"
                  ></line>
                  <line
                    className="circ3"
                    x1="329.71"
                    y1="135.29"
                    x2="135.32"
                    y2="342.54"
                  ></line>
                  <line
                    className="circ3"
                    x1="334.53"
                    y1="140.11"
                    x2="140.14"
                    y2="347.36"
                  ></line>
                  <line
                    className="circ3"
                    x1="339.35"
                    y1="144.93"
                    x2="144.95"
                    y2="352.18"
                  ></line>
                  <line
                    className="circ3"
                    x1="344.17"
                    y1="149.75"
                    x2="149.77"
                    y2="357"
                  ></line>
                </g>
              </SvgC>
            </PWrapperBt>
            <PWrapperBt>
              <AnimatePresence>
                <Anchor
                  href="#"
                  initial={{ y: "60px" }}
                  whileInView={{ y: "0px" }}
                  transition={{ duration: 0.5 }}
                >
                  See My Work
                  <svg width="30" height="18" viewBox="0 0 10 6" fill="none">
                    <path
                      d="M6.71627 0L6.27434 0.441934L8.14928 2.31688H0V2.94189H8.14922L6.27434 4.81678L6.71627 5.25871L9.34566 2.62936L6.71627 0Z"
                      fill="#fff"
                    />
                  </svg>
                </Anchor>
              </AnimatePresence>
            </PWrapperBt>
            <ScrollDown onClick={scrollToSection}>
              Scroll Up
              <svg width="30" height="24  " viewBox="0 0 10 6" fill="none">
                <path
                  d="M6.71627 0L6.27434 0.441934L8.14928 2.31688H0V2.94189H8.14922L6.27434 4.81678L6.71627 5.25871L9.34566 2.62936L6.71627 0Z"
                  fill="#fff"
                />
              </svg>
            </ScrollDown>
          </AnimatePresence>
          {/* )} */}
        </Section>
        <Copyright>
          {/* {isRevealed && ( */}
          <>
            <Copytext>
              <PWrapperBt>&copy; 2023 Mohammad Savad</PWrapperBt>
            </Copytext>
            <CopyrightIcon>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/savad-neeliyan-702749217/"
              >
                <Icon>
                  <PWrapperBt>
                    <Svg
                      initial={{ y: "33px" }}
                      whileInView={{ y: "0px" }}
                      transition={{ duration: 0.5 }}
                      dataName="Layer 1"
                      viewBox="0 0 24 24"
                      id="facebook"
                    >
                      <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path>
                    </Svg>
                  </PWrapperBt>
                </Icon>
              </a>
              <a target="_blank" href="https://www.instagram.com/that_s_guy/">
                <Icon>
                  <PWrapperBt>
                    <Svg
                      initial={{ y: "33px" }}
                      whileInView={{ y: "0px" }}
                      transition={{ duration: 0.5 }}
                      dataName="Layer 1"
                      viewBox="0 0 24 24"
                      id="Icongram"
                    >
                      <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
                    </Svg>
                  </PWrapperBt>
                </Icon>
              </a>
              <a target="_blank" href="https://wa.me/8086053060 ">
                <Icon>
                  <PWrapperBt>
                    <Svg
                      initial={{ y: "33px" }}
                      whileInView={{ y: "0px" }}
                      transition={{ duration: 0.5 }}
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      id="whatsapp"
                    >
                      <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
                    </Svg>
                  </PWrapperBt>
                </Icon>
              </a>
              <a target="_blank" href="https://github.com/savadneeliyan">
                <Icon>
                  <PWrapperBt>
                    <Svg
                      initial={{ y: "33px" }}
                      whileInView={{ y: "0px" }}
                      transition={{ duration: 0.5 }}
                      fillRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      clipRule="evenodd"
                      viewBox="0 0 24 24"
                      id="github"
                    >
                      <g transform="translate(-40 -40)">
                        <rect
                          width="24"
                          height="24"
                          x="40"
                          y="40"
                          fill="none"
                        ></rect>
                        <Path
                          fill="#fff"
                          d="M15.806,1.428C17.35,0.382 18.247,-0.292 18.815,-0.454C19.223,-0.57 19.566,-0.541 19.868,-0.421C20.222,-0.28 20.574,0.02 20.835,0.628C21.368,1.872 21.464,3.254 21.117,4.551C22.009,5.676 22.501,7.074 22.501,8.52C22.501,10.984 21.869,12.668 20.927,13.838C19.839,15.19 18.309,15.88 16.692,16.237C16.938,16.84 17.047,17.497 17.001,18.159L17.001,22C17.001,22.535 16.553,22.97 16,22.97C15.447,22.97 14.999,22.535 14.999,22L14.999,18.13C14.999,18.105 15,18.081 15.002,18.056C15.056,17.365 14.813,16.682 14.33,16.184C14.071,15.917 13.99,15.531 14.12,15.186C14.25,14.842 14.569,14.598 14.946,14.556C16.57,14.375 18.268,13.987 19.348,12.646C20.075,11.742 20.499,10.424 20.499,8.52C20.498,7.369 20.057,6.261 19.264,5.428C19.01,5.161 18.931,4.781 19.058,4.44C19.404,3.515 19.405,2.498 19.066,1.576C18.978,1.625 18.883,1.681 18.799,1.737C18.264,2.09 17.55,2.621 16.57,3.278C16.325,3.442 16.017,3.492 15.73,3.414C13.615,2.841 11.385,2.841 9.27,3.414C8.983,3.492 8.675,3.442 8.43,3.278C7.198,2.452 6.305,2.138 5.799,2.018C5.604,2.817 5.651,3.661 5.942,4.44C6.069,4.781 5.99,5.161 5.736,5.428C4.937,6.267 4.495,7.386 4.501,8.55C4.501,10.437 4.925,11.745 5.651,12.646C6.734,13.987 8.438,14.385 10.067,14.588C10.44,14.634 10.755,14.879 10.882,15.222C11.01,15.565 10.928,15.948 10.671,16.213C10.194,16.706 9.951,17.38 9.999,18.064C10.001,18.086 10.001,18.108 10.001,18.13L10.001,18.993L10.002,19.001L10.001,19.009L10.001,22C10.001,22.535 9.553,22.97 9,22.97C8.447,22.97 7.999,22.535 7.999,22L7.999,20.224C6.867,20.397 5.997,20.275 5.298,20.012C4.329,19.647 3.663,18.992 3.103,18.306C2.816,17.955 2.562,17.599 2.283,17.309C2.124,17.143 1.965,16.993 1.75,16.939C1.215,16.805 0.892,16.276 1.03,15.758C1.169,15.239 1.715,14.927 2.25,15.061C3.057,15.262 3.664,15.836 4.241,16.558C4.73,17.171 5.194,17.943 6.135,18.242C6.62,18.397 7.221,18.414 7.999,18.253L7.999,18.155C7.959,17.499 8.07,16.85 8.315,16.254C6.696,15.884 5.162,15.189 4.074,13.841C3.131,12.673 2.499,10.999 2.499,8.555C2.491,7.097 2.984,5.685 3.883,4.551C3.536,3.254 3.632,1.872 4.165,0.628C4.28,0.361 4.511,0.157 4.797,0.072C4.797,0.072 6.166,-0.474 9.183,1.431C11.361,0.916 13.629,0.915 15.806,1.428Z"
                          transform="matrix(.89878 0 0 .9278 41.202 41.588)"
                        ></Path>
                      </g>
                    </Svg>
                  </PWrapperBt>
                </Icon>
              </a>
            </CopyrightIcon>
          </>
          {/* )} */}
        </Copyright>
      </>
    );
}

export default Footer;

const Section = styled.div`
    background-color:#000;
    color: #fff;
    position: relative;
    height: 500px;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`;
const SvgC = styled(motion.svg)`
    width:300px;
    position:absolute;
    left:60%;
    top:0%;
`;

const H2 = styled(motion.h2)`
    font-size:65px;
    text-align:center;
`;
const Span = styled(motion.h2)`
    font-size:15px;
    font-weight:400;
    text-align:center; 
    margin-top:35px;  
    color:#8f8e8e; 
`;

const PWrapperBt = styled.div`
    overflow: hidden;
`;

const Anchor = styled(motion.a)`
  text-decoration: none;
  font-size: 18px;
  text-transform: capitalize;
  position: relative;
  background: none;
  border: none;
  outline: none;
  color: #fff;
  margin-top:50px;
  display: block;
  text-decoration: none;
  padding: 20px 40px;
  z-index: 1;
  width: fit-content;
  display:flex;
  align-items: center;
  position: relative;
  gap:20px;
  transition:0.5s ease;

  &::after{
    position: absolute;
    content: '';
    width: 50px;
    height: 50px;
    background: #303030;
    z-index: -1;
    display: block;
    left: 0px;
    top: 0;
    bottom: 0;
    transition: 0.8s ease;
    border-radius: 50%;
    text-decoration: none;
  }
  &:hover{
    margin-left:40px;
  }
  &:hover::after{
        width: 230px;
        height: 100%;
        right: 0px;
        border-radius: 40px;
    }
`;

const Copyright = styled.div`
    background-color:#000;
    color:#fff;
    padding-bottom:30px;
    display: flex;
    justify-content:space-around;
    align-items:center;
    overflow: hidden;
    `;
const Copytext = styled.h3`
   
    color:#fff;
    text-align:center;
    font-size:13px;
    font-weight:400;
`;

const Svg = styled(motion.svg)`
  fill:#fff;
  width:30px;
  height:30px;
`;

const Path = styled.path``;
const Icon = styled.div`
  width:50px;
  height:50px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  transition: 0.5s;
  cursor: pointer;
  &:hover{
      background-color:#fff;
    ${Svg}{
      fill: #000;
    }
    ${Path}{
      fill: #000;
    }
  }
`;

const CopyrightIcon = styled.div`
    display: flex; 
    gap:10px;
    align-items: center;
`;

const ScrollDown = styled.div`
    display: flex;
    gap:20px;
    align-items: center;
    font-size: 14px;        
    transition: 0.5s linear;
    position: absolute;
    transform: rotate(270deg);
    right: -10%;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    color:#fff;


    @media only screen and (min-width: 1900px) {
        right: 15%;
    }
`;