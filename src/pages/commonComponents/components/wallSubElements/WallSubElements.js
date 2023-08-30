import React, { useState } from "react";
import { Grid, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateWallDetails } from "../../../../reduxStore/projects/projectSlice";



const WallsSubElements = ({ wallIndex }) => {
    const [selectedWallElement, setSelectedWallElement] = useState(null);
    const dispatch = useDispatch();

    const currentProjectDetails = useSelector((state) => state.projects.currentProjectDetails);


    const createSubElement = (e) => {
        if (!null) {
            e.preventDefault();
            let newWallElement = {
                elementType: selectedWallElement,
                material: "",
                color: "",
                visible: true,
                length: 0, // based on flooring/room dimention
                width: 1,
                height: 1,
                positionX: 0, // based on flooring/room dimention
                positionY: 0, // based on flooring/room dimention
                positionZ: 0, // based on flooring/room dimention
                subElements: []
            }

            dispatch(updateWallDetails({ name: "newWallElement", value: newWallElement, index: wallIndex }))
        }
    }

    return (
        <>
            <Grid item xs={12} sm={12} style={{ padding: "5px", marginBottom: "5px", backgroundColor: "#e2e2e1" }}>
                <p style={{
                    margin: "0px", backgroundColor: "#cccccc", padding: "10px", paddingRight: "0px", display: "flex", justifyContent: "space-between", alignItems: "center"
                }}>
                    <span><b>Wall Elements</b></ span>
                </p>
                <Grid item xs={12} style={{ padding: "10px", display: "flex" }}>
                    <FormControl style={{}} fullWidth>
                        <InputLabel id="demo-simple-select-label" >Element Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="Element Type"
                            value={selectedWallElement}
                            label="Wall Elements"
                            onChange={(e) => setSelectedWallElement(e.target.value)}
                        >
                            <MenuItem style={{ display: "flex", justifyContent: "space-between" }} value={"Door"}>
                                Door
                            </MenuItem>
                            <MenuItem style={{ display: "flex", justifyContent: "space-between" }} value={"Window"}>
                                Window
                            </MenuItem>

                        </Select>
                    </FormControl>
                    <Button
                        onClick={(e) => createSubElement(e)}
                        variant="contained"
                        sx={{
                            borderRadius: "15px",
                            color: "white",
                            background:
                                "linear-gradient(155deg, rgba(21, 80, 113, 1)0%, rgba(101, 157, 189, 1)59%, rgba(101, 157, 189, 1)100%)",
                        }}
                    >
                        Add
                    </Button>
                </Grid>
                {(currentProjectDetails?.elements?.Wall[wallIndex]?.subElements?.length > 0)
                    &&
                    currentProjectDetails?.elements?.Wall[wallIndex]?.subElements?.map((subElement, i) => {
                        return <>
                            <p>{subElement.elementType}</p>
                        </>
                    })}
            </Grid>
        </>
    );
};

export default WallsSubElements;
