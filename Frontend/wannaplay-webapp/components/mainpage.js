import React, { useState, useEffect } from "react";
import mockData from "../components/mockdata.json";
import ModalUsername from "./modalUsername";
import { useSelector, useDispatch } from "react-redux";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export default function Home() {
  const [inputGameName, setInputGameName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [allGame, setAllGame] = useState([]);
  const [err, setErr] = useState(false);

  //Fetch games data
  async function getGames() {
    try {
      setIsLoading(true);
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
  const CardsGame = games.map((data) => (
    <Grid item xs={2.4}>
      <Card
        sx={{ maxWidth: "100%", borderRadius: 3, borderColor: "primary.main" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300px"
            width="10%"
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
      </Card>
    </Grid>
  ));

  //Set stage inputGameName for Searching game
  const handleSearchGame = (event) => {
    setInputGameName(event.target.value);
  };

  //Get user name from store of Redux
  const getUsrname = useSelector((state) => state.usrname.username);

  useEffect(() => {
    getGames();
  }, [inputGameName, getUsrname]);

  return (
    <Container maxWidth="lg" sx={{ my: "50px" }}>
      
      {/* Modal */}
      <ModalUsername />
      {/* USER NAME CHECK */}
      <h1>{getUsrname}</h1>
      {/* Search bar*/}
      <from>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <input
            id="game_name"
            type="text"
            autocomplete="game_name"
            value={inputGameName}
            onChange={handleSearchGame}
            placeholder="Search game"
            style={{
              backgroundColor: "#FFF",
              borderRadius: 100,
              color: "gray",
              width: "50%",
              border: "none",
              padding: 10,
              fontSize: "1.2rem",
              height: "2.5vh",
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
              xs={12}
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
