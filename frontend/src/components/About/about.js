import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import Marquee from "react-fast-marquee";

import img1 from "../../assets/images/imagesinPlacement/client/client-1.png";
import img2 from "../../assets/images/imagesinPlacement/client/client-2.png";
import img3 from "../../assets/images/imagesinPlacement/client/client-3.png";
import img4 from "../../assets/images/imagesinPlacement/client/client-4.png";
import img5 from "../../assets/images/imagesinPlacement/client/client-5.png";
import img6 from "../../assets/images/imagesinPlacement/client/client-6.png";
import img7 from "../../assets/images/imagesinPlacement/client/client-7.png";
import img8 from "../../assets/images/imagesinPlacement/client/client-8.png";
import img9 from "../../assets/images/imagesinPlacement/client/client-9.png";
import img10 from "../../assets/images/imagesinPlacement/client/clinet-10.png";
import img11 from "../../assets/images/imagesinPlacement/client/clinet-11.png";
import img12 from "../../assets/images/imagesinPlacement/client/clinet-12.png";

import imgAbout from "../../assets/images/imagesinPlacement/homePageMainImage.png";

export default function About() {
  return (
    <div className="aboutMain" id="About">
      {/* Left Image Section */}
      <motion.div
        className="aboutPart1"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
       
      >
        <img src={imgAbout} alt="NotLoad" className="imgAbout" />
      </motion.div>

      {/* Right Text Section */}
      <motion.div
        className="aboutpart2"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        
      >
        <h2 className="aboutheader"> About Talent-Bridge</h2>
        <p>
          At Talent Bridge Technology, we are committed to empowering students by providing exceptional job opportunities and career growth. We offer the best platform for college students, helping them connect with top companies and secure promising careers. Our platform is managed in collaboration with colleges, ensuring students receive the right guidance and resources for success. Talent Bridge has successfully placed numerous students in reputed firms, bridging the gap between education and employment. Our mission is to empower the next generation of professionals, making career dreams a reality through quality placements and continuous support.
        </p>
      </motion.div>

      {/* Company Section */}
      <motion.div
        className="Companysection"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      
      >
        <center>
          <h2 className="companyHeader">OUR TECHNICAL PARTNER</h2>
          <p className="companySubText">Make Your Future With Us With 50+ Companies</p>
        </center>

        {/* Marquee for Partner Logos */}
        <div className="marqueeDiv">
          <Marquee pauseOnHover speed={40}>
            <div className="allimages">
              <img src={img1} alt="" className="imgPartner" />
              <img src={img2} alt="" className="imgPartner" />
              <img src={img3} alt="" className="imgPartner" />
              <img src={img4} alt="" className="imgPartner" />
              <img src={img10} alt="" className="imgPartner" />
              <img src={img6} alt="" className="imgPartner" />
              <img src={img7} alt="" className="imgPartner" />
            </div>
          </Marquee>

          <center>
            <Marquee direction="right" speed={50} pauseOnHover style={{ width: "80%" }}>
              <div className="allimages2">
                <img src={img8} alt="" className="imgPartner2" />
                <img src={img9} alt="" className="imgPartner2" />
                <img src={img10} alt="" className="imgPartner2" />
                <img src={img11} alt="" className="imgPartner2" />
                <img src={img12} alt="" className="imgPartner2" />
                <img src={img5} alt="" className="imgPartner2" />
                <img src={img9} alt="" className="imgPartner2" />
              </div>
            </Marquee>
          </center>
        </div>
      </motion.div>
    </div>
  );
}
