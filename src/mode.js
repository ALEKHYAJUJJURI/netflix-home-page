import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
export function Model(){
    const [images,setImages] = useState({})
    
    function getImage(){
            setImages({transform:'scale(1.5)'})
    }
    const [dots,setdots] = useState({src:''})
    function firstImg(){
      setdots({src:"1.svg"})
    }
    return(
        <div className='container'>
      <div className="d-flex imgs-con">
      <div className='w-50' onMouseMove={getImage}><img src='images/1-2.png' className="image"/></div>
      <div className='w-50'><img src="images/2-2.png" className="image"/></div>
      <div className="w-50 img-card d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center" style={{images}}>
              <div className="my-3"><img src="images/icon.svg"/></div>
              <p className="web-ele my-3">WEB DEVELOPMENT</p>
              <p className="p-ele2 text-center my-3">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
              <button className="read-btn my-4"> <a href="#https://www.fylehq.com/" target="_blank" className="px-3"> READ MORE<img src="images/arrow.svg" className=''/></a></button>
          </div>
      </div>
      <div className='w-50'><img src="images/3-2.png" className="image"/></div>
  </div>
  
  <div className="d-flex flex-row align-items-center my-2" ><img src="images/1.svg" className='mx-2'/><img src="images/2.svg" className='mx-2'/><img src="images/3.svg" className='mx-2'/>
  </div>
  </div>
    )
}