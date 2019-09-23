import React, { Component } from 'react'
import { Button, Card, CardContent, CardMedia, CardActionArea, CardActions, Typography } from '@material-ui/core'

class PokemonListItem extends Component {
    
    render() {
        return (
            <Card style={{maxWidth: 345}}>
                <CardActionArea>
                    <CardMedia
                    style={{ height: 140}}
                    image="https://via.placeholder.com/140"
                    title="Pokemon"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Name
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Blah blah blah blah blah blah blah blah blah blah blah blah blah
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Click to View more info!
                    </Button>
                </CardActions>
                </Card>
        )
    }
}

export default PokemonListItem