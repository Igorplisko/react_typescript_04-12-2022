import { useEffect, useState } from 'react';
import axios , {AxiosError}  from 'axios';
import { IProduct } from '../models';

export function useProducts() {
  const [dataProducts, setDataProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function addProduct (product: IProduct){
    setDataProducts(prev=> [...prev, product] )
  }

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products?limit=5'
      );
      setDataProducts(response.data);
      setLoading(false);
    } catch (e:unknown) {
      const error = e as AxiosError
      setLoading(false);
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
 
  return {dataProducts, loading, error, addProduct}
}
