import {
  createBrowserRouter,
} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../pages/Homepage";
import AddProductPage from "../pages/AddProductPage";
import MyCartPage from "../pages/MyCartPage";
import ContactPage from "../pages/ContactPage";
import ProductsRoutePage from "../pages/ProductsRoutePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>,
        loader: () => fetch('http://localhost:5000/BrandName')
      },
      {
        path: "/add products",
        element: <AddProductPage></AddProductPage>
      },
      {
        path: "/productsRoutePage/:BrandName",
        element: <ProductsRoutePage></ProductsRoutePage>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.BrandName}`),
      },
      {
        path: "/My Cart",
        element: <MyCartPage></MyCartPage>
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      }

    ]
  },
]);

export default router;