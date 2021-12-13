import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import(/* webpackChunkName: "ButtonCatchPokemon" */ "./view")
);

export default DynamicComponent;
