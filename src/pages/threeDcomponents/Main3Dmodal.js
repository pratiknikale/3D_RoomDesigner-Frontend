import React, { useEffect, useRef } from "react";
import { OrbitControls, PerspectiveCamera, MeshReflectorMaterial, useHelper, useTexture } from "@react-three/drei";
import { angleRadians } from "../utils/angle";
import { feetToThreeD } from "../utils/unitMaping";
import { useSelector } from "react-redux";
import useSetTexture from "../../customHooks/useSetTexture";
import { PointLightHelper, SpotLightHelper } from "three";

import tempDoor from "../../assets/tempDoor.jpg";

const Main3Dmodal = () => {
    const elements = useSelector((state) => state.projects.currentProjectDetails.elements)
    const floorTexture = useSetTexture(elements?.Floor?.material);
    const wallpaperTexture = [useSetTexture(elements?.Wall[0]?.material), useSetTexture(elements?.Wall[1]?.material), useSetTexture(elements?.Wall[2]?.material), useSetTexture(elements?.Wall[3]?.material)];

    const tempdoor1 = useTexture(tempDoor);

    const floorRef = useRef();
    const wallRef = [useRef(), useRef(), useRef(), useRef()];
    const lightRef = useRef();
    const spotlightLight1Ref = useRef();
    const spotlightLight2Ref = useRef();
    useHelper(false && lightRef, PointLightHelper, 1, "red");
    useHelper(true && spotlightLight1Ref, SpotLightHelper, "blue");
    useHelper(true && spotlightLight2Ref, SpotLightHelper, "red");
    useEffect(() => {
        if (floorRef.current) {
            floorRef.current.needsUpdate = true
        }
        if (wallRef[0].current) {
            wallRef[0].current.needsUpdate = true
        }
        if (wallRef[1].current) {
            wallRef[1].current.needsUpdate = true
        }
        if (wallRef[2].current) {
            wallRef[2].current.needsUpdate = true
        }
        if (wallRef[3].current) {
            wallRef[3].current.needsUpdate = true
        }
        // if (spotlightLight1Ref.current) {
        //     spotlightLight1Ref.current.target.position.x = 2;
        //     spotlightLight1Ref.current.target.position.z = 0.1;
        // }

    }, [elements?.Floor?.material, elements?.Wall])
    return (
        <>
            <PerspectiveCamera position={[-2, 4, 5]} makeDefault />
            <OrbitControls
                // enablePan={false}
                enableZoom={true} maxPolarAngle={angleRadians(85)} minPolarAngle={angleRadians(20)} />

            {/* flooring */}
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
            {/* flooring */}




            {/* walls */}
            {/* walls */}
            {/* walls */}
            {elements?.Wall?.length > 0 && elements?.Wall.map((wall, i) => {
                return <>
                    <mesh visible={wall.visible}
                        position={
                            i == 0
                                ?
                                [0, feetToThreeD(wall.height / 2), -feetToThreeD((elements?.Floor?.width / 2) + (wall.width / 2))]
                                :
                                i == 1
                                    ?
                                    [feetToThreeD((elements?.Floor?.length / 2) + (wall.width / 2)), feetToThreeD(wall.height / 2), 0]
                                    :
                                    i == 2
                                        ?
                                        [0, feetToThreeD(wall.height / 2), feetToThreeD((elements?.Floor?.width / 2) + (wall.width / 2))]
                                        :
                                        [-feetToThreeD((elements?.Floor?.length / 2) + (wall.width / 2)), feetToThreeD(wall.height / 2), 0]
                        }
                        castShadow
                        receiveShadow>
                        {/* [0,height,0] */}
                        <boxGeometry attach="geometry"
                            args={
                                i == 0 || i == 2 ?
                                    [feetToThreeD((elements?.Floor?.length) ? (elements?.Floor?.length) : 0), feetToThreeD(wall.height), feetToThreeD(wall.width)]
                                    :
                                    [feetToThreeD(wall.width), feetToThreeD(wall.height), feetToThreeD((elements?.Floor?.width) ? (elements?.Floor?.width) : 0)]
                            } />
                        <meshStandardMaterial ref={wallRef[i]} map={elements?.Wall[i]?.material === "None" ? "" : wallpaperTexture[i]} attach="material" color={elements?.Wall[i]?.material === "None" || elements?.Wall[i]?.material === "" ? wall.color : "white"} />
                        {i == 0 &&
                            <>
                                <mesh position={[-((feetToThreeD(elements?.Floor?.length) / 2) - (feetToThreeD(2.6) / 2)), -((feetToThreeD(wall.height) / 2) - (feetToThreeD(6.5) / 2)), 0]}>
                                    <boxGeometry args={[feetToThreeD(2.6), feetToThreeD(6.5), feetToThreeD(0.55)]} />
                                    <meshStandardMaterial map={tempdoor1} attach="material" color="white" />
                                </mesh>
                            </>
                        }

                    </mesh>
                </>
            })}
            {/* walls */}
            {/* walls */}
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

export default Main3Dmodal;
