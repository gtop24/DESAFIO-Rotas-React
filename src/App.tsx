import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeBody from "./routes/Home/HomeBody";
import Home from "./routes/Home";
import Products from "./routes/Home/Products";
import About from "./routes/Home/About";
import NotFound from "./routes/Home/NotFound";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<HomeBody />} />
        <Route path="products" element={<Products />} >
          
        </Route>
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App
