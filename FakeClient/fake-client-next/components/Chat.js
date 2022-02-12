import {useEffect,useCallback,useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DATA from './data';

export default function BasicCard(props,{socket}) {

    const [message,setMessage] = useState("")

    useEffect(() => {
        console.log(1);
        var index = Math.floor(Math.random() * DATA.length)
        setMessage(DATA[index]);
      },[]);


    const _handleMsg = () =>{

        socket.emit('message', value); //Socket.io
        
        var index = Math.floor(Math.random() * DATA.length)
        setMessage(DATA[index])
    }

    const _handleChange = (event) =>{
        setMessage(event.target.value);
    }

  return (
    <Card sx={{ minWidth: 275, backgroundColor:"#ddd" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Chat ID {props.name}
        </Typography>
        <Typography variant="h5" component="div">
        <TextField id="standard-basic"  onChange={_handleChange} value={message}/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={_handleMsg}>Send</Button>
      </CardActions>
    </Card>
  );
}
