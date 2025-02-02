import { PeopleTableRow } from './PeopleTableRow';

export const PeopleTableList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full bg-white border border-gray-300 shadow-lg">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Height</th>
            <th className="border border-gray-400 p-2">Mass</th>
            <th className="border border-gray-400 p-2">Birth Year</th>
          </tr>
        </thead>
        <tbody>
          <PeopleTableRow />
        </tbody>
      </table>
    </div>
  );
};
