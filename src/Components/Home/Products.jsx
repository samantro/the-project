import React from 'react'
import Carousel from 'react-grid-carousel'
import ProductCard from './ProductCard'
 
export default function Products(props) {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <ProductCard/>
      </Carousel.Item>
      <Carousel.Item>
      <ProductCard/>
      </Carousel.Item>
      <Carousel.Item>
      <ProductCard/>
      </Carousel.Item>
      <Carousel.Item>
      <ProductCard/>
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}