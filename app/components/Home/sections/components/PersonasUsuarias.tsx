// components/PersonasUsuarias.tsx
"use client";
import {
  Box,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';
import styles from '../../../../styles/Home.module.css';
import NextLink from 'next/link';
import Cogollo3D from '../../components/Cogollo3D';

export default function PersonasUsuarias() {
  return (
    <Flex
      as="div"
      id='personas-usuarias'
      direction={{ base: 'column', md: 'row' }}
      align={{ base: 'center', md: 'center' }}
      justify={{ base: 'center', md: 'center' }}
      maxH={{ base: '100%', md: '350px' }}
      borderRadius='10px'
      backgroundColor='rgba(255, 255, 255, .95)'
      boxShadow='rgba(0, 0, 0, 0.15) 0px 5px 15px'
      maxW={{ base: '100%', md: 'auto' }}
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
        <Text as="h2" fontSize='16px' fontWeight='bold'>Comprar Cannabis Medicinal en Internet</Text>
      </Box>

      <Box mb={{ base: 4, md: 0 }} px={4} textAlign="center" maxW="320px" w="100%" flex='1'>
        <Cogollo3D />
      </Box>

      <Box p={5} display={{ base: 'block', md: 'none' }} mb={4} textAlign="center" w="100%">
        <Text fontSize='14px' as="p">
          En <strong>WeCann</strong>, estamos desarrollando una plataforma especializada para facilitar a las <strong>Personas Usuarias</strong> la adquisición de <strong>cannabis medicinal</strong> y sus <strong>derivados</strong> de manera segura y legal. Las personas que cuenten con una indicación médica pueden adquirir cannabis medicinal a través de nuestra plataforma, siempre cumpliendo con los requisitos establecidos por el Programa Nacional. Para ello, es necesario estar inscripto en el Registro del Programa de Cannabis (<strong>REPROCANN</strong>), el cual permite la adquisición de productos de cannabis con fines terapéuticos y/o paliativos del dolor.
        </Text>
        <Button 
          mt={5}
          className={styles.legalidadProyecto}
          as={NextLink} 
          href="/legalidad#compras" 
          w={{ base: 'auto', sm: 'auto' }} // Ajuste del ancho del botón
        >
          Politicas de Compras
        </Button>
      </Box>

      <Box borderLeft='solid 1px rgba(0, 0, 0, .1)' p={5} display={{ base: 'none', md: 'block' }} textAlign={{ base: 'center', md: 'left' }} maxW="500px" w="100%">
        <Text mb={4} as="h2" fontSize='18px' fontWeight='bold'>Comprar Cannabis Medicinal en Internet</Text>
        <Text fontSize='14px' as="p">
          En <strong>WeCann</strong>, estamos desarrollando una plataforma especializada para facilitar a las <strong>Personas Usuarias</strong> la adquisición de <strong>cannabis medicinal</strong> y sus <strong>derivados</strong> de manera segura y legal. Las personas que cuenten con una indicación médica pueden adquirir cannabis medicinal a través de nuestra plataforma, siempre cumpliendo con los requisitos establecidos por el Programa Nacional. Para ello, es necesario estar inscripto en el Registro del Programa de Cannabis (<strong>REPROCANN</strong>), el cual permite la adquisición de productos de cannabis.
        </Text>
        <Button 
          mt={5}
          className={styles.legalidadProyecto}
          as={NextLink} 
          href="/legalidad" 
          w={{ base: 'auto', sm: 'auto' }} // Ajuste del ancho del botón
          minW="200px" // Mínimo ancho para el botón
        >
          Políticas de Compras
        </Button>
      </Box>
    </Flex>
  );
}
