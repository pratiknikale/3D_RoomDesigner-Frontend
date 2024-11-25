import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";

import { signinFieldHandler, submitSignup } from "../../handlers/authHandlers";

const signupFormFields = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
};

const SignupView = ({ messageOpen, setMessageOpen }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signupData, setSignupData] = useState(signupFormFields);
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Grid container spacing={3}>
                {/* signUp Container */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="FirstName"
                        label="First Name"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: 3, border: "1px solid #e2e2e1" } }}
                        value={signupData.FirstName}
                        onChange={(e) => signinFieldHandler(e, signupData, setSignupData)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="LastName"
                        label="Last Name"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: 3, border: "1px solid #e2e2e1" } }}
                        value={signupData.LastName}
                        onChange={(e) => signinFieldHandler(e, signupData, setSignupData)}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="emailID"
                        name="Email"
                        label="Email"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: 3, border: "1px solid #e2e2e1" } }}
                        value={signupData.Email}
                        onChange={(e) => signinFieldHandler(e, signupData, setSignupData)}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="password"
                        name="Password"
                        label="Password"
                        type="password"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: 3, border: "1px solid #e2e2e1" } }}
                        value={signupData.Password}
                        onChange={(e) => signinFieldHandler(e, signupData, setSignupData)}
                    />
                </Grid>
                <Grid item xs={12} sm={12} />
                <Grid item xs={12} sm={12} style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        onClick={(e) => {
                            submitSignup(e, signupData, messageOpen, setMessageOpen, navigate, dispatch, setLoading);
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
                        <ClipLoader
                            color='white'
                            radius={5}
                            height={10}
                            width={3}
                            size={20}
                            loading={loading}
                            cssOverride={{ padding: "0px", margin: "0px", marginRight: "10px" }}
                        />

                        Sign up
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default SignupView;
