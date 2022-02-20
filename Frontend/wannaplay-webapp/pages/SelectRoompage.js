import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import mockData from "../components/mockdata.json";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
// import Button from "@mui/material/Button";

export default function SelectRoompage() {
  return (
    <Container maxWidth="lg" sx={{ my: "10vh" }}>
      {/* Contents Game detail and Create new room*/}
      <Grid container></Grid>
      {/* Rooms list */}
      <Grid container sx={{ justifyContent: "space-between" }}>
        {/* Room item */}
          <Grid item bgcolor="pink" xs={5}>
            {/* Room name */}
            <Box
              fullWidth
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 1,
                m: 1,
                bgcolor: "red",
                borderRadius: 1,
              }}
            >
              <Box>
                <h3>Room name</h3>
              </Box>
              <Box>
                <h3>?/?</h3>
              </Box>
            </Box>
            {/* Number users in room */}
            <Box
              fullWidth
              sx={{
                display: "grid",
                // justifyContent: "space-between",
                p: 1,
                m: 1,
                mt: 2,
                bgcolor: "red",
                borderRadius: 1,
              }}
            >
              <il> name1</il>
              <il> name1</il>
              <il> name1</il>
            </Box>
          </Grid>
      </Grid>
    </Container>
  );
}
