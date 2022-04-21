import React, { Component } from 'react';
import {useParams} from 'react-router-dom';


const ShowProductInfo = (props) => {
    const {id} = useParams();
    const productInfo = props.getProductInfo(id);
    console.log(productInfo);
    

    return (
        <div className="container w-50">
            {Object.keys(productInfo).map((key) => {
                return <div className="row" key={key}>{key} : {productInfo[key]}</div>;
            })}            
        </div>
    );
    
}

export default ShowProductInfo;