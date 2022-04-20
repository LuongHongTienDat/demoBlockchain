import React, { Component } from 'react';
import {useParams} from 'react-router-dom';


const ShowProductInfo = () => {
    let {id} = useParams();
    
    return (
        <div>
            show product {id}
        </div>
    );
    
}

export default ShowProductInfo;