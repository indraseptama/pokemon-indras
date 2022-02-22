import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import PokemonDetail from "../../components/PokemonDetail";
import { client } from "../../config/apollo-client";
import { GET_POKEMON_DETAIL } from "../../graphql/pokemon-query";
import { IPokemon } from "../../interface/IPokemon";

interface IPokemonDetailProps {
  name: string;
  pokemon: IPokemon;
}

const PokemonDetailPage = ({ name, pokemon }: IPokemonDetailProps) => {
  if (name === undefined) return <Box></Box>;
  else return <PokemonDetail name={name.toString()} pokemon={pokemon} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const name = context.params.name;
  const { data } = await client.query({
    query: GET_POKEMON_DETAIL,
    variables: { name: name },
  });
  return { props: { pokemon: data.pokemon, name: name } };
};

export default PokemonDetailPage;
