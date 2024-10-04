import "bootstrap/dist/css/bootstrap.css";
import { WhatWeDo } from "./page2";
import { OurProject } from "./ourProject";
import { ExpertsGrow } from "./experts";
import { FooterFun } from "./footer";
export function HomePage() {
  return (
    <div className="">
      <div className="container"  style={{ height: "937px" }}>
        <div className="d-flex align-items-center">
          <div className="">
            <div className="award-ele">Award Winning</div>
            <div className="dm-ele">Digital Marketing Agency</div>
            <div className="p-ele w-75">
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
              lacus nec risus finibus feugiat et fermentum
            </div>

            <button
              type="button"
              className="contact-btn"
              data-bs-toggle="modal"
              data-bs-target="#login"
            >
              CONTACT US
            </button>
            <div
              className="modal fade"
              id="login"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1>Talk to us</h1>
                  </div>
                  <div className="modal-body">
                    <dl>
                      <dd>
                        <input
                          type="email"
                          name=""
                          id="email-input"
                          autocomplete="off"
                          required
                          className="input-field form-control"
                          placeholder="Work email*"
                        />
                      </dd>
                      <div className="d-flex">
                        <dd>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name*"
                          />
                        </dd>
                        <dd>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name*"
                          />
                        </dd>
                      </div>
                      <div className="d-flex">
                        <input className="input" type="checkbox" />
                        <label>
                          I agree to Fyle's terms and conditions, and provide
                          consent to send me communication.
                        </label>
                      </div>
                      
                    </dl>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-danger" data-bs-dismiss="modal">Contact Is</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bg-con">
            <img src="images/hero.png" className="" />
          </div>
        </div>
      </div>
      <WhatWeDo />
      <OurProject />
      <ExpertsGrow />
      <FooterFun />
    </div>
  );
}
