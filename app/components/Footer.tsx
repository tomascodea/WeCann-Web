"use client";
import {
  Box, 
  Flex, 
  Link, 
  Text, 
  Icon 
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { 
  FaInstagram, 
  FaLinkedin, 
  FaWhatsapp, 
  FaYoutube 
} from 'react-icons/fa';
import Image from 'next/image';
import logo from '../../public/brand/WeCann White.png'; // Ajusta la ruta según tu estructura de carpetas

export default function Footer() {
  return (
    <Box as="footer" bg="#00BF30" color="white" py={8} px={4}>
      <Flex 
        as="nav" 
        maxW="7xl" 
        mx="auto" 
        justify="space-between" 
        flexWrap="wrap" 
        direction={{ base: 'column', md: 'row' }}
      >
        <Box flex="1" mb={4} px={4}>
          <NextLink href="/" passHref>
            <Image src={logo} alt="WeCann: Innovación y redes para la industria del cannabis en Argentina." priority/>
          </NextLink>
          <Text mt={4}>
            Nuestra misión es modernizar y optimizar los procesos de la industria cannábica, conectando de manera efectiva a las ONGs, las personas usuarias del Reprocann y todos los actores involucrados.
          </Text>
          <Flex as="ul" mt={4} justifyContent="flex-start" gap={4} listStyleType="none" pl={0}>
            <Box as="li" mb={2}>
              <Link href="https://www.instagram.com" isExternal>
                <Icon as={FaInstagram} w={6} h={6} />
              </Link>
            </Box>
            <Box as="li" mb={2}>
              <Link href="https://www.NextLinkedin.com" isExternal>
                <Icon as={FaLinkedin} w={6} h={6} />
              </Link>
            </Box>
            <Box as="li" mb={2}>
              <Link href="https://wa.me/" isExternal>
                <Icon as={FaWhatsapp} w={6} h={6} />
              </Link>
            </Box>
            <Box as="li" mb={2}>
              <Link href="https://www.youtube.com" isExternal>
                <Icon as={FaYoutube} w={6} h={6} />
              </Link>
            </Box>
          </Flex>
        </Box>

        <Box flex="1" mb={4} px={4}>
          <Text as="h2" fontWeight="bold" mb={2}>Section 2</Text>
          <Box as="ul" listStyleType="none" pl={0}>
            <Box as="li" mb={2}>
              <NextLink href="#" passHref>NextLink 1</NextLink>
            </Box>
            <Box as="li" mb={2}>
              <NextLink href="#" passHref>NextLink 2</NextLink>
            </Box>
            <Box as="li" mb={2}>
              <NextLink href="#" passHref>NextLink 3</NextLink>
            </Box>
          </Box>
        </Box>

        <Box flex="1" mb={4} px={4}>
          <Text as="h2" fontWeight="bold" mb={2}>Section 3</Text>
          <Box as="ul" listStyleType="none" pl={0}>
            <Box as="li" mb={2}>
              <NextLink href="#" passHref>NextLink 1</NextLink>
            </Box>
            <Box as="li" mb={2}>
              <NextLink href="#" passHref>NextLink 2</NextLink>
            </Box>
            <Box as="li" mb={2}>
              <NextLink href="#" passHref>NextLink 3</NextLink>
            </Box>
          </Box>
        </Box>
        
        <Box flex="1" mb={4} px={4}>
          <Text as="h2" fontWeight="bold" mb={2}>Section 4</Text>
          <Box as="ul" listStyleType="none" pl={0}>
            <Box as="li" mb={2}>
              <NextLink href="#" passHref>Privacy Policy</NextLink>
            </Box>
            <Box as="li" mb={2}>
              <NextLink href="#" passHref>Terms of Service</NextLink>
            </Box>
          </Box>
          <Text mt={2}>&copy; 2024 My Company</Text>
        </Box>
      </Flex>
    </Box>
  );
}