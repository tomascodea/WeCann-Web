"use client";

import { Box, Image } from '@chakra-ui/react';

const CogolloHome: React.FC = () => {
  return (
    <Box textAlign="center">
      <Image 
        src="/assets/cogollo.png" 
        alt="Cogollo" 
        objectFit="contain"
      />
    </Box>
  );
};

export default CogolloHome;
