// import React from 'react'
// import Question from './Question'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import ProductDetails from './ProductDetails'

// function App() {



//   return (
//     // <Question/>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/product/:id" element={<ProductDetails />} />
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from "react-router-dom";

// 📌 Navbar Component
function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="p-4 bg-blue-500 text-white flex gap-4">
      {/* <Link to="/">Home</Link>
      <Link to="/products">Products</Link> */}
      <button
      onClick={() => navigate('/')}
      >Home</button>
      <button
      onClick={() => navigate('/products')}
      >Product</button>
    </nav>
  );
}

// 📌 Home Page
function Home() {
  return <h1 className="text-center mt-5">🏠 Welcome to Home Page</h1>;
}

// 📌 Products Page (List of Products)
function Products() {
  const productList = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Smartphone" },
    { id: 3, name: "Headphones" }
  ];
  const navigate = useNavigate()

  return (
    <div className="text-center mt-5">
      <h1>🛍️ Products List</h1>
      {productList.map((product) => (
        <p key={product.id}>
          {/* <Link to={`/products/${product.id}`}>{product.name}</Link> */}
          <button
          onClick={() =>{
            navigate(`/products/${product.id}`)
          }}
          >{product.name}</button>
        </p>
      ))}
    </div>
  );
}

// 📌 Product Details Page (Dynamic Routing with useParams)
function ProductDetails() {
  const { productId } = useParams();
  return <h1 className="text-center mt-5">🛍️ Product Details for ID: {productId}</h1>;
}

// 📌 Main App Component with Routing
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}


