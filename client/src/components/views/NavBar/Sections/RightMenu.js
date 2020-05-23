/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../../_actions/user_actions";

function RightMenu(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        dispatch(logoutUser()).then((response) => {
          window.localStorage.setItem("userId", undefined);
          props.history.push("/login");
        });

        localStorage.clear();
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  return (
    <>
      {user.userData && user.userData.isAuth && (
        <>
          <Grid
            item
            container
            alignContent="space-between"
            direction="row"
            spacing={2}
          >
            <Grid item>
              <Button onClick={logoutHandler}>
                <Typography variant="h5">Logout</Typography>
              </Button>
            </Grid>
          </Grid>
        </>
      )}

      {(!user.userData || !user.userData.isAuth) && (
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
      )}
    </>
  );
}

export default withRouter(RightMenu);
