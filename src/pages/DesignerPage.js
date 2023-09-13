import React, { useEffect } from "react";
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector, useDispatch } from "react-redux";
import { setLoggedUser } from "../reduxStore/user/userSlice";
import { setCurrentProjectDetails } from "../reduxStore/projects/projectSlice";
import { useParams } from "react-router-dom";
import { getSelectedProjDetails } from "../api/projectApi";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Main3Dmodal from "./threeDcomponents/Main3Dmodal";
import Flooring from "./commonComponents/elementPanelsComponents/Flooring";
import Walls from "./commonComponents/elementPanelsComponents/Walls";

const DesignerPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.user.user);

  const getProjectDetails = async (id) => {
    const details = await getSelectedProjDetails(id);
    dispatch(setCurrentProjectDetails(details.data));
    // console.log(details)
  }
  useEffect(() => {
    if (!user.email) {
      const localStorageProfile = localStorage.getItem("3D-designerProfile");
      if (localStorageProfile) {
        dispatch(setLoggedUser(JSON.parse(localStorageProfile)));
      }
    }
    getProjectDetails(id)

    return () => {
      dispatch(setCurrentProjectDetails({}));
    }
  }, []);
  return (
    <>
      <Grid container style={{ backgroundColor: "#e2e2e1", width: "100%", height: "100%", padding: "8px", paddingTop: "74px", boxSizing: "border-box" }}>
        <Grid item style={{
          // backgroundColor: "red",
          height: "100%",
          borderStyle: "solid",
          borderRadius: "5px",
          borderWidth: "thin",
          borderColor: "grey",
          backgroundColor: "#2d2d2d",
          padding: "5px"
        }} xs={8.3}>
          <Canvas shadows>
            <Suspense fallback={null}>
              <Main3Dmodal />
            </Suspense>
          </Canvas>
        </Grid>
        <Grid item style={{
          height: "100%",
          borderStyle: "solid",
          borderRadius: "5px",
          borderWidth: "thin",
          borderColor: "grey",
          backgroundColor: "#f1f1f1",
          padding: "5px", overflowX: "hidden", overflowY: "auto"
        }} xs={3.7}>
          <Accordion>
            <AccordionSummary
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Flooring/Room Dimension</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: "5px" }}>
              <Flooring />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Walls</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: "5px" }}>
              <Walls />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: "5px" }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: "5px" }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: "5px" }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: "5px" }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </Grid>
      </Grid>
    </>
  );
};

export default DesignerPage;
