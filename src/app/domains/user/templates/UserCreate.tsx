import { useFormik } from "formik";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export const UserCreate = () => {


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async(values) => {
      alert(JSON.stringify(values, null, 2));
      try {
        const user = await window.api.createUser(values);
        console.log(user)
      } catch (error) {
        console.log(error)
      }
    },
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Crear usuario</h1>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
            
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button name="Crear" variant="green" type="submit"/>
          </div>
        </form>
      </div>
    </div>
  );
};
