import Product from "./Product";

const ProductList = ({ products, limit, className }) => {
  const limitedProducts = products.slice(0, limit);
  return (
    <ul className={className}>
      {limitedProducts.map((product) => (
        <Product
          name={product.name}
          description={product.description}
          price={product.price}
          imageName={product.imageName}
          imageDescription={product.imageDescription}
          discountValue={product.discountValue}
          discountType={product.discountType}
        />
      ))}
    </ul>
  );
};

export default ProductList;
