import { PeopleTableRow } from './PeopleTableRow';
import { Spinner } from '../components/Spinner';
import { useFetchData } from '../hooks/useFetchData';
import { ErrorMessage } from '../components/ErrorMessage';

export const PeopleTableList = () => {
  const { data, loading, error } = useFetchData();

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-white border border-gray-300 shadow-lg">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border border-gray-400 p-2 whitespace-nowrap">
              Name
            </th>
            <th className="border border-gray-400 p-2 whitespace-nowrap">
              Height
            </th>
            <th className="border border-gray-400 p-2 whitespace-nowrap">
              Mass
            </th>
            <th className="border border-gray-400 p-2 whitespace-nowrap">
              Birth Year
            </th>
            <th className="border border-gray-400 p-2 whitespace-nowrap">
              Eye color
            </th>
            <th className="border border-gray-400 p-2 whitespace-nowrap">
              Hair color
            </th>
            <th className="border border-gray-400 p-2 whitespace-nowrap">
              Skin color
            </th>
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
