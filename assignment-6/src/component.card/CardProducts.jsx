import React from 'react';
import Card from './components.card/Card';
import CardCart from '../components.tools/component.Cardcart/CardCart';
import CardTwo from './components.card/component.cardtwo/CardTwo';
const CardProducts = ({products , selectProducts , setselectedProducts}) => {
    console.log(products);
    
    return (
        <div className='grid grid-cols-3 mt-10 gap-y-6'>
            {products.map((product,index) => (

            <Card key={index} product={product } selectProducts={selectProducts} setselectedProducts={setselectedProducts}></Card>

            ))}
        </div>
    );
};

export default CardProducts;