import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import(/* webpackChunkName: "PokemonDetail" */ "./view")
);

export default DynamicComponent;
