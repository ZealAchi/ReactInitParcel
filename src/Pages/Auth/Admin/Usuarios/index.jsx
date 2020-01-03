import React from 'react'
import { Column, Section } from 'rbx'
import { Link } from 'react-router-dom'
import { Box, Button } from '@material-ui/core';
import InputSearch from './InputSearch'
import Item from './item'
export default function AdminUsers() {
    return (<>


        <Box fontSize={16} bgcolor="text.secondary" color="background.paper" style={{ height: '10rem' }} p={2} m={1}>
            <Box fontSize={28}>
                Admin Dashboard
            </Box>
            Bienvenido ....

        </Box>
        <Section>
            <Box component="span" m={1}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', margin: '-1.8em 0px 1em' }}>
                    <InputSearch />
                </div>
            </Box>
            <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">

                <Column.Group multiline centered style={{ width: '100%', textAlign: '-webkit-center', display: 'flex', justifyContent: 'space-between', alignItems: ' stretch', margin: '-1.8em 0px 1em' }} breakpoint="mobile">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                        <Column key={i}>
                            {/* <Notification color="primary" textAlign="centered"> */}
                            <Box component="span" m={1}>
                                <Item editar={true} eliminar={true} />
                            </Box>

                            {/* </Notification> */}
                        </Column>
                    ))}
                </Column.Group>
            </Box>

        </Section>

    </>)
}