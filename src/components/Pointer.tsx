import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { BallCollider, RigidBody, RapierRigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

type PointerProps = {
  vec?: Vector3;
  isActive: boolean;
};

const Pointer = ({ vec = new Vector3(), isActive }: PointerProps) => {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(new Vector3((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0), 0.2);
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
};

export default Pointer;
