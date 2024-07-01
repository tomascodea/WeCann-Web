"use client";
import {
  Box, 
  Flex, 
  Link, 
  Text, 
  Icon 
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import logo from '../../../public/brand/WeCann White.png'; // Ajusta la ruta según tu estructura de carpetas

export default function WeCann() {
  return (
    <Flex 
      as="section" 
      maxW="7xl" 
      mx="auto" 
      justify="space-between" 
      flexWrap="wrap" 
      direction={{ base: 'column', md: 'row' }}
      minH="100vh" // Asegura que el Flex ocupe al menos el 100vh
      align="center"
    >
      <Box flex="1" mb={4} px={4} textAlign="center">
      </Box>

      <Box flex="1" mb={4} px={4} textAlign="center">
        <Text className="text-4xl font-bold">WeCann</Text>
      </Box>

      <Box flex="1" mb={4} px={4} textAlign="center">
      </Box>
    </Flex>
  );
}
