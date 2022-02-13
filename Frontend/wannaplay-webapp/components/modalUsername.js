import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { action_sentUserName } from "../pages/action/usernameAction";

import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function modalUsername() {
  const [modal_is_open, setModal_is_open] = React.useState(true);
  const [userName, setUserName] = React.useState("");

  //Modal Style
  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "25%",
    height: "17%",
    bgcolor: "#1C2128",
    boxShadow: 24,
    p: 4,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 4,
  };

  //Modal controller
  const handleModalOpen = () => setModal_is_open(true);
  const handleModalClose = () => {
    if (getUsername) {
      setModal_is_open(false);
    }
  };

  //Onchang Username input set to USERNAME stage
  const handleUsrname = (event) => {
    setUserName(event.target.value);
  };

  const dispatch = useDispatch();

  const onSubmitUsername = () => {
    if (userName.length > 0) {
      dispatch(action_sentUserName(userName));
      setModal_is_open(false);
    }
  };

  const getUsername = useSelector((state) => state.usrname.username);

  useEffect(() => {
    if (!getUsername) {
      handleModalOpen();
    } else {
      handleModalClose();
    }
  }, []);

  return (
    <div>
      <Modal
        keepMounted
        open={modal_is_open}
        onClose={handleModalClose}
        aria-labelledby="keep-mounted-modal-title"
      >
        <Box sx={styleModal}>
          <Typography id="keep-mounted-modal-title">
            <h1>Input your Username {getUsername}</h1>
          </Typography>
          <Grid
            container
            spacing={5}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            {/* input username box */}
            <Grid item xs={8}>
              <input
                id="input_username"
                type="text"
                required
                value={userName}
                onChange={handleUsrname}
                style={{
                  backgroundColor: "#2D333B",
                  borderRadius: 5,
                  color: "white",
                  width: "100%",
                  border: "none",
                  fontSize: "1.2rem",
                  height: "4.5vh",
                  textAlign: "center",
                }}
              />
            </Grid>
            {/* Btn of submit */}
            <Grid item xs={3}>
              <Button
                id="done"
                onClick={onSubmitUsername}
                style={{
                  backgroundColor: "#22272E",
                  borderRadius: 5,
                  color: "#FFF",
                  width: "100%",
                  fontSize: "1rem",
                  height: "4.5vh",
                  textAlign: "center",
                }}
              >
                Done
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
export default modalUsername;
