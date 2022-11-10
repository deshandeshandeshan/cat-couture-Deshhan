import { useEffect, useState } from "react";
import api from "../../api";
import ProductList from "./ProductList";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import Controls from "./Controls";

const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    // We use AbortController (https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
    // to clean up so that we don’t introduce a memory leak
    // (https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup)
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const result = await api.getProducts(limit);
        if (!result.ok) {
          throw new Error("API Error");
        }
        const data = await result.json();
        if (!abortController.signal.aborted) {
          setProducts(data.products);
        }
      } catch (error) {
        if (!abortController.signal.aborted) {
          setError(true);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [limit]);

  return (
    <main className="main-layout section-padding">
      {loading && <Loader />}
      {error && <ErrorMessage message="Error fetching products" />}
      <Controls setLimit={setLimit} limit={limit} />
      <ProductList products={products} className="main-content" />
    </main>
  );
};

export default ProductPage;
