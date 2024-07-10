"use client";
import {
    Box,
    Flex,
    Text
} from '@chakra-ui/react';
import styles from '../../../styles/Home.module.css';
import Image from 'next/image';
import LogoReprocann from '../../../../public/assets/logoReprocann.png';

export default function Conexiones() {
    return (
        <Flex
            as="section"
            id={styles.conexiones}
            justify="center"
            align="center"
            padding="50px"
            wrap="wrap"
            direction={{ base: 'column', md: 'row' }}
            minH="100vh"
        >
            <Flex
                as="div"
                direction="column"
                align={{ base: 'center', md: 'flex-start' }}
                maxW="7xl"
                w={{ base: '100%', md: '50%' }}
                mb={{ base: 4, md: 0 }}
                order={{ base: 2, md: 1 }}
            >
                <Box mb={4} px={4} textAlign={{ base: 'center', md: 'left' }} maxW="500px" w="100%">
                    <Text as="h1" color="black" className="text-4xl font-bold">Matcheamos ONGs y Personas Usuarias con Reprocann</Text>
                </Box>

                <Box mb={4} px={4} textAlign={{ base: 'center', md: 'left' }} maxW="500px" w="100%">
                    <Text color="black" as="p">
                        Nuestro objetivo es facilitar la conexión entre <strong>Organizaciones No Gubernamentales</strong> (ONGs) y personas usuarias registradas en el programa <strong>REPROCANN</strong>. A través de esta iniciativa, buscamos que las ONGs autorizadas puedan asistir a los pacientes que tienen indicación médica para el uso de cannabis medicinal, ya sea mediante el cultivo controlado o el acceso a especialidades medicinales.
                    </Text>
                </Box>
            </Flex>
            <Flex w={{ base: '100%', md: '50%' }} justify="center" align="center" order={{ base: 1, md: 2 }} mb={{ base: 4, md: 0 }}>
                <Image className={styles.carnetReprocann} src={LogoReprocann} alt="Carnet de Reprocann"/>
            </Flex>
        </Flex>
    );
}
