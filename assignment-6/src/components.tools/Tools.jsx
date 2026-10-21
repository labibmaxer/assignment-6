import React from 'react';

const Tools = () => {
    return (
        <div className='container mx-auto  py-24 text-center justify-center'>
            <h1 className='font-extrabold text-[#101727] text-[48px]'>Premium Digital Tools</h1>
            <p className='text-[#627382] text-[16px]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='pt-3 gap-3'>
                  <button className="btn btn-active text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl p-7 text-xl ">Products</button> 
                        <button className=" text-xl font-medium ">Cart </button> 
                  
          </div>
        </div>
    );
};

export default Tools;