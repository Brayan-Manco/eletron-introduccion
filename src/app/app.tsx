import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './domains/ErrorPage';
import { HomePage } from './domains/home/home';
import { SideBar } from './components/SideBar';
import { UserPage } from './domains/user/User';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: '/contacts/:contactId',
    //     element: <ConstactPage />,
    //   },
    // ]
  },
  {
    path: '/user',
    element: <UserPage />,
  }
]);

export const App = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100vh",
    }}  >
      <SideBar />
      <div style={{
        width: "100%",
        height: "100vh",
        padding: "30px",
      }}  >
        <RouterProvider router={router} />
      {/* <Footer /> */}
      </div>
    </div>
  )
}
