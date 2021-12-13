import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import PokemonDetail from "../../components/PokemonDetail/view";

const PokemonDetailPage = () => {
  const router = useRouter();

  const { name } = router.query;
  if (name === undefined) return <Box></Box>;
  else return <PokemonDetail name={name.toString()} />;
};

export default PokemonDetailPage;
