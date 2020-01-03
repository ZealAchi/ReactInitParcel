import React, { useState  } from 'react'
import { Button as Button2 , Modal } from 'antd';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      padding: '3rem',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
function Register() {
    const [state, setState] = useState({
        visible: false
    })

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
    const classes = useStyles();

    return (
        <div style={{textAlign:'-webkit-center'}}>
            <Button color="inherit" onClick={showModal} >Registrate</Button>
            <Modal
                title="Registrate"
                visible={state.visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                bodyStyle={{background:"#636e72"}}
            ><Card className={classes.card}>
               <Link to= {`/Register/${'Proveedor'}`}>
                    <Button2 type="primary" onClick={handleOk} block>Registrate como Proveedor</Button2>
               </Link>
               <div style={{textAlign:'-webkit-center'}}>
                    o como
               </div>
               <Link to= {`/Register/${'Constructora'}`}>
               <Button2 type="dashed" onClick={handleOk} block>Registrate como constructora</Button2>
               </Link>
               </Card>
            </Modal>
        </div>
    );
}


export default Register;