import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<p>LISRT OF CITIES</p>} />
            <Route path="cities" element={<p>LIST OF CITIES</p>} />
            <Route path="countries" element={<p>LIST OF COUNTRIES</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
