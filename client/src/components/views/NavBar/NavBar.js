import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { AppBar, Grid } from "@material-ui/core";
import { Container, Button } from "@material-ui/core";
import { Paper, Typography, Toolbar } from "@material-ui/core";
import SubdirectoryArrowRightIcon from "@material-ui/icons/SubdirectoryArrowRight";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <LeftMenu />
          </Grid>
          <Grid item>
            <RightMenu />
          </Grid>
        </Grid>

        <Button color="primary" onClick={showDrawer}>
          <SubdirectoryArrowRightIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
