import React, { memo, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  Layout,
  NoMatch,
  UnRegistered,
} from './../helpers/ConstRouters';
import { AuthContext } from '../Context/AuthContext';

import Blog from "../Pages/Blog";
import BlogCrear from "../Pages/Blog/Crear"
import MisPublicaciones from "../Pages/Blog/MisPubliciones";
import AdminUsers from "../Pages/Auth/Admin/Usuarios";
import Registro from '../Pages/NoAuth/Register/Tipo'
import Proveedores from "../Pages/Auth/Proveedores/";
import Constructoras from "../Pages/Auth/Constructoras";
import CotizacionCrearProyecto from "../Pages/Auth/Proveedores/Cotizaciones/Proyecto/crear";
import withSession from "../withSession";
import Subastas from "../Pages/Subastas";
import LandingPage from "../Pages/NoAuth/LandingPage";
import Categorias from "../Pages/Auth/Categorias";

// import AdminUsersCrete from "../Pages/Auth/Admin/Usuarios/crear";
const Root = ({ refetch, session }) => {
  const Context = useContext(AuthContext)
  const { isAuthenticated, typeUser, isAdmin: isAdministrator, setRefetch } = Context
  console.log("session", session)
  if (session) {
    useEffect(() => {
      setRefetch(refetch, session)
    }, [])
  }
  return (
    <div style={{ background: '#fff' }}>
      {/* <LandingPage/> */}
      <Router>
        <Layout>
          <Switch>
            {/* <Route path="/Subastas" exact render={() => <Subastas />} /> */}
            <Route path="/" exact render={() => {
              if (typeUser === 'Proveedor') {
                return <Proveedores />
              } else if (typeUser === 'Constructora') {
                return <Constructoras />
              }

              else {
                return <UnRegistered />
              }
            }} />
            <Route path="/Cotizacion/Proyecto/Nuevo" exact render={() => {
              if (typeUser === 'Constructora') {
                return <CotizacionCrearProyecto />
              } else {
                return <NoMatch />
              }
            }} />
            <Route path="/Constructora" exact render={() => {
              // if(typeUser==='Proveedor'){
              return <Constructoras />
            }} />

            <Route path="/Register/:id" render={() => <Registro refetch={refetch} />} />
            <Route path="/Categorias" render={() => <Categorias />} />

            <Route path="/Blog" exact render={() => <Blog />} />
            <Route path="/Proveedores" exact render={() => <Proveedores />} />
            <Route path="/Blog/Crear" render={() => {
              if (isAuthenticated) {
                return <BlogCrear />
              } else {
                return <Redirect to='/blog' />
              }
            }}
            />
            <Route path="/blog/misPublicaciones/Editar" render={() => {
              if (isAuthenticated) {
                return <BlogCrear />
              } else {
                return <Redirect to='/blog' />
              }
            }}
            />
            <Route path="/Blog/MisPublicaciones" render={() => {
              if (isAuthenticated) {
                return <MisPublicaciones />
              } else {
                return <NoMatch />
              }
            }}
            />
            <Route path="/admin/users" exact render={() => {
              if (isAuthenticated) {
                if (isAdministrator) {
                  return <AdminUsers />
                } else {
                  return <NoMatch />
                }
              } else {
                return <NoMatch />
              }
            }
            } />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>)
}
export default memo(function Routes() {
  // return <Root/>
  return <RootWithSession />
})

const RootWithSession = withSession(Root)