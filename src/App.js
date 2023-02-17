import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import AccordionList from './components/AccordionList';
import Products from './Pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  path="/"  element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/accordionlist" element={<AccordionList />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
