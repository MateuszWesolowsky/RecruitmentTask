import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { SingleViewPage } from './pages/SingleViewPage';
import { DataProvider } from './context/DataProvider.jsx';
import App from './App.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
  {
    element: <Navigate to="/people" />,
    path: '/',
    errorElement: <NotFoundPage />,
  },
  {
    element: <App />,
    path: '/people',
  },
  {
    element: <SingleViewPage />,
    path: '/people/:id',
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
);
