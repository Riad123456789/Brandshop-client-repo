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
        element: <AddProductPage></AddProductPage>,
        loader:()=>fetch('http://localhost:5000/cartproduct')
      },
      {
        path: "/productsRoutePage/:BrandName",
        element: <ProductsRoutePage></ProductsRoutePage>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.BrandName}`),
      },


      {
        path: "/Update/:id",
        element: <UpdateProductPage></UpdateProductPage>,
        loader: ({ params }) => fetch(`http://localhost:5000/updateproducts/${params.id}`)

      },
      {
        path: "/details/:name",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.name}`)

      },


      {
        path: "/My Cart",
        element: <MyCartPage></MyCartPage>,
        loader: () => fetch("http://localhost:5000/cartproduct")

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