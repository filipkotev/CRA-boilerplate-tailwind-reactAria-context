import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext()

const initialState = {
    user: true,
}

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(true);

  // const handleClick = (clicked) => {
  //   setIsClicked({...initialState, [clicked]: true})
  // }

    return (
        <StateContext.Provider
            value={{ user, setUser , /** handleClicke */}}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)