import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { majorworks } from "./ProjectData";

function Project({ setclick }) {
  const scrollElementsRef = useRef([]);
  const [clickedDiv, setClickedDiv] = useState(null);
  const [isClicked, setClicked] = useState(false);

  const handleClick = (index) => {
    if (scrollElementsRef.current[index]) {
      scrollElementsRef.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      setClickedDiv(index);
      setClicked(true);
    }
    // setclick(false);
  };

  return (
    <>
      <Section
        initial={{ display: "block" }}
        whileInView={{ display: "block" }}
        viewport={{ once: true, amount: 1 }}
      >
        {majorworks?.map((item, index) => (
          <Wrapper
            className={"hello" + index}
            key={index}
            isClicked={isClicked}
          >
            <ImgWrapper
              ref={(el) => (scrollElementsRef.current[index] = el)}
              key={index}
              exit={{
                margin: "auto",
                left: 0,
                transform: "none",
                zIndex: "9",
              }}
            >
              <Img
                alt=""
                key={index}
                exit={{
                  width: clickedDiv === index ? "430px" : "0",
                  left: 0,
                  transform: "none",
                  zIndex: "9",
                }}
                src={item.image}
              />
            </ImgWrapper>
            <Container>
              <FirstContainer
                key={index}
                exit={{
                  width: 0,
                  transition: {
                    // duration: 1,
                    delay: 0.2,
                  },
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <motion.h5
                    key={index}
                    exit={{
                      y: 20,
                      transition: {
                        // duration: 1,
                        delay: 0.8,
                      },
                    }}
                  >
                    {index + 1}
                  </motion.h5>
                </div>
                <div>
                  <div style={{ overflow: "hidden" }}>
                    <H3
                      key={index}
                      exit={{
                        y: 200,
                        transition: {
                          // duration: 1,
                        },
                      }}
                    >
                      {item.name}
                    </H3>
                  </div>
                  <div style={{ overflow: "hidden" }}>
                    <Span
                      key={index}
                      exit={{
                        y: 200,
                        transition: {
                          // duration: 2,
                          delay: 0.8,
                        },
                      }}
                    >
                      {item.type}
                    </Span>
                  </div>
                </div>
              </FirstContainer>
              <div style={{ overflow: "hidden" }}>
                <PWrapperBt
                  key={index}
                  exit={{
                    y: 200,
                    transition: {
                      // duration: 0.5,
                      delay: 0.8,
                    },
                  }}
                >
                  <Anchor
                    to={`/project/${item.url}`}
                    onClick={() => handleClick(index)}
                  >
                    See My Work
                    <svg width="30" height="18" viewBox="0 0 10 6" fill="none">
                      <path
                        d="M6.71627 0L6.27434 0.441934L8.14928 2.31688H0V2.94189H8.14922L6.27434 4.81678L6.71627 5.25871L9.34566 2.62936L6.71627 0Z"
                        fill="black"
                      />
                    </svg>
                  </Anchor>
                </PWrapperBt>
              </div>
            </Container>
          </Wrapper>
        ))}
      </Section>
    </>
  );
}

export default Project;

const Section = styled(motion.div)`
  overflow: hidden;
`;
const Container = styled.div`
  //   max-width: 1400px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 65px 0;
`;

const Anchor = styled(Link)`
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
`;

const PWrapperBt = styled(motion.div)`
  overflow: hidden;
`;

const H3 = styled(motion.h3)`
  font-size: 40px;
  transition: 0.5s ease;
  color: #8f8e8e;
`;

const Span = styled(motion.div)`
  font-size: 15px;
  transition: 0.5s ease;
  color: #8f8e8e;
`;
const ImgWrapper = styled(motion.div)`
  width: 461px;
  height: 300px;
  position: absolute;
  right: 23px;
  transition: 0.5s ease;
  cursor: pointer;
  &::before {
    width: 0px;
    height: 210px;
    transition: 0.5s ease;
    content: "";
    right: 0px;
    top: 148px;
    background: #000;
    position: absolute;
    display: inline-block;
    transition-delay: 0.1s;
  }
`;

const Img = styled(motion.img)`
  width: 0;
  height: 100%;
  transition: 0.5s ease;
  transform: perspective(500px) rotateX(0deg) rotateY(-18deg) rotateZ(0deg);
  filter: grayscale(1);
`;

const FirstContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 20px;
  &::before {
    content: "";
    width: 150px;
    transition: 0.5s ease;
    height: 1px;
    background: #000;
  }
`;

const Wrapper = styled.div`
  background-color: #f8f8f8;
  color: #000;
  transition: 0.5s linear;
  border-bottom: 1px solid #e8e8e8;
  pointer-events: ${(props) => (props.isClicked ? "none" : "all")};

  &:hover {
    background-color: #fff;
  }

  &:hover ${Anchor}::after {
    width: 230px;
    height: 100%;
    right: 0px;
    border-radius: 40px;
  }

  &:hover ${Img} {
    width: 430px;
  }
  &:hover ${ImgWrapper} {
    width: 430px;
    &::before {
      width: 390px;
      right: 100px;
    }
  }
  &:hover ${Span} {
    font-size: 20px;
    color: #000;
  }
  &:hover ${H3} {
    font-size: 70px;
    color: #000;
  }
  &:hover ${FirstContainer} {
    &::before {
      width: 200px;
    }
  }
`;
