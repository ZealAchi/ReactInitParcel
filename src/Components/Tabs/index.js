import React from 'react'

import { Tabs as Tab } from 'antd';
const { TabPane } = Tab;
export default function Tabs({ datos }) {
    return (
        <Tab type="card">
            {datos.map((dato, index) => {
                return (
                    <TabPane tab={dato.title} key={index}>
                        <dato.content />
                    </TabPane>
                )
            })}

        </Tab>
    )
}