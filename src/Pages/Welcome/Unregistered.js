import React from 'react'
import Styled from 'styled-components'
import {Container,Divider, Hero, Title,Column, Section, Message} from 'rbx'
import Carrusel from './../NoAuth/Carrusel'
import Heros from './components/Hero'
import datos, {cifras} from "./../../helpers/landingPage"
import Beneficios from './components/Hero/beneficios'
import Cifras from './components/Hero/cifras'
export default function UnRegistered(){
    return(
        <>
        
            <HeroLanging gradient >
            <Hero.Body>
                <Container>
                    <Title textAlign="centered" style={{  color: 'white', textShadow: '2px 2px 4px #000000'}}> Cosupplies </Title>
                </Container>
            </Hero.Body>
            </HeroLanging>
            <Carrusel img={imagenes}/>

            <Heros color="white" textAlign="centered">                
                <Beneficios titulo="Beneficios" subtitulo="Hazlo en linea desde cualquier parte del mundo." contenido={datos} boxHeight="9.5rem"/>
            </Heros>
            <Heros clase="cifrasImage">
                <Cifras contenido={cifras}/>
            </Heros>
        </>
    )   
}

const HeroLanging = Styled(Hero)`
    background-color: '#1fc8db';
    background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
`


const imagenes=[
    {
      class: "d-block w-100",
      img:"https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
      alt:"First slide",
      title:'Titulo uno',
      subtitle:'Subtitulo uno',
      width:''
    },
    {
      class: "d-block w-100",
      img:"https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
      alt:"First slide",
      title:'Titulo dos',
      subtitle:'Subtitulo dos',
      width:''
    }
  ]
