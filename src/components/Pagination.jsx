import { useContext } from 'react';
import { Button } from './Button';
import { DataContext } from '../context/DataContext';

export const Pagination = () => {
  const { state, dispatch } = useContext(DataContext);

  const handlePreviousePageClick = () => {
    if (state.currentPage > 1) {
      dispatch({ type: 'SET_PAGE', payload: state.currentPage - 1 });
    }
  };
  const handleNextPageClick = () => {
    if (state.currentPage < state.totalPages) {
      dispatch({ type: 'SET_PAGE', payload: state.currentPage + 1 });
    }
  };

  return (
    <div className="flex gap-4 justify-center items-center mt-4">
      <Button onClick={() => handlePreviousePageClick()}>Previous</Button>
      <p className="text-center">
        Page {state.currentPage} of {state.totalPages}
      </p>
      <Button onClick={() => handleNextPageClick()}>Next</Button>
    </div>
  );
};
