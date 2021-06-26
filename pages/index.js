import Head from "next/head";
import Image from "next/image";
import Nextlink from "next/link";
import { Box, Text, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import App from "../components/App";
import Medium from "../icons/Medium";
import Github from "../icons/Github";
import Download from "../icons/Download";
import Instagram from "../icons/Instagram";

export default function Home() {
  return (
    <App>
      <Head>
        <title>Yz's resume</title>
      </Head>
      <Box
        as='haeder'
        h='48px'
        width='full'
        position='fixed'
        textAlign='center'
        boxShadow='lg'
        left='0'
        top='0'
        color='white'
        zIndex={2}
        style={{ backgroundColor: "rgb(32, 35, 43)" }}>
        <Text as='h1' d='block' fontWeight='bold' my={2}>
          Yz's Resume
        </Text>
      </Box>
      <Box as='main' w='full'>
        <Box d='flex' flexDir={{ sm: "column" }}>
          <Box
            style={{ backgroundColor: "rgb(40, 44, 53)" }}
            w='full'
            py={{ sm: 8, md: 2 }}>
            <Box
              w={{ sm: "200px", md: "350px" }}
              h={{ sm: "200px", md: "350px" }}
              mx='auto'
              position='relative'>
              <Image src='/images/yz.jpg' layout='fill' objectFit='contain' />
            </Box>
          </Box>
          <Box
            py={2}
            style={{ backgroundColor: "rgba(242, 242, 242, 0.5)" }}
            d='flex'
            flexDir='column'
            h='full'
            w='full'>
            <Box
              w={{ sm: "100%" }}
              h={{ sm: "760px", md: "1128px" }}
              maxW='600px'
              position='relative'
              boxShadow='2xl'
              overflow='hidden'
              bgColor="#fff"
              mx='auto'>
              <Link href='/images/yz-resume.docx' download='yz-resume'>
                <Box
                  id='downLink'
                  position='absolute'
                  bottom='0'
                  right='0'
                  h='100px'
                  w='150px'
                  bgColor='gray.200'
                  borderTopLeftRadius='100%'
                  zIndex={1}>
                  <Box position='absolute' right='35px' bottom='20px'>
                    <Download />
                  </Box>
                </Box>
              </Link>
              <Image
                src='/images/yz-resume.png'
                layout='fill'
                objectFit='contain'
              />
            </Box>
          </Box>
        </Box>
        <Box
          d='flex'
          color='white'
          py={10}
          bg='gray.500'
          justifyContent='center'>
          <Box mx={{ lg: "auto" }} pl={{ sm: 4 }}>
            <Text textAlign={{ lg: "center" }} as='h2' fontSize='1.5rem'>
              Latest project{" "}
              <Link
                textDecor='underline'
                color='blue.600'
                target='_blank'
                href='https://creative.staging.selfpaths.com/'>
                e-commerce
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        as='footer'
        d='flex'
        flexDir={{ sm: "column", lg: "row" }}
        alignItems='center'
        textAlign={{ sm: "center", lg: "left" }}
        justifyContent={{ sm: "space-around", lg: "center" }}
        px={4}
        py={10}
        style={{ backgroundColor: "rgb(40, 44, 53)" }}>
        <Box d='flex' justifyContent='center' mt={{ sm: 8, lg: 0 }}>
          <Link
            href='https://www.instagram.com/hello__yz/'
            _focus={{ outline: 0 }}
            border='none'
            target='_blank'>
            <Instagram />
          </Link>
          <Link
            href='https://github.com/wilkersoh'
            _focus={{ outline: 0 }}
            border='none'
            target='_blank'>
            <Github />
          </Link>
        </Box>
      </Box>
    </App>
  );
}
