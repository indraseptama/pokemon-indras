import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import(/* webpackChunkName: "PokemonListItem" */ "./view")
);

export default DynamicComponent;
