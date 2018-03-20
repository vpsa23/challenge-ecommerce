import React, { Component } from 'react';
import { catalog } from './../data/mock.json';

const Items = ({name, imageURL, currency, price } ) => catalog.map((data) =>
    <div className="products">
        <img src={data.imageURL} alt= "imagen"/>
        <p> {data.name} </p>
        <p> {data.currency} {data.price} </p>
        <button>Add to cart</button>
    </div>);

export default Items;