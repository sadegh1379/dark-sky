import React from 'react'

function AboutCard() {
    return (
   

<div className="card card-cascade " >


  <div className="view view-cascade overlay">
    <img style={{width:'200px '}} className="card-img-top mt-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHw8QJzQb4f3D3OlzdDRVwgT8Tv32XBH6JbgqnEP4jwqamQGMoFFEZodS0SX7scb-xtplUEj13krcOC7Qy-t1eW-TL5ITV5-zPHQ&usqp=CAU&ec=45690273" alt="sadegh akbari"/>
   
  </div>


  <div className="card-body card-body-cascade text-center">

  
    <h4 className="card-title"><strong>Sadegh Akbari</strong></h4>
 
    <h6 className="font-weight-bold indigo-text py-2">Front-End developer</h6>
   
    <p className="card-text">Creative Junior Front-end Developer with 1 year of experience leveraging JavaScript to build
responsive websites, and interactive features . Interested in Js Freamworks like ReactJs and learning
more and more .
    </p>


    <a type="button" href="http://sadeghakbari.gigfa.com" className="btn-floating btn-small m-2 h1  btn-fb"><i className="fa text-danger fa-chrome"></i></a>

    <a type="button" href="https://api.whatsapp.com/send?phone=989376770472" className="btn-floating btn-small m-2 mx-2  h1 btn-tw"><i style={{backgroundColor: '#25d366' , color: 'white' , borderRadius : '5px'}} class="fa fa-whatsapp "></i></a>

    <a type="button" href="https://t.me/sadeghakbarias" className="btn-floating btn-small m-2 h1 btn-dribbble"><i className="fa  fa-telegram"></i></a>

  </div>

</div>

    )
}

export default AboutCard
