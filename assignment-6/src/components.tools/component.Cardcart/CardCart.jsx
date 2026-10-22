import React from 'react';
import CardTwo from '../../component.card/components.card/component.cardtwo/CardTwo';
const CardCart = ({products , selectProducts , setselectedProducts}) => {
    console.log(products);
    
    return (
        <div className=' w-full container mx-auto mt-5 h-auto'>
            <h2 className='font-bold text-left'>Your Cart</h2>
            
                <CardTwo></CardTwo>
            <button className=" btn text-white bg-linear-to-r! from-[#4F39F6] to-[#9514FA] rounded-4xl p-5 text-20 w-full mt-10">Proceed To Checkout</button>
        </div>
    );
};

export default CardCart;