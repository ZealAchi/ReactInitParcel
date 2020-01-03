import React from 'react'
import {
  BrowserRouter as Router,
  useLocation,
  Link
} from "react-router-dom";


import { Button } from 'uxcore';
import { EmptyData } from 'uxcore';

export default function NoMatch() {
  let location = useLocation();
  
    return (
      

<div className="fillErrorDemo">
<div className="errorLeft">
  <EmptyData style={{ width: '220px', height: '220px' }} type="large" />
</div>
<div className="errorRight">
  <div className="tips">
    <p className="tipsTitle">La página salió mal</p>
    <p className="errorTips">
    La página que visitó no existe. Confirme el enlace y vuelva a intentarlo. En caso de emergencia, vaya a 
    <a href="https://www.google.com">www.google.com</a>para obtener ayuda.</p>
    <div className="errorButtons">
    <Link to="/">
    <Button type="primary">Volver al Inicio</Button>
    </Link>
    </div>
  </div>
</div>
</div>
    );
  }





