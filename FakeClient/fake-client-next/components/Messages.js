import {useEffect,useState } from 'react';


import Stack from '@mui/material/Stack';

export default function ChatBox({socket}) {

    const [messages,setMessages] = useState("")

    // useEffect(() => {
    //     const messageListener = (message) => {
    //       setMessages((prevMessages) => {
    //         const newMessages = {...prevMessages};
    //         newMessages[message.id] = message;
    //         return newMessages;
    //       });
    //     };
    //     socket.on('message', messageListener)
    //     return () => {
    //       socket.off('message', messageListener);
    //     };
    //   }, [socket]);

  return (
    <Stack >
        <div>
            <spen>Name : {}&nbsp;&nbsp;&nbsp;</spen>
            <spen>Date : {}&nbsp;&nbsp;&nbsp;</spen>
            <spen>Message : {}&nbsp;&nbsp;&nbsp;</spen>
        </div>
    
    </Stack>
  );
}