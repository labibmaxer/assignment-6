import React from 'react';
import CardTwo from '../../component.card/components.card/component.cardtwo/CardTwo';
import Card from '../../component.card/components.card/Card';
import CardProducts from '../../component.card/CardProducts';
const CardCart = ({products , selectProducts , setselectedProducts}) => {
    console.log(products);
    
    return (
        <div className=' w-full container mx-auto mt-5 h-auto'>
            <h2 className='font-bold text-left'>Your Cart</h2>
            
                <CardTwo setselectedProducts={setselectedProducts} selectProducts={selectProducts} products={products}></CardTwo>
          
        </div>
    );
};

export default CardCart;