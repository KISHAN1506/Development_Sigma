import "./Product.css"

function Product({ itemName, price }) {
  return (
    <div className="maindiv">
      <p>{itemName}</p>
      <h3>price : {price}</h3>
    </div>
  );
}

export default Product;
