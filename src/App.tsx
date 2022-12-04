import { Product } from './components/Product';
import {products} from './data/products'


function App() {
 
 
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <Product objectProduct={products[0]}  />
      <Product objectProduct={products[1]}  />
      
    </div>
  );
}

export default App;
