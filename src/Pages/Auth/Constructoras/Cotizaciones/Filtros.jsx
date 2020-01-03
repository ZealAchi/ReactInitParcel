import React from 'react'
import { Button } from 'uxcore';
import { Select } from 'uxcore';
const { Option } = Select;

export default function Filtros({showComponent,handleChange,state}) {
    


    const effects = ['fade', 'slideRight', 'slideDown', 'newspaper', 'fall', 'threeFallH', 'threeFallV', 'threeSign', 'superScale', 'threeSlit', 'threeRotateBottom', 'threeRotateLeft'];
    return (
        <div>
            <div style={{ height: '60px' }}>
                <Select style={{ width: '200px' }} placeholder="切换动画效果" onChange={handleChange} value={state.effect}>
                    {effects.map(item => <Option key={item}>{item}</Option>)}
                </Select>
                <Button type="outline" onClick={showComponent} style={{ marginLeft: '10px' }}>{state.visible ? 'Aplicar Filtros': 'Ocultar Filtros'}</Button>
            </div>
        </div>
    );

}
