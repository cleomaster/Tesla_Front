import React from 'react';

function section({ data }) {
    return (
        <section class={"product " + data.imageClass}>
            <div class="product-info">
                <h1>{data.name}</h1>
                <p>Order Online For Touchless Delivery</p>
            </div>
            <div>
                <div class="button-group">
                    <div class="button-dark-rounded">
                        <a href="model3.html" class="dark" >CUSTOM ORDER</a>
                    </div>
                    <div class="button-light-rounded">
                        <a class="light" href="cart.html">EXISTING INVENTORY</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default section;