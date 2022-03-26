import React, { useState } from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const totalItem = cart.length;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }


    const handleChooseBtn = () => {
        const getRandomInt = (max) => {
            return Math.floor(Math.random() * max);
        };
        const selectedProductIndex = getRandomInt(cart.length);
        setSelectedProduct(cart[selectedProductIndex]);
        console.log(selectedProduct);
    };
    const handleReChooseBtn = () => {
        window.location.reload();
    };

    return (
        <div className="cart">
            <h2>Selected Products</h2>
            <div className='selected-name'>
                <p>Total Items: {totalItem}</p>
                {
                    cart.map((product) => (
                        <div className="display-custom-cart" key={product.id}>
                            <img className="custom-cart-img" src={product.img} alt="" />
                            <p>{product.name}</p>
                        </div>
                    ))
                }
            </div>
            <div>
                <p><button className='choose-btn' onClick={handleChooseBtn}><p>CHOOSE 1 FOR ME</p></button></p>
                {/*       {selectedProduct.key && (
                    <div className="cart-custom-display">
                        <img className="cart-custom-img" src={selectedProduct.img} alt="" />
                        <p>{selectedProduct.name}</p>
                    </div>
                )} */}
                <p><button className='choose-btn' onClick={handleReChooseBtn}><p>CHOOSE AGAIN</p></button></p>
            </div>
        </div>
    );
};

export default Cart;