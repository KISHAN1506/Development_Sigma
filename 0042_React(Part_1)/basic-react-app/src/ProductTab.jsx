import Product from "./Product.jsx";

function ProductTab() {
  return (
    <div>
      <Product itemName="Mobile" price={10000}></Product>
      <Product itemName="Laptop" price={40000}></Product>
      <Product itemName="Camera" price={5000}></Product>
    </div>
  );
}

export default ProductTab;
