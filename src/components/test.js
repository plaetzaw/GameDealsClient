import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

export default function FullWidthGrid() {
  //   const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>xs=12</Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>xs=12 sm=6</Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>xs=12 sm=6</Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card>xs=6 sm=3</Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card>xs=6 sm=3</Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card>xs=6 sm=3</Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card>xs=6 sm=3</Card>
        </Grid>
      </Grid>
    </div>
  );
}
