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
                    <Title textAlign="centered" > CoSupplies </Title>
                </Container>
            </Hero.Body>
            </HeroLanging>
            <Carrusel style={{
width: '79rem',
display: 'flex',
height: '35rem'

            }} img={imagenes}/>

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

`


const imagenes=[
    {
        class: "d-block w-100",
        img:"http://legnaconstrucciones.com/wp-content/uploads/2017/05/empresa-construccion-legna.jpg",
        alt:"First slide",
        title:'Nominación 2020',
        subtitle:'Uso de materiales sustentables',
        width:''
      },
      {
        class: "d-block w-100",
        img:"https://elsouvenir.com/wp-content/uploads/2018/08/Construcciones-lujosas-Paseo-Montejo-Foto-El-Souvenir-1.jpg",
        alt:"First slide",
        title:'Premio 2019',
        subtitle:'Mejor construcción',
        width:''
      }
  ]
