import { WhyChooseUs } from "./whyChoose";

export function OurProject(){
    return(
        <div className="container">
            <WhyChooseUs/>
            <p className="card3-head">OUR PROJECT</p>
            <p className="card3-head2">Why we are best</p>
            <div className="d-flex my-5" style={{gap:'30px'}}>
                
                <div className="">
                    <img src="images/image.png" />
                </div>  
                <div className="d-flex flex-column justify-content-center" style={{background: '#F6F6F6 0% 0% no-repeat padding-box', padding:'20px'}}>
                    <div className=" text-left mx-3 p-4" style={{width: '370px',height: '189px'}}>
                        <p className="our-cards">Genderless Kei – Japan’s Hot</p>
                        <p className="our-cards2">Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                    </div>
                    <div  className=" text-left mx-3  p-4" style={{width: '370px',height: '189px'}}>
                        <p className="our-cards">Better Strategy & Quality</p>
                        <p className="our-cards2">Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                    </div>
                    <div className="text-left mx-3 p-4" style={{width: '370px',height: '189px'}}>
                        <p className="our-cards">Genderless Kei – Japan’s Hot</p>
                        <p className="our-cards2">Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                    </div>
                </div>             
            </div>
        </div>
    )
}