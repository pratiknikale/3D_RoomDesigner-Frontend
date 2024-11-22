import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { setLoggedUser } from "../../reduxStore/user/userSlice";
import DashboardHead from "./dashboardHead";
import DashboardTable from "./dashboardTable";
import NewProject from "./newProjectDashboard";

const DashboardPage = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user);
    const [newProj, setNewProj] = useState(false);

    const [searchValue, setSearchValue] = useState('');
    const placeholder = 'Search Project';

    useEffect(() => {
        let currentIndex = 0;
        const timeoutId = setTimeout(function addLetter() {
            if (currentIndex < placeholder.length) {
                setSearchValue(prevValue => prevValue + placeholder[currentIndex]);
                currentIndex++;
                setTimeout(addLetter, 50);
            } else {
                setSearchValue(placeholder); // Set the searchValue to the full placeholder text
            }
        }, 50);

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        if (!user?.result?.email) {
            const localStorageProfile = localStorage.getItem("3D-designerProfile");
            if (localStorageProfile) {
                dispatch(setLoggedUser(JSON.parse(localStorageProfile)));
            }
        }
    }, []);
    return (
        <>
            <Container style={{ paddingTop: "90px", width: "100%", height: "100%", paddingBottom: "25px", boxSizing: "border-box" }} fluid>
                <Box style={{ backgroundColor: "#e2e2e1", width: "100%", height: "100%", padding: "0px", margin: "0px", boxSizing: "border-box" }}>
                    <DashboardHead newProj={newProj} setNewProj={setNewProj} searchValue={searchValue} />
                    {!newProj ?
                        <DashboardTable />
                        :
                        <NewProject setNewProj={setNewProj} />
                    }
                </Box>
            </Container>
        </>
    );
};

export default DashboardPage;
