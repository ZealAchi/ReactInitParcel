import React, { useState, createContext } from "react";


export const EffectContext = createContext();

function EffectContextProvider(props) {
  const { children } = props;
 
    const [state, setState] = useState({
        visible: false,
        effect: 'fade',
    })
    
    
  function showComponent() {
    setState({
      visible: !state.visible,
    });
  }

  return (
    <EffectContext.Provider
      value={{ ...state, showComponent: showComponent }}
    >
      {children}
    </EffectContext.Provider>
  );
}

export default EffectContextProvider;
