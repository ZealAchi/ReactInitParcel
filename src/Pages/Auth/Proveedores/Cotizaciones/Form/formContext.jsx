import React, { useState, createContext } from 'react';
import { toast } from 'react-toastify';

export const DataContextForProveedores = createContext();

function DataContextForProveedoresProvider(props, context) {
    const { children } = props
    const [state, setState] = useState({
        estado: undefined,
        pais: undefined,
        clicked: '',
        hovered: '',
        focused: ''
    })
    const [visible, setVisible] = useState(true)
    const [effect, setEffect] = useState('fade')

    function ChangeVisible(){
        setVisible(!visible)
    }
    const {pais,estado}=state

    const seleccionarPais = ({ attributes }) => {
        const name = attributes.name.value;
        if (pais !== undefined) {
            toast.error("Ya has eligido un pais.");
        } else {
            toast.success("Has seleccionado " + name + ".");
            setState({ ...state, pais: name })
        }
    }
    const seleccionarEstado = ({ attributes }) => {
        const name = attributes.name.value;
        toast.success("Has seleccionado " + name + ".");
        setState({ ...state, estado: name })

    }
    const layerPropsPais = {
        onMouseEnter: ({ target }) => setState({ ...state, hovered: target.attributes.name.value }),
        onMouseLeave: ({ target }) => setState({ ...state, hovered: '' }),

        onFocus: ({ target }) => setState({ ...state, focused: target.attributes.name.value }),
        onBlur: ({ target }) => setState({ ...state, focused: '' }),
        onClick: ({ target }) => { setState({ ...state, clicked: target.attributes.name.value }); seleccionarPais(target) },
    };
    const layerPropsEstados = {
        onMouseEnter: ({ target }) => setState({ ...state, hovered: target.attributes.name.value }),
        onMouseLeave: ({ target }) => setState({ ...state, hovered: '' }),
        onFocus: ({ target }) => setState({ ...state, focused: target.attributes.name.value }),
        onBlur: ({ target }) => setState({ ...state, focused: '' }),
        onClick: ({ target }) => { setState({ ...state, clicked: target.attributes.name.value }); seleccionarEstado(target) },
    }

    return (
        <DataContextForProveedores.Provider value={{ ...state,visible,effect,ChangeVisible:ChangeVisible, layerPropsEstados: layerPropsEstados, layerPropsPais: layerPropsPais, seleccionarPais: seleccionarPais, seleccionarEstado: seleccionarEstado }}>
            {children}
        </DataContextForProveedores.Provider>
    );

}

export default DataContextForProveedoresProvider;