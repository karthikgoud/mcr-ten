import { createContext, useContext, useReducer } from "react";
import { inventoryData } from "../constants/products";

export const DataContext = createContext();

const reducer = (state, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "ADD_NEW":
      return [...state, { id: state.length + 1, ...payload }];

    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, inventoryData);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
