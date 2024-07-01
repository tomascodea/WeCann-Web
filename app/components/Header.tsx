"use client";
import { Box, Flex, Link, Button, Menu, MenuButton, MenuList, MenuItem, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import logo from '../../public/brand/WeCann.png';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    }
  };

  return (
    <Box as="header" bg="white" boxShadow="md">
      <Flex as="nav" maxW="7xl" mx="auto" px={4} justify="space-between" align="center" h="16">
        <Box>
          <Image src={logo} alt="Logo" width={125} height={50} />
        </Box>
        <Flex as="ul" display={{ base: 'none', md: 'flex' }} align="center" flex="1" justify="flex-end" listStyleType="none" m={0} p={0}>
          <Box as="li" ml={4}>
            <Link href="#" {...linkStyles}>
              Home
            </Link>
          </Box>
          <Box as="li" ml={4}>
            <Link href="#" {...linkStyles}>
              ONGs
            </Link>
          </Box>
          <Box as="li" ml={4}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Redes Sociales
              </MenuButton>
              <MenuList>
                <MenuItem>Instagram</MenuItem>
                <MenuItem>LinkedIn</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>

        <Box display={{ base: 'flex', md: 'none' }} onClick={onOpen}>
          <HamburgerIcon w={6} h={6} />
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
                <Link href="#" w="100%" {...linkStylesMobile}>
                  Home
                </Link>
              </Box>
              <Box as="li" mb={4}>
                <Link href="#" w="100%" {...linkStylesMobile}>
                  ONGs
                </Link>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
