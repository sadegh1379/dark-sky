import React from 'react';
import {WeatherConsumer } from '../../Context';


function StoryList() {
    return (
        <div className="my-3 mx-2">
            <h5 className="lead p-1 my-3 text-light">تاریخچه جستوجو</h5>
            <ul className="list-group">
                <WeatherConsumer>
                    {value=>{
                        const {story} = value;
                       
                        
                        return story.length > 0 ? (
                            story.map((item)=>{
                                 return (
                                    <li className="list-group-item my-1 h5 d-flex justify-content-between align-items-center">
                                        {item}
                                        <span className="badge badge-dark badge-pill p-2">{new Date().toLocaleDateString('fa-IR')}</span>
                                    </li>
                                 )
                             })
                        ) :
                                <li className="list-group-item h6  my-2 text-center ">
                                    موردی وجود ندارد
                                
                                </li>
                        
                        
                    }}
                </WeatherConsumer>
               
                
                </ul>
        </div>
    )
}

export default StoryList
