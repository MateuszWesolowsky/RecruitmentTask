import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

export const SingleViewPage = () => {
  const { id } = useParams();
  const { state } = useContext(DataContext);
  console.log(state.data);

  return <div>{id}</div>;
};
