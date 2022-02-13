import { io } from "socket.io-client";
import Card from "../components/Chat";
import Messages from "../components/Messages";
import { Container, Box } from "@mui/material";
import React, { useEffect, useState } from 'react'

const Name = ["Mac","TK","Fluke","Tuuuu","Bank"]

export default function Home() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // const newSocket = io(`http://________:______`);
    // setSocket(newSocket);
    // return () => newSocket.close();
  }, [setSocket]);
  
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          mb:4,
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {
          Name.map((val,index)=>{
           return <Card name={val} key={index} socket={socket}  />
          })
        }
      </Box>
        <Messages socket={socket}/>
    </Container>
  );
}
