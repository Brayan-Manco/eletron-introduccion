
export {};

declare global {
  interface Window {
    api: {
      // USER
      createUser: (user: User) => Promise<any>;
      getUsers: () => Promise<any>;
      getUser: (id: string) => Promise<any>;
      deleteUser: ( id: string) => Promise<any>;
      updateUser: (id: string, data: userUpdate) => Promise<any>;

      // PRODUCT
      createProduct:  (product: CreateProduct) => Promise<any>;
      getProducts: () => Promise<any>;
      getProduct: (id: string) => Promise<any>;
      updateProduct: (id: string, product: UpdateProduct) => Promise<any>;
      deleteProduct: (id: string) => Promise<any>;

      // CATEGORY
      createCategory: (category:CreateCategory) => Promise<any>;
      getCategories: () => Promise<any>;
      updateCate: (id: string, category: UpdateCategory) => Promise<any>;
      getCategory: (id: string) => Promise<any>;
      deleteCategory: (id: string) => Promise<any>;

      // PAYMENT METHOD
      createPayment: (payment: CreatePaymentMethod) => Promise<any>;
      getPayments: () => Promise<any>;
      getPayment: (id: string) => Promise<any>;
      updatePayment: (id: string, payment: UpdatePayment) => Promise<any>;
      deletePayment: (id: string) => Promise<any>;

      // PAYMENT
      createPay: (id: string, total: number ) => Promises<any>,

      // SALE
      createSale: () => Promise<any>;
      getSales: () => Promise<any>;
      updateSale: (id: string, paymentId: string, total: number) => Promise<any>;

      // SALE DETAILS
      createSaleDetails: (id: string, sale:  CreateSaleDetails) => Promise<any>;
    }
  }
}