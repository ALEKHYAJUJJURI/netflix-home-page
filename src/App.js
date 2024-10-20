import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Middle } from './middle';

export default function App(){
  return(

    <div className="body" style={{backgroundImage:'url("netflixHome.jpg")'}}>
      <div className='bg-shade'>
        <div className='headerr d-flex flex-row justify-content-between align-items-center'>
           <h1 className='text-danger fw-bold'>NETFLIX</h1>
          <div>
         <div className='input-group'>
         <span className='bi bi-translate text-white input-group-text bg-dark'></span>
            <select className='bg-dark text-white form-select'>
              <option>English</option>
              <option>हिंदी</option>
              <option>తెలుగు</option>
              <option>தமிழ்</option>
              <option>English</option>
            </select>
            <button className='btn btn-danger mx-1'>SignIn</button>
         </div>
          </div>
        </div>
        <div className='d-flex flex-column justify-content-center' style={{height:'450px'}}>
          <Middle/>
        </div>
      </div>
    </div>
  )

}