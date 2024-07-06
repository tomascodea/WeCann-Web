// components/PersonasUsuarias.tsx
"use client";
import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import Planta3D from './components/Planta3D';

export default function PersonasUsuarias() {
  return (
    <Flex
      as="div"
      id="personasUsuarias"
      direction={{ base: 'column', md: 'row' }}
      justify="center"
      align={{ base: 'center', md: 'center' }}
      w="100vw"
      px={4}
    >
      <Box mb={{ base: 4, md: 0 }} textAlign={{ base: 'center', md: 'left' }} maxW="500px">
        <Text mb={4} as="h2" fontSize='18px' fontWeight='bold'>Comprar Cannabis Medicinal en Internet</Text>
        <Text fontSize='14px' as="p">En <strong>WeCann</strong>, estamos desarrollando una plataforma especializada para facilitar a las <strong>Personas Usuarias</strong> la adquisición de <strong>cannabis medicinal</strong> y sus <strong>derivados</strong> de manera segura y legal. Las personas que cuenten con una indicación médica pueden adquirir cannabis medicinal a través de nuestra plataforma, siempre cumpliendo con los requisitos establecidos por el Programa Nacional. Para ello, es necesario estar inscripto en el Registro del Programa de Cannabis (<strong>REPROCANN</strong>), el cual permite la adquisición de productos de cannabis con fines terapéuticos y/o paliativos del dolor.</Text>
      </Box>
      <Flex align='center' maxH="500px" h="100%" textAlign={{ base: 'center', md: 'left' }} maxW="500px" w="100%">

      </Flex>
    </Flex>
  );
}
