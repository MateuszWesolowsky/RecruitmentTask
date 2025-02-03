// import { Link, NavLink } from 'react-router-dom';

//owinąc w routeer

export const Navigation = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mb-3">
      <div className="flex gap-2">
        <p>Characters</p>
        <p>Planets</p>
      </div>
      <div>
        <input
          type="text"
          className="w-full px-4 py-2 text-gray-700 border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
};
