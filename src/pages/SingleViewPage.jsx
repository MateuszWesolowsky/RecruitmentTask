import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { CharacterDetails } from '../components/CharacterDetails';
import { useParams } from 'react-router-dom';

export const SingleViewPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch(`https://swapi.dev/api/people/${id}`);

        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();

        setDetails(data);
      } catch (e) {
        setError('Wystąpił błąd podczas ładowania danych..');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <div className="p-1 sm:p-4 mt-8 ">
      <Header
        title={'Szczegóły Postaci'}
        description={
          'Poznaj wszechświat Gwiezdnych Wojen! Przeglądaj dane dotyczące postaci. Skorzystaj z zakładek, aby przełączać się między kategoriami i odkrywać fascynujące informacje.'
        }
      />
      <CharacterDetails details={details} error={error} isLoading={isLoading} />
    </div>
  );
};
