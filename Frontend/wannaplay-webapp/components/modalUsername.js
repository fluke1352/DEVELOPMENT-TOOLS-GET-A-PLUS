import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UsernameAction from "../store/usernameAction";

import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

function ModalUsername() {
  const [modal_is_open, setModal_is_open] = useState(true);

  //Modal controller
  const handleModalOpen = () => setModal_is_open(true);
  const handleModalClose = () => {
    if (getUsername) {
      setModal_is_open(false);
    }
  };

  //Use redux function to create username state
  const dispatch = useDispatch();

  //Create username state to store
  const onSubmitUsername = () => {
    let username = document.getElementById("input_username").value;
    if (username.length > 0) {
      dispatch(UsernameAction(username));
      setModal_is_open(false);
    }
  };
  //Get username redux funct
  const getUsername = useSelector((state) => state.get_username.username);

  useEffect(() => {
    //Check username yet?
    if (!getUsername) {
      handleModalOpen();
    } else {
      handleModalClose();
    }
  }, []);

  const Root = styled("Grid")(({ theme }) => ({
  }));

  //Modal Style
  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#1c2128",
    boxShadow: 24,
    borderRadius: 4,
    padding: "20px",
  };

  return (
    <div>
      <Modal
        keepMounted
        open={modal_is_open}
        onClose={handleModalClose}
        aria-labelledby="keep-mounted-modal-title"
        fullWidth
      >
        <Box component="form">
        <Root container sx={styleModal}>
          {/* Label */}
          <Grid container sx={{ textAlign: "center" }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography
                id="keep-mounted-modal-title"
                variant="outline"
                component="h2"
              >
                Input your username
              </Typography>
            </Grid>
          </Grid>

          {/* Input username form */}
          <Grid
            container
            columnSpacing={{ xs: 0, sm: 2, md: 3, lg:3}}
            sx={{ mt: 2 }}
          >
            {/* Input box username */}
            <Grid item xs={7} sm={8} md={8} lg={8}>
              <Input
                id="input_username"
                type="text"
                fullWidth
                required
                style={{
                  backgroundColor: "#2D333B",
                  borderRadius: 5,
                  color: "white",
                  border: "none",
                  height: "30px",
                  fontSize: "0.8rem",
                }}
              />
            </Grid>
            {/* Btn submit form */}
            <Grid item xs={1} sm={3} md={3} lg={2}>
              <Button
                id="doneBtn"
                onClick={onSubmitUsername}
                type="submit"
                fullWidth
                sx={{
                  backgroundColor: "#22272E",
                  color: "#FFF",
                  height: "30px",
                }}
              >
                Done
              </Button>
            </Grid>
          </Grid>
        </Root>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalUsername;
