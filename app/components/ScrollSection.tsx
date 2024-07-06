"use client";
import React, { useRef, useEffect } from "react";
import { Box, Flex, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TecnologiaAplicada from "./Home/TecnologiaAplicada";
import PersonasUsuarias from "./Home/PersonasUsuarias";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        x: "0%",
      },
      {
        x: "-300%",
        ease: "power1.inOut", // Cambié la facilidad para un desplazamiento más suave
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "400%",
          scrub: 1.5, // Ajusté scrub a 1.5 segundos para un desplazamiento más suave
          pin: true,
          anticipatePin: 1,
          onEnter: () => {
            document.body.classList.add('dark-mode');
          },
          onLeaveBack: () => {
            document.body.classList.remove('dark-mode');
          },
          onLeave: () => {
            document.body.classList.remove('dark-mode');
          }
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  const scrollSectionOuter = css`
    overflow: hidden;
    position: relative;
  `;

  const scrollSectionInner = css`
    height: 100vh;
    width: 400vw;
    display: flex;
  `;

  const scrollSection = css`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0; // Asegura que no se encoja
  `;

  return (
    <Box as="section" id="horizontal-section" css={scrollSectionOuter}>
      <Box ref={triggerRef} width="100%">
        <Flex ref={sectionRef} css={scrollSectionInner}>
          <Box css={scrollSection}>
            <TecnologiaAplicada />
          </Box>
          <Box css={scrollSection}>
            <PersonasUsuarias />
          </Box>
          <Box css={scrollSection}>
            <Text fontSize="2xl" fontWeight="bold">Section 3</Text>
          </Box>
          <Box css={scrollSection}>
            <Text fontSize="2xl" fontWeight="bold">Section 4</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default ScrollSection;
