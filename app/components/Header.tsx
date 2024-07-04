"use client";
import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import NextLink from 'next/link';
import WeCannLogo from '../../public/brand/WeCann.png';
import WeCannLogoWhite from '../../public/brand/WeCann White.png';
import Leaf from '../../public/assets/leaf.png'; 
import { usePathname } from 'next/navigation';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bgColor, setBgColor] = useState('transparent');
  const [showLogo, setShowLogo] = useState(false);
  const [boxShadow, setBoxShadow] = useState('');
  const [iconMenu, setIconMenu] = useState('white');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor('white');
        setShowLogo(true);
        setBoxShadow('md');
        setIconMenu('black');
      } else {
        setBgColor('transparent');
        setShowLogo(false);
        setBoxShadow('');
        setIconMenu('white');
      }
    };

    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      // Asegurarse de verificar la posición de desplazamiento al montar el componente
      handleScroll();
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setBgColor('white');
      setShowLogo(true);
      setBoxShadow('md');
      setIconMenu('black');
    }
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const leafAnimationElement = document.getElementById('leaf-animation');
      if (leafAnimationElement) {
        leafAnimationElement.style.display = 'none';
      }
    }, 2000); // Duración de la animación
  
    return () => clearTimeout(timer);
  }, []);

  const linkStyles = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative' as const,
    paddingBottom: '4px',
    height: 'full',
    _hover: {
      textDecoration: 'none',
      _after: {
        width: '100%',
      },
    },
    _after: {
      content: '""',
      position: 'absolute' as const,
      top: '40px',
      left: 0,
      width: '0',
      height: '2.5px',
      bg: '#00BF30',
      transition: 'width 0.3s ease-in-out',
    },
  };

  const linkStylesMobile = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative' as const,
    paddingBottom: '4px',
    fontWeight: 'bold',
    _hover: {
      textDecoration: 'none',
      color: '#00BF30',
      transition: 'color 0.3s ease-in-out',
    },
  };

  return (
    <>
      {pathname === '/' && (
        <div id="leaf-animation">
          <Image src={Leaf} alt="Leaf" priority />
        </div>
      )}
      <Box as="header" position="fixed" top="0" width="100%" bg={bgColor} boxShadow={boxShadow} transition="background-color 0.4s ease" zIndex="1000">
        <Flex as="nav" maxW="7xl" mx="auto" px={4} justify="space-between" align="center" h="16">
          <NextLink href="/" passHref>
            <Box display="flex" alignItems="center">
              {showLogo && (
                <Image src={WeCannLogo} alt="WeCann: Innovación y redes para la industria del cannabis en Argentina." priority />
              )}
            </Box>
          </NextLink>
          <Flex as="ul" display={{ base: 'none', md: 'flex' }} align="center" flex="1" justify="flex-end" listStyleType="none" m={0} p={0}>
            <Box as="li" ml={4}>
              <NextLink href="/" passHref>
                <Box {...linkStyles}>Home</Box>
              </NextLink>
            </Box>
            <Box as="li" ml={4}>
              <NextLink href="/ongs" passHref>
                <Box {...linkStyles}>ONGs</Box>
              </NextLink>
            </Box>
            <Box as="li" ml={4}>
              <Menu>
                <MenuButton {...linkStyles}>
                  Redes Sociales <ChevronDownIcon ml={2} />
                </MenuButton>
                <MenuList>
                  <MenuItem as="a" href="https://www.instagram.com">Instagram</MenuItem>
                  <MenuItem as="a" href="https://www.linkedin.com">LinkedIn</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>

          <Box display={{ base: 'flex', md: 'none' }} onClick={onOpen}>
            <HamburgerIcon color={iconMenu} w={6} h={6} />
          </Box>
        </Flex>

        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <Box as="ul" listStyleType="none" m={0} p={0}>
                <Box as="li" mb={4}>
                  <NextLink href="/" passHref>
                    <Box {...linkStylesMobile}>Home</Box>
                  </NextLink>
                </Box>
                <Box as="li" mb={4}>
                  <NextLink href="/ongs" passHref>
                    <Box {...linkStylesMobile}>ONGs</Box>
                  </NextLink>
                </Box>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      {/* Margen superior condicional */}
      {pathname !== '/' && <Box h="16" />}
    </>
  );
}