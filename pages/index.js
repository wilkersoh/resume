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

const Content = ({ children }) => (
  <Box px={4} my={2}>
    {children}
  </Box>
);

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
            style={{ backgroundColor: "rgba(228, 228, 228, 0.5)" }}
            d='flex'
            flexDir='column'
            w='full'>
            <Box
              w={{ sm: "100%", md: "full" }}
              maxW='600px'
              height='860px'
              position='relative'
              overflow='hidden'
              mx='auto'>
              <Link href='/images/resume.png' download='yz-resume'>
                <Box
                  id='downLink'
                  position='absolute'
                  bottom='0'
                  right='0'
                  height='100px'
                  w='150px'
                  bgColor='gray.200'
                  borderTopLeftRadius='100px'
                  zIndex={1}>
                  <Box
                    position='absolute'
                    left='50%'
                    top='50%'
                    transform='translate(-25%, -25%)'>
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
        px={4}
        py={10}
        style={{ backgroundColor: "rgb(40, 44, 53)" }}>
        <Box d='flex' justifyContent='center' className='blue'>
          <Medium />
          <Github />
        </Box>
      </Box>
    </App>
  );
}
