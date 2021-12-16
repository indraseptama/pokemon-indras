import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { IPokemon } from "../../interface/IPokemon";
import MyPokemonListItem from "../MyPokemonListItem/view";

const MyPokemonList = () => {
  const { countPokemons, myPokemons, removePokemon } =
    useContext(PokemonContext);
  const [pokemons, setPokemons] = useState<Array<IPokemon>>(myPokemons);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setPokemons(myPokemons);
  }, [myPokemons]);
  return (
    <Box
      css={css`
        padding: 16px 24px;
        margin-bottom: 100px;
        @media (min-width: 960px) {
          padding: 16px 80px;
          margin-top: 100px;
          margin-bottom: 0;
        }
      `}
    >
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={() => {
          setSelectedPokemon("");
          onClose();
        }}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent width={{ base: "90vw" }}>
          <ModalBody pt={3}>
            Are you sure to release {selectedPokemon}?
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                removePokemon(selectedPokemon);
                onClose();
              }}
              colorScheme="red"
              mr={3}
            >
              Remove
            </Button>
            <Button
              onClick={() => {
                setSelectedPokemon("");
                onClose();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Text
        css={css`
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 16px;
        `}
      >
        You have {countPokemons} {countPokemons > 1 ? "pokemons" : "pokemon"}
      </Text>
      <SimpleGrid
        minChildWidth="88px"
        spacing="16px"
        css={css`
          margin-bottom: 16px;
        `}
      >
        {pokemons.map((item) => (
          <MyPokemonListItem
            key={item.name + item.nickname}
            pokemon={item}
            setSelectedPokemon={setSelectedPokemon}
            onOpen={onOpen}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MyPokemonList;
