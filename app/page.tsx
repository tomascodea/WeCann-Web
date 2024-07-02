import Head from 'next/head'
import WeCann from './components/Home/WeCann'
import { Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>WeCann: Innovación y redes para la industria del cannabis en Argentina.</title>
        <meta name="description" content="En WeCann estamos construyendo soluciones para la industria del cannabis en Argentina a través de la digitalización y la innovación. Nuestra misión es modernizar y optimizar los procesos de la industria cannábica, conectando de manera efectiva a las ONGs, las personas usuarias del Reprocann y todos los actores involucrados." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex 
        as="section" 
        id="bienvenidos" // Agregar ID para estilos CSS
        justify={{ base: 'center', md: 'flex-start' }} // Centramos en móvil, a la izquierda en desktop
        align="center"
        padding="50px"
        wrap="wrap"
        direction="row"
        minH="100vh"
      >
        <WeCann />
      </Flex>
    </>
  )
}
