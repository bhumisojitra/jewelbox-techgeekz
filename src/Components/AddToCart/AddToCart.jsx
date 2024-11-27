import React from 'react';

const AddToCart = ({ addToCart }) => {
  return (
    <div className="product-list mt-3">
      <div className="product">
        <button className='btn' onClick={() => addToCart({ name: 'Ring 1', price: '₹5000' })}>
          Add to Cart
        </button>
        <button className='ms-2 btn'>Buy Now</button>
      </div>

    </div>
  );
};

export default AddToCart;