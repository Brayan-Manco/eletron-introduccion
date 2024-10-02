
const SideBarProps = [
    {
        tittle: 'Inicio',
        icon: "",
        path: '/',
    },
    {
        tittle: 'Usuarios',
        icon:  "",
        path: '/user',
    }
]

export const SideBar = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "100vh",
      }}
    >
        <h1 style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px",
        }}>Menu</h1>
      <div style={{
        display: "flex",
        textAlign: "center",
        marginTop: "20px",
      }}>
        <ul style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            width: "100%",
        }}>

        {SideBarProps.map((item, index) => (
          <li key={index} style={{
            margin: "2px",
            padding: "10px",
            borderRadius: "5px",
          }}>
            <a href={item.path} style={{
                display: "flex",
                gap: "10px",
                textDecoration: "none",
                color: "black",
            }}>
                {item.icon}
                <span style={{
                }}>{item.tittle}</span>
            </a>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
