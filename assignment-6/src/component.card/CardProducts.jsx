import React from 'react';
import Card from './components.card/Card';
const CardProducts = ({products , selectProducts , setselectedProducts}) => {
    console.log(products);
    
    return (
        <div>
            {products.map((product,index) => (

            <Card key={index} product={product } selectProducts={selectProducts} setselectedProducts={setselectedProducts}></Card>

            ))}
        </div>
    );
};

export default CardProducts;