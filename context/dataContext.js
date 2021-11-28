import React, { createContext } from "react";
import PenaltyStore from "../stores/PenaltyStore";

// Создание контекста
export const DataContext = createContext(null);

// Store для штрафа
const penaltyStore = new PenaltyStore();

/*  Компонент Context Provider  */
function DataProvider({ children }) {
  return (
    <DataContext.Provider value={{ penaltyStore }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
