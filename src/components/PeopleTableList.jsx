import { PeopleTableRow } from './PeopleTableRow';
import { Spinner } from '../components/Spinner';
import { useFetchData } from '../hooks/useFetchData';
import { ErrorMessage } from '../components/ErrorMessage';

export const PeopleTableList = () => {
  const state = useFetchData();

  const { data, loading, error } = state;

  if (loading) {
    return <Spinner />;
  }

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
          {data?.map((person, index) => (
            <PeopleTableRow data={person} index={index} key={Math.random()} />
          ))}
        </tbody>
      </table>
      {error && <ErrorMessage />}
    </div>
  );
};
