import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Pagination } from '../components/Pagination';
import { PeopleTableList } from '../components/PeopleTableList';

export const HomePage = () => {
  return (
    <div className="p-1 sm:p-4 mt-8 ">
      <Header
        title={'Star Wars Data Explorer'}
        description={
          'Poznaj wszechświat Gwiezdnych Wojen! Przeglądaj dane dotyczące postaci. Skorzystaj z zakładek, aby przełączać się między kategoriami i odkrywać fascynujące informacje.'
        }
      />
      <Navigation />
      <PeopleTableList />
      <Pagination />
    </div>
  );
};
