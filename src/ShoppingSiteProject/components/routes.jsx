import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import ShoppingCart from "./Pages/ShoppingCart";
import ErrorPage from "./Pages/ErrorPage";

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: 'shop',
    element: <Shop />
  },
  {
    path: 'product/:id',
    element: <Product />
  },
  {
    path: 'cart',
    element: <ShoppingCart />
  }
]

export default routes