// components/PersonasUsuarias.tsx
"use client";
import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import Cogollo3D from './components/Cogollo3D';

export default function PersonasUsuarias() {
  return (
    <Flex
      as="div"
      id='personas-usuarias'
      direction={{ base: 'column', md: 'row' }}
      align={{ base: 'center', md: 'center' }} // Centrado tanto en móvil como en desktop
      maxH={{ base: '100%', md: '350px' }} // Altura máxima en escritorio
      borderRadius='10px'
      p={5}
      backgroundColor='rgba(255, 255, 255, .95)'
      boxShadow='rgba(0, 0, 0, 0.15) 0px 5px 15px' // Reducir sombra
      border='solid 2px rgba(0, 0, 0, .1)'
      maxW='auto'
    >
      <Box mb={{ base: 4, md: 4 }} px={4} textAlign={{ base: 'center', md: 'center' }} maxW="320px" w="100%" flex='1'>
        <Cogollo3D />
      </Box>

      <Box mb={{ base: 0, md: 4 }} px={4} textAlign={{ base: 'center', md: 'left' }} maxW="500px" w="100%">
        <Text mb={4} as="h2" fontSize='18px' fontWeight='bold'>Comprar Cannabis Medicinal en Internet</Text>
        <Text fontSize='14px' as="p">
          En <strong>WeCann</strong>, estamos desarrollando una plataforma especializada para facilitar a las <strong>Personas Usuarias</strong> la adquisición de <strong>cannabis medicinal</strong> y sus <strong>derivados</strong> de manera segura y legal. Las personas que cuenten con una indicación médica pueden adquirir cannabis medicinal a través de nuestra plataforma, siempre cumpliendo con los requisitos establecidos por el Programa Nacional. Para ello, es necesario estar inscripto en el Registro del Programa de Cannabis (<strong>REPROCANN</strong>), el cual permite la adquisición de productos de cannabis con fines terapéuticos y/o paliativos del dolor.
        </Text>
      </Box>
    </Flex>
  );
}
