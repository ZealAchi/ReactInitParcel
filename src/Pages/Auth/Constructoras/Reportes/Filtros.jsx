import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import { Column, Tile, Title, Content, Notification, Container } from 'rbx'
import { Badge } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { AutoComplete, DatePicker, Button } from 'antd';



export default function Filtros({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ background: '#fff' }} >
      <TITLESs toggle={toggle} />
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>

          <Notification  textAlign="centered">

            <Tile kind="ancestor">
              <Tile kind="parent">
                <Tile as={Box} kind="child">
                  <Calendar label="Filtar Por Mes:" placeholder="Selecciona un Mes" />
                </Tile>
              </Tile>
              <Tile kind="parent">
                <Tile as={Box} kind="child">

                  <AutoCompletar dataSource={Pais} placeholder="Escribe un Pais" label="Pais" />
                </Tile>
              </Tile>
              <Tile kind="parent">
                <Tile as={Box} kind="child">
                  <AutoCompletar dataSource={Estado} placeholder="Escribe un Estado" label="Estado" />
                </Tile>
              </Tile>
            </Tile>
</Notification>

            <Column.Group>
              <Column>
                <Notification  textAlign="centered">
                  <AutoCompletar dataSource={Proveedor} placeholder="Escribe un Proveedor" label="Proveedor" />
                </Notification>
              </Column>
              <Column>
                <Notification  textAlign="centered">
                  <AutoCompletar dataSource={Material} placeholder="Escribe un Material" label="Materiales" />
                </Notification>
              </Column>

            </Column.Group>

          </CardBody>
        </Card>
      </Collapse>
      {children}
    </div>
  );
}

const TITLESs = ({ toggle }) => {
  return (<Container>
    <Tile kind="ancestor">
      <Tile kind="parent">
        <Tile as={Box} kind="child">
          <Box fontSize="h6.fontSize">Compras Totales al Mes: <Badge color="secondary">8</Badge></Box>
        </Tile>
      </Tile>
      <Tile kind="parent">
        <Tile as={Box} kind="child">
          <Box fontSize="h6.fontSize">Compras Totales al Año: <Badge color="secondary">12</Badge></Box>
        </Tile>
      </Tile>
      <Tile kind="parent">
        <Tile as={Box} kind="child">
          <Box fontSize="h6.fontSize">Compras Totales a la Semana: <Badge color="secondary">6</Badge></Box>
        </Tile>
      </Tile>
    </Tile>
    <Tile kind="ancestor">
      <Tile vertical size={9}>
        <Tile>
          <Tile kind="parent">
            <Tile as={Box} kind="child">
              <Button type="primary" size={'large'} onClick={toggle} style={{ marginBottom: '1rem' }}>
                Graficar por Filtros
            </Button>
            </Tile>
          </Tile>
        </Tile>
      </Tile>
    </Tile>
  </Container>)
}















const { MonthPicker } = DatePicker;

function Calendar({ label, placeholder }) {

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <Box fontSize="h6.fontSize">{label} <MonthPicker onChange={onChange} placeholder={placeholder} /></Box>
  )
}






















const Pais = ['Mexico', 'Colombia', 'Peru', 'Argentina']
const Estado = ['Hidalgo', 'Oaxaca', 'Estado de Mexico', 'Queretaro', 'Monterrey']
const Proveedor = ['Jose', 'Misael', 'Antonio', 'Fernando']
const Material = ['Cemento', 'Carretilla']





function AutoCompletar({ dataSource, placeholder, label }) {
  return (
    <Box fontSize="h6.fontSize">{label}: <AutoComplete
      dataSource={dataSource}
      style={{ width: 200 }}
      placeholder={placeholder}
      filterOption={(inputValue, option) =>
        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    /></Box>
  )
}