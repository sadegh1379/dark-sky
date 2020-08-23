import React from 'react'

function AboutAppCard() {
    return (
        <div className="card" style={{width: 'auto'  , height:'100%'}}>
                <img style={{backgroundColor:'black' }} className="card-img-top" src="https://darksky.net/images/darkskylogo.png" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Dark Sky</h5>
                    <p className="card-text">از وضعیت آب و هوای شهر و کشور خود  به  صورت آنلاین  و روزانه مطلع شوید      </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">آبدیت روزانه</li>
                   
                </ul>
                <div className="card-body d-flex  justify-content-around">
                    <a href="https://api.openweathermap.org" className="card-link">Api</a>
                    <a href="https://reactjs.org/docs/getting-started.html" className="card-link">Package</a>
                </div>
        </div>
    )
}

export default AboutAppCard;
