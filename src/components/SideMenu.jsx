import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    width: "320px",
    height: "100%",
    position: "absolute",
    left: "0px",
    backgroundColor: "#253053",
  },
});

export default function SideMenu() {
  const classses = useStyles();
  return <div className={classses.sideMenu}>SideMenu</div>;
}
