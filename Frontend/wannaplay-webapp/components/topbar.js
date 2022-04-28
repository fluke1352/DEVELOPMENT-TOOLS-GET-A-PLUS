import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import styles from "../styles/topbar.module.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

export default function Topbar() {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [path, setPath] = useState("/");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getGameData = useSelector((state) => state.game_selecting.game_info);
  const getUsrname = useSelector((state) => state.get_username.username);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#2D333B",
        position: "fixed",
        width: "100vw",
        top: 0,
        maxHeight: "10%",
        zIndex: 999,
      }}
    >
      {/* Show USERNAME */}
      <Box sx={{ color: "#FFFFFF", left: "2%", position: "absolute" }}>
        <Typography data-testid="isUsername" fontSize={"0.9rem"}>
          {getUsrname}
        </Typography>
      </Box>

      <Tabs
        value={path == "/chats" ? 1 : 0}
        onChange={handleChange}
        sx={{
          flex: 1,
          p: 1,
          m: 0,
          borderRadius: 0,
        }}
      >
        {/* Home Tab */}
        <Tab
          data-testid="homeTab"
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32.764 16.1687L21.0973 5.96035C20.469 5.41052 19.5307 5.41052 18.9023 5.96035L7.23566 16.1687C6.87397 16.4852 6.6665 16.9424 6.6665 17.423V31.6667C6.6665 32.5872 7.4127 33.3334 8.33317 33.3334H31.6665C32.587 33.3334 33.3332 32.5872 33.3332 31.6667V17.423C33.3332 16.9424 33.1257 16.4852 32.764 16.1687Z" />
            </svg>
          }
          {...changeindex(0)}
          className={path == "/" ? styles.blueicon : styles.whiteicon}
          onClick={() => {
            if (getGameData) {
              router.push("/SelectRoompage");
            } else {
              router.push("/");
            }
          }}
        />
        {/* Chat Tab */}
        <Tab
          data-testid="chatTab"
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35.0002 10H31.6668V25H10.0002V28.3334C10.0002 29.25 10.7502 30 11.6668 30H30.0002L36.6668 36.6667V11.6667C36.6668 10.75 35.9168 10 35.0002 10ZM28.3335 20V5.00004C28.3335 4.08337 27.5835 3.33337 26.6668 3.33337H5.00016C4.0835 3.33337 3.3335 4.08337 3.3335 5.00004V28.3334L10.0002 21.6667H26.6668C27.5835 21.6667 28.3335 20.9167 28.3335 20Z" />
            </svg>
          }
          {...changeindex(1)}
          className={path == "/chats" ? styles.blueicon : styles.whiteicon}
          onClick={() => {
            router.push({
              pathname: "/chats",
              state: { username: getUsrname },
            });
          }}
        />
      </Tabs>
    </Box>
  );
}

function changeindex(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
