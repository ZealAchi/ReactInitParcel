import React from 'react'
import { Column, Notification, Hero, Title } from 'rbx'
import Tabla from './Tabla';

export default function Categorias() {


    function handleSubmit() {
        // console.log(this.refs.form.getValues());
      }

    return (
        <>
            <Hero color="white" size="small">
                <Hero.Body>

                    <Title>Categorias</Title>
                </Hero.Body>
            </Hero>

            <Column.Group multiline centered  breakpoint="mobile">
                <Column >
                <Notification color="light" textAlign="centered">
                    <Tabla/>
                    </Notification>
                </Column>
              
            </Column.Group>
        </>
    )
}