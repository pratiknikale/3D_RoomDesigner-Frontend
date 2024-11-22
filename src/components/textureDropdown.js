import React from "react";
import { Select, MenuItem } from "@mui/material";

import fetchTexture from "../assets/textures/fetchTexture";

const textureDropdown = ({ name, materialValue, textureChangeHandler, textureList, label, index }) => {

    return (
        <>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name={name}
                value={materialValue ? materialValue : ""}
                label={label}
                onChange={(e) => textureChangeHandler(e.target.name, e.target.value, (index ? index : 0))}
            >
                <MenuItem style={{ display: "flex", justifyContent: "space-between" }} value={"None"}>
                    None
                </MenuItem>
                {textureList.map((material, i) => {
                    return <MenuItem style={{ display: "flex", justifyContent: "space-between" }} value={material.textureThumbnail}>
                        {material.materialName}
                        <img style={{
                            float: "right",
                            border: "solid",
                            borderWidth: "1px",
                            borderRadius: "10px"
                        }} src={fetchTexture(material.textureThumbnail)} height="25" width="100" alt="materialImage"></img>
                    </MenuItem>
                })}
            </Select>
        </>
    );
};

export default textureDropdown;
