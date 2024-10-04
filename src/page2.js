import 'bootstrap/dist/css/bootstrap.css'
import { Model } from './mode'
import { useState } from 'react'
export function WhatWeDo(){
 

    return(
        <div style={{'height' : '1030px'}}>
        <div className="container">
              <div className="home-card2 d-flex flex-column justify-content-center align-items-center" >
        <div className="d-flex flex-column ">
          <div> <p className="what-we-do-ele">What we do</p></div> 
            <div className="d-flex justify-content-start align-items-center" style={{gap:'60px'}}>
                <p className="services-ele">services provide for you</p>
                <p className="p-ele " style={{marginBottom:'50px'}}>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</p>
            </div>
            </div>
      </div>
      
        </div>
        <Model />
        </div>
    )
}