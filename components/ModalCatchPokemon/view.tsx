import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import Image from "next/image";
import { useState } from "react";
import { IPokemon } from "../../interface/IPokemon";
import { ImSad2 } from "react-icons/im";
const ModalCatchPokemeon = ({
  isOpen,
  onCatchModalClose,
  isCatchSuccess,
  pokemon,
  onSaveButton,
}: {
  isOpen: boolean;
  onCatchModalClose: () => void;
  isCatchSuccess: boolean;
  pokemon: IPokemon;
  onSaveButton: (value: string) => void;
}) => {
  const [newPokemonName, setNewPokemonName] = useState("");
  return (
    <Modal
      isCentered
      closeOnEsc={false}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onCatchModalClose}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent width={{ base: "90vw" }}>
        <ModalHeader>
          {isCatchSuccess
            ? "You successfuly catch the pokemon!"
            : `Oooops ${pokemon.name} got away. Better luck next time!`}
        </ModalHeader>

        {!isCatchSuccess && (
          <Box
            css={css`
              width: 50%;
              margin-right: auto;
              margin-left: auto;
              position: relative;
            `}
          >
            <Icon as={ImSad2} width={"100%"} height={"auto"} color={"gray"} />
          </Box>
        )}
        {isCatchSuccess && (
          <ModalBody pb={6}>
            <Box
              css={css`
                width: 80%;
                margin-right: auto;
                margin-left: auto;
                position: relative;
              `}
            >
              <Image
                alt="Pokemon Image"
                src={pokemon.sprites.front_default}
                layout="responsive"
                height={1}
                width={1}
              />
            </Box>
            <FormControl>
              <FormLabel>
                Please enter a nickname for your {pokemon.name}
              </FormLabel>
              <Input
                value={newPokemonName}
                onChange={(e) => {
                  setNewPokemonName(e.target.value);
                }}
                placeholder={pokemon.name}
              />
            </FormControl>
          </ModalBody>
        )}

        <ModalFooter>
          {isCatchSuccess ? (
            <Button
              onClick={() => {
                setNewPokemonName("");
                onSaveButton(newPokemonName);
              }}
              colorScheme="blue"
              mr={3}
            >
              Save
            </Button>
          ) : (
            <Button onClick={onCatchModalClose} colorScheme="red" mr={3}>
              Back
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCatchPokemeon;
