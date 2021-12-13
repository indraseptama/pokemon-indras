import { Box, Link, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Image from "next/image";
import { IPokemonItem } from "../../interface/IPokemonItem";

const PokemonListItem = ({ name, image, id }: IPokemonItem) => {
  return (
    <Link
      key={`pokemon-item-${name + id.toString()}`}
      css={css`
        &:hover {
          text-decoration: none;
        }
      `}
      href={`/pokemon/${name}`}
    >
      <Box
        css={css`
          position: relative;
          border-radius: 8px;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          cursor: pointer;
        `}
      >
        <Image
          alt="Pokemon Image"
          src={image}
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
          {name}
        </Text>
      </Box>
    </Link>
  );
};

export default PokemonListItem;