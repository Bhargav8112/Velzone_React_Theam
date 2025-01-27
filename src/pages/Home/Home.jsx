import React, { useState } from 'react'
import "../CSS/Customemarquee.css"
import Card from '../Component/Card';
import BarChart from "../Component/BarChart";
import PieChart from "../Component/PieChart";
import TableComponent from "../Component/TableComponent";
import { Icons } from 'react-toastify';
import { Icon } from 'leaflet';
import CustomeCard from '../Component/CustomeCard';
import CustomBtn from '../Component/CustomeBtn';
const Home = () => {
  const [selectedOption, setSelectedOption] = useState("All");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const tableData = [
    {
      Gatepass_Type: "Returnable",
      Created: "60",
      Dispatched: "358",
      Partial_Arrived: "1",
      Arrived: "1419",
      Cancelled: "157",
    },
    {
      Gatepass_Type: "Non Returnable",
      Created: "60",
      Dispatched: "358",
      Partial_Arrived: "1",
      Arrived: "1419",
      Cancelled: "157",
    },
    {
      Gatepass_Type: "Job work",
      Created: "60",
      Dispatched: "358",
      Partial_Arrived: "1",
      Arrived: "1419",
      Cancelled: "157",
    },

  ];

  const cardData = [
    {
      title: "Today's Uploaded Data",
      iconClass: "ri-space-ship-line",
      counterValue: 0,
      additionalClass: "bg-light-primary",
    },
    {
      title: " This Week's Uploaded Data",
      iconClass: "ri-user-line",
      counterValue: 39,
      additionalClass: "bg-light-success",
    },
    {
      title: "This Month's Uploaded Data",
      iconClass: "ri-money-dollar-box-line",
      counterValue: 431,
      additionalClass: "bg-light-info",
    },
    {
      title: "This Year's Uploaded Data",
      iconClass: "ri-money-dollar-box-line",
      counterValue: 57,
      additionalClass: "bg-light-info",
    },
  ];

  const cardData2 = [
    {
      title: "Today's Uploaded Data",
      iconClass: "ri-space-ship-line",
      counterValue: 0,
      additionalClass: "bg-light-primary",
    },
    {
      title: " This Week's Uploaded Data",
      iconClass: "ri-user-line",
      counterValue: 39,
      additionalClass: "bg-light-success",
    },
    {
      title: "This Month's Uploaded Data",
      iconClass: "ri-money-dollar-box-line",
      counterValue: 431,
      additionalClass: "bg-light-info",
    } 
  ];
  const options = [
    { id: 'success-outlined', label: 'All', style: 'success' },
    { id: 'primary-outlined', label: 'Returnable', style: 'primary' },
    { id: 'secondary-outlined', label: 'Non Returnable', style: 'secondary' },
    { id: 'warning-outlined', label: 'ARRIVED', style: 'warning' },
    { id: 'danger-outlined', label: 'CANCELLED', style: 'danger' },
  ];

  return (
    <div>
      <div className="page-content">
    <div className="d-flex" style={{ gap: '1%' ,padding: '0px' }}> 
{cardData.map((card, index) => (
<div 
  key={index} 
  style={{ 
    flex: '1 1 30%', 
    maxWidth: '30%', 
  }}
>
  <Card
    title={card.title}
    iconClass={card.iconClass}
    counterValue={card.counterValue}
    additionalClass={card.additionalClass}
  />
</div>
))}
</div>
        <div className="container-fluid   d-flex align-items-center">
          <div className="row ">
            {/* Left Section */}
            <div className="col-lg-6 col-md-6  d-flex flex-column " style={{ width: "40%", padding: "0" }}>
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
                    <h3  >
                      Total day =

                    </h3>
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
                    <h3  >
                      Total day =

                    </h3>
                  </h3>
                </div>
              </div>



            </div>

            {/* Right Section */}
            <div className="col-lg-6 col-md-12 d-flex flex-column" style={{ width: "60%" }}>
              <div className="card " style={{ height: "110%" }}>
                <div className="card-body text-center">
                  <h3 className="card-title text-info" style={{ fontSize: 40, fontWeight: "bold", color: "#00CFE8", textAlign: "center" }}>Notice Board</h3>
                  <div style={{ height: "230px", overflow: "hidden", whiteSpace: 'nowrap', width: '100%', textAlign: "left" }}
                  >
                    <div style={{ animation: 'scroll 10s linear infinite' }}
                    >
                      <ul style={{ fontSize: '18px' }}>
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
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

        </div>
        <div style={{ display: 'flex', gap: '10px', padding: "1%" }}>
        <div className='m-0' style={{alignItems:"center"}}>

<CustomBtn options={options}/>
</div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6  d-flex flex-column ">
            <PieChart />
          </div>
          <div className="col-lg-6 col-md-6  d-flex flex-column ">
            <BarChart />
          </div>
        </div>
        <div className='card p-3 '>
          <div className='card-body mb-2'>
            <h3>Gatepass Analysis</h3>
          </div>
          <TableComponent data={tableData} />
        </div>
        <div className='p-2'>

       
        <div className="row">
          <div className="col-lg-6 col-md-6  d-flex flex-column ">
            <TableComponent data={tableData} />

          </div>
          <div className="col-lg-6 col-md-6  d-flex flex-column ">
            <div className='card p-2 mb-5'>
              <div className='row' >

              <div className='card-title col'>Statistics</div>
              <div className='card-title col' style={{ textAlign: "right" ,animation: "blink 1s infinite"}} >Last Gatepass Created -5 Hours Ago</div>
              </div>
              
              <div className="d-flex p-1 gap-2"   > 
               <CustomeCard iconClass={"fas fa-user"} status={"Returnable"} year={2005}  />
               <CustomeCard iconClass={"fas fa-user"} status={"Returnable"} year={2005} />
               <CustomeCard iconClass={"fas fa-user"} status={"Returnable"} year={2005} />
               <CustomeCard iconClass={"fas fa-user"} status={"Returnable"} year={2005} />
              </div>
              <div className='card-body'>
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.1404929253267!2d71.69248957774029!3d22.72889641862145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395947200573ab75%3A0x5a02e7dec812b110!2sS.S.%20White%20Technologies%20India!5e0!3m2!1sen!2sin!4v1737096487137!5m2!1sen!2sin"
 title='sswhite'
  height={450}
  style={{ border: 0 ,width:"100%"}}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
