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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>,
        loader: () => fetch(' https://server-site-66hc4ismv-riads-projects-d9eea291.vercel.app/BrandName'),
        errorElement:<ErrorPage></ErrorPage>
        
      },
      {
        path: "/add products",
        element: <AddProductPage></AddProductPage>,
        loader: () => fetch(' https://server-site-66hc4ismv-riads-projects-d9eea291.vercel.app/cartproduct')
      },
      {
        path: "/productsRoutePage/:BrandName",
        element: <ProductsRoutePage></ProductsRoutePage>,
        loader: ({ params }) => fetch(` https://server-site-91iajw0w2-riads-projects-d9eea291.vercel.app /${params.BrandName}`),
      },


      {
        path: "/Update/:id",
        element: <UpdateProductPage></UpdateProductPage>,
        loader: ({ params }) => fetch(` https://server-site-66hc4ismv-riads-projects-d9eea291.vercel.app/updateproducts/${params.id}`)

      },
      {
        path: "/details/:name",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) => fetch(` https://server-site-66hc4ismv-riads-projects-d9eea291.vercel.app/product/${params.name}`)

      },


      {
        path: "/My Cart",
        element: <MyCartPage></MyCartPage>,
        loader: () => fetch(" https://server-site-66hc4ismv-riads-projects-d9eea291.vercel.app/cartproduct")

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