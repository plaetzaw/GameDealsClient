import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import { SnackbarClear } from "../redux/actions/actions";

export default function ErrorSnackbar() {
  const dispatch = useDispatch();

  const { errorSnackbarMessage, errorSnackbarOpen } = useSelector(
    (state) => state.ui
  );

  function handleClose() {
    dispatch(SnackbarClear());
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={errorSnackbarOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar">
          <Icon>check_circle</Icon>
          {errorSnackbarMessage}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <Icon>close</Icon>
        </IconButton>,
      ]}
    />
  );
}
