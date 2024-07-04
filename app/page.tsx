"use client";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WeCann from './components/Home/WeCann';
import ScrollSection from './components/ScrollSection';
import { Flex } from '@chakra-ui/react';
import styles from './styles/Home.module.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Deshabilitar el scroll al cargar la página
    document.body.style.overflow = 'hidden';

    // Forzar el scroll al tope
    window.scrollTo(0, 0);

    // Mostrar el resto del contenido y habilitar el scroll después de 2 segundos
    setTimeout(() => {
      setShowContent(true);
      document.body.style.overflow = 'auto';
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>WeCann: Innovación y redes para la industria del cannabis en Argentina.</title>
        <meta name="description" content="En WeCann estamos construyendo soluciones para la industria del cannabis en Argentina a través de la digitalización y la innovación. Nuestra misión es modernizar y optimizar los procesos de la industria cannábica, conectando de manera efectiva a las ONGs, las personas usuarias del Reprocann y todos los actores involucrados." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      {showContent && (
        <>
          <ScrollSection />
        </>
      )}
    </>
  );
}
