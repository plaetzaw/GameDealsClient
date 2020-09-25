import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import { Icon } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { SnackbarClear } from "../redux/actions/actions";
import ErrorIcon from "@material-ui/icons/Error";

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
      autoHideDuration={400}
      onClose={handleClose}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar">
          <ErrorIcon />
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
          <Icon>X</Icon>
        </IconButton>,
      ]}
    />
  );
}
