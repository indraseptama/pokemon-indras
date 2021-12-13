import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import(/* webpackChunkName: "ModalCatchPokemon" */ "./view")
);

export default DynamicComponent;
