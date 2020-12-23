import { Box } from "@chakra-ui/react";

export default function App({ children, ...props }) {
  return (
    <Box minH='100vh' w='100vw' d='flex' flexDir='column' pt='48px' {...props}>
      {children}
    </Box>
  );
}
