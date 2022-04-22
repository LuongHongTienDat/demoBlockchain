import React, { Component } from 'react';
import {useState, useEffect } from 'react';

import {useParams} from 'react-router-dom';


const ShowProductInfo =  (props) => {
    const {id} = useParams();
    const [info, setInfo] = useState({});


    useEffect(() => {
        getData(id);
    }, []);

    const getData = async (id) => {
        var productInfo = await props.getProductInfo(id);
        setInfo(productInfo);
    };
    
    return (
        <div className="container w-50" id="info-table">
            {Object.keys(info).map((key) => {
                return <div className="row" key={key}><b>{key} </b> : {info[key]}</div>;
            })}            
        </div>
    );
    
}

export default ShowProductInfo;