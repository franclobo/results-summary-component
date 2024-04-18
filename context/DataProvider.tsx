'use client';
import { createContext, useState, useEffect } from 'react';
import data from '../public/data.json';

type ItemType = {
  category: string;
  score: number;
  icon: string;
};

export type DataContextType = {
  data: ItemType[];
};

type DataProviderProps = {
  children: React.ReactNode;
};

export const DataContext = createContext<DataContextType>({
  data: [],
});

const DataProvider = ({ children }: DataProviderProps) => {
  const [state, setState] = useState<ItemType[]>([]);

  useEffect(() => {
    setState(data);
  }, []);

  return (
    <DataContext.Provider value={{ data: state }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
