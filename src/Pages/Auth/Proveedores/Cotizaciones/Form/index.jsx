import React, { useContext, Children } from "react";
import { Column } from 'rbx'
import Map, { InfoMapa } from './map'
import { Animate } from 'uxcore';

import Form from './form'
import { EffectContext } from "../../../../../Context/EffectContext";


export default function Proveedores({ children }) {
    const { visible,effect } = useContext(EffectContext)
    // console.log('Proveedores', children)
    return (<Column.Group >
        
            <Column style={{ display: `${!visible ? '' : 'none'}` }}>
            <Animate showProp="visible" transitionName={effect} transitionAppear>
                <Map />
                </Animate>
            </Column>
        

        <Column>
            <InfoMapa />
            <Form>{children}</Form>
        </Column>
    </Column.Group>)
}
