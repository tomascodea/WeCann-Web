"use client";
import React, { useRef, useEffect } from "react";
import { Box, Flex } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TecnologiaAplicada from "./Home/TecnologiaAplicada";
import PersonasUsuarias from "./Home/PersonasUsuarias";
import { useIndoorMode } from '../context/IndoorModeContext';

gsap.registerPlugin(ScrollTrigger);

const ScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const { setIsIndoorMode } = useIndoorMode();

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        x: "0%",
      },
      {
        x: "-100%", // Ajuste para dos componentes
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top+=2px top", // Inicia el efecto cuando faltan 2px para el top
          end: "200%", // Ajuste para dos componentes (cada componente ocupa 100%)
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          onEnter: () => {
            setIsIndoorMode(true);
          },
          onLeave: () => {
            setIsIndoorMode(false);
          },
          onEnterBack: () => {
            setIsIndoorMode(true);
          },
          onLeaveBack: () => {
            setIsIndoorMode(false);
          }
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, [setIsIndoorMode]);

  const scrollSectionOuter = css`
    overflow: hidden;
    position: relative;
  `;

  const scrollSectionInner = css`
    height: 100vh;
    width: 200%; /* Ajuste para dos componentes */
    display: flex;
  `;

  const scrollSection = css`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
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
        </Flex>
      </Box>
    </Box>
  );
}

export default ScrollSection;
