
export function Middle(){
    return(
        <div className="text-white">
            <div >
                <div className="text-center d-flex flex-column justify-content-center align-items-center">
                    <p className="mid-text">Unlimited movies, TV shows and more</p>
                    <p className="fs-5 ">Watch anywhere. Cancel anytime.</p>
                    <p className="fs-5">Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <div className="text-center d-flex justify-content-center">
                    
                        <div className="text-white">
                            <input type="text" className="input-ele form-control p-3 bg-dark" placeholder="Email Address"/>
                        </div>
                        <div className="mx-1 text-white">
                            <button className="btn btn-danger p-3 w-100">Get Started<span className="bi bi-chevron-right"></span></button>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}