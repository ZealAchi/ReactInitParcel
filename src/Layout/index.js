import React,{memo} from 'react'
import Body from './Body';
import {withRouter} from 'react-router-dom'
import Header from './Header';
import Footer  from './Footer';

export default memo(withRouter(function Layout({children}) {
    return(
        <>
            <Header/>
            <Body style= {{position: 5}}> 
                {children}
            </Body>
            <Footer/>
        </>
    )
}));