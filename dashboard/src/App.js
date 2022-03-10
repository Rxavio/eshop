import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UsersScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <>
      <Router>
      <Routes> 
       <Route path='/' element={<HomeScreen />} exact/>
       <Route path='/products/' element={<ProductScreen />} />
       <Route path='/category' element={<CategoriesScreen />} />
       <Route path='/orders' element={<OrderScreen />} />
       <Route path='/order' element={<OrderDetailScreen />} />
       <Route path='/addproduct' element={<AddProduct />} /> 
       <Route path='/users' element={<UsersScreen />} /> 
       <Route path='/product/:id/edit' element={<ProductEditScreen />} /> 
       <Route path='/login' element={<Login />} />
       <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
