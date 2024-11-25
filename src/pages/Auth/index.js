import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Typography, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

// import googleLogo from "../../assets/googleLogo.png";
import SignupView from "./SignupView";
import LoginView from "./LoginView";

// import {protectedRouteTest} from "../api/api";

const Auth = ({ messageOpen, setMessageOpen }) => {
  const navigate = useNavigate();

  // const user = useSelector((state) => state.user.user);
  const [loginSignupView, setLoginSignupView] = useState("login");

  // Toggle between login and signup views
  const handleToggleView = (view) => setLoginSignupView(view);

  // useEffect(() => {
  //   (async function () {
  //     const res = await protectedRouteTest();
  //     document.getElementById("protectionTest").innerHTML = JSON.stringify(res);
  //   })();
  // }, []);
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("3D-designerProfile"));
    if (loggedUser) {
      navigate("/DashboardPage");
    }
  }, []);

  // const google = () => {
  //   window.open(`${process.env.REACT_APP_BACKEND_BASE_URL}/userAuth/google/callback`, "_self", { withCredentials: true });
  // };

  // useEffect(() => {
  //     if (user.token) {
  //         navigate("/mytasks");
  //     }
  // }, [user]);

  return (
    <>
      <Container style={{ paddingTop: "110px" }} fixed>
        {/* <span id="protectionTest"></span> */}
        <Paper style={{ borderRadius: "15px" }} elevation={3} sx={{ marginRight: "20%", marginLeft: "20%" }}>
          <Box
            style={{ backgroundColor: "#e2e2e1", borderRadius: "12px", boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.87)" }}
            sx={{ padding: 8, display: "flex", textAlign: "center", flexDirection: "column" }}
          >
            <Grid container>
              <Grid item xs={12} sm={3} />
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Typography align="center" variant="h6" gutterBottom sx={{ paddingBottom: 6 }}>
                    <Button
                      onClick={() => handleToggleView("login")}
                      variant="contained"
                      style={{
                        borderRadius: "15px",
                        width: "100%",
                        color: loginSignupView === "signup" ? "black" : "white",
                        background: loginSignupView === "signup"
                          ? "none"
                          : "linear-gradient(155deg, rgba(21, 80, 113, 1)0%, rgba(101, 157, 189, 1)59%, rgba(101, 157, 189, 1)100%)",
                      }}
                    >
                      <span>Login</span>
                    </Button>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography align="center" variant="h6" gutterBottom sx={{ paddingBottom: 6 }}>
                    <Button
                      onClick={() => handleToggleView("signup")}
                      variant="contained"
                      style={{
                        borderRadius: "15px",
                        width: "100%",
                        color: loginSignupView !== "signup" ? "black" : "white",
                        background: loginSignupView !== "signup"
                          ? "none"
                          : "linear-gradient(155deg, rgba(21, 80, 113, 1)0%, rgba(101, 157, 189, 1)59%, rgba(101, 157, 189, 1)100%)",
                      }}
                    >
                      <span>Sign Up</span>
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3} />
            </Grid>
            <div>
              {loginSignupView === "signup" ? (
                <SignupView
                  messageOpen={messageOpen}
                  setMessageOpen={setMessageOpen}
                />
              ) : (
                <LoginView
                  messageOpen={messageOpen}
                  setMessageOpen={setMessageOpen}
                />
              )}
              {/* <hr style={{ marginTop: "22px", marginBottom: "22px" }} />
              <Button
                onClick={google}
                variant="outlined"
                sx={{
                  width: "260px",
                  borderRadius: "15px",
                  textTransform: "none",
                }}
              >
                <img style={{ width: "25px", paddingRight: "5px" }} src={googleLogo} />
                Continue with google
              </Button> */}
            </div>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Auth;
