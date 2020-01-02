import React, {useState,useEffetc} from 'react'

import ReactDOM from 'react-dom'

function App(){
    return(
        <>
            Hola
        </>
    )
}

if(document.getElementById('react_root')){
    ReactDOM.render(<App/>, document.getElementById('react_root'))
}