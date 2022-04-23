import React from 'react'

const Homepage = () => {
  return (
    <>
    heroBanner

 <div>
   <h2>Best selling products</h2>
   <p>high quality arm laptops</p>
 </div>

 <div>
   {['product 1', 'product 2'].map((product) =>product)}
 </div>
    </>
   
  )
}

export default Homepage