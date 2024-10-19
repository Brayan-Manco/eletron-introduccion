export {};

declare global {
  interface Window {
    api: {
      // USER
      createUser: (user: any) => Promise<any>;
      getUsers: () => Promise<any>;
      getUser: (id: string) => Promise<any>;
      deleteUser: (id: string) => Promise<any>;
      updateUser: (id: string, data: any) => Promise<any>;

      // PRODUCT
      createProduct: (product: any) => Promise<any>;
      getProducts: () => Promise<any>;
      getProduct: (id: string) => Promise<any>;
      updateProduct: (id: string, product: any) => Promise<any>;
      deleteProduct: (id: string) => Promise<any>;

      // CATEGORY
      createCategory: (category: any) => Promise<any>;
      getCategories: () => Promise<any>;
      updateCate: (id: string, category: any) => Promise<any>;
      getCategory: (id: string) => Promise<any>;
      deleteCategory: (id: string) => Promise<any>;

      // PAYMENT METHOD
      createPayment: (payment: any) => Promise<any>;
      getPayments: () => Promise<any>;
      getPayment: (id: string) => Promise<any>;
      updatePayment: (id: string, payment: any) => Promise<any>;
      deletePayment: (id: string) => Promise<any>;

      // PAYMENT
      createPay: (id: string, total: number) => Promise<any>;

      // SALE
      createSale: () => Promise<any>;
      getSales: () => Promise<any>;
      getSale: (id: string) => Promise<any>;
      updateSale: (id: string, paymentId: string, total: number) => Promise<any>;

      // SALE DETAILS
      createSaleDetails: (id: string, sale: any) => Promise<any>;
    };
  }

  // Declaraciones globales específicas de Vite y Electron
  const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
  const MAIN_WINDOW_VITE_NAME: string;

  namespace NodeJS {
    interface Process {
      viteDevServers: Record<string, import('vite').ViteDevServer>;
    }
  }

  type VitePluginConfig = ConstructorParameters<typeof import('@electron-forge/plugin-vite').VitePlugin>[0];

  interface VitePluginRuntimeKeys {
    VITE_DEV_SERVER_URL: `${string}_VITE_DEV_SERVER_URL`;
    VITE_NAME: `${string}_VITE_NAME`;
  }
}

declare module 'vite' {
  interface ConfigEnv<K extends keyof VitePluginConfig = keyof VitePluginConfig> {
    root: string;
    forgeConfig: VitePluginConfig;
    forgeConfigSelf: VitePluginConfig[K][number];
  }
}
