import Price from "./Price.jsx";
import "./Product.css";

function Product({ title,idx}) {
  let oldPrices = ["12,495","11,900","1,599","599"];
  let newPrices = ["8,999","9,199","899","278"];
  let desc = ["8000 DPI","Intuitive Surface","Designed for Ipad pro","Wireless"]

  return (
    <>
      <div className="mainDiv">
        <h4>{title}</h4>
        <p>{desc[idx]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}></Price>
      </div>
    </>
  );
}

export default Product;
