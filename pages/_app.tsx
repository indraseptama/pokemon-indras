import { useEffect } from "react";
import BottomNavigationBar from "../components/BottomNavigationBar";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <BottomNavigationBar {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
