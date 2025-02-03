import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SinglePage } from './pages/SinglePage';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
  },
  {
    element: <SinglePage />,
    path: '/:id',
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
