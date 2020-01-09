import React from "react";
import { Tabs } from 'antd';
import Cotizaciones from './Cotizaciones';
import Subastas from './Subastas';
import Reportes from './Reportes';
const { TabPane } = Tabs;

export default function Constructoras(){
    return(<>
    <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Contizaciones" key="1">
        <Cotizaciones/>
      </TabPane>
      <TabPane tab="Subastas" key="2">
      <Subastas/>
      </TabPane>
      <TabPane tab="Reportes" key="3">
        <Reportes/>
      </TabPane>
    </Tabs>
  </div>
    </>)
}