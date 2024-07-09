"use client";
import { Box, Flex, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import TecnologiaAplicada from "../components/TecnologiaAplicada";
import PersonasUsuarias from '../components/PersonasUsuarias';
import { useEffect, useRef } from 'react';
import { useIndoorMode } from '../../../../context/IndoorModeContext';

const informacionProyectoMobile = css``;

const InformacionProyecto: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { setIsIndoorMode } = useIndoorMode();

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowScrollY = window.scrollY;

        if (windowScrollY >= sectionTop && windowScrollY < sectionTop + sectionHeight) {
          setIsIndoorMode(true);
        } else {
          setIsIndoorMode(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica el estado inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsIndoorMode]);

  return (
    <Box as="section" id="horizontal-section" ref={sectionRef} css={informacionProyectoMobile}>
      <Flex direction="column">
        <Box padding={5} mb={10} display="flex" justifyContent="center" alignItems="center">
          <TecnologiaAplicada />
        </Box>
        <Box padding={5} backgroundColor={'rgba(0, 0, 0, .02)'} mb={10} display="flex" justifyContent="center" alignItems="center">
          <PersonasUsuarias />
        </Box>
      </Flex>
    </Box>
  );
}

export default InformacionProyecto;
