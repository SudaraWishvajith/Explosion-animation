import { Environment, OrbitControls } from "@react-three/drei";
import { Ring } from "./Ring";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Ring />
      <Environment preset="sunset" background blur={0.4} />
    </>
  );
};
