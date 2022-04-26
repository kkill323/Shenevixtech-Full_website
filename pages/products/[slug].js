import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import imageUrlBuilder from '@sanity/image-url';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';

// import { useStateContext } from '../../context/StateContext';

//square brackets means the slug will be dynamically generated.
const ProductDetails = ({ product, products }) => {
  // const { name, details, price } = product;
  
  return (
    
      <div>
        <div className="product-detail-container">
          <div>
<div>
  <div className="image-container">
  {/* <img src={urlFor (image && image[index])} className="product-image-detail" /> */}

  </div>
</div>

          </div>
        </div>
      </div>
        )
      }
      export const getStaticPaths = async () => {
        const query = `*[_type == "product"] {
          slug {
            current
          }
        }
        `;
      
        const products = await client.fetch(query);
      
        const paths = products.map((product) => ({
          params: { 
            slug: product.slug.current
          }
        }));
      
        return {
          paths,
          fallback: 'blocking'
        }
      }
      
      export const getStaticProps = async ({ params: { slug }}) => {
        const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
        const productsQuery = '*[_type == "product"]'
        
        const product = await client.fetch(query);
        const products = await client.fetch(productsQuery);
      
        console.log(product);
        console.log(query);
        console.log(await client.fetch(query))
       
        return {
          props: { products, product }
          
      
        }
      }




export default ProductDetails
