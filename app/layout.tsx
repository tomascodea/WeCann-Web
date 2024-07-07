// pages/_app.tsx
"use client";
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import theme from '../theme';
import { IndoorModeProvider } from './context/IndoorModeContext';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

// Define metadata fuera del componente
const metadata = {
  title: 'WeCann: Innovación y redes para la industria del cannabis en Argentina.',
  description: 'Nuestra misión es modernizar y optimizar los procesos de la industria cannábica, conectando de manera efectiva a las ONGs, las personas usuarias del Reprocann y todos los actores involucrados.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const [headerBgColor, setHeaderBgColor] = useState(pathname === '/' ? 'transparent' : 'white');
  const [showWhiteLogo, setShowWhiteLogo] = useState(false);
  const [color, setColor] = useState('black');
  const [iconMenuColor, setIconMenuColor] = useState('white'); // Nuevo estado
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setShowContent(true);
      document.body.style.overflow = 'auto';
    };

    if (pathname !== '/') {
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
      }
    } else {
      setShowContent(true);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/') {
      setHeaderBgColor('transparent');
      setColor('black');
      setIconMenuColor('white');
      setShowWhiteLogo(false);
      window.scrollTo(0, 0);
    } else {
      setHeaderBgColor('white');
      setColor('black');
      setIconMenuColor('black');
      setShowWhiteLogo(false);
    }

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
        } else if (windowScrollY === 0 && pathname !== '/') {
          setHeaderBgColor('white');
          setColor('black');
          setIconMenuColor('black');
          setShowWhiteLogo(false);
        } else if (windowScrollY > 0 && windowScrollY < sectionTop) {
          setHeaderBgColor('white');
          setColor('black');
          setIconMenuColor('black');
          setShowWhiteLogo(false);
        } else if (windowScrollY >= sectionTop && windowScrollY < sectionTop + sectionHeight) {
          setHeaderBgColor('rgba(128, 0, 128, 0.1)');
          setColor('white');
          setIconMenuColor('white');
          setShowWhiteLogo(true);
        } else if (windowScrollY >= sectionTop + sectionHeight) {
          setHeaderBgColor('white');
          setColor('black');
          setIconMenuColor('black');
          setShowWhiteLogo(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleScrollSectionEnter = () => {
      setHeaderBgColor('#00BF30');
      setColor('white');
      setIconMenuColor('white');
      setShowWhiteLogo(true);
    };

    const handleScrollSectionLeave = () => {
      setHeaderBgColor('white');
      setColor('black');
      setIconMenuColor('black');
      setShowWhiteLogo(false);
    };

    window.addEventListener('scrollSectionEnter', handleScrollSectionEnter);
    window.addEventListener('scrollSectionLeave', handleScrollSectionLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollSectionEnter', handleScrollSectionEnter);
      window.removeEventListener('scrollSectionLeave', handleScrollSectionLeave);
    };
  }, [pathname]);

  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <IndoorModeProvider>
            {pathname !== '/' && !showContent && <Loader />}
            <Header bgColor={headerBgColor} showWhiteLogo={showWhiteLogo} color={color} iconMenuColor={iconMenuColor} />
            <main>{showContent && children}</main>
            {showContent && <Footer />}
          </IndoorModeProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
