import React, { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Footer from "../Components/Footer";
import Nav2 from './Nav2';
import { data } from './ProjectData';


  
const opening = {
    initial: {
      width: "390px",
      height:"300px",
      right: 0,
      height:"300px",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      margin: "auto",
    },
    animate: {
      left: 0,
      width: "100%",
      height: "100%",
      transform: "none",
      transition: {
          duration: 2,
      },
    },
    exit:{ 

    }
}



function ProjectPage() {
  const location = useLocation();
  const paths = location.pathname.split("/");
    useEffect(() => {

        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    }, [])

    const { scrollYProgress  } = useScroll();
    const scale = useTransform( scrollYProgress, [0,1] ,[1, 1.35] ) 
      return (
        data?.map((item) => {
          if (item.url == paths[2]) { 
            console.log(item.about)
            return (
              <>
                <Nav2 />
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                >
                  <motion.div
                    className="page"
                    key="index"
                    exit={{ width: "100%", transition: { duration: 1 } }}
                  ></motion.div>
                  <motion.div
                    style={{
                      maxWidth: "100%",
                      position: "relative",
                      maxHeight: "100vh",
                      overflow: "hidden",
                      width: "100%",
                      height: "100vh",
                    }}
                  >
                    <motion.img
                      initial="initial"
                      animate="animate"
                      variants={opening}
                      style={{ filter: "grayscale(1)" }}
                      src={item.image}
                      alt=""
                    />
                  </motion.div>
                  <TitleContainer>
                    <Wrapper>
                      <Title
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ transition: 1, delay: 2 }}
                      >
                        {item.name}
                      </Title>
                    </Wrapper>
                    <Wrapper>
                      <Span
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ transition: 1, delay: 2 }}
                      >
                        {item.type}
                      </Span>
                    </Wrapper>
                  </TitleContainer>
                  <WrapperContainer>
                    <Wrapperft style={{ marginBottom: "50px" }}>
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
                          transform: "translateX(100%)",
                        }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                      <About
                        className="title"
                        initial={{ y: 92 }}
                        whileInView={{
                          y: 0,
                          transition: { duration: 1, delay: 1 },
                        }}
                        // animate={{ transition: 1, delay: 2 }}
                        viewport={{ once: true }}
                      >
                        About the project.
                      </About>
                    </Wrapperft>
                    <Wrapperft>
                      <Pera
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{
                          y: 0,
                          opacity: 1,
                          transition: { duration: 1, delay: 1 },
                        }}
                        transition={{ transition: 1, delay: 2 }}
                        viewport={{ once: true }}
                      >
                        {item?.about}
                      </Pera>
                    </Wrapperft>

                    <BottomContainer>
                      <div>
                        <Wrapperft>
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
                              transform: "translateX(100%)",
                            }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                          ></motion.div>
                          <About
                            className="title"
                            initial={{ y: 20, fontSize: "20px" }}
                            whileInView={{
                              y: 0,
                              transition: { duration: 1, delay: 1 },
                            }}
                            animate={{ transition: 1, delay: 2 }}
                            viewport={{ once: true }}
                          >
                            Platform
                          </About>
                        </Wrapperft>
                        <Wrapperft>
                          <Pera
                            className="title"
                            initial={{
                              y: 16,
                              lineHeight: "16px",
                              fontSize: "16px",
                            }}
                            whileInView={{
                              y: 0,
                              transition: { duration: 1, delay: 1 },
                            }}
                            animate={{ transition: 1, delay: 2 }}
                            viewport={{ once: true }}
                          >
                            {item.type}
                          </Pera>
                        </Wrapperft>
                      </div>
                      <div>
                        <Wrapperft>
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
                              transform: "translateX(100%)",
                            }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                          ></motion.div>
                          <About
                            className="title"
                            initial={{ y: 20, fontSize: "20px" }}
                            whileInView={{
                              y: 0,
                              transition: { duration: 1, delay: 1 },
                            }}
                            animate={{ transition: 1, delay: 2 }}
                            viewport={{ once: true }}
                          >
                            Category
                          </About>
                        </Wrapperft>
                        <Wrapperft>
                          <Pera
                            className="title"
                            initial={{
                              y: 16,
                              lineHeight: "16px",
                              fontSize: "16px",
                            }}
                            whileInView={{
                              y: 0,
                              transition: { duration: 1, delay: 1 },
                            }}
                            animate={{ transition: 1, delay: 2 }}
                            viewport={{ once: true }}
                          >
                            Other
                          </Pera>
                        </Wrapperft>
                      </div>
                    </BottomContainer>
                    <Tech>
                      <Wrapperft>
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
                            transform: "translateX(100%)",
                          }}
                          transition={{ duration: 1 }}
                          viewport={{ once: true }}
                        ></motion.div>
                        <About
                          className="title"
                          initial={{ y: 20, fontSize: "20px" }}
                          whileInView={{
                            y: 0,
                            transition: { duration: 1, delay: 1 },
                          }}
                          animate={{ transition: 1, delay: 2 }}
                          viewport={{ once: true }}
                        >
                          Technologies Used
                        </About>
                      </Wrapperft>
                      <ListUl
                        initial={{ y: "30px", opacity: 0 }}
                        whileInView={{
                          y: 0,
                          opacity: 1,
                          transition: { duration: 1, delay: 1 },
                        }}
                        viewport={{ once: true }}
                      >
                        {item?.tecs?.map((list) => {
                          return <List>{list} / </List>;
                        })}
                      </ListUl>
                      {item.giturl && (
                        <Wrapperft>
                          <Anchor
                            href={item.giturl}
                            target="_blank"
                            initial={{ y: "20px", opacity: 0 }}
                            whileInView={{ y: "0px", opacity: 1 }}
                            transition={{ duration: 1 }}
                          >
                            Preview 
                            <svg
                              width="30"
                              height="18"
                              viewBox="0 0 10 6"
                              fill="none"
                            >
                              <path
                                d="M6.71627 0L6.27434 0.441934L8.14928 2.31688H0V2.94189H8.14922L6.27434 4.81678L6.71627 5.25871L9.34566 2.62936L6.71627 0Z"
                                fill="#000"
                              />
                            </svg>
                          </Anchor>
                        </Wrapperft>
                      )}
                    </Tech>
                  </WrapperContainer>
                </motion.div>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                >
                  <motion.img
                    src={item.fullImage}
                    initial={{
                      height: 0,
                      scale: 0.8,
                      width: "100%",
                      height: "100vh",
                      borderTop: " 6px solid black",
                    }}
                    animate={{ height: "auto" }}
                    whileInView={{ scale: 1, transition: { duration: 1 } }}
                    viewport={{ once: true }}
                  ></motion.img>
                </motion.div>
                <Footer />
              </>
            );
          }
          }
        )
      );
}

