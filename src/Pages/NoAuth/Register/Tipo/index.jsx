import React from 'react'
import {
    BrowserRouter as Router,
    useLocation,
    Redirect
} from "react-router-dom";
import FormContent from './form'
import NoMatch from '../../../NoMatch';

export default function Registro() {
    let tipo;
    let location = useLocation();

    if (location.pathname.toString().substr(10) === 'Proveedor') {
        tipo = 'Proveedor'
    } else if (location.pathname.toString().substr(10) === 'Constructora') {
        tipo = 'Constructora'
    } else {
        return  <NoMatch />
    }
    return (<>
        <FormContent tipo={tipo} />
    </>)
}