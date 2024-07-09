"use client";
import React, { useRef } from 'react';
import {
  Box,
  Flex,
  Text,
  Button
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import styles from '../../styles/Home.module.css';
import NextLink from 'next/link';
import Cogollo3D_2 from './components/Cogollo3D_2';

const MotionFlex = motion(Flex,);

const TecnologiaAplicada = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <MotionFlex
      ref={ref}
      as="div"
      id='tecnologia-aplicada'
      direction={{ base: 'column', md: 'row' }}
      align={{ base: 'center', md: 'center' }}
      justify={{ base: 'center', md: 'center' }}
      maxH={{ base: '100%', md: '350px' }}
      borderRadius='10px'
      backgroundColor='rgba(255, 255, 255, .95)'
      boxShadow='rgba(0, 0, 0, 0.15) 0px 5px 15px'
      maxW={{ base: '100%', md: 'auto' }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants}
    >
      <Box 
        display={{ base: 'flex', md: 'none' }}
        textAlign="left" 
        w="100%"
        borderTopRadius='10px'
        p={3}
        color='white'
        borderBottom='solid 1px rgba(0, 0, 0, .1)'
        backgroundColor='#00BF30'>
        <Text as="h2" fontSize='16px' fontWeight='bold'>Tecnología aplicada a la Industria del Cannabis</Text>
      </Box>

      <Box mb={{ base: 4, md: 0 }} px={4} textAlign="center" maxW="320px" w="100%" flex='1'>
        <Cogollo3D_2 />
      </Box>

      <Box display={{ base: 'block', md: 'none' }} mb={4} textAlign="center" w="100%">
        <Text p={5} fontSize='14px' as="p">
          <strong>WeCann</strong> está diseñado específicamente para que las Organizaciones No Gubernamentales <i>(ONGs)</i> puedan gestionar de manera eficiente sus operaciones dentro del marco legal del <strong>Programa Nacional para el Estudio y la Investigación del Uso Medicinal de la Planta de Cannabis y sus Derivados</strong>. Este programa, establecido por la <strong>Ley 27.350</strong>, regula el acceso y la producción de cannabis medicinal, garantizando el cuidado integral de la salud y facilitando el cultivo controlado por pacientes y ONGs autorizadas en Argentina.
        </Text>
        <Button 
          className={styles.legalidadProyecto}
          as={NextLink} 
          href="/legalidad" 
          w={{ base: 'auto', sm: 'auto' }} // Ajuste del ancho del botón
        >
          Políticas de Legalidad
        </Button>
      </Box>

      <Box borderLeft='solid 1px rgba(0, 0, 0, .1)' p={5} display={{ base: 'none', md: 'block' }} textAlign={{ base: 'center', md: 'left' }} maxW="500px" w="100%">
        <Text mb={4} as="h2" fontSize='18px' fontWeight='bold'>Tecnología aplicada a la Industria del Cannabis</Text>
        <Text mb={4} fontSize='14px' as={'p'}>
          <strong>WeCann</strong> está diseñado específicamente para que las Organizaciones No Gubernamentales <i>(ONGs)</i> puedan gestionar de manera eficiente sus operaciones dentro del marco legal del <strong>Programa Nacional para el Estudio y la Investigación del Uso Medicinal de la Planta de Cannabis y sus Derivados</strong>. Este programa, establecido por la <strong>Ley 27.350</strong>, regula el acceso y la producción de cannabis medicinal, garantizando el cuidado integral de la salud y facilitando el cultivo controlado por pacientes y ONGs autorizadas en Argentina.
        </Text>
        <Button 
          className={styles.legalidadProyecto}
          as={NextLink} 
          href="/legalidad" 
          w={{ base: 'auto', sm: 'auto' }} // Ajuste del ancho del botón
          minW="200px" // Mínimo ancho para el botón
        >
          Políticas de Legalidad
        </Button>
      </Box>
    </MotionFlex>
  );
}

export default TecnologiaAplicada;
