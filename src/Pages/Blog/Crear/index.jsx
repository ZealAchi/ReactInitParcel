import React, { useState } from 'react'
import { Column, Section } from 'rbx'
import Item from './../item'
import { Box } from '@material-ui/core';
import Form from './form'
export default function Blog() {
    const [state, setState] = useState({
        title: '',
        description: '',
        user: 'Jose',
        link: '',
        date: new Date().toDateString(),
        image: ''
    })
    const { title, description,link,image,date,user} = state
    function handleChange(name, valor) {
        console.log(name, valor)
        event.preventDefault();
        if (name === 'Titulo')
            setState({ ...state, title: valor })
        if (name === 'Descripción')
            setState({ ...state, description: valor })
        if (name === 'Link')
            setState({ ...state, user: valor })
        if (name === 'date')
            setState({ ...state, date: valor })
        if (name === 'image')
            setState({ ...state, image: valor })
    }
    return (
        <Section>
            <Column.Group multiline centered style={{ width: '100%', textAlign: '-webkit-center' }} breakpoint="mobile">
                <Column>
                    <Box component="span" m={1}>
                        <Form handleChange={handleChange} setState={setState} state={state} />
                    </Box>
                </Column>
                <Column>
                    <Box component="span" m={1}>
                        <Item {...{title,description, link, image, date,user}} />
                    </Box>
                </Column>
            </Column.Group>
        </Section>
    )
}