import React from 'react'

import { Hero, Container, Title, Column } from 'rbx'
import { Button, Radio, Icon } from 'antd';
import Filtros from './Filtros'
import { Line } from 'react-chartjs-2';

const Semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
const DataSemana = [12, 13, 342, 234, 564, 756, 234]
const Mes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DataMes = [12, 12, 12, 3432, 1345, 123, 2353, 23, 123, 123, 123, 123]
const Año = ['2018', '2019', '2020']
const DataAño = [1212, 1211, 1219]

const OtherData = (label, data) => {

    return {
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
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

const CrearGrafica = ({ Tipo, Datos }) => {
    var label = 'Compras Totales'
    const lineData = {
        labels: Tipo,
        datasets: [
            OtherData(label, Datos),
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
                <Hero.Body style={{ padding: 'initial "!important' }}>
                    <Container>
                        <Column.Group multiline centered breakpoint="mobile">
                            <Column>
                                <CardReports >
                                    <Title>Semana</Title>
                                    <CrearGrafica Tipo={Semana} Datos={DataSemana} />
                                </CardReports>
                            </Column>
                            <Column>
                                <CardReports>
                                    <Title>Mes</Title>
                                    <CrearGrafica Tipo={Mes} Datos={DataMes} />
                                </CardReports>
                            </Column>
                            <Column size={12}>
                                <CardReports>
                                    <Title>Año</Title>
                                    <CrearGrafica Tipo={Año} Datos={DataAño} />
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