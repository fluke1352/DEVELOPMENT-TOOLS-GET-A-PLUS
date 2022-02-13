import styles from '../styles/topbar.module.css';
import Box from '@mui/material/Box';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Topbar() {
    const router = useRouter();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getUsrname = useSelector((state) => state.usrname.username);

    return (
        <Box
            sx={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: '#2D333B',
                width: '100%',
            }}
        >
            <Box sx={{ color: '#FFFFFF', left: '2%', position: 'absolute' }}>{getUsrname}</Box>

            <Tabs value={router.pathname == "/chats" ? 1 : 0} onChange={handleChange}
                sx={{
                    flex: 1,
                    p: 1,
                    m: 0,
                    borderRadius: 0,

                }}>
                <Tab icon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.764 16.1687L21.0973 5.96035C20.469 5.41052 19.5307 5.41052 18.9023 5.96035L7.23566 16.1687C6.87397 16.4852 6.6665 16.9424 6.6665 17.423V31.6667C6.6665 32.5872 7.4127 33.3334 8.33317 33.3334H31.6665C32.587 33.3334 33.3332 32.5872 33.3332 31.6667V17.423C33.3332 16.9424 33.1257 16.4852 32.764 16.1687Z"
                         />
                </svg>} {...changeindex(0)} className={router.pathname == "/" ? styles.blueicon : styles.whiteicon} onClick={() => { router.push("/") }} />

                <Tab icon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.0002 10H31.6668V25H10.0002V28.3334C10.0002 29.25 10.7502 30 11.6668 30H30.0002L36.6668 36.6667V11.6667C36.6668 10.75 35.9168 10 35.0002 10ZM28.3335 20V5.00004C28.3335 4.08337 27.5835 3.33337 26.6668 3.33337H5.00016C4.0835 3.33337 3.3335 4.08337 3.3335 5.00004V28.3334L10.0002 21.6667H26.6668C27.5835 21.6667 28.3335 20.9167 28.3335 20Z" />
                </svg>
                }  {...changeindex(1)} className={router.pathname == "/chats" ? styles.blueicon : styles.whiteicon} onClick={() => {
                     router.push({pathname:"/chats",
                     state: { username: getUsrname }
                    })
                     
                     }} />


            </Tabs>

        </Box>
    )
}

function changeindex(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


