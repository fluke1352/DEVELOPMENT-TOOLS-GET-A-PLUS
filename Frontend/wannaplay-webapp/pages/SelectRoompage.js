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
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { bgcolor } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function SelectRoompage(query) {
  const [gameName, setGameName] = useState("Valorant");
  const [gameDescript, setGameDescript] = useState(
    "Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life."
  );
  const [gameBanner, setGameBanner] = useState(
    "https://via.placeholder.com/180x250"
  );

  //Mock up rooms data
  const obj = [
    {
      roomUser: [1, 2, 3, 4],
      roomSize: 4,
      roomName: "😀 หาทีมสบายๆ เล่นชิวๆ 😍 ",
    },
    {
      roomUser: [1, 2, 3, 4, 5, 6, 7],
      roomSize: 10,
      roomName: "💥เก่งจริงก็มา 1-1 ดิวะ",
    },
    {
      roomUser: [1, 2],
      roomSize: 5,
      roomName: "หาคนของใจ เน้นสาวๆ 💞💞💞 ",
    },
    {
      roomUser: [],
      roomSize: 15,
      roomName: "คนทีมซ้อมแข่งครับ 😎😎",
    },
    {
      roomUser: [1, 2, 3, 4],
      roomSize: 4,
      roomName: "😀 หาทีมสบายๆ เล่นชิวๆ 😍 ",
    },
    {
      roomUser: [1],
      roomSize: 10,
      roomName: "💥เก่งจริงก็มา 1-1 ดิวะ",
    },
    {
      roomUser: [1, 2],
      roomSize: 5,
      roomName: "หาคนของใจ เน้นสาวๆ 💞💞💞 ",
    },
    {
      roomUser: [1, 2],
      roomSize: 15,
      roomName: "คนทีมซ้อมแข่งครับ 😎😎",
    },
  ];

  // const AlertBox = (
  //   <Stack sx={{ width: "100%" }} spacing={2}>
  //     <Alert severity="error">{`Room "${data.roomName}" is full.`}</Alert>
  //     <Alert severity="success">{`Connecting ${data.roomName} . . `}</Alert>
  //   </Stack>
  // );

  const RoomsCard = obj.map((data, index) => {
    const checkConnectRoom = (data) => {
      if (data.roomUser.length === data.roomSize) {
        alert(`Room "${data.roomName}" is full.`);
      } else {
        alert(`Connecting "${data.roomName}" room.`);
      }
    };

    return (
      <Grid
        item
        key={index + "" + data.roomSize}
        xs={12}
        sm={6}
        md={6}
        lg={6}
        sx={{ borderRadius: 4 }}
      >
        <Card
          fullWidth
          sx={{
            borderRadius: 5,
            border: 1,
            borderColor: "#444C56",
          }}
          // onClick={() => {
          //   router.push("");
          // }}

          //Check can join room OR room full
          onClick={() => checkConnectRoom(data)}
        >
          <CardActionArea>
            <CardContent sx={{ backgroundColor: "#22272E", color: "white" }}>
              {/* Room name */}
              <Box
                fullWidth
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 1,
                  pl: 2,
                  m: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography fontSize={"1.2rem"}>{data.roomName}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <PeopleAltIcon />
                  <Typography fontSize={"1.2rem"} sx={{ ml: 1 }}>
                    {`${data.roomUser.length}/${data.roomSize}`}
                  </Typography>
                </Box>
              </Box>
              {/* Number users in room */}
              <Box
                fullWidth
                sx={{
                  display: "grid",
                  m: 1,
                  mt: 1,
                }}
              >
                <List dense={true}>
                  {data.roomUser.map((user, index) => {
                    const labelId = `username-list-label-${index}`;
                    return (
                      <ListItem key={index}>
                        <ListItemText
                          color="red"
                          labelId={labelId}
                          primary={`USER ${user + 1}`}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

  return (
    <Container maxWidth="lg" sx={{ my: "10vh" }}>
      {/* Contents Game detail and Create new room*/}
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 6 }}
        rowSpacing={{ xs: 2, sm: 2, md: 4, lg: 5 }}
        sx={{ my: 5 }}
      >
        {/*Game Description */}
        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ borderRadius: 4 }}>
          <Grid
            container
            fullWidth
            sx={
              {
                // borderRadius: 3,
                // border: 1,
                // borderColor: "#444C56",
              }
            }
            columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
          >
            {/* Picture game banner */}
            <Grid item xs={6} sm={5} md={4} lg={4} sx={{}}>
              <img
                src={gameBanner}
                srcSet={gameBanner}
                // alt={item.title}
                loading="lazy"
                height="270vh"
                width="100%"
                objectFit="cover"
              />
            </Grid>
            {/* Game name and Description */}
            {console.log(query.gameName + "!!!!")}
            <Grid item xs={6} sm={7} md={8} lg={8} my={2}>
              <Typography variant="h5" mb={2} fontWeight={"20px"}>
                {gameName}
              </Typography>
              <Typography variant="p" fontSize={"1rem"}>
                {gameDescript}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Create new room card */}
        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ borderRadius: 4 }}>
          <Card
            fullWidth
            sx={{
              borderRadius: 3,
              border: 1,
              borderColor: "#347D39",
            }}
            onClick={() => alert(`Creating new room.`)}
          >
            <CardActionArea>
              <CardContent
                sx={{
                  backgroundColor: "#22272E",
                  color: "white",
                  textAlign: "center",
                  py: "7vh",
                  // py: 10
                }}
              >
                <AddIcon sx={{ fontSize: 50, color: "#347D39" }} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      {/* Rooms list */}
      <Grid
        container
        sx={{ justifyContent: "space-between" }}
        columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 6 }}
        rowSpacing={{ xs: 3, sm: 2, md: 4, lg: 4 }}
      >
        {/* Room item */}
        {RoomsCard}
      </Grid>
    </Container>
  );
}
