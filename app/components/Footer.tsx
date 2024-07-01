"use client";
import { Box, Flex, Link, Text, Icon } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../../public/brand/WeCann White.png'; // Ajusta la ruta según tu estructura de carpetas

export default function Footer() {
  return (
    <Box as="footer" bg="#00BF30" color="white" py={8} px={4}>
      <Flex as="nav" maxW="7xl" mx="auto" justify="space-between" flexWrap="wrap">
        <Box flex="1" mb={4} px={4}>
          <Image src={logo} alt="WeCann Logo" width={125} height={50} />
          <Text mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Flex as="ul" mt={4} justifyContent="flex-start" gap={4} listStyleType="none" pl={0}>
            <Box as="li">
              <Link href="https://www.instagram.com" isExternal>
                <Icon as={FaInstagram} w={6} h={6} />
              </Link>
            </Box>
            <Box as="li">
              <Link href="https://www.linkedin.com" isExternal>
                <Icon as={FaLinkedin} w={6} h={6} />
              </Link>
            </Box>
            <Box as="li">
              <Link href="https://wa.me/" isExternal>
                <Icon as={FaWhatsapp} w={6} h={6} />
              </Link>
            </Box>
            <Box as="li">
              <Link href="https://www.youtube.com" isExternal>
                <Icon as={FaYoutube} w={6} h={6} />
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box flex="1" mb={4} px={4}>
          <Text as="h2" fontWeight="bold" mb={2}>Section 2</Text>
          <Box as="ul" listStyleType="none" pl={0}>
            <Box as="li">
              <Link href="#" display="block" mb={2}>Link 1</Link>
            </Box>
            <Box as="li">
              <Link href="#" display="block" mb={2}>Link 2</Link>
            </Box>
            <Box as="li">
              <Link href="#" display="block" mb={2}>Link 3</Link>
            </Box>
          </Box>
        </Box>
        <Box flex="1" mb={4} px={4}>
          <Text as="h2" fontWeight="bold" mb={2}>Section 3</Text>
          <Box as="ul" listStyleType="none" pl={0}>
            <Box as="li">
              <Link href="#" display="block" mb={2}>Link 1</Link>
            </Box>
            <Box as="li">
              <Link href="#" display="block" mb={2}>Link 2</Link>
            </Box>
            <Box as="li">
              <Link href="#" display="block" mb={2}>Link 3</Link>
            </Box>
          </Box>
        </Box>
        <Box flex="1" mb={4} px={4}>
          <Text as="h2" fontWeight="bold" mb={2}>Section 4</Text>
          <Box as="ul" listStyleType="none" pl={0}>
            <Box as="li">
              <Link href="#" display="block" mb={2}>Privacy Policy</Link>
            </Box>
            <Box as="li">
              <Link href="#" display="block" mb={2}>Terms of Service</Link>
            </Box>
          </Box>
          <Text mt={2}>&copy; 2024 My Company</Text>
        </Box>
      </Flex>
    </Box>
  );
}