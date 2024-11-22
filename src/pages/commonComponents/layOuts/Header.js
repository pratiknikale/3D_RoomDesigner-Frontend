import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../handlers/authHandlers";

import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const user = useSelector((state) => state.user.user);
  const projectName = useSelector((state) => state.projects.currentProjectDetails.projectName)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [anchor, setAnchor] = React.useState(false);

  const handleMenu = (e) => {
    setAnchor(true);
  };

  const handleClose = () => {
    setAnchor(false);
  };

  const handleDashboard = () => {
    setAnchor(false);
    navigate("/DashboardPage")
  }

  // React.useEffect(() => {
  //   console.log("locationheader:::: ", location.pathname.split("/")[1] == "DesignerPage")
  // }, [location])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "#e2e2e1", color: "black" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            3DHomeDesigner {location.pathname.split("/")[1] == "DesignerPage" && <span style={{ fontSize: "16px", fontWeight: "400" }}>/ {projectName}</span>}
          </Typography>

          {user?.result?.email && (
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <span onClick={(e) => handleMenu(e)}>{user?.result?.firstName} {user?.result?.lastName}</span>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(e) => handleMenu(e)}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchor}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={anchor}
                onClose={(e) => handleClose(e)}
              >
                <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
                <MenuItem onClick={(e) => handleClose(e)}>My account</MenuItem>
                <MenuItem onClick={(e) => {
                  setAnchor(false);
                  logout(e, dispatch, navigate)
                }}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
