import React, { useState } from 'react'
import {Box} from 'rbx'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Album, { Photo } from 'uxcore-album';
import { Form } from 'uxcore';
const { SwitchFormField, SelectFormField, FormRow } = Form;

// export default function Cards(){
//      const [state, setState]=useState();

//     function click(){
//         Album.show({
//             photos: [
//               <Photo
//                 src="//img.alicdn.com/imgextra/i2/927018118/TB13fBjKFXXXXbPXpXXXXXXXXXX_!!0-tstar.jpg"
//                 key={0}
//               />,
//               <Photo src="https://img.alicdn.com/tps/i4/TB1bokgFVXXXXbKXFXXYCct.pXX-238-238.png" key={1} />,
//               <Photo
//                 src="//img.alicdn.com/imgextra/i4/927018118/TB1N0hqKFXXXXXDXXXXXXXXXXXX_!!0-tstar.jpg"
//                 key={2}
//               />,
//             ],
//           });
//     }
//     const classes = useStyles();
//     return(
//         <div className={classes.root}>
//             <GridList cellHeight={180} className={classes.gridList}>
//             <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
//                 <ListSubheader component="div">December</ListSubheader>
//             </GridListTile>
//             {tileData.map(tile => (
//                 <Box>
//                 <GridListTile key={tile.img}>
//                 <img src={tile.img} alt={tile.title} />
//                 <GridListTileBar
//                     title={tile.title}
//                     subtitle={<span>by: {tile.author}</span>}
//                     actionIcon={
//                     <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}  onClick={click}>
//                         <InfoIcon />
//                     </IconButton>

//                     }
                   
//                 />
//                 </GridListTile>
//                 </Box>
//             ))}
//             </GridList>
//         </div>
//     )
// }

// const tileData = [
//     {
//         img: 'https://img.alicdn.com/tfs/TB1ltSkD1GSBuNjSspbXXciipXa-300-300.jpg#a=1',
//         title: 'Image',
//         author: 'author',
//     }
// ]

// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//       width: 500,
//       height: 450,
//     },
//     icon: {
//       color: 'rgba(255, 255, 255, 0.54)',
//     },
//   }));


export default function Cards(){
    const [state, setState]=useState({
        thumbPlacement: 'right',
        values:[]
    })
    function handleChange(values){
        setState({...state,values})
    }
    return(
        <div>
        <div>
        <Form className="demo-control" jsxvalues={state.values} jsxonChange={handleChange}>
            <SwitchFormField jsxlabel="显示缩略图" jsxname="enableThumbs" />
            <SelectFormField jsxlabel="缩略图位置" jsxname="thumbPlacement" jsxdata={{
              right: 'right',
              left: 'left',
              top: 'top',
              bottom: 'bottom',
            }} jsxshow={!!state.values.enableThumbs}
            />
          </Form>
          
        </div>
          <Album showButton width={400} height={200} enableKeyBoardControl {...state.values}>
          <Photo src="//img.alicdn.com/imgextra/i2/927018118/TB13fBjKFXXXXbPXpXXXXXXXXXX_!!0-tstar.jpg" key={0} />
          <Photo src="https://img.alicdn.com/tps/i4/TB1bokgFVXXXXbKXFXXYCct.pXX-238-238.png" key={1} />
          <Photo src="//img.alicdn.com/imgextra/i4/927018118/TB1N0hqKFXXXXXDXXXXXXXXXXXX_!!0-tstar.jpg" key={2} />
          <Photo src="https://img.alicdn.com/imgextra/i2/290551947/TB1C799LFXXXXaiXpXXXXXXXXXX_!!0-tstar.jpg" key={3} />
          <Photo src="https://img.alicdn.com/imgextra/i1/290551947/TB1p81JLFXXXXXXaXXXXXXXXXXX_!!0-tstar.jpg" key={4} />
          <Photo src="https://img.alicdn.com/imgextra/i2/290551947/TB1W.ZrLpXXXXbMXpXXXXXXXXXX_!!0-tstar.jpg" key={5} />
          <Photo src="https://img.alicdn.com/imgextra/i1/673400424/TB1Jze1KXXXXXcfXFXXXXXXXXXX_!!673400424-0-tstar.jpg" key={6} />
          <Photo src="https://img.alicdn.com/imgextra/i4/673400424/TB1d2PkKXXXXXbiXXXXXXXXXXXX_!!673400424-0-tstar.jpg" key={7} />
        </Album>
      </div>
    )
}