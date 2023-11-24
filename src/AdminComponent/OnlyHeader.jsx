import * as React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import posImage from "./12.png";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Notice</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
         Dear Student, Your registration can be cancelled without
          registration and tuition fee Payment. It is mandatory to pay your
          registration and tuition fees.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const drawerWidth = 240;

const theme = createTheme({
  // Define a theme with 'fontWeightBold'
  typography: {
    fontWeightBold: 700, // Adjust the value as needed
  },
});

function OnlyHeader(props) {
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleIconClick = () => {
    navigate("/studentHome");
    setModalShow(true);
  };

  const handleClick = () => {
    navigate("/studentDetail");
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <img
          style={{ width: "50px", height: "50px", marginLeft: "60px" }}
          src="https://static.vecteezy.com/system/resources/previews/000/497/070/original/male-student-icon-design-vector.jpg"
          alt=""
          onClick={handleIconClick}
        />
      </List>
      <Divider />
      <List>
        <img
          style={{ width: "50px", height: "50px", marginLeft: "60px" }}
          src="https://cdn3.iconfinder.com/data/icons/line/36/folder_add-256.png"
          alt=""
          onClick={handleClick}
        />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: "100%",
              zIndex: (theme) => theme.zIndex.drawer + 1,
              backgroundColor: "#2196F3",
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{ height: "50px", width: "50px", marginRight: "20px" }}
                  src={posImage}
                  alt=""
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    flexGrow: 1,
                    textShadow: "2px 2px 5px red",
                  }}
                >
                  Sri Satya Sai University Of Technology And Medical Sciences
                  (SSSUTMS)
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
       
       
        </Box>
        {/*/////////////////////modal//////////////////////*/}
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ThemeProvider>
    </>
  );
}

OnlyHeader.propTypes = {
  window: PropTypes.func,
};

export default OnlyHeader;
