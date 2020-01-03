import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { AuthContext } from '../../Context/AuthContext';
import { Modal } from 'antd';
import {toast} from 'react-toastify'
import { Link } from 'react-router-dom'

const { confirm } = Modal;
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    height: '100%'

  },
  card: {
    maxWidth: 550,
  },
  media: {
    height: 140,
  },

}));

export default function MediaCard({ title, description, user, date, image, miPublicacion }) {
  const { isAuthenticated } = useContext(AuthContext)

  const classes = useStyles();

  return (
    <Card className={classes.card} style={{ textAlign: '-webkit-left' }}>
      <CardActionArea>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user ? user : 'Praxis'}
              secondary={date ? date : 'Jan 9, 2020'} />
              {isAuthenticated&&miPublicacion&&<ListItemSecondaryAction>
              <IconButton edge="end" aria-label="Eliminar" onClick={showDeleteConfirm} type="dashed">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
              }
          </ListItem>
        </List>
        <CardMedia
          className={classes.media}
          style={{ width: 'inherit', maxWidth: '100%', padding: '10rem' }}
          image={image ? image : 'http://cosupplies.net/img/data-img/9blog_Captura%20de%20pantalla%202019-11-07%20a%20las%2013.38.20.png'}
          title={title ? title : 'Contemplative Reptile'}
        />
        <Divider variant="inset" component="li" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title ? title : 'Lizard'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description ? description : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica'}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: 'flex', justifyContent: 'space-between', padding: 16 }} breakpoint="mobile">
        <Button size="small" color="primary">
          Ver más
        </Button>
        {isAuthenticated&&miPublicacion&&
        <Link to="/blog/misPublicaciones/Editar">
        <IconButton edge="end" aria-label="comments">
          <EditIcon />
        </IconButton>
        </Link>}
      </CardActions>
    </Card>
  );
}


function showDeleteConfirm() {
  confirm({
    title: '¿Estás seguro de eliminar esta pulbicacion?',
    okText: 'Si, estoy seguro',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      toast.success('Se ah eliminado tu publicación.')
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}