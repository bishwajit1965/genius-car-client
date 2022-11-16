import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./Products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="py-10">
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-orange-500">Popular products</p>
        <h2 className="text-4xl font-bold my-4">Browse Our products</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 shadow-sm md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
