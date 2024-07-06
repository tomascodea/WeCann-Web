"use client";
import { Box, Flex, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import TecnologiaAplicada from "./TecnologiaAplicada";
import PersonasUsuarias from './PersonasUsuarias';

const informacionProyectoMobile = css`
`;

const InformacionProyecto: React.FC = () => {
  return (
    <Box as="section" id="horizontal-section" css={informacionProyectoMobile}>
    <Flex direction="column">
      <Box padding={5} mb={10} display="flex" justifyContent="center" alignItems="center">
        <TecnologiaAplicada/>
      </Box>
      <Box padding={5} backgroundColor={'rgba(0, 0, 0, .02)'} mb={10} display="flex" justifyContent="center" alignItems="center">
        <PersonasUsuarias/>
      </Box>
      <Box mb={10} display="flex" justifyContent="center" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">Section 3</Text>
      </Box>
      <Box mb={10} display="flex" justifyContent="center" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">Section 4</Text>
      </Box>
    </Flex>
  </Box>
  );
}

export default InformacionProyecto;