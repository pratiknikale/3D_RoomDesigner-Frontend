import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { PointLightHelper, SpotLightHelper } from "three";

import { angleRadians } from "../../../utils/angle";
import { feetToThreeD } from "../../../utils/unitMaping";
import FloorModal from "./FloorModal";
import WallModal from "./WallModal";

const ThreeDViewport = () => {

    const lightRef = useRef();
    const spotlightLight1Ref = useRef();
    const spotlightLight2Ref = useRef();
    useHelper(false && lightRef, PointLightHelper, 1, "red");
    useHelper(true && spotlightLight1Ref, SpotLightHelper, "blue");
    useHelper(true && spotlightLight2Ref, SpotLightHelper, "red");

    return (
        <>
            <PerspectiveCamera position={[-2, 4, 5]} makeDefault />
            <OrbitControls
                // enablePan={false}
                enableZoom={true} maxPolarAngle={angleRadians(85)} minPolarAngle={angleRadians(20)} />

            {/* flooring */}
            <FloorModal />
            {/* flooring */}

            {/* walls */}
            <WallModal />
            {/* walls */}

            {/* <ambientLight args={["#ffffff", 0]} /> */}
            {/* point light virtual source */}
            <mesh position={[0, feetToThreeD(10), 0]}>
                <sphereGeometry attach="geometry" args={[0.1]} />
                <meshStandardMaterial emissive={"white"} emissiveIntensity={10} attach="material" color="white" />
            </mesh >
            <pointLight ref={lightRef} args={["#ffffff", 35]} position={[0, feetToThreeD(10), 0]} castShadow />
            {/* point light virtual source */}

            {/* spotlights */}
            {/* <mesh position={[feetToThreeD(7.7), feetToThreeD(10), 0]}>
                <sphereGeometry attach="geometry" args={[0.1]} />
                <meshStandardMaterial emissive={"blue"} emissiveIntensity={10} attach="material" color="blue" />
            </mesh >
            <spotLight ref={spotlightLight1Ref} args={["blue", 55]} penumbra={0} distance={5} angle={0.4} position={[feetToThreeD(7.7), feetToThreeD(10), 0]} castShadow />

            <mesh position={[0, feetToThreeD(10), -feetToThreeD(5.6)]}>
                <sphereGeometry attach="geometry" args={[0.1]} />
                <meshStandardMaterial emissive={"red"} emissiveIntensity={10} attach="material" color="red" />
            </mesh >
            <spotLight ref={spotlightLight2Ref} args={["red", 15]} penumbra={0} distance={5} angle={0.4} position={[0, feetToThreeD(10), -feetToThreeD(5.6)]} castShadow /> */}

            {/* spotlights */}

        </>
    );
};

export default ThreeDViewport;
