"use client"; // Esto asegura que el componente sea del lado del cliente
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import theme from '../theme';
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
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setShowContent(true);
      document.body.style.overflow = 'auto';
    };

    if (pathname !== '/') {
      // Asegurar que se ejecuta tanto en el evento 'load' como si la página ya está cargada.
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
      }
    } else {
      // Si estamos en la página principal, mostrar el contenido de inmediato
      setShowContent(true);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [pathname]);

  useEffect(() => {
    // Inicializar el color del header al cambiar de ruta
    if (pathname === '/') {
      setHeaderBgColor('transparent');
      setColor('black');
      setShowWhiteLogo(false);
      window.scrollTo(0, 0); // Forzar el scroll al tope
    } else {
      setHeaderBgColor('white');
      setColor('black');
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
          setShowWhiteLogo(false);
        } else if (windowScrollY === 0 && pathname !== '/') {
          setHeaderBgColor('white');
          setColor('black');
          setShowWhiteLogo(false);
        } else if (windowScrollY > 0 && windowScrollY < sectionTop) {
          setHeaderBgColor('white');
          setColor('black');
          setShowWhiteLogo(false);
        } else if (windowScrollY >= sectionTop && windowScrollY < sectionTop + sectionHeight) {
          setHeaderBgColor('#00BF30');
          setColor('white');
          setShowWhiteLogo(true);
        } else if (windowScrollY >= sectionTop + sectionHeight) {
          setHeaderBgColor('white');
          setColor('black');
          setShowWhiteLogo(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleScrollSectionEnter = () => {
      setHeaderBgColor('#00BF30');
      setColor('white');
      setShowWhiteLogo(true);
    };

    const handleScrollSectionLeave = () => {
      setHeaderBgColor('white');
      setColor('black');
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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          {pathname !== '/' && !showContent && <Loader />}
          <Header bgColor={headerBgColor} showWhiteLogo={showWhiteLogo} color={color} />
          <main>{showContent && children}</main>
          {showContent && <Footer />}
        </ChakraProvider>
      </body>
    </html>
  );
}
