import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import(/* webpackChunkName: "NavigationBar" */ "./view")
);

export default DynamicComponent;
