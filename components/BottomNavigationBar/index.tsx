import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import(/* webpackChunkName: "BottomNavigationBar" */ "./view")
);

export default DynamicComponent;
