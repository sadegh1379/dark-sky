import React from 'react'
import {WeatherConsumer} from '../../Context';

function FavList() {
    return (
        <div className="my-3 mx-2">
            <h5 className="lead p-1 my-3 text-light"> برگزیده ها</h5>
            <ul className="list-group">
                <WeatherConsumer>
                    {value=>{
                        const {favWeather} = value;
                        
                        
                        return favWeather.length > 0 ? (
                            favWeather.map((item , i)=>{
                                 return (
                                    <li key={i} className="list-group-item h5 my-1 d-flex justify-content-between align-items-center">
                                        {item.name}
                                        <span className="badge badge-dark badge-pill p-2">{new Date().toLocaleDateString('fa-IR')}</span>
                                    </li>
                                 )
                             })
                        ) : (
                                    <li className="list-group-item h6  my-2 text-center ">
                                       موردی وجود ندارد
                                       
                                    </li>
                        )
                        
                    }}
                </WeatherConsumer>
               
                
                </ul>
        </div>
    )
}

export default FavList
