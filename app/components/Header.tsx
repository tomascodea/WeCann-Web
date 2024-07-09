"use client";
import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Tooltip
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import NextLink from 'next/link';
import WeCannLogo from '../../public/brand/WeCann.png';
import WeCannLogoWhite from '../../public/brand/WeCann White.png';
import Leaf from '../../public/assets/leaf.png';
import { usePathname } from 'next/navigation';
import { GrLogin } from "react-icons/gr";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showLogo, setShowLogo] = useState(false);
  const [boxShadow, setBoxShadow] = useState('');
  const [headerBgColor, setHeaderBgColor] = useState('transparent');
  const [showWhiteLogo, setShowWhiteLogo] = useState(false);
  const [color, setColor] = useState('black');
  const [iconMenuColor, setIconMenuColor] = useState('white');
  const [opacity, setOpacity] = useState(0);
  const [showNavbarLinks, setShowNavbarLinks] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const horizontalSection = document.getElementById('horizontal-section');
      if (horizontalSection) {
        const sectionTop = horizontalSection.offsetTop;
        const sectionHeight = horizontalSection.offsetHeight;
        const windowScrollY = window.scrollY;

        if (windowScrollY === 0 && pathname === '/') {
          setHeaderBgColor('transparent');
          setColor('black');
          setIconMenuColor('white');
          setShowWhiteLogo(false);
          setShowLogo(false);
          setBoxShadow('');
          setOpacity(1);
          setShowNavbarLinks(false); // Oculta los enlaces del navbar
        } else if (windowScrollY === 0 && pathname !== '/') {
          setHeaderBgColor('white');
          setColor('black');
          setIconMenuColor('black');
          setShowWhiteLogo(false);
          setShowLogo(true);
          setBoxShadow('md');
          setOpacity(1);
          setShowNavbarLinks(true); // Muestra los enlaces del navbar
        } else if (windowScrollY > 0 && windowScrollY < sectionTop) {
          setHeaderBgColor('white');
          setColor('black');
          setIconMenuColor('black');
          setShowWhiteLogo(false);
          setShowLogo(true);
          setBoxShadow('md');
          setOpacity(1);
          setShowNavbarLinks(true); // Muestra los enlaces del navbar
        } else if (windowScrollY >= sectionTop && windowScrollY < sectionTop + sectionHeight) {
          setHeaderBgColor('rgba(128, 0, 128, .1)');
          setColor('white');
          setIconMenuColor('white');
          setShowWhiteLogo(true);
          setShowLogo(true);
          setBoxShadow('md');
          setOpacity(0.9);
          setShowNavbarLinks(true); // Muestra los enlaces del navbar
        } else {
          setHeaderBgColor('white');
          setColor('black');
          setIconMenuColor('black');
          setShowWhiteLogo(false);
          setShowLogo(true);
          setBoxShadow('md');
          setOpacity(1);
          setShowNavbarLinks(true); // Muestra los enlaces del navbar
        }
      }
    };

    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    } else {
      setHeaderBgColor('white');
      setColor('black');
      setIconMenuColor('black');
      setShowWhiteLogo(false);
      setShowLogo(true);
      setBoxShadow('md');
      setOpacity(1);
      setShowNavbarLinks(true); // Muestra los enlaces del navbar
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const leafAnimationElement = document.getElementById('leaf-animation');
      if (leafAnimationElement) {
        leafAnimationElement.style.display = 'none';
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const linkStyles = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative' as const,
    paddingBottom: '4px',
    height: 'full',
    color: color,
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

  const linkStylesButtons = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative' as const,
    paddingBottom: '4px',
    height: 'full',
    color: color,
    _hover: {
      textDecoration: 'none',
      _after: {
        width: '100%',
      },
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
      <Box as="header" id='header' position="fixed" top="0" width="100%" bg={headerBgColor} boxShadow={boxShadow} opacity={opacity} transition="background-color 0.4s ease, opacity 0.4s ease" zIndex="1000">
        <Flex as="nav" maxW="7xl" mx="auto" px={4} justify="space-between" align="center" h="16">
          <NextLink href="/" passHref>
            <Box display="flex" alignItems="center">
              {showLogo && (
                <Image src={showWhiteLogo ? WeCannLogoWhite : WeCannLogo} alt="WeCann: Innovación y redes para la industria del cannabis en Argentina." priority />
              )}
            </Box>
          </NextLink>

          <Flex as="ul" display={{ base: 'none', md: showNavbarLinks ? 'flex' : 'none' }} align="center" flex="1" justify="flex-end" listStyleType="none" m={0} p={0}>
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
              <NextLink href="/personas-usuarias" passHref>
                <Box {...linkStyles}>Personas Usuarias</Box>
              </NextLink>
            </Box>
          </Flex>

          <Flex as="ul" display={{ base: 'none', md: 'flex' }} align="center" flex="1" justify="flex-end" listStyleType="none" m={0} p={0}>
            <Box as="li" ml={8}>
              <NextLink href="/login" passHref>
                <Tooltip
                  label="Ingresar a WeCann"
                  fontSize="md"
                  bg="rgba(0, 191, 49, 1)"
                  color="white"
                  borderRadius="md"
                  placement="left"
                >
                  <Box as="span" {...linkStylesButtons} display="flex" alignItems="center">
                    <GrLogin size={24} />
                  </Box>
                </Tooltip>
              </NextLink>
            </Box>
          </Flex>

          <Box display={{ base: 'flex', md: 'none' }} onClick={onOpen}>
            <HamburgerIcon color={iconMenuColor} w={6} h={6} />
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
                <Box as="li" mb={4}>
                  <NextLink href="/personas-usuarias" passHref>
                    <Box {...linkStylesMobile}>Personas Usuarias</Box>
                  </NextLink>
                </Box>
                <Box as="li">
                  <NextLink href="/login" passHref>
                    <Tooltip
                      label="Ingresar a WeCann"
                      fontSize="md"
                      bg="rgba(0, 191, 49, 0.8)"
                      color="white"
                      borderRadius="md"
                      placement="bottom"
                    >
                      <Box as="span" {...linkStylesButtons} display="flex" alignItems="center">
                        <GrLogin size={24} />
                      </Box>
                    </Tooltip>
                  </NextLink>
                </Box>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      {pathname !== '/' && <Box h="16" />}
    </>
  );
}
