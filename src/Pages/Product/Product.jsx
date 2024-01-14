import EditSec from "../../Components/EditSection/EditSec";
import Filter from "../../Components/Filter/Filter";
import Productdetail from "../../Components/Productdetail/Productdetail";

import "./Product.css"
const Product = () => {
  return (
    <div className="product-container">
       <h3>Product</h3>
        <EditSec/>
         <Filter/>  
      <div className="product-datasection">
        <Productdetail />
      </div>
     
    </div>
  );
}

export default Product;
