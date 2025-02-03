import { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

export const useFetchData = () => {
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_START' });

      try {
        const response = await fetch(
          `https://swapi.dev/api/${state.endpoint}/?page=${state.currentPage}`,
        );
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();

        dispatch({
          type: 'FETCH_SUCCESS',
          payload: {
            data: data.results,
            count: data.count,
            totalPages: Math.ceil(data.count / 10),
          },
        });
      } catch (error) {
        console.log(error, 'smg');
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchData();
  }, [state.endpoint, state.currentPage, dispatch]);

  return state;
};
