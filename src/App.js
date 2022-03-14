import Header from './Components/Header'
import SideBar from './Components/SideBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Products from './Pages/Products';
import Customers from './Pages/Customers';
import Orders from './Pages/Orders';
function App() {
  return (
    <BrowserRouter>
      <div data-theme="admin10" >
        <aside className="w-1/6 float-left  border-r-gray-700 border-r h-screen">
          <SideBar />
        </aside>
        <main className="w-5/6 float-left h-screen">
          <Header />


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>

        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
