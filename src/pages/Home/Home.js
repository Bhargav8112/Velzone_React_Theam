import React,{useState} from 'react'

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("All");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
        <div className="page-content">
        <div className="container-fluid   d-flex align-items-center">
            <div className="row ">
              {/* Left Section */}
              <div className="col-lg-6 col-md-6  d-flex flex-column " style={{ width: "40%",padding:"0" }}>
                <div className="card">
                  <div className="card-body">



                    <h5>
                      Congratulations 🎉 
                      <sup className="blink" style={{ color: "red", fontSize: 17, top: 1 }}>
                        <span id="lblreturnsupplier" />
                      </sup>
                    </h5>
                    <p className="card-text font-small-3">
                      Returnable Gatepass - You have won gold medal
                    </p>
                    <h3 className="" style={{ color: "#00CFE8" }}>
                      Fast Delivery
                    </h3>
                    <h3 className="">
                      <a href="javascript:void(0);">
                        Total day =
                        <span id="lblreturnday" />
                      </a>
                    </h3>
                    <br />
                    <br />
                    <br />
                    <h5>
                      Congratulations 🎉
                      <sup className="blink" style={{ color: "red", fontSize: 17, top: 1 }}>
                        <span id="lbljobsupplier" />
                      </sup>
                    </h5>
                    <p className="card-text font-small-3">
                      Jobwork Gatepass - You have won gold medal
                    </p>
                    <h3 className="" style={{ color: "#00CFE8" }}>
                      Fast Delivery
                    </h3>
                    <h3 className="">
                      <a href="javascript:void(0);">
                        Total day =
                        <span id="lbljobday" />
                      </a>                                                                                                                                            
                    </h3>
                  </div>
                </div>



              </div>

              {/* Right Section */}
              <div className="col-lg-6 col-md-12 d-flex flex-column" style={{ width: "60%" }}>
                <div className="card " style={{height:"65%"}}>
                  <div className="card-body text-center">
                    <h3 className="card-title text-info" style={{ fontSize: 40, fontWeight: "bold", color: "#00CFE8", textAlign: "center" }}>Notice Board</h3>
                    <marquee
                      width="98%"
                      direction="up"
                      height="50%"
                 
                      style={{ fontSize: 20 }}
                    >
                      <ul>
                        <li>
                          Job Work Challan module.{" "}
                          <sup className="blink" style={{ color: "green" }}>
                            Coming Soon
                          </sup>
                        </li>
                        <br />
                        <li>
                          All users must attach a copy of their gatepass with the material's bill.
                          Without that, the Accounts department will hold the payment for that bill.
                        </li>
                        <br />
                        <li>
                          Attached copy must have a final status over the gatepass. (Eg. Returnable
                          gatepass -"ARRIVED", non-returnable gatepass-"DISPATCHED", jobwork
                          gatepass-"ARRIVED")
                        </li>
                        <br />
                        <li>
                          Mrunal Parmar(Mgr CNC-Engineering) has permission to VALIDATE the
                          gatepass. <sup className="blink" style={{ color: "red" }} />
                        </li>
                        <br />
                        <li>For more information please contact CNC-Engineering.</li>
                        <br />
                        <li>
                          Contact Details:
                          <br />
                          Email: engineeringindia@sswhite.net
                          <br />
                          Ph No: 02752-287-503/536/550
                        </li>
                      </ul>
                    </marquee>


                  </div>
                </div>
              </div>
            </div>
            
          </div>

          <div className="d-flex " style={{ }}>
      {["All", "Returnable", "Non Returnable", "Job Work", "Cancelled"].map((option) => (
        <div key={option} className="mx-3 d-flex align-items-center">
          <input
            type="radio"
            id={option}
            name="gatepass"
            value={option}
            checked={selectedOption === option}
            onChange={handleChange}
            style={{ accentColor: "#007bff",                transform: "scale(2.5)",marginRight:"15px"   }} // Add styling to radio buttons
          />
          <label htmlFor={option} style={{ marginLeft: "8px",   fontSize: "23px" }}>
            {option}
          </label>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default Home
