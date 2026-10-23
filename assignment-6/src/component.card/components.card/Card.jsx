import React from 'react';

const Card = ({product , selectProducts , setselectedProducts }) => {

   if (!product) 
    return null;

const { name, description, price, period, tag, features, icon } = product;


  return (
    <div className=''>
    <div className="relative max-w-sm grid rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      
      <div className="flex items-start justify-between mb-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 border border-slate-100 p-3">
          <img 
            src= {icon}
          />
        </div>
        <span className="rounded-full bg-amber-100/80 px-3.5 py-1 text-xs font-medium text-amber-800">
          {tag}
        </span>
      </div>

      
      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
        {name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
            {description}
        </p>

      <div className="mt-4 flex items-baseline">
        <span className="text-3xl font-bold text-slate-900">{price}</span>
        <span className="text-sm font-medium text-slate-500">{period}</span>
      </div>

<ul className="mt-6 space-y-2.5">
            {features.map((singlefeature , index) => (

<li key={index} className="flex items-center text-sm text-slate-600">
          <svg className="mr-2.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <span>{singlefeature}</span>
        </li>


        ))}
      
       
      </ul>

      <button onClick={() => } className="mt-6 w-full rounded-full bg-purple-600 hover:bg-purple-700 py-3 text-center text-sm font-semibold text-white transition-colors" >
        Buy Now
      </button>

    </div>
    </div>
  );
};

export default Card;