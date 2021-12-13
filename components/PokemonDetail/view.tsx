import { Box, Progress, Text, useDisclosure, Wrap } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Image from "next/image";
import { dataDummyPokemon } from "../../utils/dataDummy";
import { useState } from "react";
import ButtonCatchPokemeon from "../ButtonCatchPokemon/view";
import ModalCatchPokemeon from "../ModalCatchPokemon/view";
import { IPokemon } from "../../interface/IPokemon";

interface IPokemonDetailProps {
  name: string;
}

const PokemonDetail = ({ name }: IPokemonDetailProps) => {
  const dataDummy = dataDummyPokemon;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCatchSuccess, setIsCatchSucces] = useState(false);
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
    const newPokemon: IPokemon = { ...dataDummy, nickname: name };
    onClose();
  };

  return (
    <Box
      css={css`
        display: flex;
        flex-direction: column;
        position: relative;
        margin-bottom: 100px;
        background-color: #14a06f;
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
        pokemon={dataDummy}
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
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          @media (min-width: 960px) {
            margin: 32px;
            border-radius: 16px;
            background-color: #14a06f;
            align-self: flex-start;
          }
        `}
      >
        <Box
          css={css`
            display: flex;
            align-items: center;
            padding: 32px 16px 0 16px;
          `}
        >
          <Box>
            <Text
              css={css`
                font-size: 40px;
                font-weight: 700;
                color: white;
                margin: 0 0 8px 0;
              `}
            >
              {dataDummy.name}
            </Text>
            <Box
              css={css`
                display: flex;
              `}
            >
              {dataDummy.types.map((item) => (
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
              color: white;
            `}
          >
            #{dataDummy.id}
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
            src={dataDummy.sprites.front_default}
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
              margin: 16px 16px 16px 16px;
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
          {dataDummy.stats.map((item) => (
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
          flex: 1;
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
            {dataDummy.abilities.map((item) => (
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
            {dataDummy.moves.map((item) => (
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
