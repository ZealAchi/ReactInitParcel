import React from 'react'

import { Hero, Container, Title, Column } from 'rbx'
import { Button, Radio, Icon } from 'antd';
import Filtros from './Filtros'
import { Line } from 'react-chartjs-2';

const Semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
const DataSemana = [12, 13, 342, 234, 564, 756, 234]
const DataSemana2 = [2, 3, 4, 2, 6, 5, 4]
const Mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const DataMes = [12, 12, 12, 3432, 1345, 123, 2353, 23, 123, 123, 123, 123]
const DataMes2 = [1, 2, 13, 32, 13, 23, 53, 23, 12, 13, 23, 12]
const Año = ['2018', '2019', '2020']
const DataAño = [1212, 1211, 1219]
const DataAño2 = [112, 121, 100]

const OtherData = (label, data, color) => {

    return {
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: color,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        label: label,
        data: data
    }
}

const CrearGrafica = ({ Tipo, Datos, Datos2 }) => {
    var label = 'Compras'
    var label2 = 'Cotizaciones'
    var colo1 = '#273c75'
    var colo2 = '#e84118'
    const lineData = {
        labels: Tipo,
        datasets: [
            OtherData(label, Datos, colo1),
            OtherData(label2, Datos2, colo2),
        ]
    }
    return (
        <Line data={lineData} />
    )
}
export default function () {
    return (<>
        <Filtros>
            <Hero color="white">
                <Hero.Body >
                    <Container>
                        <Column.Group multiline centered breakpoint="mobile">
                            <Column>
                                <CardReports >
                                    <Title>Semana</Title>
                                    <CrearGrafica Tipo={Semana} Datos={DataSemana} Datos2={DataSemana2} />
                                </CardReports>
                            </Column>
                            <Column>
                                <CardReports>
                                    <Title>Mes</Title>
                                    <CrearGrafica Tipo={Mes} Datos={DataMes} Datos2={DataMes2} />
                                </CardReports>
                            </Column>
                            <Column size={12}>
                                <CardReports>
                                    <Title>Año</Title>
                                    <CrearGrafica Tipo={Año} Datos={DataAño} Datos2={DataAño2} />
                                </CardReports>
                            </Column>
                        </Column.Group>
                    </Container>
                </Hero.Body>
            </Hero>
        </Filtros>

    </>)
}

const CardReports = ({ children }) => {
    return (

        <div className="ant-card">
            {children}
        </div>

    )
}