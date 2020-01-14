// import React from 'react'
// import { Box } from 'rbx'
// export default function ItemProyecto({ item, crear }) {
//     return item && <CardItem data={item} />

// }

// import { Card } from 'zent'
// import { Card as CardRBX, Image } from 'rbx';

// function CardItem({ data }) {
//     console.log(data)
//     const { TipoProyecto,
//         Tipo = { tipo: '', Nombre: '' }, Nombre, Finalizacion, Lugar, Descripcion, ImagenPrincipal, Anticipo,
//         ContraEntrega, CreditoPor, Categoria, FechaLimite, Planos = [] } = data

//     return (<>
//         <Card
//             style={{ width: 400, display: 'contents' }}
//             title={<div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'stretch'
//             }}><div>Pedro Gutierrez </div><div>{Nombre}</div></div>}
//             action={
//                 <div style={{ paddingLeft: '3rem' }}>
//                     <h3>
//                         <a className="zent-link" target="_blank">
//                             {TipoProyecto}
//                         </a>
//                     </h3>
//                 </div>
//             }
//         >
//             <CardRBX>
//                 <CardRBX.Image>
//                     <Image.Container size="4by3">
//                         <Image src={ImagenPrincipal} />
//                     </Image.Container>
//                 </CardRBX.Image>
//                 <CardRBX.Content>

//                     {Tipo.tipo}
//                     {Tipo.Nombre}
//                     {Finalizacion}
//                     {Lugar}


//                     {Anticipo}
//                     {ContraEntrega}
//                     {CreditoPor}
//                     {Categoria}

//                     {/* {Planos&&Planos.map((item)=>{return<>{item}</>})} */}
//                     <Box>
//                         {Descripcion}
//                     </Box>
//                 </CardRBX.Content>
//                 <CardRBX.Footer as="footer">
//                     <CardRBX.Footer.Item as="p" style={{color:'#000'}}>
//                         <span>
//                             Fecha Limite <a href="#twitter">{FechaLimite}</a>
//                         </span>
//                     </CardRBX.Footer.Item>
//                     <CardRBX.Footer.Item as="p" style={{color:'#000'}}>
//                         <span>
//                         ContraEntrega <a href="#twitter">{ContraEntrega}</a>
//                         </span>
//                     </CardRBX.Footer.Item>
//                 </CardRBX.Footer>
//             </CardRBX>
//         </Card>


//     </>)
// }































































import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Image } from 'rbx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles(theme => ({
    // card: {
    //   width: '25rem',
    // },

    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function ItemProyecto({ item, crear }) {
    const {
        Tipo,
        Nombre,
        Finalizacion,
        Lugar,
        Descripción,
        ImagenPrincipal,
        Imagen,
        Anticipo,
        ContraEntrega,
        CreditoPor,
        Categoria,
        FechaLimite,
        Planos
    } = item
    // const { Proyecto, Imagen, Descripción, CondicionesPago } = item

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card} style={{ width: `${!crear ? '20rem' : 'auto'}` }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
          </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={Nombre}
                subheader="September 14, 2016"
            />
            <Image.Container size="4by3">
                <Image src={Imagen} />
            </Image.Container>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {Descripción}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}