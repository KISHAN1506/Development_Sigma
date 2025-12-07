import Product from "./Product.jsx";

function ProductTab() {
  let features = ["fast", "Smooth", "Big battery"];
  // let features = {
  //   a: "High-Tech",
  //   b: "Durable",
  //   c: "Fast",
  // };
  return (
    <div>
      <Product itemName="Mobile" price={10000} features={features}></Product>
      <Product itemName="Laptop" price={40000}></Product>
      <Product itemName="Camera" price={1}></Product>
    </div>
  );
}

export default ProductTab;
