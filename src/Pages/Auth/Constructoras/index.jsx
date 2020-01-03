import React from "react";
import { Tabs } from 'antd';
import Cotizaciones from './Cotizaciones';
const { TabPane } = Tabs;

export default function Constructoras(){
    return(<>
    <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Contizaciones" key="1">
        <Cotizaciones/>
      </TabPane>
      <TabPane tab="Subastas" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab="Reportes" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  </div>
    </>)
}