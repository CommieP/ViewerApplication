import { useThree, extend } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import { useFrame } from "@react-three/fiber";

extend({ PerspectiveCamera }); // Extend fiber with PerspectiveCamera

const CustomCamera = ({ position, rotation }) => {
  const { camera } = useThree();

  useFrame(() => {
    // Update camera properties here, such as position and rotation
    camera.position.set(position[0], position[1], position[2]);
    camera.rotation.set(rotation[0], rotation[1], rotation[2]);
  });

  return null; // This component doesn't render anything
};

export default CustomCamera;
