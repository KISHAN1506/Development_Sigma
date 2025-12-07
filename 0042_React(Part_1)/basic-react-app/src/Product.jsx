import "./Product.css";

function Product({ itemName, price = 1 }) {
  // M1 to give discount
  // if (price > 30000) {
  //   return (
  //     <div className="maindiv">
  //       <p>{itemName}</p>
  //       <h3>price : {price}</h3>
  //       <p>5% Discount</p>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="maindiv">
  //       <p>{itemName}</p>
  //       <h3>price : {price}</h3>
  //     </div>
  //   );
  // }

  // Method-2
  let isDiscount = price>30000;
  let styles = { backgroundColor: isDiscount ? "lightblue" : "" };
  return (
    <div className="maindiv" style={styles}>
      <p>{itemName}</p>
      <h3>price : {price}</h3>
      {isDiscount && <p>5%</p>}
    </div>
  );
}
{
  /* {price > 30000 ? <p>"5%"</p> : null} */
}

export default Product;
