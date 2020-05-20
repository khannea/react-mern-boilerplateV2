import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";

function LeftMenu(props) {
  return (
    <>
      <Grid
        item
        container
        alignContent="space-between"
        direction="row"
        spacing={2}
      >
        <Grid item>
          <Link to="/">
            <Typography variant="h5">Logo</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/uyyo">
            <Typography variant="h5">Home</Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

export default LeftMenu;
