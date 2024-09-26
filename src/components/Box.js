import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { SoftShadows, Float, CameraControls,OrbitControls, Sky, PerformanceMonitor } from "@react-three/drei"
import { useControls } from "leva"
import { Perf } from "r3f-perf"
import { easing } from "maath"
import { Model as Room } from "./Model"

function Light() {
  const ref = useRef()
  useFrame((state, delta) => {
    easing.dampE(ref.current.rotation, [(state.pointer.y * Math.PI) / 50, (state.pointer.x * Math.PI) / 20, 0], 0.2, delta)
  })
  return (
    <group ref={ref}>
      <directionalLight position={[5, 5, -8]} castShadow intensity={5} shadow-mapSize={2048} shadow-bias={-0.001}>
        <orthographicCamera attach="shadow-camera" args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]} />
      </directionalLight>
    </group>
  )
}

export default function App() {
  const [bad, set] = useState(false)

  return (
    <div className="bathroomcan">
       <section className="welcome_area bg-img background-overlay" >
   
   <div className="container h-100">
       <div className="row h-100 align-items-center">
           <div className="col-12 ">
          
               <div className="hero-content">
                   <h6>Bathrooms</h6>
                   <h2>New Collection</h2>
                   <a href="#" className="btn essence-btn">view collection</a>
               </div>
           </div>
       </div>
   </div>
</section>
      <Canvas shadows camera={{ position: [8, 0, 10], fov: 60 }}>
      <PerformanceMonitor onDecline={() => set(true)} />
      <OrbitControls enableZoom={false} />

      <ambientLight intensity={0.4} />
      <Room scale={0.2} position={[-19, -12, -24]} />
    
    </Canvas>
    </div>
  )
}

