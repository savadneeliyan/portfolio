import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

function Banner2() {

    const scrollToSection = () => {
        window.scrollTo({top: 500, left: 0, behavior: 'smooth'});
      };

  return (
    <>
      <Section>
        <motion.div
          className="page"
          key="index"
          exit={{ width: "100%", transition: { duration: 1 } }}
        ></motion.div>
        <motion.div
          className="page2"
          animate={{
            left: "auto",
            right: 0,
            width: "0",
            transition: { duration: 0.5 },
          }}
        ></motion.div>

        <Container exit={{ x: "100%", transition: { duration: 1 } }}>
          <Wrapper>
            <Right>
              <Circle></Circle>
              {/* <H1>
                <Span>Mern Stack</Span>
              </H1> */}
              <H1>
                <Span> developer.</Span>
              </H1>
              <PWrapper>
                <P>
                  Hi I'm Mohammad Savad, a passionate Front-end Developer & Mern
                  Stack
                </P>
              </PWrapper>
              <PWrapper>
                <P>Developer based in the Kerela.</P>
              </PWrapper>
              <PWrapperBt>
                <Anchor href="#">
                  See My Work
                  <svg width="50" height="30" viewBox="0 0 10 6" fill="none">
                    <path
                      d="M6.71627 0L6.27434 0.441934L8.14928 2.31688H0V2.94189H8.14922L6.27434 4.81678L6.71627 5.25871L9.34566 2.62936L6.71627 0Z"
                      fill="black"
                    />
                  </svg>
                </Anchor>
              </PWrapperBt>
              <List>
                <ListItemWrapper>
                  <ListItem>
                    <ListAnchor
                      href="https://www.linkedin.com/in/savad-neeliyan-702749217/"
                      target="_blank"
                    >
                      Linkdln{" "}
                    </ListAnchor>
                  </ListItem>
                </ListItemWrapper>
                <Slash>/</Slash>
                <ListItemWrapper>
                  <ListItem>
                    <ListAnchor
                      href="https://github.com/savadneeliyan"
                      target="_blank"
                    >
                      <Spans> GitHub </Spans>
                    </ListAnchor>
                  </ListItem>
                </ListItemWrapper>
              </List>
            </Right>
            <Left>
              <Bar1 />
              <Img src="/images/bg.png" alt="" />
              <Bar2 />
            </Left>
          </Wrapper>
          <ScrollDown onClick={scrollToSection}>
            {" "}
            Scroll Down
            <svg width="40" height="24  " viewBox="0 0 10 6" fill="none">
              <path
                d="M6.71627 0L6.27434 0.441934L8.14928 2.31688H0V2.94189H8.14922L6.27434 4.81678L6.71627 5.25871L9.34566 2.62936L6.71627 0Z"
                fill="black"
              />
            </svg>
          </ScrollDown>
        </Container>
      </Section>
    </>
  );
}

export default Banner2


const Section = styled.div`
    height: 100vh;
    background-color: #f8f8f8;
    color: #000;
    display: flex;
    align-items: center;
    position: relative;
`;

const Container = styled(motion.div)`
    max-width:1200px;
    width:100%;
    margin: auto;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
`;

const H1 = styled.h1`
    overflow: hidden;
    position: relative;
    width: fit-content;
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 10px;
    &::before{
        content:"";
        position: absolute;
        top: 0;
        transition: 0.5s linear;
        height: 100%;
        display: block;
        background-color: #000;
        height: 50px;
        animation: slide 1s linear ; 
    }
`;

const PWrapper = styled.div`
    overflow-y: hidden;
`;

const P = styled.p`
    position: relative;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 10px;
    height: 20px;

    animation: slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both;

    
`;

const Img = styled.img`
    position: relative;
    z-index:2;
    animation: img 2s ; 
    width:250px;

`;

const Right = styled.div`
    width:62%;
`;

const Left = styled.div`
    position: relative;
`;

