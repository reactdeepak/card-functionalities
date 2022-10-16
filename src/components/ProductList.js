import "../App.css";

function ProductList({ product, addToCart }) {
  return (
    <div className="flex">
      {product.map((productItem, productIndex) => {
        return (
          <div style={{ width: "25%" }}>
            <div className="product-item">
              <img src={productItem.url} width="200" height="320px" />
              <p>{productItem.name}</p>
              <p> {productItem.description} </p>
              <p> Rs. {productItem.price} /-</p>
              <button onClick={() => addToCart(productItem)}>
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ProductList;
