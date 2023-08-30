import React, { useState } from "react";
import { Grid, Button, TextField, FormGroup, FormControlLabel, Checkbox, FormControl, InputLabel } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { createWall, updateWallDetails } from "../../../reduxStore/projects/projectSlice";
import { updateWall } from "../../../api/elementsApi";
import { ColorPicker } from '@wellbees/color-picker-input'
import TextureDropdown from "../components/textuiring/textureDropdown";

import wallTextureDetails from "../../../assets/textures/wallTextureList";
import WallsSubElements from "../components/wallSubElements/WallSubElements";



import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Walls = () => {
    const [colorValue, setColorValue] = useState('')
    const dispatch = useDispatch();

    const currentProjectDetails = useSelector((state) => state.projects.currentProjectDetails)

    const createNewWall = (e) => {
        e.preventDefault();
        if (currentProjectDetails?.elements?.Wall.length < 4 && currentProjectDetails?.elements?.Wall.length >= 0) {
            let newWall = {
                elementType: "Wall",
                material: "",
                color: "grey",
                visible: true,
                length: 0, // based on flooring/room dimention
                width: currentProjectDetails?.elements?.Wall[0]?.width ? currentProjectDetails?.elements?.Wall[0]?.width : 0.5,
                height: currentProjectDetails?.elements?.Wall[0]?.height ? currentProjectDetails?.elements?.Wall[0]?.height : 10,
                positionX: 0, // based on flooring/room dimention
                positionY: 0, // based on flooring/room dimention
                positionZ: 0, // based on flooring/room dimention
                subElements: []
            }
            dispatch(createWall({
                name: e.target.name, value: newWall
            }))
        }

    }

    const updateWallDetailsState = (name, value, i, e) => {
        if (e) {
            // e.preventDefault();
            e.stopPropagation()

        }

        let index = (i ? i : 0);
        dispatch(updateWallDetails({ name: name, value: value, index: index }));
    }

    const saveWallDetails = async (e) => {
        e.preventDefault(e);
        const result = await updateWall(currentProjectDetails?.elements.Wall, currentProjectDetails?._id);
        console.log("saveWallDetails result:::: ", result)
        if (result.statusText == "OK") {
            dispatch(updateWallDetails({ name: "wallArrayOnSave", value: result.data }));
        }

    }
    return (
        <>
            <Grid container>
                {currentProjectDetails?.elements?.Wall && (currentProjectDetails?.elements?.Wall.length > 0) &&
                    <>
                        {/* to get common height of the wall */}
                        <Grid item xs={12} sm={12} style={{ padding: "5px", }}>
                            <p style={{ margin: "0px", marginBottom: "10px" }}><b>Wall Attibutes</b></p>
                            <Grid container>
                                <Grid item xs={10.4}>
                                    <TextField
                                        required
                                        id="height"
                                        name="height"
                                        label="Height"
                                        fullWidth
                                        size="small"
                                        autoComplete="off"
                                        variant="outlined"
                                        value={currentProjectDetails?.elements?.Wall[0]?.height ? currentProjectDetails?.elements?.Wall[0]?.height : ""}
                                        onChange={(e) => updateWallDetailsState(e.target.name, e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={1.6} style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                                    <span>feet</span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </>
                }
                {currentProjectDetails?.elements?.Wall && (currentProjectDetails?.elements?.Wall.length > 0) && currentProjectDetails?.elements.Wall.map((Wall, i) => {
                    return <>
                        <Grid item xs={12} sm={12} style={{ padding: "5px", marginBottom: "8px", backgroundColor: "#e2e2e1" }}>

                            <Accordion>
                                <AccordionSummary
                                    style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                                        <span><b>Wall {i + 1}</b></ span>
                                        <span>
                                            <FormGroup>
                                                <FormControlLabel control={<Checkbox checked={Wall.visible} value={Wall.visible} name="visible" onChange={(e) => updateWallDetailsState(e.target.name, e.target.checked, i, e)} />} label="Show" />
                                            </FormGroup>
                                        </span>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <Grid item xs={12} style={{ padding: "10px" }}>
                                            <ColorPicker
                                                size="small"
                                                name="color"
                                                label="Wall Color"
                                                disabled={false}
                                                value={Wall.color}
                                                inputType="mui"
                                                fullWidth={true}
                                                onChange={(color) => updateWallDetailsState("color", color, i)}
                                            />
                                            <FormControl style={{ marginTop: "20px" }} fullWidth>
                                                <InputLabel id="demo-simple-select-label" >Wallpaper</InputLabel>
                                                <TextureDropdown name={"wallMaterial"} label={"Wallpaper"} textureList={wallTextureDetails} materialValue={currentProjectDetails?.elements?.Wall[i]?.material} index={i} textureChangeHandler={updateWallDetailsState} />
                                            </FormControl>
                                        </Grid>
                                        <WallsSubElements wallIndex={i} />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </>
                })}


                <Grid item xs={12} sm={12} style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                    {/* create new wall if not exists (max wall=4) */}
                    <Button
                        name="Wall"
                        onClick={(e) => {
                            createNewWall(e);
                        }}
                        variant="text"
                        sx={{
                            width: "260px",
                            borderRadius: "15px",
                        }}
                    >
                        Add wall
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                    {/* button to save changes to DB */}
                    <Button
                        onClick={(e) => {
                            saveWallDetails(e);
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
            </Grid >
        </>
    );
};

export default Walls;
