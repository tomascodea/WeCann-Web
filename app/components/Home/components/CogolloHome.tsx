"use client";

import { Box, Image } from '@chakra-ui/react';
import './CogolloHome.css'

const CogolloHome: React.FC = () => {
  return (
    <Box textAlign="center">
      <Image 
        src="/assets/cogollo.png" 
        alt="Cogollo" 
        objectFit="contain"
        className='cogolloHome'
      />
    </Box>
  );
};

export default CogolloHome;
