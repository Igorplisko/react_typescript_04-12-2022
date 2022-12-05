import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';

function App() {
  const { dataProducts, loading, error } = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader/>}
      {error && <ErrorMessage justError={error}/>}
      {dataProducts.map((oneProduct) => (
        <Product objectProduct={oneProduct} key={oneProduct.id} />
      ))}
    </div>
  );
}

export default App;
