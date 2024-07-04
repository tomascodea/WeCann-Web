import { Box, Spinner } from '@chakra-ui/react';

const Loader: React.FC = () => (
  <Box
    position="fixed"
    top="0"
    left="0"
    width="100vw"
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    backgroundColor="white"
    zIndex="9999"
  >
    <Spinner size="xl" />
  </Box>
);

export default Loader;
