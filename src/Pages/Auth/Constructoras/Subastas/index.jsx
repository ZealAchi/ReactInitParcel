import React, { useState, useContext } from "react";
import { Table, Divider, Tag, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Hero, Container, Title, Column } from 'rbx'
import { Calendar, Form } from 'uxcore';
import { Box } from '@material-ui/core';
import ItemProyecto from "../../Proveedores/Cotizaciones/Proyecto/item";
import Filtros from "./Filtros";

import { Animate } from 'uxcore';
import CustomizedRadios from "./activos";
import { EffectContext } from "../../../../Context/EffectContext";


export default function index() {
  const [state, setState] = useState({
    value: '2020-01-02',
    // visible: false,
    // effect: 'fade',
  })
  const { visible, effect, showComponent, handleChange } = useContext(EffectContext)

  // function showComponent() {
  //   setState({
  //     ...state,
  //     visible: !visible,
  //   });
  // }

  const {
    InputFormField: Input,
    DateFormField: Date,
    TextAreaFormField: TextArea,
    OtherFormField: Other,
  } = Form;


  return (<>
    <Hero color="white">
      <Hero.Body>
        <Container>
          <Title>Subastas</Title>
          <Title as="h2" subtitle>
            Total de Proyectos:123
      </Title>
          <Link to="/Cotizacion/Proyecto/Nuevo">
            <Button type="primary">Crear Subasta</Button>
          </Link>
          <Box>
            <Column.Group>
              <Column>
                <Form className="demo-basic-form">
                  Busca tu Subasta
              <Input jsxname="theme" jsxlabel="Busca tu Subasta" jsxplaceholder="Escribe datos el nombre de la subasta..." />
                </Form>
              </Column>
              <Column>
                <Filtros showComponent={showComponent} handleChange={handleChange} state={{ ...state, visible, effect }}
                />
              </Column>
              <Column>
              </Column>
            </Column.Group>
            <Animate showProp="visible" transitionName={state.effect} transitionAppear>
              <Filters visible={visible} />
            </Animate>
          </Box>

          <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">

            <Column.Group multiline centered style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: ' stretch', margin: '-1.8em 0px 1em' }} breakpoint="mobile">
              {GetAllProyectos.map((item, i) => <Column key={i+Math.random()}
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



function Filters() {
  const { visible } = useContext(EffectContext)
  console.log(visible, visible ? 'muestrate' : 'oculatate')
  return (
    <div class="container" style={{ background: 'transparent', display: visible ? '' : 'none' }}>
      <div class="notification">
        <Column.Group>
          <Column>
            <CustomizedRadios
              data={{ title: "Estatus de las Subastas", defaultValue: "0", data: [{ label: 'activo', value: '2' }, { label: 'Inactivo', value: '1' }, { label: 'Activos/Inactivos', value: '0' }] }} />
          </Column>
          <Column>
            <Column.Group>
              <Column>
                {/* Datos de la constructora */}
              </Column>
              <Column>
                {/* Ordexxxn de compra */}
              </Column>
            </Column.Group>


          </Column>
          <Button style={{
            right: '16px',
            bottom: '16px',
            position: 'absolute'
          }} variant="outlined" color="primary">Aplicar Filtros</Button>
        </Column.Group>
      </div>
    </div>

  );

}


const GetAllProyectos = [
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra  tiene como finalidad.....",
    Imagen: "http://www.rabbsconstruction.com/images/construction-contractors.jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra  tiene como finalidad.....",
    Imagen: "https://rgbcltd.files.wordpress.com/2018/10/commercial-construction.jpg?w=660",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra  tiene como finalidad.....",
    Imagen: "http://fnbe0315darrentan.weebly.com/uploads/5/0/6/7/50679395/3316314_orig.jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra  tiene como finalidad.....",
    Imagen: "https://images.sipse.com/qv7Yxbh1u0WBTSiZoYZLukJqSYY=/800x497/smart/2019/02/01/1549040913576.tif",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra  tiene como finalidad.....",
    Imagen: "https://inopcon.com/wp1/wp-content/uploads/2017/02/254.jpg",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
  {
    Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
    Descripción: "Gendra  tiene como finalidad.....",
    Imagen: "https://www.cktedificaciones.com/wp-content/uploads/2015/10/teatro.png",
    CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
    "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
  },
]