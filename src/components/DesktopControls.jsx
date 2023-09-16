import { PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three"

const DesktopControls = ({initialCameraPosition}) => {
  const [controlsEnabled, setControlsEnabled] = useState(false);

  const moveState = {
    forward: false,
    backward: false,
    left: false,
    right: false,
  };

  const velocity = new THREE.Vector3();
  const moveSpeed = 10; // Adjust this value to control movement speed

  const PointerLocksRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case "KeyW":
          moveState.forward = true;
          break;
        case "KeyA":
          moveState.left = true;
          break;
        case "KeyS":
          moveState.backward = true;
          break;
        case "KeyD":
          moveState.right = true;
          break;
        case "Space":
          if (PointerLocksRef.current) {
            if (controlsEnabled) {
              PointerLocksRef.current.unlock();

            } else {
              PointerLocksRef.current.lock();
            }
          }
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.code) {
        case "KeyW":
          moveState.forward = false;
          break;
        case "KeyA":
          moveState.left = false;
          break;
        case "KeyS":
          moveState.backward = false;
          break;
        case "KeyD":
          moveState.right = false;
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  const onPointerLockChange = () => {
    setControlsEnabled(!controlsEnabled);
  };

  useEffect(() => {
    document.addEventListener("pointerlockchange", onPointerLockChange);

    return () => {
      document.removeEventListener("pointerlockchange", onPointerLockChange);
    };
  });

  useEffect(() => {
    if (PointerLocksRef.current) {
      PointerLocksRef.current.getObject().position.set(
        initialCameraPosition.x,
        initialCameraPosition.y,
        initialCameraPosition.z
      );
    }
  }, [initialCameraPosition]);

  useFrame(({ camera }) => {
    if (!controlsEnabled) return;

    const delta = 0.016;

    velocity.x -= velocity.x * 10.0 * delta;
    velocity.z -= velocity.z * 10.0 * delta;

    console.log(moveState);

    if (moveState.forward) velocity.z -= moveSpeed * delta;
    if (moveState.backward) velocity.z += moveSpeed * delta;
    if (moveState.left) velocity.x += moveSpeed * delta;
    if (moveState.right) velocity.x -= moveSpeed * delta;

    PointerLocksRef.current.moveRight(-velocity.x * delta);
    PointerLocksRef.current.moveForward(-velocity.z * delta);
  });

  return (
    <PointerLockControls ref={PointerLocksRef}>
      {/* Your camera and other scene components */}
    </PointerLockControls>
  );
};

export default DesktopControls;
