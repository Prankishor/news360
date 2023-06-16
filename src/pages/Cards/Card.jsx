import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
    return (
        <Card sx={{ maxWidth: 800 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="345"
                    image={props.img}
                    alt="Failed to upload image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.content}
                    </Typography>
                    <Typography mt="1rem" variant="body2" color="blue">
                        <a href={props.url} target='blank'>Origianl source</a>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}