import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import Marquee from "react-fast-marquee";

import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import { SlideImage } from "../../utils/data";
const SlideImages=
  [

{    id:'1',
    src:'../../assets/images/SLIDER/',
  },

{    id:'1',
    src:'../assets/images/SLIDER/A2.png',
  },
  ]
const Portfolio = () => {
  console.log(SlideImage);
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">Our Online Services</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <Marquee gradient={false}>
          {SlideImage.map((slide)=>{
            console.log(slide.src);
            return (<>
            <img                             className={css.slider}
 src={slide.src} alt="" />
{/* <img
                            className={css.slider}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Accenture_logo.svg/1200px-Accenture_logo.svg.png"
              alt=""
            /> */}
            </>)
          })}
            {/* <img
                            className={css.slider}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Accenture_logo.svg/1200px-Accenture_logo.svg.png"
              alt=""
            />

            <img
                            className={css.slider}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/640px-Wipro_Primary_Logo_Color_RGB.svg.png"
              alt=""
            />

            <img
              className={css.slider}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1200px-Adobe_Corporate_Logo.png"
              alt=""
            /> */}
          </Marquee>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
