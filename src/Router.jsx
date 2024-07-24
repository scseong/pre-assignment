import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import { Home, Login, Mypage, NotFound, Signup } from './pages';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: '/sign-up', element: <Signup /> },
      { path: '/mypage/order', element: <Mypage /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);
