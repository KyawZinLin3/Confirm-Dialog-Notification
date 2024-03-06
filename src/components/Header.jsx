import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
} from "@mui/material";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item sm={4} style={{ border: "1px solid #fff" }}>
            <InputBase></InputBase>
          </Grid>
          <Grid item sm={8} style={{ border: "1px solid #000" }}>
            <IconButton>
              <Badge>
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
