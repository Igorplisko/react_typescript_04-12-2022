import { IProduct } from "../models"


interface ProductProps{
  objectProduct: IProduct
}

export  function Product({objectProduct}: ProductProps) {

 const thisT = objectProduct.description

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2"
    >
      <img src={objectProduct.image} className="w-1/6" alt={objectProduct.title}/>
      {thisT }
    </div>
  )
}
