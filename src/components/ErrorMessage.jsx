export const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-red-100 border w-fit border-red-400 text-red-700 px-4 py-3 rounded mx-auto">
      <strong className="font-bold">Błąd podczas pobierania danych!</strong>
      <span className="block sm:inline ml-2">{message}</span>
    </div>
  );
};
