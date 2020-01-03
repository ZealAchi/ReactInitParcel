import React from 'react'
import { Column, Section ,Notification} from 'rbx'
import Item from './../item'
import { Link } from 'react-router-dom'
import { Box, Button } from '@material-ui/core';
// import List1 from './list'
export default function MisPublicaciones() {
    return (
        <Section>

                <Column.Group multiline centered style={{ width: '100%', textAlign: '-webkit-center',display: 'flex',justifyContent: 'space-between', alignItems:' stretch', margin: '-1.8em 0px 1em' }} breakpoint="mobile">
                {[1, 2, 3, 4].map(i => (
                    <Column key={i}>
                    <Box component="span" m={1}>
                        <Item miPublicacion="true" />
                    </Box>
                    </Column>
                ))}
                </Column.Group>
        </Section>
    )
}