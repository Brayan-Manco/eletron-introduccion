import { BiSolidCategory } from "react-icons/bi";
import { Icon } from './Icon';

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
    }

]

export const SideBar = () => {
  return (
    // <div
    //   style={{
    //     width: "200px",
    //     height: "100vh",
    //     background: "#10375C",
    //     color: "white"
    //   }}
    // >
    //     <h1 style={{
    //         textAlign: "center",
    //         fontSize: "20px",
    //         fontWeight: "bold",
    //         padding: "10px",
    //     }}>Menu</h1>
    //   <div style={{
    //     display: "flex",
    //     textAlign: "center",
    //     marginTop: "20px",
    //   }}>
    //     <ul style={{
    //         listStyle: "none",
    //         display: "flex",
    //         flexDirection: "column",
    //         width: "100%",
    //     }}>

    //     {SideBarProps.map((item, index) => (
    //       <li key={index} style={{
    //         margin: "2px",
    //         padding: "10px",
    //         borderRadius: "5px",
    //       }}>
    //         <a href={item.path} style={{
    //             display: "flex",
    //             gap: "10px",
    //             textDecoration: "none",
    //             color: "white",
    //         }}>
    //             {item.icon}
    //             <span style={{
    //             }}>{item.title}</span>
    //         </a>
    //       </li>
    //     ))}
    //     </ul>
    //   </div>
    // </div>
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
