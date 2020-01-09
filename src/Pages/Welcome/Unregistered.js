import React from 'react'
import Styled from 'styled-components'
import { Container, Divider, Hero, Title, Column, Section, Message } from 'rbx'
import Carrusel from './../NoAuth/Carrusel'
import Heros from './components/Hero'
import datos, { cifras } from "./../../helpers/landingPage"
import Beneficios from './components/Hero/beneficios'
import Cifras from './components/Hero/cifras'
export default function UnRegistered() {
    return (
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

            }} img={imagenes} />

            <Heros color="white" textAlign="centered">
                <Beneficios titulo="Beneficios" subtitulo="Hazlo en linea desde cualquier parte del mundo." contenido={datos} boxHeight="9.5rem" />
            </Heros>
            <Heros clase="cifrasImage">
                <Cifras contenido={cifras} />
            </Heros>
            <section id="contact" class="form">>
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2>Contactanos</h2>
                            {/* <ul class="list-unstyled li-space-lg">
                                    <li class="address">Don't hesitate to give us a call or just use the contact form below</li>
                                    <li><i class="fas fa-map-marker-alt"></i>22 Innovative, San Francisco, CA 94043, US</li>
                                    <li><i class="fas fa-phone"></i><a class="blue" href="tel:003024630820">+81 720 2212</a></li>
                                    <li><i class="fas fa-envelope"></i><a class="blue" href="mailto:office@leno.com">office@leno.com</a></li>
                                </ul> */}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 offset-lg-3">
                            <div id="errormessage"></div>
                            <form action="" method="post" role="form" class="contactForm">
                                <div class="form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Ingresa tu nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div class="validation"></div>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Ingresa Tu Correo" data-rule="email" data-msg="Please enter a valid email" />
                                    <div class="validation"></div>
                                </div>

                                <div class="form-group">
                                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div class="validation"></div>
                                </div>
                                <div class="text-center"><button type="submit">Enviar Mensaje</button></div>
                            </form>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

const HeroLanging = Styled(Hero)`

`


const imagenes = [
    {
        class: "d-block w-100",
        img: "http://legnaconstrucciones.com/wp-content/uploads/2017/05/empresa-construccion-legna.jpg",
        alt: "First slide",
        title: 'Nominación 2020',
        subtitle: 'Uso de materiales sustentables',
        width: ''
    },
    {
        class: "d-block w-100",
        img: "https://elsouvenir.com/wp-content/uploads/2018/08/Construcciones-lujosas-Paseo-Montejo-Foto-El-Souvenir-1.jpg",
        alt: "First slide",
        title: 'Premio 2019',
        subtitle: 'Mejor construcción',
        width: ''
    }
]
