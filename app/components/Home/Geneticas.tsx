"use client";
import {
  Box, 
  Text, 
} from '@chakra-ui/react';
import CogolloHome from './components/CogolloHome';

export default function Geneticas() {
  return (
    <>
      <Box mb={4} px={4} textAlign={{ base: 'center', md: 'left' }} maxW="500px" w="100%"> 
        <CogolloHome/>
      </Box>

      <Box mb={4} px={4} textAlign={{ base: 'center', md: 'left' }} maxW="500px" w="100%"> 
        <Text color={'black'} as={'p'}>En <strong>WeCann</strong> estamos construyendo soluciones para la <strong>industria del cannabis</strong> en <strong>Argentina</strong> a través de la digitalización y la innovación. Nuestra misión es modernizar y optimizar los procesos de la industria cannábica, conectando de manera efectiva a las <strong>ONGs</strong>, las personas usuarias del <strong>Reprocann</strong> y todos los actores involucrados.</Text>
      </Box>
    </>
  );
}
