import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { MdOutlineExplore } from "react-icons/md";
import { GiPokecog } from "react-icons/gi";
import Image from "next/image";
const NavigationBar = () => {
  let explore = "#929292";
  let captured = "#929292";

  const router = useRouter();
  const currentPath = router.pathname.split("/")[1];

  if (currentPath === "") {
    explore = "#EB5457";
    captured = "#929292";
  } else if (currentPath === "captured") {
    explore = "#929292";
    captured = "#EB5457";
  } else {
    explore = "#929292";
    captured = "#929292";
  }

  return (
    <Flex
      css={css`
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 99;
        padding: 16px;
        background-color: white;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        @media (min-width: 960px) {
          top: 0;
          bottom: auto;
          justify-content: flex-end;
        }
      `}
    >
      <Link
        href="/"
        css={css`
          display: none;
          position: relative;
          margin-right: auto;
          margin-left: 64px;
          @media (min-width: 960px) {
            display: block;
          }
        `}
      >
        <Image
          src={"/pokemon-logo.png"}
          height={"50px"}
          width={"100px"}
          objectFit="contain"
        />
      </Link>
      <Link
        css={css`
          text-align: center;
          flex: 1;
          padding: 0 8px;
          color: ${explore};
          &:hover {
            text-decoration: none;
          }
          @media (min-width: 960px) {
            flex: none;
            margin-right: 64px;
          }
        `}
        href="/"
      >
        <Box>
          <Icon as={MdOutlineExplore} w="20px" h="20px" />
          <Text
            css={css`
              margin: 0;
              font-weight: 600;
              font-size: 16px;
            `}
          >
            Explore
          </Text>
        </Box>
      </Link>
      <Link
        css={css`
          text-align: center;
          flex: 1;
          padding: 0 8px;
          &:hover {
            text-decoration: none;
          }
          color: ${captured};
          @media (min-width: 960px) {
            flex: none;
            margin-right: 64px;
          }
        `}
        href="/captured"
      >
        <Box>
          <Icon as={GiPokecog} w="20px" h="20px" />
          <Text
            css={css`
              margin: 0;
              font-weight: 600;
              font-size: 16px;
            `}
          >
            Captured
          </Text>
        </Box>
      </Link>
    </Flex>
  );
};

export default NavigationBar;
