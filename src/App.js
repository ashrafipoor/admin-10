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
import Setting from './Pages/Setting';
import ReactForm from './Temp/ReactForm';
import CustomerDetails from './Pages/CustomerDetails';

function App() {
  return (
    <BrowserRouter>
      <div data-theme="admin10" >
        <aside className="w-1/6 float-left  border-r-gray-700 border-r h-screen">
          <SideBar />
        </aside>
        <main className="w-5/6 float-left h-screen overflow-y-scroll">
          <Header />

          <section className='p-6'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} >
              </Route>
              <Route path="/customers/details" element={<CustomerDetails />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/setting" element={<ReactForm />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter >
  );
}

export default App;
