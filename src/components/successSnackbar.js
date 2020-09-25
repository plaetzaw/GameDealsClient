import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Icon } from "@material-ui/core";
import { SnackbarClear } from "../redux/actions/actions";

export default function SuccessSnackbar() {
  const dispatch = useDispatch();

  const { successSnackbarMessage, successSnackbarOpen } = useSelector(
    (state) => state.ui
  );

  function handleClose() {
    dispatch(SnackbarClear);
  }

  return (
    <Snackbar
      style={{ backgroundColor: "green" }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={successSnackbarOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar">
          <CheckCircleIcon />

          {successSnackbarMessage}
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
