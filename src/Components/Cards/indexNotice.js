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

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function Cards({titulo, contenido, imagen}) {
  const classes = useStyles();

  return (
    <>
    {titulo != null ?
      
<Card className={classes.card}>
        <CardActionArea>
        
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {titulo}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {contenido}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Compartir
          </Button>
          <Button size="small" color="primary">
            Leer más
          </Button>
        </CardActions>
      </Card>
    :
    <Skelethon2/>
    }
    </>
  )
}
