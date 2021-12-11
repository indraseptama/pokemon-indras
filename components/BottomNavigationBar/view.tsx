import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { MdOutlineExplore } from "react-icons/md";
import { GiPokecog } from "react-icons/gi";
const BottomNavigationBar = () => {
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
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      `}
    >
      <Box
        css={css`
          text-align: center;
          flex: 1;
          padding: 0 8px;
          color: ${explore};
        `}
      >
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
      <Box
        css={css`
          text-align: center;
          flex: 1;
          padding: 0 8px;
          color: ${captured};
        `}
      >
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
    </Flex>
  );
};

export default BottomNavigationBar;
