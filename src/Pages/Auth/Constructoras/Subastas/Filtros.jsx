import React from 'react'
import { Button } from 'uxcore';


export default function Filtros({ showComponent, state }) {
    
    return (
        <div>
            <div style={{ height: '60px' }}>
                <Button type="outline" onClick={showComponent} style={{ marginLeft: '10px' }}>{!state.visible ? 'Aplicar Filtros' : 'Ocultar Filtros'}</Button>
            </div>
        </div>
    );

}
