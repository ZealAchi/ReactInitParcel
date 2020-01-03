import React,{useContext} from 'react'
import { Column, Section } from 'rbx'
import Item from './item'
import { Link } from 'react-router-dom'
import { Box, Button } from '@material-ui/core';
import { AuthContext } from '../../Context/AuthContext';

// import List1 from './list'
export default function Blog() {
    const{ isAuthenticated }=useContext(AuthContext)
    
    return (
        <Section>
            <div style={{display: 'flex',justifyContent: 'space-between', alignItems:' stretch', margin: '-1.8em 0px 1em'}}>
            {isAuthenticated &&<>
            <Link to="/blog/crear">
                <Button variant="contained" color="primary">Crear Publicación</Button>
            </Link>
            <Link to="/blog/misPublicaciones">
                <Button variant="contained" color="primary">Ver mis Publicaciones</Button>
            </Link></>}
            </div>
            <Column.Group multiline centered style={{ width: '100%', textAlign: '-webkit-center',display: 'flex',justifyContent: 'space-between', alignItems:' stretch', margin: '-1.8em 0px 1em' }} breakpoint="mobile">

                <Column>
                    <Box component="span" m={1}>
                        <Item />
                    </Box>
                    <Box component="span" m={1}>
                        <Item />
                    </Box>
                    <Box component="span" m={1}>
                        <Item />
                    </Box>
                </Column>
            </Column.Group>
        </Section>
    )
}