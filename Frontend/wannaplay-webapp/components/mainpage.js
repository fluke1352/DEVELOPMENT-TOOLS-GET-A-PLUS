import React, { useState, useEffect } from "react";

// import { FaSearch } from "react-icons/fa";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import mockData from "../components/mockdata.json";

export default function Home() {
  const [inputName, setInputName] = useState("");
  const [games, setGames] = useState([]);
  const [allGame, setAllGame] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setInputName(event.target.value);
  };

  async function getGames() {
    try {
      setIsLoading(true);
      // if(inputName.length < 1 && games === null){
      // let res = await fetch("https://jsonplaceholder.typicode.com/users");
      // let data = await res.json();
      // setGames(data);
      // }

      if (inputName.length < 1) {
        setGames(mockData);
        setAllGame(mockData);
        setIsLoading(false);
      } else if (inputName.length > 0) {
        const filteredCharacters = allGame.filter((character) => {
          const gameNameLower = character.name.toLowerCase();
          const InputNameLower = inputName.toLowerCase();
          return gameNameLower.includes(InputNameLower);
        });
        setGames(filteredCharacters);
        setIsLoading(false);
      }
    } catch (e) {
      setErr(true);
      setErr(e);
    }
  }

  useEffect(() => {
    getGames();
  }, [inputName]);

  const gameReady = games.map((data) => (
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

  return (
    <Container maxWidth="lg" sx={{ my: "50px" }}>
      {/* Search bar*/}
      <from>
        <Box display="flex" flexDirection="row" justifyContent="center">
          {/* <TextField
            size="small"
            sx={{
              bgcolor: "#FFF",
              borderRadius: 4,
              input: { color: "gray" },
              width: "60%",
              p: 1,
              borderColor: "none",
            }}
            id="outlined-textarea"
            placeholder="Search game"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                  <SearchIcon color="disabled" />
                  </IconButton>
                </InputAdornment>
              ),
            }} 
          /> */}
          <input
            id="game_name"
            type="text"
            autocomplete="game_name"
            value={inputName}
            onChange={handleChange}
            placeholder="Search game"
            style={{
              backgroundColor: "#FFF",
              borderRadius: 100,
              color: 'gray',
              width: "50%",
              border: "none",
              padding: 10,
              fontSize:'1.2rem',
              height:'2.5vh',
              textAlign:'center'
            }}
          />
          {/* <FaSearch/> */}
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
          gameReady
        )}
      </Grid>
    </Container>
  );
}
