import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { css } from "@emotion/react";
import PokemonListItem from "../PokemonListItem";
import { IPokemonItem } from "../../interface/IPokemonItem";

const dummy: Array<IPokemonItem> = [
  {
    id: 1,
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 2,
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 3,
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 4,
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 5,
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 6,
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 7,
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 8,
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 9,
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
];

const PokemonList = () => {
  const [pokemons, setPokemons] = useState(dummy);
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
      <SimpleGrid
        minChildWidth={{ base: "88px", sm: "120px", md: "150px" }}
        spacing="16px"
        css={css`
          margin-bottom: 16px;
        `}
      >
        {pokemons.map((item) => (
          <PokemonListItem {...item} />
        ))}
      </SimpleGrid>
      <Flex
        css={css`
          justify-content: center;
        `}
      >
        <Text
          onClick={() => {
            setPokemons([...pokemons, ...dummy]);
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
      </Flex>
    </Box>
  );
};

export default PokemonList;
