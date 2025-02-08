import { useNavigate } from 'react-router-dom';

export const PeopleTableRow = ({
  data: {
    name,
    height,
    mass,
    birth_year,
    eye_color,
    hair_color,
    skin_color,
    url,
  },
}) => {
  const navigate = useNavigate();

  const handleOnClick = (url) => {
    const id = url.split('/').at(-2);
    navigate(`/people/${id}`);
  };

  return (
    <tr
      className="text-center hover:bg-gray-100 cursor-pointer"
      onClick={() => handleOnClick(url)}
    >
      <td className="border border-gray-400 p-2 whitespace-nowrap">{name}</td>
      <td className="border border-gray-400 p-2 whitespace-nowrap">
        {height} cm
      </td>
      <td className="border border-gray-400 p-2 whitespace-nowrap">
        {mass} kg
      </td>
      <td className="border border-gray-400 p-2 whitespace-nowrap">
        {birth_year}
      </td>
      <td className="border border-gray-400 p-2 whitespace-nowrap">
        {eye_color}
      </td>
      <td className="border border-gray-400 p-2 whitespace-nowrap">
        {hair_color}
      </td>
      <td className="border border-gray-400 p-2 whitespace-nowrap">
        {skin_color}
      </td>
    </tr>
  );
};
