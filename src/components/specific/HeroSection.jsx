import { useEffect,useRef } from "react";
import heroPic from "../../assets/images/heroPic.jpg";
 import {animationHero} from "../../lib/animations/animation.jsx"
export const HeroSection = () => {
  const myElement = useRef(null);

  useEffect(() => { 
    animationHero(myElement)
  },[])
  return (
    <>
      <div className="con-hero w-full h-[50%] relative ">
        <img ref={myElement} src={heroPic} alt="hero_pic" className="w-full " />
      </div>
    </>
  );
};
