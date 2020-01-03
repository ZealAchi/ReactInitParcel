import React from 'react'
import {Hero,Container, Title, Column,Box} from 'rbx'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Styled from 'styled-components'
export default function Beneficios({ titulo, subtitulo, contenido, boxHeight}){
    const  {beneficios}=contenido

    const BoxBeneficios = Styled(Box)`
      min-height: ${boxHeight};
      text-align: center;
    `  
    return(
        <>
            <Title> <Typography variant="h4" gutterBottom>{titulo}</Typography> </Title>
            <Title as="h2" subtitle>
              <Typography variant="h5" gutterBottom>
                {subtitulo}
              </Typography>                
                <Column.Group vcentered multiline>
                    {beneficios&&beneficios.map((item, i) => 
                      <Column key={i} size="25%" >
                        <BoxBeneficios>
                        <Typography variant="h5" gutterBottom>
                          {item.titulo}
                        </Typography>
                          <AccessAlarmIcon/>
                        <Typography variant="subtitle2" gutterBottom>
                          {item.contenido}
                        </Typography>
                        </BoxBeneficios>
                      </Column>)
                    }
                </Column.Group>
            </Title>
          
        </>
    )
}