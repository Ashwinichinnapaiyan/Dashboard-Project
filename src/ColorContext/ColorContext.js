import React, { createContext, useReducer } from 'react';

// Initial state to manage dark mode
const INITIAL_STATE = {
  darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
};

// Reducer function to handle dark mode actions
const darkReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      const newMode = !state.darkMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return { darkMode: newMode };
    default:
      return state;
  }
};

// Create and export ColorContext
export const ColorContext = createContext(INITIAL_STATE);

// Context Provider to wrap around the application
export function ColorContextProvider({ children }) {
  const [state, dispatch] = useReducer(darkReducer, INITIAL_STATE);

  return (
    <ColorContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
}
