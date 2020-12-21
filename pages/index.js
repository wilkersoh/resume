import Head from "next/head";
import Image from "next/image";
import Nextlink from "next/link";
import {
  Box,
  Text,
  Badge,
  UnorderedList,
  OrderedList,
  ListItem,
  ListIcon,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import App from "../components/App";
import Medium from "../icons/Medium";
import Github from "../icons/Github";
import Download from "../icons/Download";

const SKILLS = {
  html: "red.500",
  css: "blue.500",
  scss: "red.300",
  javascript: "yellow.700",
  git: "red.400",
};

const FRAMEWORK = {
  react: "blue.500",
  laravel: "red.500",
};

const database = {
  mysql: "green.400",
};

const SKILLS_LEVEL_1 = {
  graphql: "purple.400",
  mongodb: "green.500",
};

export default function Home() {
  return (
    <App>
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
      <Box as='main' flex={1} w='full'>
        <Box d='flex' flexDir={{ sm: "column" }}>
          <Box style={{ backgroundColor: "rgb(40, 44, 53)" }} w='full' py={8}>
            <Box w='200px' h='200px' mx='auto' className='blue'>
              {/* <Image /> */}
            </Box>
          </Box>
          <Box
            py={2}
            style={{ backgroundColor: "rgba(242, 242, 242, 0.5)" }}
            d='flex'
            flexDir='column'
            w='full'>
            <Box
              w={{ sm: "100%" }}
              // h={{ sm: "650px" }}
              maxW='600px'
              h={{ sm: "800px", md: "1128px" }}
              position='relative'
              boxShadow='2xl'
              overflow='hidden'
              mx='auto'>
              <Link href='/images/resume.png' download='yz-resume'>
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
                src='/images/resume.png'
                layout='fill'
                objectFit='contain'
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        as='footer'
        d='flex'
        flexDir={{ sm: "column", lg: "row" }}
        alignItems='center'
        textAlign={{ sm: "center", lg: "left" }}
        justifyContent='space-around'
        px={4}
        py={10}
        style={{ backgroundColor: "rgb(40, 44, 53)" }}>
        <Box>
          <Box>FullName: Soh Yong Yee</Box>
          <Box>
            <Text>
              <Link
                textDecor='underline'
                color='blue.600'
                target='_blank'
                href='https://dayfruit.staging.selfpaths.com/'>
                Project
              </Link>{" "}
              built with nextjs, graphql, token base Auth.
            </Text>
          </Box>
        </Box>
        <Box d='flex' justifyContent='center'>
          <Link
            href='https://laoyeche.medium.com/'
            _focus={{ outline: 0 }}
            target='_blank'>
            <Medium />
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
