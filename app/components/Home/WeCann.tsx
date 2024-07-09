"use client";
import {
  Box, 
  Flex, 
  Text, 
  Button 
} from '@chakra-ui/react';
import NextLink from 'next/link';
import styles from '../../styles/Home.module.css';

export default function WeCann() {
  return (
    <Flex 
    as="div" 
    direction="column" 
    align={{ base: 'center', md: 'flex-start' }} // Centrado en móvil, a la izquierda en desktop
    maxW="7xl"
    w="100%"
    >
      <Box mb={4} px={4} textAlign={{ base: 'center', md: 'left' }} maxW="500px" w="100%"> 
        <Text as={'h1'} color={'white'} className="text-4xl font-bold">Plataforma para ONGs y Personas Usuarias del Reprocann</Text>
      </Box>

      <Box mb={4} px={4} textAlign={{ base: 'center', md: 'left' }} maxW="500px" w="100%"> 
        <Text color={'white'} as={'p'}>En <strong>WeCann</strong> estamos construyendo soluciones para la <strong>industria del cannabis</strong> en <strong>Argentina</strong> a través de la digitalización y la innovación. Nuestra misión es modernizar y optimizar los procesos de la industria cannábica, conectando de manera efectiva a las <strong>ONGs</strong>, las personas usuarias del <strong>Reprocann</strong> y todos los actores involucrados.</Text>
      </Box>

      <Box mb={4} px={4} textAlign={{ base: 'center', md: 'left' }} maxW="500px" w="100%"> 
        <Button 
        className={styles.nuestraMision} 
        as={NextLink} 
        href="/nuestra-mision" 
        colorScheme="brand" 
        w={{ base: '100%', md: 'auto' }}>
          Conocé nuestro Roadmap
        </Button>
      </Box>
    </Flex>
  );
}
