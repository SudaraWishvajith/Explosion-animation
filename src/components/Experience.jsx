import { Environment, OrbitControls } from "@react-three/drei";
import { Ring } from "./Ring";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Ring scale={0.3} />
      <Environment preset="sunset" background blur={0.5} />
    </>
  );
};
