import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../layout/Layout';
import MainPage from '../pages/main-page/MainPage';
import FormPage from '../pages/form-page/FormPage';
// import moment from 'moment';
// import 'moment/locale/ru';
// moment.locale('ru');

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/form',
          element: <FormPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
