import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import { ApolloProvider } from "@apollo/client";
import { PokemonProvider } from "../context/PokemonContext";
import App, { AppContext, AppProps } from "next/app";
import Head from "next/head";
import { client } from "../config/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
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
