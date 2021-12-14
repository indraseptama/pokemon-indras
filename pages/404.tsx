import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";

const Page404 = () => {
  const centerScreen = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
  `;
  return <Box css={centerScreen}>Page not found :(</Box>;
};

export default Page404;
