import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    diplay: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };
  return (
    <div style={styles}>
      
      <Product title="Logitech MX Master" idx={0}></Product>
      <Product title="Apple Pencil (GEN 2)" idx={1}></Product>
      <Product title="Zebronics Zeb-transformer" idx={2}></Product>
      <Product title="Petronics Toad 23" idx={3}></Product>
    </div>
  );
}

export default ProductTab;
