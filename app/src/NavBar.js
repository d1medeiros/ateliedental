import * as React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";

export default function Navbar(props) {
    return (

        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
        >
            <Toolbar sx={{flexWrap: 'wrap'}}>
                <Typography variant="h6" color="inherit" noWrap
                            sx={{flexGrow: 1}}>
                    {props.company}
                </Typography>
                {/*<nav>*/}
                {/*    <Link*/}
                {/*        variant="button"*/}
                {/*        color="text.primary"*/}
                {/*        href="#"*/}
                {/*        sx={{my: 1, mx: 1.5}}*/}
                {/*    >*/}
                {/*        Features*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        variant="button"*/}
                {/*        color="text.primary"*/}
                {/*        href="#"*/}
                {/*        sx={{my: 1, mx: 1.5}}*/}
                {/*    >*/}
                {/*        Enterprise*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        variant="button"*/}
                {/*        color="text.primary"*/}
                {/*        href="#"*/}
                {/*        sx={{my: 1, mx: 1.5}}*/}
                {/*    >*/}
                {/*        Support*/}
                {/*    </Link>*/}
                {/*</nav>*/}
                {/*<Button href="#" variant="outlined" sx={{my: 1, mx: 1.5}}>*/}
                {/*    Login*/}
                {/*</Button>*/}
            </Toolbar>
        </AppBar>
    )
};
