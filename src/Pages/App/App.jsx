import {useRoutes, BrowserRouter} from 'react-router-dom'
import './App.css'
import Home from '../Home/index'
import MyAccount from '../MyAccount/index'
import MyOrder from '../MyOrder/index'
import MyOrders from '../MyOrders/index'
import NotFound from '../NotFound/index'
import Sigin from '../Sigin/index'
import Navbar from '../../Components/Nabvar/index'
import ShoppingCardContex from '../../Context/index'


const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/*', element: <NotFound/>},
    {path: '/sig-in', element: <Sigin/>}
  ])
  return routes
}

function App() {

  return (
    <ShoppingCardContex>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
      </BrowserRouter>
    </ShoppingCardContex>
  )
}

export default App
