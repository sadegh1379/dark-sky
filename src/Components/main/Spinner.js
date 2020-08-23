import React from 'react';
import spinner from './img/offline.gif';

function Spinner() {
    return (   
        <img
        style={{width:'100px' , textAlign:'center' , margin:'100px 20px'  , borderRadius:'100px'  , boxShadow:'5px 5px 30px  black'}}
        src={spinner} alt="loading..."/>
    )
}

export default Spinner
