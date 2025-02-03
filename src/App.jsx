import { DataProvider } from './context/DataProvider';
import './index.css';
import { HomePage } from './pages/HomePage ';

function App() {
  return (
    <DataProvider>
      <HomePage />
    </DataProvider>
  );
}

export default App;
