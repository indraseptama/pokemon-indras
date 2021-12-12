import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <NavigationBar {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
