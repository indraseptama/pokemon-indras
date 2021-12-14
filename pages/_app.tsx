import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PokemonProvider } from "../context/PokemonContext";
import App, { AppContext, AppProps } from "next/app";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <PokemonProvider>
        <ChakraProvider>
          <Head>
            <title>Catch Pokemon Indras!</title>
          </Head>
          <Component {...pageProps} />
          <NavigationBar {...pageProps} />
        </ChakraProvider>
      </PokemonProvider>
    </ApolloProvider>
  );
}
MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
export default MyApp;
