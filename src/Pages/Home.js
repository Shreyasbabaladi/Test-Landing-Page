
import React from 'react'
import  CarouselComponent  from "../components/Carousel";
import SideCarousel from '../components/SideCarousel';
import ProductCarousel from '../components/ProductCarousel';
function Home() {
  const ProductProps = [
    {
      headline: "Trending Auctions",
      paragraph: "See what's popular across thousands of Auctions",
      cta: {
        text: "View all",
        link: "/categories",
      },
    },
    {
      headline: "Featured products",
      paragraph: "See what's popular across thousands of Auctions",
      cta: {
        text: "View all",
        link: "/categories",
      },
    },
    {
      headline: "Featured Services",
      paragraph: "See what's popular across thousands of Auctions",
      cta: {
        text: "View all",
        link: "/categories",
      },
    },
  ]
  return (
    <div className='container'>
        <CarouselComponent />
        <SideCarousel />
        {ProductProps.map((props)=>(
        <ProductCarousel {...props}/>
        ))}
    </div>
  )
}

export default Home