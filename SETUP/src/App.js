import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserTable from "./pages/UserTable";
import ContactUsTable from "./pages/ContactUsTable";
import AdminDashboard from "./pages/AdminDashboard";
import { CartProvider } from "./pages/CartProvider";
import Cart from "./pages/Cart";
import MyOrder from "./pages/Myorder";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <>
          <CartProvider>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/UserTable" element={<UserTable></UserTable>} />
          <Route path='/Cart' element={<Cart></Cart>}></Route>
            <Route path='/Myorder' element={<MyOrder></MyOrder>}></Route>
            <Route path="/Checkout" element={<Checkout></Checkout>} />
          <Route path="/ContactUsTable" element={<ContactUsTable></ContactUsTable>} />

          <Route path="/AdminDashboard" element={<AdminDashboard></AdminDashboard>} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
      </CartProvider>

    </>
  );
}

export default App;
