import './App.css'
import Home from '../Home/index'
import MyAccount from '../MyAccount/index'
import MyOrder from '../MyOrder/index'
import MyOrders from '../MyOrders/index'
import NotFound from '../NotFound/index'
import Sigin from '../Sigin/index'

function App() {

  return (
    <div className="bg-red-100">
      <Home/>
      <MyAccount/>
      <MyOrder/>
      <MyOrders/>
      <NotFound/>
      <Sigin/>
    </div>
  )
}

export default App
