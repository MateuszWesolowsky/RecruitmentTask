import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { PeopleTableRow } from './PeopleTableRow';

export const PeopleTableList = () => {
  const { state } = useContext(DataContext);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full bg-white border border-gray-300 shadow-lg">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Height</th>
            <th className="border border-gray-400 p-2">Mass</th>
            <th className="border border-gray-400 p-2">Birth Year</th>
            <th className="border border-gray-400 p-2">Eye color</th>
            <th className="border border-gray-400 p-2">Hair color</th>
            <th className="border border-gray-400 p-2">Skin color</th>
          </tr>
        </thead>
        <tbody>
          {state.data?.map((person) => (
            <PeopleTableRow data={person} key={Math.random()} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
