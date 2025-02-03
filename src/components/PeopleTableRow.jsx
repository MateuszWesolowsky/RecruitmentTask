export const PeopleTableRow = ({ data }) => {
  return (
    <>
      <tr className="text-center hover:bg-gray-100">
        <td className="border border-gray-400 p-2">{data.name}</td>
        <td className="border border-gray-400 p-2">{data.height} cm</td>
        <td className="border border-gray-400 p-2">{data.mass} kg</td>
        <td className="border border-gray-400 p-2">{data.birth_year}</td>
        <td className="border border-gray-400 p-2">{data.eye_color}</td>
        <td className="border border-gray-400 p-2">{data.hair_color}</td>
        <td className="border border-gray-400 p-2">{data.skin_color}</td>
      </tr>
    </>
  );
};
