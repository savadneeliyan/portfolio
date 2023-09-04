import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function AboutBanner() {
  return (
    <>
      <Wrapper>
        <Container>
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
              >
                {" "}
                ABOUT{" "}
              </Side>
            </Overflow>
          </div>
          <div>
            <Head>
              <Span
                initial={{ color: "#fff", y: "40px" }}
                whileInView={{ color: "#000", y: "0px" }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              >
                I am a passionate front-end
              </Span>
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
            </Head>
            <Head>
              <Span
                initial={{ color: "#fff", y: "40px" }}
                whileInView={{ color: "#000", y: "0px" }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              >
                developer and ui/ux
              </Span>
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
            </Head>
            <Head>
              <Span
                initial={{ color: "#fff", y: "40px" }}
                whileInView={{ color: "#000", y: "0px" }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              >
                designer with
              </Span>
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
            </Head>
            <Head>
              <Span
                initial={{ color: "#fff", y: "40px" }}
                whileInView={{ color: "#000", y: "0px" }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              >
                a keen eye for details.
              </Span>
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
            </Head>
          </div>
          <Img>
            <motion.div
              viewport={{ once: true }}
              initial={{
                width: "0%",
                top: 0,
                height: "100%",
                position: "absolute",
                background: "#000",
              }}
              whileInView={{ width: "100%", transform: "translateX(100%)" }}
              transition={{ duration: 1 }}
            ></motion.div>
            <motion.img
              viewport={{ once: true }}
              initial={{
                y: "320px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "5px",
              }}
              whileInView={{ y: "0px" }}
              transition={{ delay: 1, duration: 1 }}
              src="/Images/profile.jpg"
              alt=""
            />
          </Img>
        </Container>
      </Wrapper>

      <motion.div
        style={{
          display: "flex",
          justifyContent: "start",
          gap: "100px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative", overflow: "hidden" }}>
            <motion.h3
              viewport={{ once: true }}
              initial={{ y: "20px" }}
              whileInView={{ y: 0 }}
              transition={{ delay: 1 }}
            >
              /01{" "}
            </motion.h3>
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
          </div>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <motion.h2
              viewport={{ once: true }}
              initial={{ y: "28px" }}
              whileInView={{ y: 0 }}
              transition={{ delay: 1 }}
            >
              Story
            </motion.h2>
            <motion.div
              viewport={{ once: true }}
              initial={{
                width: "0%",
                top: 0,
                height: "100%",
                position: "absolute",
                background: "#000",
              }}
              whileInView={{ width: "100%", x: ["0%", "0%", "0%", "100%"] }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <motion.h2
            viewport={{ once: true }}
            initial={{ y: "28px" }}
            whileInView={{ y: 0 }}
            transition={{ delay: 1 }}
          >
            A short detail about me.
          </motion.h2>
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
        </div>
      </motion.div>
      <motion.div style={{ maxWidth: "1200px", margin: "auto" }}>
        <motion.div style={{ maxWidth: "900px", margin: "50px 0 50px auto" }}>
          <Pera
            viewport={{ once: true }}
            initial={{ y: "20px" }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            My name is Mohammad Savad, and I am a self-taught front-end
            developer with a passion for creating engaging and visually
            appealing websites. With expertise in HTML, CSS, JavaScript,
            Bootstrap, jQuery, PHP, Python, React, WordPress, MongoDB, Node, and
            Express, I bring a diverse skill set to every project.
          </Pera>

          <Pera
            viewport={{ once: true }}
            initial={{ y: "20px" }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {" "}
            I have had the privilege of working with various companies,
            including Limenzy, where I am currently employed. Additionally, I
            have taken on freelance projects for clients such as Pearl, Soleil
            Productions, and Alsalhya, delivering exceptional websites that meet
            their unique requirements.
          </Pera>

          <Pera
            viewport={{ once: true }}
            initial={{ y: "20px" }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Graduating in 2022, I am committed to continuous learning and
            expanding my knowledge base. In a rapidly evolving industry, I
            thrive on embracing new technologies and eagerly dive into the
            challenges they present.
          </Pera>

          <Pera
            viewport={{ once: true }}
            initial={{ y: "20px" }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            I believe in the power of simplicity and user-centered design,
            crafting seamless user experiences that leave a lasting impression.
            With a keen eye for detail and a focus on delivering high-quality
            work, I strive to exceed expectations with each project.
          </Pera>

          <Pera
            viewport={{ once: true }}
            initial={{ y: "20px" }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            As I navigate through the complexities of life, I am motivated by
            the opportunity to collaborate with like-minded individuals and
            organizations. My unwavering dedication to personal and professional
            growth drives me to explore new horizons and stay ahead of industry
            trends.
          </Pera>
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          display: "flex",
          justifyContent: "start",
          gap: "100px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative", overflow: "hidden" }}>
            <motion.h3
              viewport={{ once: true }}
              initial={{ y: "20px" }}
              whileInView={{ y: 0 }}
              transition={{ delay: 1 }}
            >
              /02
            </motion.h3>
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
          </div>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <motion.h2
              viewport={{ once: true }}
              initial={{ y: "28px" }}
              whileInView={{ y: 0 }}
              transition={{ delay: 1 }}
            >
              The Tools
            </motion.h2>
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
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <motion.h2
            viewport={{ once: true }}
            initial={{ y: "28px" }}
            whileInView={{ y: 0 }}
            transition={{ delay: 1 }}
          >
            What i use.
          </motion.h2>
          <motion.div
            viewport={{ once: true }}
            initial={{
              width: "0%",
              top: 0,
              height: "100%",
              position: "absolute",
              background: "#000",
            }}
            whileInView={{ width: "100%", x: ["0%", "0%", "0%", "100%"] }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </motion.div>
      <motion.div style={{ maxWidth: "1200px", margin: "auto" }}>
        <motion.div style={{ maxWidth: "900px", margin: "50px 0 50px auto" }}>
          <Pera
            initial={{ y: "20px" }}
            viewport={{ once: true }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            I use a number of tools that make design and development much
            easier. I usually use Figma or Adobe XD interchangeably for the
            design. For development/coding, I use different tools specific to
            the development of the application or website. Listed below are the
            tools and technologies that I use and I'm knowledgeable with.
          </Pera>

          <div style={{ display: "flex", margin: "50px 0", gap: "50px" }}>
            <div>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <motion.h2
                  initial={{ y: "28px" }}
                  viewport={{ once: true }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: 1 }}
                >
                  Creative Design
                </motion.h2>
                <motion.div
                  initial={{
                    width: "0%",
                    top: 0,
                    height: "100%",
                    position: "absolute",
                    background: "#000",
                  }}
                  viewport={{ once: true }}
                  whileInView={{
                    width: "100%",
                    x: ["0%", "0%", "0%", "100%"],
                  }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
              <div style={{ marginTop: "30px" }}>
                <motion.ul
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  <li style={{ marginBottom: "20px" }}>Figma</li>

                  <li style={{ marginBottom: "20px" }}>Adobe Photoshop</li>

                  <li style={{ marginBottom: "20px" }}>Adobe XD</li>
                </motion.ul>
              </div>
            </div>
            <div>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <motion.h2
                  initial={{ y: "28px" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  Web Development
                </motion.h2>
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
              </div>
              <div style={{ display: "flex", gap: "50px", marginTop: "30px" }}>
                <div>
                  <motion.ul
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                  >
                    <li style={{ marginBottom: "20px" }}>HTML 5</li>

                    <li style={{ marginBottom: "20px" }}>CSS 3</li>

                    <li style={{ marginBottom: "20px" }}>JavaScript</li>

                    <li style={{ marginBottom: "20px" }}>TypeScript</li>

                    <li style={{ marginBottom: "20px" }}>Node JS</li>
                  </motion.ul>
                </div>
                <div>
                  <motion.ul
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                  >
                    <li style={{ marginBottom: "20px" }}>Express JS</li>

                    <li style={{ marginBottom: "20px" }}>React JS</li>

                    <li style={{ marginBottom: "20px" }}>Redux</li>

                    <li style={{ marginBottom: "20px" }}>Wordpress</li>

                    <li style={{ marginBottom: "20px" }}>woocommerce</li>
                  </motion.ul>
                </div>
                <div>
                  <motion.ul
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                  >
                    <li style={{ marginBottom: "20px" }}>Git</li>

                    <li style={{ marginBottom: "20px" }}>NPM</li>

                    <li style={{ marginBottom: "20px" }}>Yarn</li>

                    <li style={{ marginBottom: "20px" }}>Firebase</li>

                    <li style={{ marginBottom: "20px" }}>MongoDB</li>
                  </motion.ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          display: "flex",
          justifyContent: "start",
          gap: "100px",
          maxWidth: "1200px",
          margin: "auto",
          alignItems: "start",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative", overflow: "hidden" }}>
            <motion.h3
              viewport={{ once: true }}
              initial={{ y: "20px" }}
              whileInView={{ y: 0 }}
              transition={{ delay: 1 }}
            >
              /03
            </motion.h3>
            <motion.div
              viewport={{ once: true }}
              initial={{
                width: "0%",
                top: 0,
                height: "100%",
                position: "absolute",
                background: "#000",
              }}
              whileInView={{ width: "100%", x: ["0%", "0%", "0%", "100%"] }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <motion.h2
              viewport={{ once: true }}
              initial={{ y: "28px" }}
              whileInView={{ y: 0 }}
              transition={{ delay: 1 }}
            >
              Contact{" "}
            </motion.h2>
            <motion.div
              viewport={{ once: true }}
              initial={{
                width: "0%",
                top: 0,
                height: "100%",
                position: "absolute",
                background: "#000",
              }}
              whileInView={{ width: "100%", x: ["0%", "0%", "0%", "100%"] }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
        </div>
        <div>
          <div>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "fit-content",
              }}
            >
              <motion.h2
                style={{ width: "fit-width" }}
                viewport={{ once: true }}
                initial={{ y: "28px" }}
                whileInView={{ y: 0 }}
                transition={{ delay: 1 }}
              >
                Social
              </motion.h2>
              <motion.div
                viewport={{ once: true }}
                initial={{
                  width: "0%",
                  top: 0,
                  height: "100%",
                  position: "absolute",
                  background: "#000",
                }}
                whileInView={{ width: "100%", x: ["0%", "0%", "0%", "100%"] }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
            <div>
              <motion.ul
                style={{
                  display: "flex",
                  gap: "30px",
                  alignItems: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
                initial={{ y: 30, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <li>
                  <ListAnchor
                    target="_blank"
                    href="https://www.linkedin.com/in/savad-neeliyan-702749217/"
                  >
                    LinkedIn
                  </ListAnchor>
                </li>
                <Slash>/</Slash>

                <li>
                  <ListAnchor
                    target="_blank"
                    href="https://www.instagram.com/that_s_guy/"
                  >
                    <motion.div style={{ overflow: "hidden" }}>
                      Instagram
                    </motion.div>
                  </ListAnchor>
                </li>

                <Slash>/</Slash>

                <li>
                  <ListAnchor
                    target="_blank"
                    href="https://www.facebook.com/savad.kvr/"
                  >
                    <motion.div style={{ overflow: "hidden" }}>
                      Facebook
                    </motion.div>
                  </ListAnchor>
                </li>
              </motion.ul>
            </div>
          </div>
          <div style={{ marginBottom: "100px" }}>
            <div>
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "fit-content",
                }}
              >
                <motion.h2
                  viewport={{ once: true }}
                  initial={{ y: "28px" }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: 1 }}
                >
                  Gmail
                </motion.h2>
                <motion.div
                  viewport={{ once: true }}
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
                ></motion.div>
              </div>
            </div>
            <div style={{ marginTop: "50px" }}>
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <li style={{ width: "fit-content" }}>
                  <ListAnchor href="mailto:savadn632@gmail.com">
                    <motion.div style={{ overflow: "hidden" }}>
                      savadn632@gmail.com
                    </motion.div>
                  </ListAnchor>
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div style={{ margin: "50px auto 100px", maxWidth: "800px" }}>
        <div
          style={{
            marginBottom: "30px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.h2
            viewport={{ once: true }}
            initial={{ y: "24px" }}
            whileInView={{ y: 0 }}
            transition={{ delay: 1 }}
            style={{ fontSize: "20px", textAlign: "center" }}
          >
            “Choose a job you love and you will never have to work a day in your
            life.”
          </motion.h2>
          <motion.div
            viewport={{ once: true }}
            initial={{
              width: "0%",
              top: 0,
              height: "100%",
              position: "absolute",
              background: "#000",
            }}
            whileInView={{ width: "100%", x: ["0%", "0%", "0%", "100%"] }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
        <div
          style={{
            width: "fit-content",
            marginRight: 0,
            position: "relative",
            marginLeft: "auto",
            overflow: "hidden",
          }}
        >
          <motion.h2
            viewport={{ once: true }}
            initial={{ y: "14px" }}
            whileInView={{ y: 0 }}
            transition={{ delay: 1 }}
            style={{ fontSize: "15px", color: "#333" }}
          >
            — Confucius
          </motion.h2>
          <motion.div
            viewport={{ once: true }}
            initial={{
              width: "0%",
              top: 0,
              height: "100%",
              position: "absolute",
              background: "#000",
            }}
            whileInView={{ width: "100%", x: ["0%", "0%", "0%", "100%"] }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default AboutBanner;

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled(motion.div)`
  max-width: 1200px;
  margin: auto;
  height: 80vh;
  display: flex;
  align-items: center;
`;

const Img = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 320px;
`;
const Head = styled(motion.h1)`
  overflow: hidden;
  position: relative;
  width: fit-content;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 10px;
`;

const Span = styled(motion.h5)`
  /* transform: translateY(20px) translateZ(0px); */
`;

const Pera = styled(motion.p)`
  font-size: 20px;
  line-height: 34px;
  opacity: 0;
  margin-bottom: 20px;
`;

const Slash = styled.h3`
  font-size: 25px;
  font-weight: 300;
  font-family: "Poppins";
  color: #515151;
`;

const ListAnchor = styled.a`
  color: #515151;
  font-size: 20px;
  transition: 0.5s linear;
  display: block;
  position: relative;
  &:hover {
    text-decoration: none;
    transform: translateX(10px);
    transition: 0.3s linear;
  }
  &::before {
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
  &:hover::before {
    width: 115%;
    /* max-width: 150px; */
  }
`;

const Overflow = styled(motion.div)`
  overflow: hidden;
  width: fit-content;
  position: relative;
`;

const Side = styled(motion.h4)`
  font-size: 12px;
  line-height: 10px;
  font-weight: 400;
`;
