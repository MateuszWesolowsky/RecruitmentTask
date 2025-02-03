import { ErrorMessage } from '../components/ErrorMessage';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Pagination } from '../components/Pagination';
import { PeopleTableList } from '../components/PeopleTableList';
import { Spinner } from '../components/Spinner';
import { useFetchData } from '../hooks/useFetchData';

export const HomePage = () => {
  const state = useFetchData();
  return (
    <div className="p-1 sm:p-4 mt-8 ">
      <Header />
      <Navigation />
      {state.loading ? <Spinner /> : <PeopleTableList />}
      <ErrorMessage error={state.error} />
      <Pagination />
    </div>
  );
};
