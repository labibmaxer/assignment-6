import React from 'react';
import Card from '../Card';
import CardProducts from '../../CardProducts';
const CardTwo = ({product , selectProducts = [] , setselectedProducts }) => {
const total = selectProducts.reduce((sum, item) => sum + Number(item.price || 0), 0)
   if (!product) 
    return null;

const { name, description, price, period, tag, features, icon } = product;

 const handleDelete = () => {
        if(setselectedProducts) {
            setselectedProducts(selectProducts.filter((item) => item.id !== id));
        }
    }
    console.log(setselectedProducts, 'setselectedProducts');
    
  return (
    <div className=''>
           
      <div className="space-y-4">
        {selectProducts.length === 0 ? (
          <p className="text-center text-slate-400 py-8">Your cart is empty.</p>
        ) : (
          selectProducts.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-slate-900 text-base">
                    {item.name}
                  </h4>
                  <p className="text-sm font-medium text-slate-500">
                    ${item.price}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleDelete(item.id)}
                className="text-xs font-semibold text-pink-500 hover:text-pink-600 transition-colors"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-100">
        <span className="text-sm font-medium text-slate-400">Total:</span>
        <span className="text-2xl font-bold text-slate-900">${total}</span>
      </div>
        


    </div>
  );
};

export default CardTwo;