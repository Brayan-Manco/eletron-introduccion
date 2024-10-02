interface Window {
    api: {
      crearUsuario: (nombre: string, email: string, password: string) => Promise<any>;
      obtenerUsuarios: () => Promise<any>;
    }
  }