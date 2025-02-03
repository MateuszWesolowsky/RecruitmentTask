import { useReducer } from 'react';
import { DataContext } from './DataContext';
import { dataReducer, initialState } from '../reducer/dataReducer';

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
