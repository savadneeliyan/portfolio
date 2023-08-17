import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'

function Loader() {


const items = ["M","O","H","A","M","M","A","D"," ","S","A","V","A","D"];
    
const firstname = {
  initial: {
    y:20,
  },
  animate: {
      y:0,
      transition: {
        staggerChildren: 0.1,
        type: "spring",
        stiffness: 60,
        delayChildren: 0.5
      },
    },
}
  
const letter = {
   initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      y: "-20px",
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
}


const backgroundTop = {
  initial: {
  },
  animate: {
    height: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay:3
    },
  }
};

const Progress = {
  initial: {
    width:"12%",
  },
  animate: {
    width: ["12%","12%","12%","12%","100%" ],
    transition:{
      ease: "easeInOut",
      duration: 3,      
    }
  },
}
const ProgressFill = {
  initial: {
    width:0,
  },
  animate: {
    width: "100%",
    transition:{
      duration: 2,
    }
  },
  exit: {
    width: "100vw",
    marginLeft: "auto",
    marginRight: "auto",
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};
const [shouldShowComponent,setshouldShowComponent] = useState(true)




  return (<>
      
        <Section  className="name-container">
          <AnimatePresence
            // initial={false}
          >
            {shouldShowComponent && (<>
                <Header
                  initial="initial"
                  animate="animate"
                  exit={"exit"}
                  variants={firstname}
                >
                  {items.map((item, index) => (
                    <motion.span key={index} variants={letter} >
                      {item}
                    </motion.span>
                  ))}

                </Header>

                <Bar variants={Progress} 
                initial="initial"
                animate= "animate" 
                    exit="exit">
                  <BarFilling
                    variants={ProgressFill}
                    initial="initial"
                    animate= "animate" 
                    exit="exit"
                  /> 
                </Bar>
                <BackgroundTop variants={backgroundTop} animate="animate"></BackgroundTop>
                <Background variants={backgroundTop} animate="animate"></Background>
              </>
            )}
          </AnimatePresence>
        </Section> 
        
    </>
  );
};


export default Loader

const Background = styled(motion.div)`
    height:48.5vh;
    width:100vw;
    position: absolute;
    bottom: 0;
    background-color: black;
    z-index: -1;
    `;
const BackgroundTop = styled(motion.div)`
    height:52.5vh;
    background-color: black;
    width:100vw;
    position: absolute;
    top: 0;
    z-index: -1;
`;

const Section = styled(motion.div)`
    height:100vh;
    width:100vw;
    /* background-color:black; */
    color:#fff;
    position:relative;
    /* z-index:999; */
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    gap:5px;
`;

const Header = styled(motion.div)`
    font-size:10px;
    color: #ffffffd0;
`;

const Bar = styled(motion.div)`
  /* overflow: hidden; */
  position: relative;
  border-radius: 2;
  width: 10%;
  height: 1px;
  background-color: #000000;
`;


const BarFilling = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  left: 0;
  right: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;


