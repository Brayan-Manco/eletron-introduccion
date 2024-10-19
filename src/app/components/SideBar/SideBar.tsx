import { BiSolidCategory } from "react-icons/bi";
import { Icon } from '../Icon';

import './SideBar.css'

const SideBarProps = [
    {
        title: 'Inicio',
        icon: "",
        path: '/',
    },
    {
      title: "Caja",
      icon: "",
      path: "/cash",
    },
    // {
    //     title: 'Usuarios',
    //     icon:  "",
    //     path: '/user',
    // },
    // {
    //   title: 'Iniciar sesion',
    //   icon: "",
    //   path: "/auth"
    // },
    {
      title: 'Categorias',
      icon: <BiSolidCategory/>,
      path: "/category"
    },
    {
      title: 'Productos',
      icon: "",
      path: "/product"
    },
    {
      title: 'Metodos de pago',
      icon: "",
      path: "/payment"
    },
    {
      title: 'Historial',
      icon: "",
      path: "/history"
    },

]

export const SideBar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h1>Menu</h1>
      </div>
      <ul className="sidebar-menu">
        {SideBarProps.map((item, index) => (
          <li key={index}>
            <a href={item.path} className="sidebar-link">
            {/* <Icon icon={item.icon} size={30} color="white" /> */}
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
