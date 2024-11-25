import React, { useEffect, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useSelector } from "react-redux";

import useSetTexture from "../../../customHooks/useSetTexture";
import { feetToThreeD } from "../../../utils/unitMaping";
import tempDoor from "../../../assets/tempDoor.jpg";

const WallModal = () => {
    const elements = useSelector((state) => state.projects.currentProjectDetails.elements);
    const wallpaperTexture = [useSetTexture(elements?.Wall[0]?.material), useSetTexture(elements?.Wall[1]?.material), useSetTexture(elements?.Wall[2]?.material), useSetTexture(elements?.Wall[3]?.material)];

    const tempdoor1 = useTexture(tempDoor);

    const wallRef = [useRef(), useRef(), useRef(), useRef()];

    useEffect(() => {
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

    }, [elements?.Wall])
    return (
        <>
            {elements?.Wall?.length > 0 && elements?.Wall.map((wall, WI) => {
                return <>
                    {/* wall mesh modal */}
                    <mesh visible={wall.visible}
                        position={
                            WI == 0
                                ?
                                [0, feetToThreeD(wall.height / 2), -feetToThreeD((elements?.Floor?.width / 2) + (wall.width / 2))]
                                :
                                WI == 1
                                    ?
                                    [feetToThreeD((elements?.Floor?.length / 2) + (wall.width / 2)), feetToThreeD(wall.height / 2), 0]
                                    :
                                    WI == 2
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
                                WI == 0 || WI == 2 ?
                                    [feetToThreeD((elements?.Floor?.length) ? (elements?.Floor?.length) : 0), feetToThreeD(wall.height), feetToThreeD(wall.width)]
                                    :
                                    [feetToThreeD(wall.width), feetToThreeD(wall.height), feetToThreeD((elements?.Floor?.width) ? (elements?.Floor?.width) : 0)]
                            } />

                        {/* adds texture to wall */}
                        <meshStandardMaterial ref={wallRef[WI]} map={elements?.Wall[WI]?.material === "None" || elements?.Wall[WI]?.material === "" ? "" : wallpaperTexture[WI]} attach="material" color={elements?.Wall[WI]?.material === "None" || elements?.Wall[WI]?.material === "" ? wall.color : "white"} />
                        {wall.subElements.length > 0 && wall.subElements.map((subElement, SEI) => {
                            return <>
                                {/* door mesh modal */}
                                <mesh position={
                                    WI === 0
                                        ?
                                        [-(((feetToThreeD(elements?.Floor?.length) / 2) - (feetToThreeD(subElement.width) / 2)) - (feetToThreeD(subElement.positionX))), -((feetToThreeD(wall.height) / 2) - (feetToThreeD(subElement.height) / 2)), 0]
                                        :
                                        WI === 1
                                            ?
                                            [0, -((feetToThreeD(wall.height) / 2) - (feetToThreeD(subElement.height) / 2)), -(((feetToThreeD(elements?.Floor?.width) / 2) - (feetToThreeD(subElement.width) / 2)) - (feetToThreeD(subElement.positionX)))]
                                            :
                                            WI === 2
                                                ?
                                                [(((feetToThreeD(elements?.Floor?.length) / 2) - (feetToThreeD(subElement.width) / 2)) - (feetToThreeD(subElement.positionX))), -((feetToThreeD(wall.height) / 2) - (feetToThreeD(subElement.height) / 2)), 0]
                                                :
                                                [0, -((feetToThreeD(wall.height) / 2) - (feetToThreeD(subElement.height) / 2)), (((feetToThreeD(elements?.Floor?.width) / 2) - (feetToThreeD(subElement.width) / 2)) - (feetToThreeD(subElement.positionX)))]
                                }>
                                    <boxGeometry args={
                                        WI === 0 || WI === 2 ?
                                            [feetToThreeD(subElement.width), feetToThreeD(subElement.height), feetToThreeD(0.55)]
                                            :
                                            [feetToThreeD(0.55), feetToThreeD(subElement.height), feetToThreeD(subElement.width)]
                                    } />

                                    {/* adds texture to door */}
                                    <meshStandardMaterial map={tempdoor1} attach="material" color="white" />
                                </mesh>
                            </>
                        })}

                    </mesh>
                </>
            })}
        </>
    );
};

export default WallModal;
