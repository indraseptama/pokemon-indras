import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import(/* webpackChunkName: "PokemonList" */ "./view")
);

export default DynamicComponent;
