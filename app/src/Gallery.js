import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from "@mui/material/Container";

function importAll(r) {
    let images = [];
    r.keys().forEach((item, index) => {
        images.push(r(item));
    });
    return images
}

export default function Gallery(props) {
    const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
    console.log(images)
    return (
        <Container maxWidth="md" component="main" sx={{pb: 6}}>
            <Box sx={{height: 400, overflowY: 'scroll'}}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {images.map((item, key) => (
                        <ImageListItem key={key}>
                            <img
                                src={item}
                                alt={"fff"}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
}


