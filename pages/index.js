import Head from "next/head";
import {
  Box,
  Text,
  Badge,
  UnorderedList,
  ListItem,
  ListIcon,
  Tooltip,
  Link,
  Divider,
} from "@chakra-ui/react";
import App from "../components/App";

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

const Content = ({ children }) => <Box my={2}>{children}</Box>;

export default function Home() {
  return (
    <App>
      <Box
        as='haeder'
        h='48px'
        className='blue'
        width='full'
        position='fixed'
        d='flex'
        top='0'>
        <Text textAlign='center' w='full' as='h1' fontWeight='bold'>
          Yz's Resume
        </Text>
      </Box>
      <Box as='main' my={4} px={4}>
        <Box d='flex' flexDir={{ sm: "column", md: "row" }}>
          <Box w='200px' h='200px' mx='auto' className='blue'>
            {/* <Image /> */}
          </Box>
          <Box my={2}>
            <Text textAlign='center' as='h2' fontWeight='bold'>
              Frontend Developer
            </Text>
            <Text>Skills</Text>
            {Object.entries(SKILLS).map(([skill, color]) => (
              <Badge colorScheme={color}>{skill}</Badge>
            ))}
          </Box>
          <Box my={2}>
            <Text
              textAlign='center'
              as='h2'
              fontWeight='bold'
              borderBottom='1px solid black'>
              Professional Experience
            </Text>
            <Content>
              <Text as='p'>
                <Text as='span' d='inline-block' fontWeight='bold'>
                  Frontend Developer,{" "}
                </Text>{" "}
                one and half year experience and my first software job in a
                startup{" "}
                <Tooltip label='jobstreet link' fontSize='md'>
                  <Link
                    textDecor='underline'
                    color='blue.700'
                    href='https://www.jobstreet.com.my/en/companies/1311338-ascend-com'>
                    company
                  </Link>
                </Tooltip>{" "}
                since last year.
              </Text>
            </Content>
            <Content>
              <Text>My details:</Text>
              <UnorderedList>
                <ListItem>25 years old, male, Chinese.</ListItem>
                <ListItem>
                  Self taught software knowledge from google, youtube and udemy.
                </ListItem>
              </UnorderedList>
            </Content>
            <Content>
              <Text>Target:</Text>
              <Text>
                i'd like to create great UI/UX user experience (clean and
                smooth). More details is like a popup container, it will
                smoothly show up instead of just show it for the user.
              </Text>
            </Content>
          </Box>
        </Box>
      </Box>
      <Box as='footer' px={4}>
        {" "}
        footer
      </Box>
    </App>
  );
}
