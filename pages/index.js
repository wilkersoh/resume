import Head from "next/head";
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
        top='0'
        color='white'
        style={{ backgroundColor: "rgb(32, 35, 43)" }}>
        <Text as='h1' d='block' fontWeight='bold' my={2}>
          Yz's Resume
        </Text>
      </Box>
      <Box as='main'>
        <Box d='flex' flexDir={{ sm: "column", md: "row" }}>
          <Box style={{ backgroundColor: "rgb(40, 44, 53)" }} w='full' py={8}>
            <Box w='200px' h='200px' mx='auto' className='blue'>
              {/* <Image /> */}
            </Box>
          </Box>
          <Box my={2}>
            <Text textAlign='center' as='h2' fontWeight='bold'>
              Frontend Developer
            </Text>
            <Text>Skills</Text>
            {Object.entries(SKILLS).map(([skill, color]) => (
              <Badge key={skill} colorScheme={color}>
                {skill}
              </Badge>
            ))}
          </Box>
          <Box my={2}>
            <Text
              textAlign='center'
              as='h2'
              fontWeight='bold'
              borderBottom='1px solid black'>
              WORK HISTORY
            </Text>
            <Content>
              <Box d='flex' flexDir={{ sm: "column", md: "row" }}>
                <Text color='gray.600'>May 2019 - Sep 2020</Text>
                <Box>
                  <Text as='p'>
                    <Text as='span' fontWeight='bold'>
                      As Junior Frontend Developer position in
                    </Text>{" "}
                    <Tooltip label='jobstreet link' fontSize='md'>
                      <Link
                        textDecor='underline'
                        color='blue.700'
                        target='_blank'
                        href='https://www.jobstreet.com.my/en/companies/1311338-ascend-com'>
                        Ascendcom Johor Bahru.
                      </Link>
                    </Tooltip>
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      Provided event type website / small game / Shopping mall
                      system for singapore client.
                    </ListItem>
                    <ListItem>
                      Needed customise UI Design skills (raw css/scss).
                    </ListItem>
                    <ListItem>
                      Consulted with singapore company on project status and
                      something didn't make sense.
                    </ListItem>
                    <ListItem>
                      Needed cross site skills set (Frontend and backend).
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Content>
            <Content>
              <Text>My details:</Text>
              <UnorderedList>
                <ListItem>25 years old, male, Chinese.</ListItem>
                <ListItem>
                  Self taught software knowledge from google, youtube and online
                  courses.
                </ListItem>
                <ListItem>
                  Passionate in javascript programming language.
                </ListItem>
              </UnorderedList>
            </Content>
            <Content>
              <Text>Target:</Text>
              <Text>
                Provide a clean and smooth user experience interface for user.
                More specific like a popup container, it will smoothly show up
                instead of just show it for the user. In logical, it more make
                sense for something ready to show.
              </Text>
            </Content>
          </Box>
        </Box>
      </Box>
      <Box
        as='footer'
        px={4}
        py={10}
        style={{ backgroundColor: "rgb(32, 35, 43)" }}></Box>
    </App>
  );
}
