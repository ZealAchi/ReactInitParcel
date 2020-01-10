import React from 'react'
import Data from './../../../../../../helpers/dataProyectCreate'
import {Box} from 'rbx'
import ItemProyecto from '../item'

export default function PreviewProyect(){
    const data=Data.proyectCreate[0]
    
    return(
        <Box>
            <ItemProyecto item={data}  crear={'crear'}/>
        </Box>
    )
}