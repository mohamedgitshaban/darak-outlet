import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Bounds, Environment, AccumulativeShadows, RandomizedLight } from '@react-three/drei'

function Faucet({ name }) {
  const ref = useRef()
  const { nodes } = useGLTF('/faucet-transformed.glb')
  // Filter out all meshes belonging to a particular faucet
  const meshes = Object.values(nodes).filter((node) => node.isMesh && node.name.startsWith(name))
  return (
    <group ref={ref}>
      {meshes.map(({ uuid, geometry, material }) => (
        <mesh castShadow receiveShadow key={uuid} geometry={geometry} material={material} />
      ))}
    </group>
  )
}

function Faucets(props) {
  // This component splits a GLTF up into parts
  return (
    <group {...props}>
      {[1, 2, 3, 4, 5, 6, 7].map((id) => (
        <Faucet key={id} name={`pipa${id}`} />
      ))}
    </group>
  )
}

export default function SaleModel() {

  return (
    <Canvas className='canv' shadows camera={{ position: [-12.5, 2.5, 10], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <Bounds fit clip  margin={0.4}>
        <Faucets scale={0.01} rotation={[0, -Math.PI / 2, 0]} position={[0, 0.001, 0]} />
        {/* Fake object to stretch bounds a bit */}
        <mesh visible={false} position={[-1.1, 0, 0]}>
          <sphereGeometry args={[0.1]} />
        </mesh>
      </Bounds>
      <AccumulativeShadows
        resolution={1024}
        frames={100}
        temporal={true}
        color={'#0c575f'}
        colorBlend={1.5}
        alphaTest={0.85}
        opacity={1.65}
        scale={6}>
        <RandomizedLight radius={3} ambient={0.6} position={[10, 5, -15]} bias={0.001} size={1} mapSize={1024} />
      </AccumulativeShadows>
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr" background blur={0.7} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
