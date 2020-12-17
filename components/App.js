import { Box } from "@chakra-ui/react";

export default function App({ children, ...props }) {
  return (
    <Box maxW='1280px' pt='48px' m='auto' {...props}>
      {children}
    </Box>
  );
}
