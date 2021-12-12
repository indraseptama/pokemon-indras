import {
  Box,
  Button,
  Flex,
  Icon,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import Image from "next/image";
import { useState } from "react";
import { IPokemon } from "../../interface/IPokemon";
import { GiWaterRecycling } from "react-icons/gi";
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

const Captured = () => {
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
        {pokemons.map((item, index) => (
          <Box
            key={item.sprites.front_default + index}
            css={css`
              display: flex;
              flex-direction: column;
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
              href={`/pokemon/${item.name}`}
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
                    width: 100%;
                    position: relative;
                  `}
                >
                  <Image
                    src={item.sprites.front_default}
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
                    font-size: 14px;
                    padding-bottom: 16px;
                  `}
                >
                  {item.nickname}
                </Text>
              </Box>
            </Link>
            <Button
              onClick={() => {
                setSelectedPokemon(item.nickname);
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
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Captured;
