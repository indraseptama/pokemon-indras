import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const DetailBlogWithId = () => {
  const router = useRouter();
  const { name } = router.query;
  return <Box></Box>;
};

export default DetailBlogWithId;
