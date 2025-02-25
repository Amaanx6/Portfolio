import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { BallCollider, CylinderCollider, RigidBody, RapierRigidBody } from "@react-three/rapier";
import { SphereGeometry, Vector3, MeshPhysicalMaterial, MathUtils } from "three";

const sphereGeometry = new SphereGeometry(1, 28, 28);

type SphereProps = {
  vec?: Vector3;
  scale: number;
  r?: typeof MathUtils.randFloatSpread;
  material: MeshPhysicalMaterial;
  isActive: boolean;
};

const SphereGeo = ({ vec = new Vector3(), scale, r = MathUtils.randFloatSpread, material, isActive }: SphereProps) => {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(new Vector3(-50 * delta * scale, -150 * delta * scale, -50 * delta * scale));

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody linearDamping={0.75} angularDamping={0.15} friction={0.2} position={[r(20), r(20) - 25, r(20) - 10]} ref={api} colliders={false}>
      <BallCollider args={[scale]} />
      <CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2 * scale]} args={[0.15 * scale, 0.275 * scale]} />
      <mesh castShadow receiveShadow scale={scale} geometry={sphereGeometry} material={material} rotation={[0.3, 1, 1]} />
    </RigidBody>
  );
};

export default SphereGeo;
