import {
  Box,
  Progress,
  Spinner,
  Text,
  useDisclosure,
  useToast,
  Wrap,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import Image from "next/image";
import { GET_POKEMON_DETAIL } from "../../graphql/pokemon-query";
import { useContext, useEffect, useState } from "react";
import ButtonCatchPokemeon from "../ButtonCatchPokemon/view";
import ModalCatchPokemeon from "../ModalCatchPokemon/view";
import { IPokemon } from "../../interface/IPokemon";
import { useQuery } from "@apollo/client";
import { PokemonContext } from "../../context/PokemonContext";
import { COLOR_TYPES } from "../../utils/colorTypes";

interface IPokemonDetailProps {
  name: string;
}

const PokemonDetail = ({ name }: IPokemonDetailProps) => {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCatchSuccess, setIsCatchSucces] = useState(false);
  const toast = useToast();
  const { addPokemon } = useContext(PokemonContext);
  const { data, loading, error } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: name },
  });

  useEffect(() => {
    if (data && data.pokemon) {
      setPokemon(data.pokemon);
    }
  }, [data]);

  const getColor = (baseStat: number) => {
    if (baseStat >= 0 && baseStat <= 50) return "red";
    else if (baseStat > 50 && baseStat <= 75) return "yellow";
    return "green";
  };

  const probability = (n: number) => {
    return !!n && Math.random() <= n;
  };

  const onCatch = () => {
    const catched = probability(0.5);
    setIsCatchSucces(catched);
    onOpen();
  };

  const onCatchModalClose = () => {
    onClose();
  };

  const onSavePokemon = (name: string) => {
    const newPokemon: IPokemon = { ...pokemon, nickname: name };
    if (name === "" || name === undefined) {
      toast({
        title: `Nickname cannot be empty!`,
        status: "error",
        isClosable: true,
      });
    } else if (addPokemon(newPokemon)) {
      onClose();
    } else {
      toast({
        title: `Nickname already exist!`,
        status: "error",
        isClosable: true,
      });
    }
  };

  if (loading || pokemon === undefined) {
    return <Spinner />;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <Box
      css={css`
        display: flex;
        flex-direction: column;
        position: relative;
        margin-bottom: 100px;
        background-color: ${COLOR_TYPES[pokemon.types[0].type.name].background};
        @media (min-width: 960px) {
          flex-direction: row;
          margin-top: 100px;
          margin-bottom: 0px;
          background-color: transparent;
        }
      `}
    >
      <ModalCatchPokemeon
        isOpen={isOpen}
        onCatchModalClose={onCatchModalClose}
        isCatchSuccess={isCatchSuccess}
        pokemon={pokemon}
        onSaveButton={onSavePokemon}
      />

      <Box
        css={css`
          display: flex;
          width: 100%;
          position: fixed;
          bottom: 90px;
          z-index: 100;
          justify-content: center;
          cursor: pointer;
          @media (min-width: 960px) {
            bottom: 40px;
          }
        `}
      >
        <ButtonCatchPokemeon onCatch={onCatch} />
      </Box>
      <Box
        css={css`
          flex: 2;
          display: flex;
          flex-direction: column;
          position: relative;
          @media (min-width: 960px) {
            margin: 32px;
            border-radius: 16px;
            background-color: ${COLOR_TYPES[pokemon.types[0].type.name]
              .background};
            align-self: flex-start;
          }
        `}
      >
        <Box
          css={css`
            display: flex;
            align-items: center;
            padding: 16px 16px 0 16px;
          `}
        >
          <Box>
            <Text
              css={css`
                font-size: 32px;
                font-weight: 700;
                color: ${COLOR_TYPES[pokemon.types[0].type.name].foreground};
                margin: 0 0 0 0;
              `}
            >
              {pokemon.name}
            </Text>
            <Box
              css={css`
                display: flex;
              `}
            >
              {pokemon.types.map((item) => (
                <Box
                  key={item.type.id}
                  css={css`
                    background-color: black;
                    color: white;
                    border-radius: 16px;
                    padding: 4px 16px 4px 16px;
                    margin-right: 16px;
                  `}
                >
                  {item.type.name}
                </Box>
              ))}
            </Box>
          </Box>

          <Text
            css={css`
              margin: 0 0 0 auto;
              font-size: 24px;
              font-weight: 700;
              color: ${COLOR_TYPES[pokemon.types[0].type.name].foreground};
            `}
          >
            #{pokemon.id}
          </Text>
        </Box>
        <Box
          css={css`
            position: relative;
            margin-right: auto;
            margin-left: auto;
          `}
        >
          <Image
            alt="Pokemon Image"
            src={pokemon.sprites.front_default}
            objectFit="contain"
            layout="fixed"
            height="250px"
            width="250px"
          />
        </Box>
        <Box
          css={css`
            padding: 16px;
            border-radius: 16px 16px 0 0;
            background-color: white;
            @media (min-width: 960px) {
              margin: 0px 16px 16px 16px;
              padding: 8px 16px 16px 16px;
              border-radius: 16px;
            }
          `}
        >
          <Text
            css={css`
              font-size: 24px;
              font-weight: 700;
              margin-bottom: 8px;
            `}
          >
            Skills
          </Text>
          {pokemon.stats.map((item) => (
            <Box
              key={item.stat.id}
              css={css`
                display: flex;
                margin-bottom: 8px;
                align-items: center;
              `}
            >
              <Text
                css={css`
                  margin: 0;
                  width: 120px;
                `}
              >
                {item.stat.name}
              </Text>
              <Text
                css={css`
                  margin: 0;
                `}
              >
                {item.base_stat}
              </Text>
              <Progress
                aria-label="progress bar skill"
                flex={1}
                ml="16px"
                height="4px"
                colorScheme={getColor(item.base_stat)}
                value={item.base_stat}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        css={css`
          display: flex;
          flex: 3;
          flex-direction: column;
          padding: 16px;
          background-color: white;
          @media (min-width: 960px) {
            padding: 32px;
          }
        `}
      >
        <Box
          css={css`
            margin-bottom: 16px;
          `}
        >
          <Text
            css={css`
              font-size: 24px;
              font-weight: 700;
              margin-bottom: 8px;
            `}
          >
            Abilities
          </Text>
          <Wrap>
            {pokemon.abilities.map((item) => (
              <Text
                key={`ability${item.ability.id}`}
                css={css`
                  border-radius: 16px;
                  padding: 4px 16px 4px 16px;
                  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                `}
              >
                {item.ability.name}
              </Text>
            ))}
          </Wrap>
        </Box>
        <Box>
          <Text
            css={css`
              font-size: 24px;
              font-weight: 700;
              margin-bottom: 8px;
            `}
          >
            Moves
          </Text>
          <Wrap>
            {pokemon.moves.map((item) => (
              <Text
                key={`moves${item.move.id}`}
                css={css`
                  border-radius: 16px;
                  padding: 4px 16px 4px 16px;
                  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                `}
              >
                {item.move.name}
              </Text>
            ))}
          </Wrap>
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonDetail;
