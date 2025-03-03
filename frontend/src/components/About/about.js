import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import imgAbout from "../../assets/images/imagesinPlacement/homePageMainImage.png";

export default function About() {
  return (
    <div id="About">
      <div className="aboutMain">
        <img src={imgAbout} alt="About Talent-Bridge" className="imgAbout" />
      </div>
      <div className="aboutheader">
        <h2 className="aboutheading">About Talent-Bridge</h2>
        <p>
          At Talent Bridge Technology, we are committed to empowering students
          by providing exceptional job opportunities and career growth. We offer
          the best platform for college students, helping them connect with top
          companies and secure promising careers. Our platform is managed in
          collaboration with colleges, ensuring students receive the right
          guidance and resources for success. Talent Bridge has successfully
          placed numerous students in reputed firms, bridging the gap between
          education and employment. Our mission is to empower the next
          generation of professionals, making career dreams a reality through
          quality placements and continuous support.
        </p>
      </div>
    </div>
  );
}
