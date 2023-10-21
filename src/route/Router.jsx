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
import DetailsPage from "../pages/DetailsPage";
import UpdateProductPage from "../pages/UpdateProductPage";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../privateRoute/PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>,
        loader: () => fetch(' https://server-site-5laplgulj-riads-projects-d9eea291.vercel.app/BrandName'),
        errorElement: <ErrorPage></ErrorPage>

      },
      {
        path: "/add products",
        element: <PrivateRoute><AddProductPage></AddProductPage></PrivateRoute>,
        loader: () => fetch(' https://server-site-5laplgulj-riads-projects-d9eea291.vercel.app/cartproduct'),
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: "/productsRoutePage/:brandname",
        element: <ProductsRoutePage></ProductsRoutePage>,
        loader: ({ params }) => fetch(`https://server-site-8k6035klh-riads-projects-d9eea291.vercel.app/products/${params.brandname}`),
        errorElement: <ErrorPage></ErrorPage>
      },

      {
        path: "/details/:name",
        element: <PrivateRoute> <DetailsPage></DetailsPage></PrivateRoute>,
        loader: ({ params }) => fetch(` https://server-site-5laplgulj-riads-projects-d9eea291.vercel.app/product/${params.name}`),
        errorElement: <ErrorPage></ErrorPage>

      },

      {
        path: "/Update/:id",
        element: <PrivateRoute><UpdateProductPage></UpdateProductPage></PrivateRoute>,
        loader: ({ params }) => fetch(` https://server-site-5laplgulj-riads-projects-d9eea291.vercel.app/updateproducts/${params.id}`),
        errorElement: <ErrorPage></ErrorPage>

      },

      {
        path: "/My Cart",
        element: <PrivateRoute> <MyCartPage></MyCartPage></PrivateRoute>,
        loader: () => fetch(" https://server-site-5laplgulj-riads-projects-d9eea291.vercel.app/cartproduct"),
        errorElement: <ErrorPage></ErrorPage>

      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
        errorElement: <ErrorPage></ErrorPage>
      }

    ]
  },
]);

export default router;