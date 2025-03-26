import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Baby Stroller" },
  { id: 2, name: "Baby Bottle" },
  { id: 3, name: "Diapers" },
];

function Home() {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

