import { useState, useEffect } from "react";
import { useTexture } from "@react-three/drei";

import marbalTileTexture from "../assets/textures/104_Calacatta Marble Floor_PBRTexture-seamless.jpg";
import fetchTexture from "../assets/textures/fetchTexture";

export default function useSetTexture(value) {
    const [dynTexture, setDynTexture] = useState(marbalTileTexture);
    const texture = useTexture(dynTexture);

    useEffect(() => {
        setDynTexture(fetchTexture(value));
    }, [value])

    return value == "None" ? "" : texture;
};
