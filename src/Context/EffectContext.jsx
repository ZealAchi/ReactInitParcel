import React, { useState, createContext } from "react";


export const EffectContext = createContext();

function EffectContextProvider(props) {
  const { children } = props;
 
    const [state, setState] = useState({
        visible: false,
        effect: 'threeSlit',
    })
    
    
  function showComponent() {
    setState({
      visible: !state.visible,
    });
  }
  function handleChange(value) {
    alert(value)
    setState({
      ...state,
      effect: value,
    });
    alert(state.effect)
  }
  return (
    <EffectContext.Provider
      value={{ ...state, showComponent: showComponent,handleChange:handleChange }}
    >
      {children}
    </EffectContext.Provider>
  );
}

export default EffectContextProvider;
