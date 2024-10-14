import { RouterProvider } from 'react-router-dom';
import { SideBar } from './components/SideBar';
import { router } from './routes';


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
      </div>
    </div>
  )
}
