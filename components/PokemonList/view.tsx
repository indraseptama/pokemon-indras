import {
  Box,
  Flex,
  SimpleGrid,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import PokemonListItem from "../PokemonListItem";
import { IPokemonItem } from "../../interface/IPokemonItem";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../graphql/pokemon-query";
import { PokemonContext } from "../../context/PokemonContext";

const PokemonList = () => {
  const limit = 24;
  const { countPokemons } = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState<Array<IPokemonItem>>([]);
  const [skip, setSkip] = useState(0);
  const toast = useToast();
  const { data, loading, error } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: skip },
  });

  useEffect(() => {
    if (data && data.pokemons && data.pokemons.results) {
      setPokemons((prevItems) => [...prevItems, ...data.pokemons.results]);
    }
  }, [data]);

  if (error) {
    toast({
      title: `fetching error`,
      status: "error",
      isClosable: true,
    });
  }

  return (
    <Box
      css={css`
        padding: 16px 32px;
        margin-bottom: 100px;
        @media (min-width: 960px) {
          padding: 16px 80px;
          margin-top: 100px;
          margin-bottom: 0;
        }
      `}
    >
      <Text
        css={css`
          font-size: 28px;
          font-weight: 700;
        `}
      >
        Catch the pokemon!
      </Text>
      <Text
        css={css`
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 16px;
        `}
      >
        You have {countPokemons} {countPokemons > 1 ? "pokemons" : "pokemon"}
      </Text>
      <SimpleGrid
        minChildWidth={{ base: "88px", sm: "120px", md: "150px" }}
        spacing="16px"
        css={css`
          margin-bottom: 16px;
        `}
      >
        {pokemons.map((item) => (
          <PokemonListItem key={item.name} {...item} />
        ))}
      </SimpleGrid>
      <Flex
        css={css`
          justify-content: center;
        `}
      >
        {loading ? (
          <Spinner />
        ) : (
          <Text
            onClick={() => {
              setSkip(skip + limit);
            }}
            css={css`
              background-color: #eb5457;
              color: white;
              border-radius: 8px;
              padding: 8px 32px;
              cursor: pointer;
              font-size: 16px;
            `}
          >
            Load More
          </Text>
        )}
      </Flex>
    </Box>
  );
};

export default PokemonList;
