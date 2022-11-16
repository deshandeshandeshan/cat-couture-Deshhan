import DiscountBadge from "./DiscountBadge";

const Product = ({
  name,
  description,
  price,
  imageName,
  imageDescription,
  discountType,
  discountValue,
}) => {
  return (
    <li className="product">
      <div className="card">
        <div className="productImage padding">
          {imageName ? (
            <img
              src={`./img/${imageName}`}
              alt={imageDescription}
              className="product-image"
            />
          ) : (
            <img
              src="./img/cat-photo-default.jpg"
              alt="Default product cat"
              className="product-image"
            />
          )}
          {discountValue && discountType && (
            <DiscountBadge
              className="badge"
              discountValue={discountValue}
              discountType={discountType}
            />
          )}
        </div>
        <h3 className="productName padding">{name}</h3>
        <p className="productPrice padding">{price}</p>
        <p
          data-testid="product-description"
          className="productDescription padding"
        >
          {description}
        </p>
        <button className="productButton">Add to Cart</button>
      </div>
    </li>
  );
};

export default Product;
