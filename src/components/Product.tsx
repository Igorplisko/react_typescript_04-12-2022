import { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
  objectProduct: IProduct;
}

export function Product({ objectProduct }: ProductProps) {
  const [details, setDetails] = useState(false);
  const btnClassName = details ? 'bg-green-400' : 'bg-sky-400';
  const btnCommonClasses = ['py-2 px-4 border', btnClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img
        src={objectProduct.image}
        className="w-1/6"
        alt={objectProduct.title}
      />
      <p>{objectProduct.title}</p>
      <span className="font-bold">{objectProduct.price}</span>
      <button
        className={btnCommonClasses.join(' ')}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? 'Hide Details' : ' Show Details'}
      </button>

      {details && (
        <div>
          <p>{objectProduct.description} </p>
          <p>
            Rate:{' '}
            <span style={{ fontWeight: 'bold' }}>
              {objectProduct?.rating?.rate}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
