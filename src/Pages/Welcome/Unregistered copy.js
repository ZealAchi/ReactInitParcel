import React from 'react'
import {SectionNews} from '../../helpers/ConstRouters'
import {Container,Divider, Hero, Title,Column, Section, Message} from 'rbx'
// import Cards from '../../Components/Cards'
import Carrusel from './../NoAuth/Carrusel'
import Styled from 'styled-components'
import Tabs from '../../Components/Tabs'
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

            {/* https://spike.sh/images/services/video.png */}
            <Divider color="warning">Nuestros Colaboradores</Divider>
            <Column.Group>
                <Column>
                    <Tabs datos={datos}/>
                </Column>
                <Column>

                </Column>
            </Column.Group>
            
            <Divider color="warning">Nuestros Colaboradores</Divider>

            
            
            <Column.Group>
                <Column>
                    <Message color="success">
                        <Message.Body>
                        <strong>MISIÓN</strong>, Agilizar el proceso de adquisición de materiales constructivos en tiempo, precio y calidad.
                        </Message.Body>
                    </Message>
                </Column>
                <Divider vertical/>
                <Column>
                    <Message color="primary">
                        <Message.Body>
                        <strong>VISIÓN</strong>, Ser la plataforma líder a nivel mundial en el área de la construcción y conectar la mayor cantidad de usuarios con proyectos de gran alcance y proveedores de talla internacional.
                        </Message.Body>
                    </Message>
                </Column>
            </Column.Group>
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

  const Content=()=>(
    <>Jelouder:D</>
)
const Content2=()=>(
    <>Jelouder de Nuevo XD</>
)
const datos=[
    {title:"Email",content:Content},
    {title:"Cellphone",content:Content2}
]