"use client";
import React, { useRef, useEffect } from "react";
import { Box, Flex, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Geneticas from "./Home/Geneticas";

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
          start: "top top+=50px",
          end: "+=400%",
          scrub: 1.5,
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

  const scrollSectionOuter = css`
    overflow: hidden;
    position: relative;
  `;

  const scrollSectionInner = css`
    height: 100vh;
    width: 400vw;
    display: flex;
    flex-direction: row;
    position: relative;
  `;

  const scrollSection = css`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Box id="horizontal-section" css={scrollSectionOuter}>
      <Box ref={triggerRef} width="400%">
        <Flex ref={sectionRef} css={scrollSectionInner}>
          <Box css={scrollSection}>
            <Geneticas/>
          </Box>
          <Box css={scrollSection}>
            <Text fontSize="2xl" fontWeight="bold">Section 2</Text>
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