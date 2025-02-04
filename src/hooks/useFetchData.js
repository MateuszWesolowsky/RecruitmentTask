import { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

export const useFetchData = () => {
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    const fetchAllData = async () => {
      dispatch({ type: 'FETCH_START' });
      let allCharacters = [];
      let nextPage = 'https://swapi.dev/api/people/?page=1';

      try {
        while (nextPage) {
          const response = await fetch(nextPage);
          if (!response.ok) {
            throw new Error(`Błąd: ${response.status}`);
          }
          const data = await response.json();

          allCharacters = [...allCharacters, ...data.results];
          nextPage = data.next;
        }

        dispatch({
          type: 'FETCH_SUCCESS',
          payload: {
            data: allCharacters,
            count: allCharacters.length,
            totalPages: Math.ceil(allCharacters.length / 10),
          },
        });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchAllData();
  }, [dispatch]);

  return state;
};
