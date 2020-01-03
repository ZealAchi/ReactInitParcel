import React, { useContext, useState } from 'react'
import { Form, Input, Button, Select, } from 'antd';

import { DataContextForProveedores } from './formContext';
import { Column, Divider, Hero } from 'rbx'
import { Box } from '@material-ui/core';
import { Animate } from 'uxcore';
import { Select as uxSelect } from 'uxcore';
import { EffectContext } from '../../../../../Context/EffectContext';



const { uxOption } = uxSelect;

const InputGroup = Input.Group;
const { Option } = Select;
const { Search } = Input;

const Filtro1 = (
    <InputGroup compact style={{ paddingLeft: 10, display: 'flex' }}>
        <Select style={{ width: '100%' }} defaultValue="">
            <Option value="Option1-1">Construcción residencial</Option>
            <Option value="Option1-2">Construcción comercial</Option>
            <Option value="Option1-3">Construcción industrial</Option>
            <Option value="Option1-4">Construcción obras públicas</Option>
            <Option value="Option1-5">Compra/renta de maquinaria </Option>
        </Select>
    </InputGroup>
);
const Filtro2 = (
    <InputGroup compact style={{ paddingLeft: 10, display: 'flex' }}>
        <Select style={{ width: '100%' }} defaultValue="">
            <Option value="Option1-1">Material</Option>
            <Option value="Option1-7">Lote</Option>
        </Select>
    </InputGroup>
);

export const Filtros = (
    <>

        <Hero color="white" style={{
            borderRadius: '0.3rem',
            paddingRight: '2rem',
            paddingLeft: '14px',
            marginRight: 'auto',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            "&:hover": {
                boxShadow: ' 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
            }
        }} ><Divider color='black' />
            <Column.Group style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'stretch' }}>
                <Column>
                    <label>Filtrar por tipos de construcción</label>
                </Column>
                <Column size={8}>
                    {Filtro1}
                </Column>
            </Column.Group>
            <Column.Group style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'stretch' }}>
                <Column >
                    <label>Filtrar por Categoria</label>
                </Column>
                <Column size={8}>
                    {Filtro2}
                </Column>
            </Column.Group >
            <Divider color='black' />
        </Hero>

    </>)

export default function ({ children }) {
    const { pais, estado,visible } = useContext(DataContextForProveedores)
    const [formLayout] = useState('horizontal')
    const {visible:visibleEffect,effect,showComponent}=useContext(EffectContext)
    
    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            }
            : null;

    return (<>
        <Form layout={formLayout} style={{ background: '#fff' }}>
        <Animate showProp="visible" transitionName={effect} transitionAppear>
                <Box css={{ display: `${!visibleEffect ? '' : 'none'}` }}>
                    <Form.Item label="Pais" {...formItemLayout}>
                        <Input placeholder="Selecciona un Pais en el Mapa" disabled value={pais} />
                    </Form.Item>
                    <Form.Item label="Estado" {...formItemLayout}>
                        <Input placeholder="Selecciona un Estado en el Mapa" disabled value={estado} />
                    </Form.Item>
                    <Form.Item label="Busca" {...formItemLayout}>
                        <Search placeholder="Buscar por palabra clave..." onSearch={value => console.log(value)} enterButton />
                    </Form.Item>
                </Box>
        </Animate>
            <Form >
                {Filtros}
                <br />

                Se Encontraron 10 Cotizaciones
               <br />

                {visible && <Button type={visibleEffect?'primary':'second'} onClick={showComponent}>
                    {!visibleEffect?'Ver Resultados':'Regresar al mapa'}
                </Button>}
                
                <div>
                <Animate showProp="visible" transitionName={effect} transitionAppear>
                            <AwesomeComponent visible={visibleEffect} children={children}/>
                        </Animate>
                </div>
            </Form>
        </Form>
    </>)
}


function AwesomeComponent({children,visible}) {
    
    return (
        <div style={{ display: visible ? 'inline-block' : 'none' }} className="awesome-component-wrap">
             {children}
      </div>
    );

}