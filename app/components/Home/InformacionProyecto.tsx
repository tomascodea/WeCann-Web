"use client";
import { Box, Flex, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Geneticas from "../Home/Geneticas";

const informacionProyectoMobile = css`
`;

const InformacionProyecto: React.FC = () => {
  return (
    <Box as="section" id="horizontal-section" css={informacionProyectoMobile}>
    <Flex direction="column">
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Geneticas/>
      </Box>
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">Section 2</Text>
      </Box>
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">Section 3</Text>
      </Box>
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">Section 4</Text>
      </Box>
    </Flex>
  </Box>
  );
}

export default InformacionProyecto;