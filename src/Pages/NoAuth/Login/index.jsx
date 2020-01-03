import React, { useContext, useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { Modal } from 'antd';

import { AuthContext } from './../../../Context/AuthContext';
import WrappedHorizontalLoginForm from './form'

export default function Login() {
    const { isAuthenticated } = useContext(AuthContext);

    const [state, setState] = useState({
        visible: false
    })
    useEffect(()=>{
        if(isAuthenticated===true){
            handleOk()
        }else{
            
        }
    },[isAuthenticated])

    function showModal() {
        setState({
            visible: true,
        });
    };

    function handleOk(e) {

        setState({
            visible: false,
        });
    };

    function handleCancel(e) {
        setState({
            visible: false,
        });
    };

    return (
        <div>
            <Button color="inherit" onClick={showModal} >Iniciar Sesión</Button>
            <Modal
                title="Iniciar Sesión"
                visible={state.visible}
                onCancel={handleCancel}
                footer={null}
                bodyStyle={{background:"#636e72"}}
            >
                <WrappedHorizontalLoginForm />
            </Modal>
        </div>
    );
}
