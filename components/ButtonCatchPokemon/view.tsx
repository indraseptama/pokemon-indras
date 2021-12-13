import { Box, Icon, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { MdCatchingPokemon } from "react-icons/md";

const ButtonCatchPokemeon = ({ onCatch }: { onCatch: () => void }) => {
  return (
    <Box
      onClick={onCatch}
      css={css`
            display: flex;
            flex-direction: column;
            background-color: rgb(249,140,140);
            padding: 8px 16px 8px 16px;
            border-radius: 16px;
            justify-content: center;
            align-items:center
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          `}
    >
      <Icon
        as={MdCatchingPokemon}
        color={"red"}
        height={"48px"}
        width={"48px"}
      />
      <Text
        css={css`
          text-align: center;
          color: red;
          margin: 0;
          font-size: 16px;
          font-weight: 700;
        `}
      >
        Catch!
      </Text>
    </Box>
  );
};

export default ButtonCatchPokemeon;
