import { BackTop } from "antd";
import React from "react";

import ReactDOM from "react-dom";

import client from "./apolloClient";

import AuthContextProvider from "./Context/AuthContext";
import Route from "./Routes";
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';


import { ApolloProvider } from "@apollo/react-hooks";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Fab } from '@material-ui/core';
import { ToastContainer } from 'react-toastify'
import DataContextForProveedoresProvider from "./Pages/Auth/Proveedores/Cotizaciones/Form/formContext";
import EffectContextProvider from "./Context/EffectContext";

import "./Styles/ImportCss.scss";

function App() {
    return (
        <EffectContextProvider>
            <ApolloProvider client={client}>
                <CssBaseline />
                <ToastContainer />
                <AuthContextProvider>
                    <DataContextForProveedoresProvider>
                        <Route>
                            <BackTop>
                                <div className="ant-back-top-inner">
                                    <Fab color="primary" aria-label="add">
                                        <VerticalAlignTopIcon />
                                    </Fab>
                                </div>
                            </BackTop>
                        </Route>
                    </DataContextForProveedoresProvider>
                </AuthContextProvider>
            </ApolloProvider>
        </EffectContextProvider>
    )
}

if (document.getElementById('react_root')) {
    ReactDOM.render(<App />, document.getElementById('react_root'))
}