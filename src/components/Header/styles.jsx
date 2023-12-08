import { makeStyles } from "@mui/styles";

const flex = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
};

const headerStyle = {
  width: "100%",
  height: "10vh",
  display: "flex",
  flexDirection: "column",
  color: "white",
};

const infoStyle = {
  ...flex,
  justifyContent: "space-around",
  minHeight: "7vh",
  background: "#3f3f3f",
};

const navStyle = {
  ...flex,
  minHeight: "3vh",
  background: "#3c948b",
};

const h1Style = {
  fontStyle: "italic",
  cursor: "pointer",
  color: "#3c948b",
};
const spanStyle = {
  fontStyle: "normal",
  fontSize: 16,
  color: "white",
};

const searchStyle = {
  outline: 0,
  padding: 10,
  width: 500,
  border: "1px solid white",
  borderRadius: 20,
};

const authStyle = {
  display: "flex",
  flexDirection: "row",
};

const authLinkStyle = {
  fontSize: "1.25rem",
  margin: "0 10px",
  cursor: "pointer",
  transition: "all 200ms ease-in",
  "&:hover": {
    color: "#3c948b",
  },
};

export const useStyles = makeStyles({
  header: headerStyle,
  info: infoStyle,
  nav: navStyle,
  h1: h1Style,
  span: spanStyle,
  search: searchStyle,
  auth: authStyle,
  authLink: authLinkStyle,
});
