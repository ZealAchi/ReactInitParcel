import jwt from "jsonwebtoken";
import React, { useState, createContext } from "react";
import { toast } from "react-toastify";
import client from "../apolloClient";

export const AuthContext = createContext();
const DataInit = {
  isAuthenticated: false,
  isAdmin: false,
  isMaster: false,
  name: "",
  lastName: "",
  token: "",
  user: "luis@mail.com",
  password: "127as127",
  typeUser: "",
  user: "",
  refetch: () => { },
  session: []
}
function AuthContextProvider(props, context) {
  const { children } = props;
  const [state, setState] = useState(DataInit);

  function handleChange(name, valor) {
    event.preventDefault();
    if (name === "username") setState({ ...state, user: valor });
    if (name === "password") setState({ ...state, password: valor });
  }
  function logout() {
    localStorage.setItem("token", '');
    setState({ ...DataInit });
    client.clearStore()

  }
  function setRefetch(value, data) {
    if (data.activeUser) {
      const { role = "", name = "", isAdmin = "", lastName = "", secondLastName = "" } = data.activeUser
      setState({
        ...state,
        refetch: value,
        session: data,
        token: localStorage.getItem('token'),
        isAuthenticated: name ? true : false,
        isAdmin: isAdmin,
        typeUser: role,
        name: name,
        lastName: lastName,
        secondLastName: secondLastName,
      })
    }
  }
  function handleSubmit(event, signupUser, history) {
    event.preventDefault();

    signupUser()
      .then(async ({ data }) => {
        const { login } = data;
        const decoded = jwt.verify(login.token, "10Naaaite10");
        localStorage.setItem("token", login.token);
        setState({
          ...state,
          token: login.token,
          isAuthenticated: true,
          isAdmin: decoded.isAdmin,
          typeUser: decoded.role,
          name: decoded.name,
          lastName: decoded.lastName,
          secondLastName: decoded.secondLastName,
          user: '',
          password: ''
        });

        await props.refetch();

        history.push('/')
      })
      .catch(error => {
        try {

          if (error.graphQLErrors[0].message) {
            toast.error(error.graphQLErrors[0].message);
          } else {
            console.log(error)
          }
        } catch (error) {
          // toast.error('No se pudo establecer una conexión segura con el servidor!');
          console.log(error);
        }
      });
  }

  return (
    <AuthContext.Provider
      value={{ ...state, handleChange: handleChange, handleSubmit, logout, setRefetch: setRefetch }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
