"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "power1.inOut",
        duration: 1.5,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top+=50px", // Ajustar el inicio
          end: "+=400%", // Ajustar el final para mejor precisión
          scrub: 1.5, // Ajuste de scrub para suavizar
          pin: true,
          onEnter: () => {
            const event = new Event('scrollSectionEnter');
            window.dispatchEvent(event);
          },
          onLeaveBack: () => {
            const event = new Event('scrollSectionLeave');
            window.dispatchEvent(event);
          },
          onLeave: () => {
            const event = new Event('scrollSectionLeave');
            window.dispatchEvent(event);
          }
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section id="horizontal-section" className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <h3>Section 1</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
