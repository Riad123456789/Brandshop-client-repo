import {
  createBrowserRouter,
} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../pages/Homepage";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path:'/',
        element:<Homepage></Homepage>,
        loader:()=>fetch('../fackdata.json')
      }
    ]
  },
]);

export default router;