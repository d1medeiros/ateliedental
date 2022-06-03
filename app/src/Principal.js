import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import * as React from 'react';
import Box from "@mui/material/Box";
import imgPrincipal from "./img/d_superior.png"
import {Paper} from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

function MainFeaturedPost(props) {

    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                height: 400,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${props.image})`,
            }}
        >
            {<img style={{ display: 'none' }} src={props.image} alt={props.imageText} />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {props.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {props.description}
                        </Typography>
                        <Link variant="subtitle1" href="#">
                            {props.linkText}
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default function Principal(props) {
    return (
        <Container disableGutters maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>
           <MainFeaturedPost image={imgPrincipal} imageText='a'  />

            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                {props.company}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" component="p">
                Quickly build an effective pricing table for your potential customers with
                this layout. It&apos;s built with default MUI components with little
                customization.
            </Typography>
        </Container>
    )
};
