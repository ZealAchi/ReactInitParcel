import React from 'react'
import {Hero,Container, Title, Column,Box} from 'rbx'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Styled from 'styled-components'
export default function Heros({color, textAlign, children, clase}){
  return(
    <Hero gradient color={color} className={clase}>
      <Hero.Body>
        <Container textAlign={textAlign}>{children}</Container>
      </Hero.Body>
    </Hero>
    )
}
