import { Button, Input, TextField } from '@mui/material';
import './style.css';
import '@mui/material';


export function NetflixHome(){
    return(
        <div className="netflix-bg" style={{backgroundImage:'url("netflixHome.jpg")',height:'100vh'}}>
            <div className='bg-2'>
            <header className='d-flex justify-content-between p-3'>
                <div>
                    <span className='h4'>NETFLIX</span>
                </div>
                <div className='m-2 d-flex align-items-center'>
                    <div className="input-group">
                        <span className='bg-dark text-white bi bi-translate input-group-text'></span>
                        <select className='bg-dark text-white'>
                            <option>English</option>
                            <option>हिन्दी</option>
                        </select>
                        <Button className='mx-2 rounded' color="error" variant='contained'>Sign In</Button>
                    </div>
                  
                </div>
            </header>
            <main className='text-white d-flex flex-column justify-content-center align-items-center' style={{height:'80vh'}}>
               <div>
                    <div style={{'width':'500px'}}>
                        <h2 className='text-center'>Unlimited movies, TV shows and more</h2> 
                        <p className='text-center'> Starts at ₹149. Cancel at any time.</p>
                        <p className='text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <div className='d-flex input-group'>
                        <div>
                        <TextField className="bg-dark form-control"  label="Email address" variant="standard"></TextField>
                        </div>
                        <div>
                        <Button className='mx-2 rounded' color="error" variant='contained'>Get Started <span className='bi bi-chevron-right'></span></Button>
                        </div>
                    </div>
               </div>
            </main>
            </div>
        </div>
    )
}
