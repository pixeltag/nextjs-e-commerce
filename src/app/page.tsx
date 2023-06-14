import { fetchProducts, Product } from '@/data'
import Image from 'next/image'

async function getProducts() {
  const products: Array<Product> = await fetchProducts();
  return (
    products.map(product => (
      <div key={product.id}>{product.title}</div>
    ))
  )
}

export default async function Home() {
  const productList = await getProducts();

  return (
    <h1>{productList}
    </h1>
  )
}


