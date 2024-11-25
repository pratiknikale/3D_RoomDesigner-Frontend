import React, { useState } from "react";
import { Button, Grid, TextField, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";

import { loginFieldHandler, loginSubmit } from "../../handlers/authHandlers";

const loginFormFields = {
    Email: "",
    Password: "",
};

const LoginView = ({ messageOpen, setMessageOpen }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState(loginFormFields);
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Grid container spacing={3}>
                {/* login Container */}
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
                        value={loginData.Email}
                        onChange={(e) => loginFieldHandler(e, loginData, setLoginData)}
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
                        value={loginData.Password}
                        onChange={(e) => loginFieldHandler(e, loginData, setLoginData)}
                    />
                </Grid>

                <Grid item xs={12} sm={12} style={{ paddingTop: "8px" }}>
                    <Link href="#" underline="hover">
                        Forgot Password*
                    </Link>
                </Grid>
                <Grid item xs={12} sm={12} />
                <Grid item xs={12} sm={12} style={{ display: "flex", justifyContent: "center" }}>

                    <Button
                        onClick={(e) => { loginSubmit(e, loginData, messageOpen, setMessageOpen, navigate, dispatch, setLoading); }}
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
                        Log in
                    </Button>

                </Grid>
            </Grid>
        </>
    );
};

export default LoginView;
