import React from "react";
import { Grid, Button, TextField, FormControl, InputLabel } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { updateFloorDetails } from "../../../reduxStore/projects/projectSlice";
import { updateFloor } from "../../../api/elementsApi";
import TextureDropdown from "../../../components/textureDropdown";
import floorTextureDetails from "../../../assets/textures/floorTextureList";

const Flooring = () => {
    const dispatch = useDispatch();
    const elements = useSelector((state) => state.projects.currentProjectDetails.elements)

    const updateFloorDetailsState = (name, value, i) => {
        // e.preventDefault();
        dispatch(updateFloorDetails({ name: name, value: value }))
    }

    const saveFloorDetails = async (e) => {
        e.preventDefault(e);
        await updateFloor(elements?.Floor?._id, elements?.Floor?.length, elements?.Floor?.width, elements?.Floor?.material);
    }
    return (
        <>
            <Grid container>
                <p style={{ margin: "0px", marginBottom: "10px" }}><b>Dimensions :</b></p>
                <Grid container>
                    <Grid item xs={5} style={{ padding: "10px" }}>
                        <TextField
                            required
                            id="length"
                            name="length"
                            label="Length"
                            fullWidth
                            size="small"
                            autoComplete="off"
                            variant="outlined"
                            value={elements?.Floor?.length ? elements.Floor.length : ""}
                            onChange={(e) => updateFloorDetailsState(e.target.name, e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={0.4} style={{ padding: "0px", display: "flex", justifyContent: "center", alignItems: "center" }}><span>X</span></Grid>
                    <Grid item xs={5} style={{ padding: "10px" }}>
                        <TextField
                            required
                            id="width"
                            name="width"
                            label="Width"
                            fullWidth
                            size="small"
                            autoComplete="off"
                            variant="outlined"
                            value={elements?.Floor?.width ? elements.Floor.width : ""}
                            onChange={(e) => updateFloorDetailsState(e.target.name, e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={1.6} style={{ padding: "0px", display: "flex", justifyContent: "center", alignItems: "center" }}><span>Feet</span></Grid>
                </Grid>
                <p style={{ margin: "0px", marginBottom: "10px" }}><b>Flooring :</b></p>
                <Grid container>
                    <Grid item xs={12} style={{ padding: "10px" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" >Floor Material</InputLabel>
                            <TextureDropdown name={"floorMaterial"} label={"Floor Material"} textureList={floorTextureDetails} materialValue={elements?.Floor?.material} textureChangeHandler={updateFloorDetailsState} />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                    <Button
                        onClick={(e) => {
                            saveFloorDetails(e);
                        }}
                        variant="contained"
                        sx={{
                            width: "260px",
                            borderRadius: "15px",
                            color: "white",
                            background:
                                "linear-gradient(155deg, rgba(21, 80, 113, 1)0%, rgba(101, 157, 189, 1)59%, rgba(101, 157, 189, 1)100%)",
                        }}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Flooring;