export default ProjectPage;


const Wrapper = styled(motion.div)`
  overflow: hidden;
  position: relative;
`;
const Wrapperft = styled(Wrapper)`
  width:fit-content;
`;
const TitleContainer = styled(motion.div)`
  margin-bottom:80px;
  margin-top:-20vh;
  position: relative;
  z-index:9;
`;
const Span = styled(motion.h4)`
  text-align:center;
  color:white;
  margin-top:10px;
`;
const Title = styled(motion.h2)`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:  #565454;
  text-align: center;
  color: #fff;
  font-size:100px;
  line-height:110px;
`;
const WrapperContainer = styled(motion.div)`
  max-width:1200px;
  margin:auto;
  min-height:100vh;
  padding:100px 0;
`;
const About = styled(motion.h2)`
  font-size:80px;
  color:#000;
`;
const Pera = styled(motion.p)`
font-size:22px;
line-height:50px;
color:#000;
`;
const BottomContainer = styled(motion.div)`
display:flex;
gap:20px;
margin-top:80px;

${Wrapperft}{
  margin-bottom:30px;
}
`;
const Tech = styled(motion.div)`

`;
const ListUl = styled(motion.ul)`
  margin-top:30px;
  display:flex;
  flex-wrap:wrap;
  max-width:546px;
  gap:20px;
`;
const List = styled(motion.li)`
  list-style:none;
  font-size:17px;
  color:#393939;
`;

const Anchor = styled(motion.a)`
  text-decoration: none;
  font-size: 18px;
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
  width: fit-content;
  display:flex;
  align-items: center;
  position: relative;
  gap:20px;
  animation: slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both;

  &::after{
    position: absolute;
    content: '';
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
  &:hover::after{    
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
`;