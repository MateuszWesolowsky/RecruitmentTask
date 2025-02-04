import { useNavigate } from 'react-router-dom';

export const PeopleTableRow = ({ data, index }) => {
  const navigate = useNavigate();
  const { name, height, mass, birth_year, eye_color, hair_color, skin_color } =
    data;

  const handleOnClick = (id) => {
    navigate(`/people/${id}`);
  };

  return (
    <tr
      className="text-center hover:bg-gray-100 cursor-pointer"
      onClick={() => handleOnClick(index)}
    >
      <td className="border border-gray-400 p-2">{name}</td>
      <td className="border border-gray-400 p-2">{height} cm</td>
      <td className="border border-gray-400 p-2">{mass} kg</td>
      <td className="border border-gray-400 p-2">{birth_year}</td>
      <td className="border border-gray-400 p-2">{eye_color}</td>
      <td className="border border-gray-400 p-2">{hair_color}</td>
      <td className="border border-gray-400 p-2">{skin_color}</td>
    </tr>
  );
};
