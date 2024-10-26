import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <div className="app">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight color="#ffffff" position={[0, 0, 5]} />
        <mesh position={[1, 1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#2cff2c" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default App;
