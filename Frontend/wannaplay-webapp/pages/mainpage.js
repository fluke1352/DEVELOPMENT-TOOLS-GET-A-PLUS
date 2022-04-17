import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ModalUsername from "../components/modalUsername";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Home() {
  const [inputGameName, setInputGameName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [gameData, setGameData] = useState([]);
  const [games, setGames] = useState([]);
  const [category, setCategory] = useState("");
  const router = useRouter();

  useEffect(() => {
    getGames();
  }, [inputGameName, category]);

  //Fetch games data
  async function getGames() {
    try {
      setIsLoading(true);
      if (inputGameName.length < 1 && gameData.length < 1) {
        const response = await axios.get(
          "https://wannaplay-world-chat.herokuapp.com/api/game"
        );
        console.log(response)
        setGameData(response.data);
        setGames(response.data);
        setIsLoading(false);
      } else if (
        category !== "" &&
        inputGameName.length < 1 &&
        category !== "All"
      ) {
        console.log("filter category");
        setGames(filterByCategory());
        setIsLoading(false);
      } else if (inputGameName.length < 1 && gameData.length > 0) {
        setGames(gameData);
        setIsLoading(false);
      } else if (inputGameName.length > 0 && gameData.length > 0) {
        console.log("serching");
        setCategory("All");
        setGames(filterByName(filterByCategory()));
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //Filter by Name
  const filterByName = (filtered) => {
    if (filtered !== null) {
      const filteredCharacters = filtered.filter((data) => {
        const gameNameLower = data.name.toLowerCase();
        const InputGameNameLower = inputGameName.toLowerCase();
        return gameNameLower.includes(InputGameNameLower);
      });
      return filteredCharacters;
    } else {
      const filteredCharacters = gameData.filter((data) => {
        const gameNameLower = data.name.toLowerCase();
        const InputGameNameLower = inputGameName.toLowerCase();
        return gameNameLower.includes(InputGameNameLower);
      });
      return filteredCharacters;
    }
  };

  //Filter by Category
  const filterByCategory = () => {
    if (category === "All") {
      return gameData;
    } else {
      const filteredGame = gameData.filter((data) => {
        const gameCatagory = data.category;
        const selectCatagory = category;
        return gameCatagory.includes(selectCatagory);
      });
      return filteredGame;
    }
  };

  //Set stage inputGameName for Searching game
  const handleSearchGame = (event) => {
    setInputGameName(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  //Cards of game that availability
  const CardsGame = games.map((data, index) => (
    <Grid item={true} xs={6} sm={4} md={3} lg={2.4} key={index}>
      <Card
        sx={{ maxWidth: "100%", borderRadius: 3, borderColor: "primary.main" }}
        onClick={() => {
          // router.push("/SelectRoompage.js");
          router.push({
            pathname: "/SelectRoompage",
            // query: { gameName: gamename },
          });
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="290px"
            
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

  return (
    <Container maxWidth="lg" sx={{ my: "5vh" }}>
      {/* Modal */}
      <ModalUsername />

      {/* Search bar*/}
      {/* <form> */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems={"center"}
      >
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
        <FormControl
          style={{
            backgroundColor: "#FFF",
            borderRadius: 10,
            color: "gray",
            width: "12%",
            textAlign: "center",
            marginLeft: 10,
          }}
        >
          <InputLabel id="select-category-label">Category</InputLabel>
          <Select
            labelId="select-category-label"
            id="select-category"
            value={category}
            label="Category"
            onChange={handleChangeCategory}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"FPS"}>FPS</MenuItem>
            <MenuItem value={"Open World"}>Open World</MenuItem>
            <MenuItem value={"MOBA"}>MOBA</MenuItem>
            <MenuItem value={"MMORPG"}>MMORPG</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* </form> */}

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
            <div
              style={{display:"flex",alignItems:"center",justifyContent:"center", width:"100%"}}
            >
              <h1>Loading . . .</h1>
            </div>
        ) : (
          CardsGame
        )}
      </Grid>
    </Container>
  );
}
