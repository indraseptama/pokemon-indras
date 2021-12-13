import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import(/* webpackChunkName: "MyPokemonList" */ "./view")
);

export default DynamicComponent;
