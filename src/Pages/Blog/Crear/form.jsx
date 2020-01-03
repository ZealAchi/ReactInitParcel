import React, { useState, useEffect } from 'react'
import { Card, Form, Upload, Icon, Button } from 'antd';
import { InputAntd as Input } from '../../../Components/Input';
import {
    BrowserRouter as Router,
    useLocation,
    Redirect
} from "react-router-dom";

import { Button as Button2 } from '@material-ui/core';
function RegistrationForm(props) {
    const { getFieldDecorator } = props.form;
    const { handleChange , setState,state } = props

    const normFile = e => {
        console.log('Upload event:', e);
        console.log('Upload event:',e.file.thumbUrl);
        
        if (Array.isArray(e)) {
            return e;
        }
        setState({...state, image:e.file.thumbUrl})
        return e && e.fileList;
    };


    let tipo;
    let location = useLocation();
    // /blog/misPublicaciones/Editars
    // console.log()

    if(location.pathname.toString().substr(23)==='Editar'){
        var actualizar=true
    }
    // console.log(location.pathname.toString().substr(10) === 'Proveedor')
     

    return (
        <div style={{ background: '#ECECEC', textAlign: 'left' }}>

            <Card title="Crear Nueva Publicación" bordered={false}>
                <Input
                    getFieldDecorator={getFieldDecorator}
                    label="Titulo"
                    handleChange={handleChange}
                    placeholder="Ingresa el titulo de la publicación"
                    message={'El Titulo no puede ir  nulo'}
                />
                <Input
                    label="Descripción"
                    handleChange={handleChange}
                    placeholder="Ingresa la descripción de la publicación"
                    message={'La descripción no puede ir  nulo'}
                />
                <Input
                    label="Link"
                    handleChange={handleChange}
                    placeholder="Ingresa el Link de la publicación"
                    message={'El Link no puede ir  nulo'}
                />

                <Form.Item label="Subir Imagen" extra="Selecciona una imagen para Subir">
                    {getFieldDecorator('SubirImagen', {
                        valuePropName: 'fileList',
                        getValueFromEvent: normFile,
                    })(
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button>
                                <Icon type="upload" /> Click para seleccionar su imagen
                            </Button>
                        </Upload>,
                    )}
                </Form.Item>
                <Button2 variant="contained" color="primary">{actualizar?'Actualizar Publicación':'Crear Publicación'}</Button2>

            </Card>

        </div>

    );

}


export default Form.create({ name: 'RegistrationForm' })(RegistrationForm);