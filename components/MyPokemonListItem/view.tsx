import { Box, Button, Icon, Link, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Image from "next/image";
import { SetStateAction } from "react";
import { GiWaterRecycling } from "react-icons/gi";
import { IPokemon } from "../../interface/IPokemon";

const MyPokemonListItem = ({
  pokemon,
  setSelectedPokemon,
  onOpen,
}: {
  pokemon: IPokemon;
  setSelectedPokemon: (value: SetStateAction<string>) => void;
  onOpen: () => void;
}) => {
  return (
    <Box
      key={pokemon.sprites.front_default}
      css={css`
        display: flex;
        flex-direction: column;
        max-width: 350px;
        position: relative;
        align-items: center;
        border-radius: 8px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        cursor: pointer;
      `}
    >
      <Link
        css={css`
          width: 100%;
          &:hover {
            text-decoration: none;
          }
        `}
        href={`/pokemon/${pokemon.name}`}
      >
        <Box
          css={css`
            display: flex;
            flex-direction: column;
            position: relative;
            align-items: center;
            width: 100%;
          `}
        >
          <Box
            css={css`
              width: 90%;
              position: relative;
            `}
          >
            <Image
              alt="Pokemon Image"
              src={pokemon.sprites.front_default}
              objectFit="cover"
              layout="responsive"
              width={1}
              height={1}
            />
          </Box>

          <Text
            css={css`
              margin: 0;
              text-align: center;
              padding-right: 4px;
              padding-left: 4px;
              font-weight: 700;
              font-size: 20px;
            `}
          >
            {pokemon.nickname}
          </Text>
          <Text
            css={css`
              margin: 0;
              text-align: center;
              padding-right: 4px;
              padding-left: 4px;
              font-size: 14px;
              padding-bottom: 16px;
            `}
          >
            {pokemon.name}
          </Text>
        </Box>
      </Link>
      <Button
        onClick={() => {
          setSelectedPokemon(pokemon.nickname);
          onOpen();
        }}
        color={"white"}
        bgColor={"red"}
        borderTopLeftRadius={0}
        borderTopEndRadius={0}
        width={"100%"}
        height={"50px"}
        leftIcon={<Icon as={GiWaterRecycling} />}
      >
        <Text>Release</Text>
      </Button>
    </Box>
  );
};

export default MyPokemonListItem;
