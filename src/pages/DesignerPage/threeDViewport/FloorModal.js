import React, { useEffect, useRef } from "react";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useSelector } from "react-redux";

import useSetTexture from "../../../customHooks/useSetTexture";
import { angleRadians } from "../../../utils/angle";
import { feetToThreeD } from "../../../utils/unitMaping";

const FloorModal = () => {
    const elements = useSelector((state) => state.projects.currentProjectDetails.elements)
    const floorTexture = useSetTexture(elements?.Floor?.material);

    const floorRef = useRef();

    useEffect(() => {
        if (floorRef.current) {
            floorRef.current.needsUpdate = true
        }

    }, [elements?.Floor?.material])
    return (
        <>
            <mesh rotation={[-angleRadians(90), 0, 0]}
                position={[0, 0, 0]}
                receiveShadow>
                <planeGeometry attach="geometry" args={[feetToThreeD(elements?.Floor?.length), feetToThreeD(elements?.Floor?.width)]} />
                {/* <meshPhongMaterial ref={floorRef} shininess={400} map={elements?.Floor?.material === "None" || elements?.Floor?.material === "" ? "" : floorTexture} attach="material" color="white" /> */}
                <MeshReflectorMaterial
                    color="white"
                    roughness={0.4}
                    blur={[100, 100]} // Blur ground reflections (width, heigt), 0 skips blur
                    mixBlur={4} // How much blur mixes with surface roughness (default = 1)
                    mixStrength={4.5} // Strength of the reflections
                    mixContrast={1} // Contrast of the reflections
                    resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
                    depthScale={0.2} // Scale the depth factor (0 = no depth, default = 0)
                    minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
                    maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
                    depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
                    debug={0}
                    reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
                    ref={floorRef}
                    map={elements?.Floor?.material === "None" || elements?.Floor?.material === "" ? "" : floorTexture}
                />
            </mesh>
        </>
    );
};

export default FloorModal;
