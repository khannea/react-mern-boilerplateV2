/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@material-ui/core";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography, Grid } from "@material-ui/core";

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
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
            <Link to="/login">
              <Typography variant="h5">Sign In</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/register">
              <Typography variant="h5"> Sign Up</Typography>
            </Link>
          </Grid>
        </Grid>
      </>
    );
  } else {
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
            <Link onClick={logoutHandler}>
              <Typography variant="h5">Logout</Typography>
            </Link>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withRouter(RightMenu);
