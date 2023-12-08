import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <Box className={classes.info}>
        <h1 className={classes.h1} onClick={() => navigate("/")}>
          FIDIJA <span className={classes.span}>projekt</span>
        </h1>
        <input
          type="text"
          className={classes.search}
          placeholder="Search Shows and People"
        />
        <div className={classes.auth}>
          <p className={classes.authLink}>LOGIN</p>
          <p className={classes.authLink}>REGISTER</p>
        </div>
      </Box>
      <Box className={classes.nav}>
        <nav>
          <ul style={{ flexDirection: "row" }}>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/schedule")}>Schedule</li>
            <li onClick={() => navigate("/shows")}>Shows</li>
          </ul>
        </nav>
      </Box>
    </header>
  );
};

export default Header;
