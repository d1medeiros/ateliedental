import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import * as React from 'react';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function links(footers) {
    return <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="text.primary"
                            gutterBottom>
                    {footer.title}
                </Typography>
                <ul>
                    {footer.description.map((item) => (
                        <li key={item}>
                            <Link href="#" variant="subtitle1"
                                  color="text.secondary">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Grid>
        ))}
    </Grid>;
}

export default function Footer(props) {
    const {footers} = props
    return (
        <Container
            maxWidth="md"
            component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: [3, 6],
            }}
        >
            ...
            <Copyright sx={{mt: 5}}/>
        </Container>
    )
}

