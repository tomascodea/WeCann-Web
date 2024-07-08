"use client";
import {
  Box,
  Flex,
  Text,
  Button
} from '@chakra-ui/react';
import styles from '../../styles/Home.module.css';
import NextLink from 'next/link';
import Leaf from '../../../public/assets/leaf_2.png';
import Image from 'next/image';

export default function Geneticas() {
  return (
    <>
      <Flex
        as="div"
        id='tecnologia-aplicada'
        direction={{ base: 'column', md: 'row'}}
        align={{ base: 'center', md: 'center' }} // Centrado en móvil, a la izquierda en desktop
        maxH={{base: '100%', md: '350px'}}
        borderRadius='10px'
        backgroundColor='rgba(255, 255, 255, .9)'
        boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
        border='solid 2px rgba(0, 0, 0, .1)'>
        <Box mb={{base: 4, md: 4}} px={4} textAlign={{ base: 'center', md: 'left' }} maxW="400px" w="100%">
          <Image className={styles.leaf_ta} src={Leaf} alt='Hoja de marihuana'/>
        </Box>

        <Box borderLeft={'solid 1px rgba(0, 0, 0, .25)'} mb={{base: 0, md: 4}} px={4} textAlign={{ base: 'center', md: 'left' }} maxW="500px" w="100%">
          <Text mb={4} as="h2" fontSize='18px' fontWeight='bold'>Tecnología aplicada a la Industria Canabica</Text>
          <Text mb={4} fontSize='14px' as={'p'}><strong>WeCann</strong> está diseñado específicamente para que las Organizaciones No Gubernamentales <i>(ONGs)</i> puedan gestionar de manera eficiente sus operaciones dentro del marco legal del <strong>Programa Nacional para el Estudio y la Investigación del Uso Medicinal de la Planta de Cannabis y sus Derivados</strong>. Este programa, establecido por la <strong>Ley 27.350</strong>, regula el acceso y la producción de cannabis medicinal, garantizando el cuidado integral de la salud y facilitando el cultivo controlado por pacientes y ONGs autorizadas​​​​ en Argentina.</Text>
          <Button 
          className={styles.legalidadProyecto}
          as={NextLink} 
          href="/legalidad" 
          w={{ base: '100%', md: 'auto' }}>
          Políticas de Legalidad y Alcance de WeCann
        </Button>
        </Box>
      </Flex>
    </>
  );
}
