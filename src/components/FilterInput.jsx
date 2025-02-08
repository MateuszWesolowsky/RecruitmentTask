import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

export const FilterInput = () => {
  const { state, dispatch } = useContext(DataContext);
  const [controller, setController] = useState(null);

  const handleInputChange = async (e) => {
    const value = e.target.value;

    dispatch({ type: 'SET_SEARCH_VALUE', payload: value });

    if (!value) return;

    if (controller) {
      controller.abort();
    }

    const newController = new AbortController();
    setController(newController);

    dispatch({ type: 'FETCH_START' });

    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${value}`,
        {
          signal: newController.signal,
        },
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
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

      dispatch({
        type: 'SET_PAGE',
        payload: 1,
      });
    } catch (error) {
      if (error.name !== 'AbortError') {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    }
  };

  return (
    <input
      type="text"
      value={state.inputSearch}
      placeholder="Search by name"
      onChange={handleInputChange}
      className="w-full px-4 py-2 text-gray-700 border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};
