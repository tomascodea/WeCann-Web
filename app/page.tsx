"use client";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WeCann from './components/Home/WeCann';
import { Flex } from '@chakra-ui/react';
import styles from './styles/Home.module.css';
import Head from 'next/head';
import ScrollSection from './components/Home/ScrollSection';
import { useState, useEffect } from 'react';
import Header from './components/Header';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [headerBgColor, setHeaderBgColor] = useState('transparent');
  const [showWhiteLogo, setShowWhiteLogo] = useState(false);
  const [color, setColor] = useState('black');

  useEffect(() => {
    const handleScroll = () => {
      const horizontalSection = document.getElementById('horizontal-section');
      if (horizontalSection) {
        const sectionTop = horizontalSection.offsetTop;
        const sectionHeight = horizontalSection.offsetHeight;
        const windowScrollY = window.scrollY;

        if (windowScrollY === 0) {
          setHeaderBgColor('transparent');
          setColor('black');
          setShowWhiteLogo(false);
        } else if (windowScrollY > 0 && windowScrollY < sectionTop) {
          setHeaderBgColor('white');
          setColor('black');
          setShowWhiteLogo(false);
        } else if (windowScrollY >= sectionTop && windowScrollY < sectionTop + sectionHeight) {
          setHeaderBgColor('#00BF30');
          setColor('white');
          setShowWhiteLogo(true);
        } else if (windowScrollY >= sectionTop + sectionHeight) {
          setHeaderBgColor('white');
          setColor('black');
          setShowWhiteLogo(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleScrollSectionEnter = () => {
      setHeaderBgColor('#00BF30');
      setShowWhiteLogo(true);
    };

    const handleScrollSectionLeave = () => {
      setHeaderBgColor('white');
      setShowWhiteLogo(false);
    };

    window.addEventListener('scrollSectionEnter', handleScrollSectionEnter);
    window.addEventListener('scrollSectionLeave', handleScrollSectionLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollSectionEnter', handleScrollSectionEnter);
      window.removeEventListener('scrollSectionLeave', handleScrollSectionLeave);
    };
  }, []);

  return (
    <>
      <Head>
        <title>WeCann: Innovación y redes para la industria del cannabis en Argentina.</title>
        <meta name="description" content="En WeCann estamos construyendo soluciones para la industria del cannabis en Argentina a través de la digitalización y la innovación. Nuestra misión es modernizar y optimizar los procesos de la industria cannábica, conectando de manera efectiva a las ONGs, las personas usuarias del Reprocann y todos los actores involucrados." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header bgColor={headerBgColor} showWhiteLogo={showWhiteLogo} color={color} />

      <Flex
        as="section"
        id={styles.bienvenidos}
        justify={{ base: 'center', md: 'flex-start' }}
        align="center"
        padding="50px"
        wrap="wrap"
        direction="row"
        minH="100vh"
      >
        <WeCann />
      </Flex>
      <ScrollSection />
    </>
  );
}
