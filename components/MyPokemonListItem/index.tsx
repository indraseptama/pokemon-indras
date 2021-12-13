import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import(/* webpackChunkName: "MyPokemonListItem" */ "./view")
);

export default DynamicComponent;
