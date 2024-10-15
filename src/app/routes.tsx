import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./domains/home/home";
import ErrorPage from "./domains/ErrorPage";
import { UserPage } from "./domains/user/User";
import { AuthPage } from "./domains/auth/Auth";
import { CategoryPage } from "./domains/category/Category";
import { ProductsPage } from "./domains/product/Products";
import { CashPage } from "./domains/cashRegister/cash"

export const router = createBrowserRouter([
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
    },
    {
      path: '/category',
      element: <CategoryPage />,
    },
    {
      path: '/auth',
      element: <AuthPage/>
    },
    {
      path: '/product',
      element: <ProductsPage/>
    },
    {
      path: '/cash',
      element:  <CashPage/>

    }

  ]);