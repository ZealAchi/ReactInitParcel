import React from 'react'
import {Column} from 'rbx'
import Typography from '@material-ui/core/Typography';
import Styled from 'styled-components'
export default function Cifra({contenido}){
    return(
        <Column.Group vcentered multiline>
             {contenido&&contenido.map((item, i) => 
                      <Column key={i} size="25%" textAlign="centered">
                            <CifrasCantidad variant="h4" gutterBottom color="initial">
                                {item.cantidad}
                            </CifrasCantidad>
                            <CifrasNombre variant="h5" gutterBottom color="white">
                                {item.nombre}
                            </CifrasNombre>
                      </Column>
             )}
        </Column.Group>
    )
}


const CifrasNombre = Styled(Typography)`
    background-color: '#1fc8db';
    background-image: linear-gradient(141deg,#d19dd294 0%,#edcaffbf 51%,#cfb9eca6 75%);   
    border-radius: 8%;
`

const CifrasCantidad = Styled(Typography)`
    color:yellow;
    font-weight: bolder;
    text-shadow: 2px 2px #FF0000;
`