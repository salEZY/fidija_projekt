import React from "react";
import { Box } from "@mui/material";

const headerStyle = {
  width: "100%",
  height: "10vh",
  display: "flex",
  flexDirection: "column",
  color: "white",
};

const flex = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
};

const infoStyle = {
  ...flex,
  height: "7vh",
  background: "#3f3f3f",
};

const navStyle = {
  ...flex,
  height: "3vh",
  background: "#3c948b",
};

const Header = () => {
  return (
    <Box sx={headerStyle}>
      <Box sx={infoStyle}>NAV</Box>
      <Box sx={navStyle}>NAV</Box>
    </Box>
  );
};

export default Header;
