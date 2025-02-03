import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

export const FilterInput = () => {
  const { state, dispatch } = useContext(DataContext);
  const [search, setSearch] = useState('');

  console.log(state);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length === 0) return;

    dispatch({ type: 'FETCH_START' });

    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${value}`,
      );

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
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  return (
    <input
      type="text"
      value={search}
      placeholder="Search by name"
      onChange={handleInputChange}
      className="w-full px-4 py-2 text-gray-700 border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};
