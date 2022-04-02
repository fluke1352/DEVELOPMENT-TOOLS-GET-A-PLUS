import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import mockData from "../components/mockdata.json";
import ModalUsername from "../components/modalUsername";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

export default function Home() {
  const [inputGameName, setInputGameName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [allGame, setAllGame] = useState([]);
  const [err, setErr] = useState(false);
  const router = useRouter();

  //Fetch games data
  async function getGames() {
    try {
      setIsLoading(true);
      // This code comment to waiting for API get GameData ------------
      // if(inputGameName.length < 1 && games === null){
      // let res = await fetch("https://jsonplaceholder.typicode.com/users");
      // let data = await res.json();
      // setGames(data);
      // }
      if (inputGameName.length < 1) {
        setGames(mockData);
        setAllGame(mockData);
        setIsLoading(false);
      } else if (inputGameName.length > 0) {
        const filteredCharacters = allGame.filter((character) => {
          const gameNameLower = character.name.toLowerCase();
          const InputGameNameLower = inputGameName.toLowerCase();
          return gameNameLower.includes(InputGameNameLower);
        });
        setGames(filteredCharacters);
        setIsLoading(false);
      }
    } catch (e) {
      setErr(true);
      setErr(e);
    }
  }

  //Cards of game that availability
  const CardsGame = games.map((data, index) => (
    <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
      <Card
        sx={{ maxWidth: "100%", borderRadius: 3, borderColor: "primary.main" }}
        onClick={() => {
          // router.push("/SelectRoompage.js");
          const gamename = "VALORANT";
          router.push({
            pathname: "/SelectRoompage",
            // query: { gameName: gamename },
          });
        }}
      >
        {/* <Link href="https://www.facebook.com/"> */}
        <CardActionArea>
          <CardMedia
            component="img"
            height="290px"
            maxWidth="100%"
            objectFit="cover"
            image={data.img_url}
          />
          <CardContent sx={{ backgroundColor: "#2D333B" }}>
            <Typography
              variant="h7"
              component="div"
              bgcolor="#2D333B"
              color="#FFF"
            >
              {data.name.toUpperCase()}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* </Link> */}
      </Card>
    </Grid>
  ));

  //Set stage inputGameName for Searching game
  const handleSearchGame = (event) => {
    setInputGameName(event.target.value);
  };

  useEffect(() => {
    getGames();
  }, [inputGameName]);

  return (
    <Container maxWidth="lg" sx={{ my: "5vh" }}>
      {/* Modal */}
      <ModalUsername />

      {/* Search bar*/}
      <from>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <input
            id="game_name"
            type="text"
            value={inputGameName}
            onChange={handleSearchGame}
            placeholder="Search game"
            style={{
              backgroundColor: "#FFF",
              borderRadius: 10,
              color: "gray",
              width: "60%",
              border: "none",
              padding: 10,
              fontSize: "1.2rem",
              height: "4vh",
              textAlign: "center",
            }}
          />
        </Box>
      </from>

      {/* Card: Show game list*/}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        sx={{ mt: 2, mb: 1 }}
      >
        <div>
          <h1>Find your community</h1>
        </div>
      </Box>
      <Grid container spacing={4}>
        {isLoading ? (
          <>
            <Grid
              sx={{ textAlign: "center", alignItems: "center" }}
              item
              lg={12}
            >
              <h1>Loading . . .</h1>
            </Grid>
          </>
        ) : (
          CardsGame
        )}
      </Grid>
    </Container>
  );
}
