import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import Link from "next/link";
const dummy = [
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "Damar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    name: "bdsd isesdsd",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
];

export default function Home() {
  const [pokemons, setPokemons] = useState(dummy);
  return (
    <Box
      css={css`
        padding: 16px 24px;
        margin-bottom: 100px;
      `}
    >
      <SimpleGrid
        minChildWidth="88px"
        spacing="16px"
        css={css`
          margin-bottom: 16px;
        `}
      >
        {pokemons.map((item, index) => (
          <Link href={`/pokemon/${item.name}`}>
            <Box
              key={item.image + index}
              css={css`
                position: relative;
                border-radius: 8px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                cursor: pointer;
              `}
            >
              <Image
                src={item.image}
                objectFit="cover"
                layout="responsive"
                width={1}
                height={1}
              />
              <Text
                css={css`
                  margin: 0;
                  text-align: center;
                  padding-right: 4px;
                  padding-left: 4px;
                  font-weight: 700;
                  font-size: 14px;
                  padding-bottom: 8px;
                `}
              >
                {item.name}
              </Text>
            </Box>
          </Link>
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
}