const Bar = styled.div`
    width: 550px;
    height: 60px;
    transform: rotate(-45deg);
    position: absolute;
    top: 200px;
    left: -140px;
    z-index: 0;
    &::before{
        content: '';
        width:100%;
        height: 100%;
        display: block;
        background: #000;
    }
`;

const Bar1 = styled(Bar)`
    transform: rotate(-45deg);
    &::before{
        animation: width 0.8s ease-in;
    }
`;

const Bar2 = styled(Bar)`
    transform: rotate(45deg);
    &::before{
        animation: width 0.5s ease-in;
    }
    
`;

const Span = styled(PWrapper)`
    animation: slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both;
`;

const Anchor = styled.a`
  text-decoration: none;
  font-size: 25px;
  text-transform: capitalize;
  position: relative;
  background: none;
  border: none;
  outline: none;
  color: #000;
  margin-top:50px;
  display: block;
  text-decoration: none;
  padding: 20px 40px;
  z-index: 1;
  margin-left: 30px;
  width: fit-content;
  display:flex;
  align-items: center;
  gap:20px;
  animation: slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both;

  &::after{
    position: absolute;
    content: '';
    width: 68px;
    height: 68px;
    background: #e8e8e8;
    z-index: -1;
    display: block;
    left: -20px;
    top: 0;
    bottom: 0;
    transition: 0.8s ease;
    border-radius: 50%;
    text-decoration: none;
  }
  &:hover::after{
    width: 330px;
    height: 100%;
    right: -20px;
    border-radius: 40px;
  }
`;

const PWrapperBt = styled(PWrapper)`
    margin-left:-30px;
`;

const List = styled.ul`
    display:flex;
    align-items:center;
    gap:15px;
    margin-top:30px;

 @media only screen and (max-width: 768px){
    display:none;
 }
`
const ListItemWrapper = styled.div`
    position: relative;
    overflow-y: hidden;
    padding: 5px 20px;
    padding-left: 0;
    z-index: 0;
    &::before{
        content:"";
        position: absolute;
        top: 0;
        transition: 0.5s linear;
        height: 100%;
        display: block;
        background-color: #000;
        height: 25px;
        animation: slide 1s linear ; 
       
    }
    
`;

const ListItem = styled.li`
    list-style-type:none;
    color:white;
    cursor:pointer;
    animation: slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both;
`;

const ListAnchor = styled.a`
    text-decoration:none;
    color:#515151;
    font-size: 20px;        
    transition: 0.5s linear;
    display: block;
    position: relative;
    &:hover{
        transform: translateX(10px);
        transition: 0.3s linear;
    }
    &::before{
        content: "";
        position: absolute;
        width: 0%;
        background: #000;
        height: 2px;
        top: 50%;
        left: -5px;
        display: block;
        transition: 0.5s linear;
    }
    &:hover::before{
        width: 115%;
        max-width: 150px;
    }
`;

const Spans = styled.span`
    overflow-y: hidden;
`;

const Slash = styled.h3`
    font-size: 25px;
    font-weight: 300;
    font-family: "Poppins";
    color: #515151;
`;

const Circle = styled.div`
    position: absolute;
    height: 450px;
    width: 450px;
    list-style-type: none;
    outline: 3px solid #fff;
    outline-offset: -2px;
    display:block;
    border-radius: 50%;
    animation: growUp 1s;
    background-color: #515151;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    
    &::before{
        content: "";
        display: block;
        height: 450px;
        width: 450px;
        background: #fff;
        border: 3px solid #fff;
        border-radius: 50%;
        animation: growDown 1s ease-in;
    }

`;

const ScrollDown = styled.div`
    display: flex;
    gap:20px;
    align-items: center;
    font-size: 20px;        
    transition: 0.5s linear;
    position: absolute;
    transform: rotate(90deg);
    right: 0%;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    @media only screen and (min-width: 1900px) {
        right: 15%;
    }
`;
