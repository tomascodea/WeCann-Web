"use client";
import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import Planta3D from './components/Planta3D';

export default function Geneticas() {
  return (
    <>
      <Flex
        as="div"
        id='tecnologiaAplicada'
        direction={{ base: 'column', md: 'row'}}
        align={{ base: 'center', md: 'center' }} // Centrado en móvil, a la izquierda en desktop
        maxW="7xl">
        <Box mb={{base: 4, md: 4}} px={4} textAlign={{ base: 'center', md: 'left' }} maxW="500px" w="100%">
          <Planta3D />
        </Box>

        <Box mb={{base: 0, md: 4}} px={4} textAlign={{ base: 'center', md: 'left' }} maxW="500px" w="100%">
          <Text mb={4} as="h2" fontSize='18px' fontWeight='bold'>Tecnología aplicada a la Industria Canabica</Text>
          <Text fontSize='14px' as={'p'}><strong>WeCann</strong> está diseñado específicamente para que las Organizaciones No Gubernamentales <i>(ONGs)</i> puedan gestionar de manera eficiente sus operaciones dentro del marco legal del <strong>Programa Nacional para el Estudio y la Investigación del Uso Medicinal de la Planta de Cannabis y sus Derivados</strong>. Este programa, establecido por la <strong>Ley 27.350</strong>, regula el acceso y la producción de cannabis medicinal, garantizando el cuidado integral de la salud y facilitando el cultivo controlado por pacientes y ONGs autorizadas​​​​ en Argentina.</Text>
        </Box>
      </Flex>
    </>
  );
}
