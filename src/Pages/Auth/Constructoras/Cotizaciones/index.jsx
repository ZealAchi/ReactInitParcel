import React, { useState } from "react";
import { Table, Divider, Tag, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Hero, Container, Title, Column } from 'rbx'
import { Calendar, Form } from 'uxcore';
import { Box } from '@material-ui/core';
import ItemProyecto from "../../Proveedores/Cotizaciones/Proyecto/item";
import Filtros from "./Filtros";

import { Animate } from 'uxcore';
import CustomizedRadios from "./activos";

export default function index() {
  const [state, setState] = useState({
    value: '2016-01-02',
    visible: false,
    effect: 'fade',
  })

  function showComponent() {
    setState({
      ...state,
      visible: !state.visible,
    });
  }

  function handleChange(value) {
    setState({
      ...state,
      effect: value,
    });
  }
  const {
    InputFormField: Input,
    DateFormField: Date,
    TextAreaFormField: TextArea,
    OtherFormField: Other,
  } = Form;

  // function onSelect(value) {
  //   console.log(value);
  //   setState({
  //     ...state,
  //     value,
  //   });
  // }

  return (<>


    {/* <Table columns={columns} dataSource={data} style={{ padding: '2rem' , background:'#fff'}} /> */}
    <Hero color="white">
      <Hero.Body>
        <Container>
          <Title>Mis Proyectos</Title>
          <Title as="h2" subtitle>
            Total de Proyectos:14
      </Title>
          <Link to="/Cotizacion/Proyecto/Nuevo">
            <Button type="primary">Crear Proyecto</Button>
          </Link>
          <Box>
            <Column.Group>
              <Column>

                <Form className="demo-basic-form">
                  Busca tu Proyecto
            <Input jsxname="theme" jsxlabel="Busca tu Proyecto" jsxplaceholder="Escribe el nombre de tu Proyecto..." />
                </Form>
              </Column>
              <Column>
                <Filtros showComponent={showComponent} handleChange={handleChange} state={state}
                />
              </Column>
              <Column>
              </Column>
            </Column.Group>
            <Animate showProp="visible" transitionName={state.effect} transitionAppear>
              <Filters visible={state.visible} />
            </Animate>
          </Box>

          <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">

            <Column.Group multiline centered style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: ' stretch', margin: '-1.8em 0px 1em' }} breakpoint="mobile">
              {GetAllProyectos.map((item, i) => <Column key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >

                <Box component="span" m={1}> <ItemProyecto item={item} />
                </Box></Column>)}
            </Column.Group>
          </Box>

        </Container>
      </Hero.Body>
    </Hero>
  </>)
}



function Filters({ visible }) {

  return (

    <div class="container" style={{ display: visible ? '' : 'none' }} style={{ background: 'transparent' }}>
      <div class="notification">
        <Column.Group>
        <Column>
            <CustomizedRadios />
          </Column>
          <Column>
            <CustomizedRadios />
          </Column>
        </Column.Group>
      </div>
    </div>



  );

}


const GetAllProyectos = [
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra tiene como finalidad.....",
    Imagen: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra tiene como finalidad.....",
    Imagen: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra tiene como finalidad.....",
    Imagen: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra tiene como finalidad.....",
    Imagen: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra tiene como finalidad.....",
    Imagen: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra tiene como finalidad.....",
    Imagen: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra tiene como finalidad.....",
    Imagen: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra tiene como finalidad.....",
    Imagen: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra tiene como finalidad.....",
    Imagen: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra tiene como finalidad.....",
    Imagen: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra tiene como finalidad.....",
    Imagen: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra tiene como finalidad.....",
    Imagen: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra tiene como finalidad.....",
    Imagen: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
]