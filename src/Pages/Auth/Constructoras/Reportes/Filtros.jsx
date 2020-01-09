import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import { Button } from 'antd';
import { Column, Tag } from 'rbx'

export default function Filtros({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Column.Group multiline centered breakpoint="mobile">
        <Column>
          <Button type="primary" size={'large'} onClick={toggle} style={{ marginBottom: '1rem' }}>
            Graficar por Filtros
      </Button></Column>
        <Column style={{background:'#fff'}}>
          Compras TOTALES
      </Column>
      </Column.Group>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
      {children}
    </div>
  );
}