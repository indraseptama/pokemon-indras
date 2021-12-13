import {
  Box,
  Button,
  Icon,
  Link,
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
import { useState } from "react";
import { IPokemon } from "../../interface/IPokemon";
import MyPokemonListItem from "../MyPokemonListItem/view";
const dummy: Array<IPokemon> = [
  {
    nickname: "Damar",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
  },
  {
    nickname: "Damar",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
  },
  {
    nickname: "Damar",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
  },
];

const MyPokemonList = () => {
  const [pokemons, setPokemons] = useState(dummy);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <Button colorScheme="red" mr={3}>
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
      <SimpleGrid
        minChildWidth="88px"
        spacing="16px"
        css={css`
          margin-bottom: 16px;
        `}
      >
        {pokemons.map((item) => (
          <MyPokemonListItem
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
