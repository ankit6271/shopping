import '../../index.css';

function InitialData(props) {
  return (
    <div className="col-md-3 col-sm-4 col-xs-12">
      <div className="product-grid">
        <div className="product-image">
          <img src={props.productValue.searchImage} alt="" />
        </div>
        <div className="product-content">
          <h3 className="product-brand">{props.productValue.brand}</h3>
          <span className="product-product">
            {props.productValue.product}
          </span>
          <h4 className="product-price">
            Rs.
            {props.productValue.price}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default InitialData;
