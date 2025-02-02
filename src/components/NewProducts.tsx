import ProductCard from './ProductCard'
import React from 'react'

const productsData = [
    {
        img: "/jacket_1.jpeg",
        title: "Jacket",
        desc: "WOMEN's Yarn Fleece Full-Zip Jacket",
        rating: 4,
        price: "55.00"
    },
    {
        img: "/skirt.jpeg",
        title: "Skirt",
        desc: "Long Skirt For Women's",
        rating: 5,
        price: "55.00"
    },
    {
        img: "/party-wear.jpeg",
        title: "Party Wear",
        desc: "Women Party Wear Shoes",
        rating: 3,
        price: "25.00"
    },
    {
        img: "/shirt-1.jpeg",
        title: "Shirt",
        desc: "Pure Garment Shirt Dyed Cotton Shirt",
        rating: 4,
        price: "45.00"
    },
    {
        img: "/sports_1.jpeg",
        title: "Sports shoes",
        desc: "Trakking and Running Shoes",
        rating: 3,
        price: "58.00"
    },
    {
        img: "/watch_3.jpeg",
        title: "Watches",
        desc: "Smart Watch Vital Plus",
        rating: 4,
        price: "100.00"
    },
    {
        img: "/watch.jpeg",
        title: "Watches",
        desc: "Pocket Watch Leather Pouch",
        rating: 4,
        price: "120.00"
    },
    {
        img: "/jacket_2.jpeg",
        title: "Jacket",
        desc: "MEN Yarn Fleece Full-Zip Jacket",
        rating: 4,
        price: "45.00"
    }
]



const NewProducts = () => {
  return (
    <div>
      <div className='container pt-6'>
       <h2 className='font-medium text-2xl pb-4 '>New Products</h2>

<div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>

{productsData.map((item, index) => (
    <ProductCard key={index}
    img={item.img}       
    title={item.title}
    desc={item.desc}
    rating={item.rating}
    price={item.price} />
))}

       </div>
      </div>
    </div>
  )
}

export default NewProducts
