import React, { useState } from "react";
import { Grid, Button, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateWallDetails, updateWallElement } from "../../../../reduxStore/projects/projectSlice";


import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
                length: 1,
                width: 3,
                height: 6,
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                subElements: []
            }

            dispatch(updateWallDetails({ name: "newWallElement", value: newWallElement, index: wallIndex }))
        }
    }

    const updateSubElement = (e, value, name, index) => {
        dispatch(updateWallElement({ name: name, value: value, index: index, wallIndex: wallIndex }))
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
                            <Grid item xs={12} sm={12} style={{ padding: "5px", marginBottom: "8px", backgroundColor: "#e2e2e1" }}>

                                <Accordion>
                                    <AccordionSummary
                                        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                                            <span><b>{subElement.elementType}
                                                {/* -{i + 1} */}
                                                :</b></ span>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails style={{ padding: "5px" }}>
                                        <Typography>
                                            <Grid item xs={12}>

                                                <p style={{ margin: "0px" }}><b>Dimensions :</b></p>
                                                <Grid style={{ marginBottom: "10px" }} container>
                                                    <Grid item xs={5} style={{ padding: "10px" }}>
                                                        <TextField
                                                            required
                                                            id="height"
                                                            name="height"
                                                            label="Height"
                                                            type="number"
                                                            fullWidth
                                                            size="small"
                                                            autoComplete="off"
                                                            variant="outlined"
                                                            value={subElement.height}
                                                            onChange={(e) => updateSubElement(e, e.target.value, e.target.name, i)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={0.4} style={{ padding: "0px", display: "flex", justifyContent: "center", alignItems: "center" }}><span>X</span></Grid>
                                                    <Grid item xs={5} style={{ padding: "10px" }}>
                                                        <TextField
                                                            required
                                                            id="width"
                                                            name="width"
                                                            label="Width"
                                                            type="number"
                                                            fullWidth
                                                            size="small"
                                                            autoComplete="off"
                                                            variant="outlined"
                                                            value={subElement.width}
                                                            onChange={(e) => updateSubElement(e, e.target.value, e.target.name, i)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={1.6} style={{ padding: "0px", display: "flex", justifyContent: "center", alignItems: "center" }}><span>Feet</span></Grid>
                                                </Grid>
                                                <p style={{ margin: "0px" }}><b>Positions :</b></p>
                                                <Grid style={{ marginBottom: "10px" }} container>
                                                    <Grid item xs={4} style={{ padding: "0px", display: "flex", justifyContent: "center", alignItems: "center" }}><span>X-Axis: </span></Grid>
                                                    <Grid item xs={6.4} style={{ padding: "0px" }}>
                                                        <TextField
                                                            required
                                                            id="positionX"
                                                            name="positionX"
                                                            // label="X-Axis"
                                                            type="number"
                                                            fullWidth
                                                            size="small"
                                                            autoComplete="off"
                                                            variant="outlined"
                                                            value={subElement.positionX}
                                                            onChange={(e) => updateSubElement(e, e.target.value, e.target.name, i)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={1.6} style={{ padding: "0px", display: "flex", justifyContent: "center", alignItems: "center" }}><span>Feet</span></Grid>
                                                </Grid>
                                                <Grid style={{ marginBottom: "10px" }} container>
                                                    <Grid item xs={4} style={{ padding: "0px", display: "flex", justifyContent: "center", alignItems: "center" }}><span>Y-Axis: </span></Grid>
                                                    <Grid item xs={6.4} style={{ padding: "0px" }}>
                                                        <TextField
                                                            required
                                                            id="positionY"
                                                            name="positionY"
                                                            // label="Y-Axis"
                                                            type="number"
                                                            fullWidth
                                                            size="small"
                                                            autoComplete="off"
                                                            variant="outlined"
                                                            disabled={subElement.elementType === "Door" ? true : false}
                                                            value={subElement.positionY}
                                                            onChange={(e) => updateSubElement(e, e.target.value, e.target.name, i)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={1.6} style={{ padding: "0px", display: "flex", justifyContent: "center", alignItems: "center" }}><span>Feet</span></Grid>
                                                </Grid>
                                                <Button
                                                    // onClick={(e) => createSubElement(e)}
                                                    variant="contained"
                                                    color="secondary"
                                                    sx={{
                                                        borderRadius: "15px",
                                                        float: "right",
                                                        marginTop: "10px",
                                                        marginBottom: "10px"
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </Grid>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        </>
                    })}
            </Grid>
        </>
    );
};

export default WallsSubElements;
