import { gsap } from 'gsap';


export const animationHero = (ref) => {

    gsap.fromTo(
        ref.current,
        { 
          scale: 1.5,  // Starting scale (1.5 times the original size)
          opacity: 0   // Starting opacity (completely transparent)
        },
        {
          scale: 1,    // Ending scale (back to the original size)
          opacity: 1,  // Ending opacity (fully opaque)
          duration: 2, // Duration of the animation in seconds
          ease: "power2.out"  // Easing function for a smooth animation
        }
      );
}


export const categoryAnimation = (ref) => {

    gsap.from(ref.current, {
        y: -100,
        duration: 2,
        ease: 'power2.out',
        stagger: 0.1
      });
      
}


export const animationHero2 = (ref) => {

  gsap.fromTo(
      ref.current,
      { 
        y: +100, // Starting scale (1.5 times the original size)
        opacity: 0   // Starting opacity (completely transparent)
      },
      {
        y: 0,   // Ending scale (back to the original size)
        opacity: 1,   // Starting opacity (completely transparent)

        duration: 2, // Duration of the animation in seconds
        ease: "power2.out"  // Easing function for a smooth animation
      }
    );
}

export const animationHero3 = (ref) => {

  gsap.fromTo(
      ref.current,
      { 
        y: -100, // Starting scale (1.5 times the original size)
        opacity: 0   // Starting opacity (completely transparent)
      },
      {
        y: 0,   // Ending scale (back to the original size)
        opacity: 1,   // Starting opacity (completely transparent)

        duration: 2, // Duration of the animation in seconds
        ease: "power2.out"  // Easing function for a smooth animation
      }
    );
}