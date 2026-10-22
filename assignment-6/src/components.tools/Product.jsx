import React, { use, useState } from 'react';
import CardProducts from '../component.card/CardProducts';
import CardCart from './component.Cardcart/CardCart';
const Product = ({productpromise}) => {
    console.log(productpromise);
    const products = use(productpromise);
    const [selectProducts , setselectedProducts] = useState([]);
    console.log(selectProducts , setselectedProducts);
    
    console.log(products);
    
const [selectedType , setselectedType] = useState('product') ;
console.log(selectedType , setselectedType);

    return (
        <div className='container mx-auto  py-24 text-center justify-center'>
            <h1 className='font-extrabold text-[#101727] text-[48px]'>Premium Digital Tools</h1>
            <p className='text-[#627382] text-[16px]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='pt-3 gap-6'>
                  <button onClick={() => setselectedType ('product')} className={`btn border-0 rounded-4xl p-7 text-xl ${
                    selectedType === "product" ? "text-white bg-linear-to-r! from-[#4F39F6] to-[#9514FA]" : ""
                  } `}>Products</button> 
                        <button onClick={ () => setselectedType ('cart')} className={` btn border-0 rounded-4xl p-7 text-xl ${
                            selectedType === "cart"? "text-white bg-linear-to-r! from-[#4F39F6] to-[#9514FA]" : " " 
                        } `}>Cart </button> 
                  
          </div>
          {selectedType === 'product' ? (<CardProducts products={products} />) : (<CardCart />)}
        </div>
    );
};

export default Product;