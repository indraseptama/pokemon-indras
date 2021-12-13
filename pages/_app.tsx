import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
        <NavigationBar {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
