import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Navbar/Hero'
import ProductCard from './Product/ProductCard'
import Blog from './Blog/Blog'
import Footer from '../Footer/Footer'

export const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ProductCard/>
      <Blog/>
      <Footer/>
    </>
  )
}
export default Home