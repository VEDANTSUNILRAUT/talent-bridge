import React from "react";
import "./about.css";
import Marquee from 'react-fast-marquee';
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

import imgAbout  from "../../assets/images/imagesinPlacement/hero-carousel-3.svg"
export default function About(){
    return(
        
        <div className="aboutMain" id="About">
             {/*One part is for image   */}
            <div className="aboutPart1">
                <img src={imgAbout} alt="NotLoad" className="imgAbout" />
            </div>
            <div className="aboutpart2">
                <h2 className="aboutheader"> About Student Cell</h2>
                 <p>
                    Key Changes & Explanation:
                    ✅ Fade-in Animation: The .Main container now fades in on page load using the fadeIn keyframe.
                    ✅ Button Animation: The button enlarges slightly and changes color when hovered.
                    ✅ Image Animation: The image rotates slightly and scales up on hover.
                    ✅ Text Animation: The heading (.headText) changes color when hovered.</p>

            </div>
            <div className="Companysection">

            <center><h2 style={{textTransform:'uppercase' , color:"darkcyan"}}>our Technical Partner</h2>
            <p style={{color:"gray", fontWeight:700,fontSize:'18px',marginTop:'-10px'}}>Make Your Future With Ous With 50+ Companies</p></center>
                <Marquee pauseOnHover speed={40}>
                <div  className="allimages">
                    <img src={img1} alt="" className="imgPartner"/>
                    <img src={img2} alt=""  className="imgPartner"/>
                    <img src={img3} alt=""  className="imgPartner"/>
                    <img src={img4} alt=""  className="imgPartner"/>
                    <img src={img10} alt=""  className="imgPartner"/>
                    <img src={img6} alt=""  className="imgPartner"/>
                    <img src={img7} alt=""  className="imgPartner"/>
                </div>
                
                
                </Marquee>
                <center>
                <Marquee direction="right"speed={200} pauseOnHover style={{width:'80%'}}>
                <div  className="allimages2">
                    <img src={img8} alt="" className="imgPartner2"/>
                    <img src={img9} alt=""  className="imgPartner2"/>
                    <img src={img10} alt=""  className="imgPartner2"/>
                    <img src={img11} alt=""  className="imgPartner2"/>
                    <img src={img12} alt=""  className="imgPartner2"/>
                    <img src={img5} alt=""  className="imgPartner2"/>
                    <img src={img9} alt=""  className="imgPartner2"/>
                </div>
                </Marquee></center>
            </div>
        </div>
       
    )
}