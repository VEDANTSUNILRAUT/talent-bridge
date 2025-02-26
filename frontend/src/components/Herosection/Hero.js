import React from "react";
import "./Hero.css";
import { useNavigate,Link } from "react-router-dom";
import img2 from "../../assets/images/imagesinPlacement/hero-carousel-3.svg";
import { HiArrowSmDown  } from "react-icons/hi";
import img1 from "../../assets/images/Header_Logo/talentBridgeLogo2.png";
 export default function Hero(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/job'); 
    };
    
        return(
            <div className="Main">
                 <div className="Mainpart1">
                   
                    <h2 className="headText">
                     Talent Bridge<img src={img1} alt="" className="img1"/>
                    </h2>
                    <span className="spanhero"></span>
                    <p className="HeroPara">Empowering students to build successful careers through comprehensive resources and opportunities.</p>
                    <div className="buttondiv"><button class="button" onClick={handleClick}>
                        <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                        Find Jobs<HiArrowSmDown/>
                    </button>
                    <Link to={"/about"} ><button class="button" onClick={handleClick}>
                        <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                        About Us<HiArrowSmDown/>
                    </button></Link>
                    </div>
                    
                 </div>
                 <div className="Mainpart2">
                    <span className="spanhero2"></span>
                    <img src={img2} alt=""className="imghero" />
                 </div>

                   

                  
                   
            </div>

        )
 }