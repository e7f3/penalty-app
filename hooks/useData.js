import { useContext } from "react";
import { DataContext } from "../context/dataContext";

/*  Хук для работы с контекстом */
export const useData = () => useContext(DataContext);
