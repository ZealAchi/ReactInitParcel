import React from "react";
import { Box, Button } from '@material-ui/core';

import Item from "./Proyecto/item";
import { Column } from "rbx";
import Form from './Form'
export default function index() {
    return (<>
        <Form>
            <ListarProyectos />
        </Form>
    </>
    )
}

export function ListarProyectos() {
    return (<Column.Group multiline centered style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: ' stretch', margin: '-1.8em 0px 1em' }} breakpoint="mobile">
        {GetAllProyectos.map((item, i) => <Column key={i}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >

            <Box component="span" m={1}> <Item item={item} />
            </Box></Column>)}
    </Column.Group>
    )
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