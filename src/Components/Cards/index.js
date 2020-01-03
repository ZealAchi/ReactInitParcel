import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Skelethon2} from '../../helpers/ConstRouters'
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  card: {
    maxHeight: 250,
    minHeight: 250,
    maxWidth: 250,
    minWidth: 250,
    
  },
  img:{
    alignItems: 'center'
  },
});

export default function Cards({titulo, contenido, imagen, to}) {
  const classes = useStyles();

  return (
    <center>
        <Card className={classes.card}>
            <Link to={to}>
            <CardActionArea >
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    <center>
                        {titulo}
                    </center>
                </Typography>
                
                <CardMedia
                    
                    component="img"
                    image={imagen}
                />
                <Typography variant="body2" color="textSecondary" component="p">
                    <center>
                        {contenido}
                    </center>
                </Typography>
            </CardContent>
            </CardActionArea>
            </Link>
        </Card>  
    </center>
  )
}
