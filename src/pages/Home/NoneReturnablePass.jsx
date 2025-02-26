import React, { useState, useEffect } from 'react';
import GatepassForm from '../Component/GatepassForm'
 
import GatepassTable from '../Component/GatepassTable'
import { useSelector,useDispatch } from 'react-redux';
 
import axios from 'axios';
import { formatDate } from '@fullcalendar/core';
 
const NoneReturnablePass = () => {
  
  const [suppliers, setSuppliers] = useState([]);
  const [userName, setUserName] = useState(" ");
  const [formData, setFormData] = useState({
    gatepasstye: " ", // Set gate pass type explicitly
    gatedate: "", // Set current timestamp if needed
    deliverydate: "",
    returneddate: "",
    cancelleddate: "",
    authorizedperson: "",
    id: 0, // If required
    gid: 0, // If required
    qty: " " || 0, // Ensure numerical values
    price: " " || 0,
    receivedQty: 0,
    receivedsswpartqty: 0,
    receivedpartweight: 0,
    totalmaterialcost: 0,
    userid: 0,
    returnst: 0,
    pendingqty: 0,
    copytypeconfirm: 0,
    GPNo: "",
    status:"",
  });


  const { user } = useSelector(state => ({
    user: state.Profile.user,
  }));
  useEffect(() => {
    if (sessionStorage.getItem("authUser")) {
      const obj = JSON.parse(sessionStorage.getItem("authUser"));



      setUserName(obj.data.username);

      console.log(userName)



    }
  }, [user, userName]);
  const nameParts = userName.split(".");
  const auth = nameParts.map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(" ");
  console.log(setFormData.supplieremail);
  // Function to handle input change
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });


  };

  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // To show/hide the dropdown

  // Fetch suppliers based on entered name
  const fetchSuppliers = async (name) => {
    try {
      if (name.trim()) {
        const response = await axios.get(
          `api/Gatepass/search?supplierName=${name}`
        );
        console.log(response.supplierDetails)
        setSuppliers(response.supplierDetails); // Assuming response contains supplierDetails
        setIsDropdownVisible(true); // Show dropdown if there are matching results
      } else {
        setIsDropdownVisible(false); // Hide dropdown when input is empty
      }
    } catch (error) {
      console.error("Error fetching suppliers:", error);
    }
  };

  // Handle change in the supplier name input field
  const handleSupplierNameChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, suppliername: value }));

    // Fetch suppliers whenever the input changes
    fetchSuppliers(value);
  };
  useEffect(() => {
    fetchSuppliers(formData.suppliername);
  }, [formData.suppliername]);

  // Handle selecting a supplier from the dropdown
  const handleSupplierSelect = (supplier) => {
    setFormData((prevData) => ({
      ...prevData,
      suppliername: supplier.suppliername,
      suppliergst: supplier.suppliergst,
      supplierphone: supplier.supplierphone,
      supplieremail: supplier.supplieremail,
      supplieraddress: supplier.supplieraddress,
    }));
    setIsDropdownVisible(false); // Hide the dropdown after selection
  };

  const [ReturnGatePassData, setReturnGatePassData] = useState([]);



  // Store individual entries in localStorage
  const handleAddEntry = async (e) => {
    e.preventDefault(); // Prevent form refresh

    try {
      let storedId = sessionStorage.getItem("newId");

      if (!storedId) {
        const latestResponse = await axios.get("api/Gatepass/latest");
        storedId = latestResponse.id + 1;
        sessionStorage.setItem("newId", storedId);
      }

      let storedGID = sessionStorage.getItem("GID");
      let newGID = storedGID ? parseInt(storedGID) + 1 : 1;

      let usernameParts = userName.split(".");
      const initials = usernameParts.map(name => name.charAt(0).toUpperCase()).join("");
      let generatedGPNo = `N${storedId}${initials}`;

      // Store new values in sessionStorage
      sessionStorage.setItem("GPNO", generatedGPNo);
      sessionStorage.setItem("newId", storedId);
      sessionStorage.setItem("GID", newGID.toString());

      console.log("Stored GPNo:", generatedGPNo);
      console.log("Stored ID:", storedId);
      console.log("Stored GID (incremented):", newGID);

      const payload = {
        ...formData,
        gatepasstye: "Non-Returnable",
        gatedate: new Date().toISOString(),
        deliverydate: new Date().toISOString(),
        returneddate: new Date().toISOString(),
        cancelleddate: new Date().toISOString(),
        authorizedperson: auth,
        id: storedId,
        gid: newGID,
        GPNo: generatedGPNo,
        qty: Number(formData.qty) || 0,
        price: Number(formData.price) || 0,
        receivedQty: 0,
        receivedsswpartqty: 0,
        receivedpartweight: 0,
        totalmaterialcost: 0,
        userid: "0",
        returnst: 0,
        pendingqty: 0,
        copytypeconfirm: 0,
        status:"CREATED",
      };

      // Retrieve existing data from localStorage
      let storedData = JSON.parse(localStorage.getItem("ReturnGatePassData")) || [];

      // Add new entry to stored data
      storedData.push(payload);

      // Save updated data back to localStorage
      localStorage.setItem("ReturnGatePassData", JSON.stringify(storedData));

      // Update state
      setReturnGatePassData(storedData);

      console.log("Added to localStorage:", payload);

    } catch (error) {
      console.error("❌ Adding entry failed:", error.response || error.message);
      alert("Adding entry failed. Check console.");
    }
  };


  const handleFinalSubmit = async () => {
    try {
      let storedData = JSON.parse(localStorage.getItem("ReturnGatePassData")) || [];

      if (storedData.length === 0) {
        alert("No data to submit!");
        return;
      }

      console.log("📦 Sending payload:", JSON.stringify(storedData, null, 2));

      await axios.post("api/Gatepass", storedData, {
        headers: { "Content-Type": "application/json" }
      });

      console.log("✅ Final submission successful");

      localStorage.removeItem("ReturnGatePassData");
      setReturnGatePassData([]);
      let storedId = sessionStorage.getItem("newId");

      if (!storedId) {
        const latestResponse = await axios.get("api/Gatepass/latest");
        storedId = latestResponse.id + 1;
      } else {
        storedId = parseInt(storedId) + 1;
      }

      // Reset GID to 1 after final submission
      let newGID = 0;


      // Generate GPNo using initials
      let usernameParts = userName.split(".");
      const initials = usernameParts.map(name => name.charAt(0).toUpperCase()).join("");
      let generatedGPNo = `R${storedId}${initials}`;

      // Store new values in sessionStorage
      sessionStorage.setItem("GPNO", generatedGPNo);
      sessionStorage.setItem("newId", storedId);
      sessionStorage.setItem("GID", newGID.toString()); // Reset GID to 1

      console.log("Stored GPNo:", generatedGPNo);
      console.log("Stored ID:", storedId);
      console.log("Stored GID (reset to 1):", newGID);


      // Update form data with new ID and GPNo
      setFormData(prevData => ({
        ...prevData,
        id: storedId,
        GPNo: generatedGPNo,

      }));

      alert("Final submission successful!");
    } catch (error) {
      console.error("❌ Final submission failed:", error.response?.data || error.message);
    }
  };


  const handleEdit = (item) => {
    console.log("Editing item:", item);
    // You can implement your editing logic here
  };

  const handleDelete = (sr_no) => {
    console.log("Deleting item with SR NO:", sr_no);
    // Implement delete logic here
  };
  return (
    <div>
    <div className="page-content">
 
      
    <div className="row">
    <div className="col-lg-12">
      <div className="card">
        <div className="card-header align-items-center d-flex">
          <h4 className="card-title mb-0 flex-grow-1">Non Returnable Form</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="row gy-4 p-2">
              <div className="col-xl-4 col-md-6">
                <label className="form-label">Supplier Name</label>
                <input
                  type="text"
                  name="suppliername"
                  className="form-control"
                  value={formData.suppliername}
                  onChange={handleSupplierNameChange}
                  onClick={() => setIsDropdownVisible(true)} // Show dropdown when clicked
                />
                {isDropdownVisible && (
                  <ul
                    className="dropdown-list"
                    style={{
                      position: "relative",
                      
                      overflowY: "auto",
                    
                      border: "1px solid #ccc",
                       
                    }}
                  >
                    {suppliers.map((supplier) => (
                      <li
                        key={supplier.suppliername}
                        className="dropdown-item"
                        onClick={() => handleSupplierSelect(supplier)}
                        style={{ padding: "5px", cursor: "pointer" }}
                      >
                        {supplier.suppliername}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="col-xl-4 col-md-6">
                <label className="form-label">Phone No</label>
                <input
                  type="number"
                  name="supplierphone"
                  className="form-control"
                  value={formData.supplierphone}
                  onChange={(e) =>
                    setFormData({ ...formData, supplierphone: e.target.value })
                  }
                  disabled
                />
              </div>

              <div className="col-xl-4 col-md-6">
                <label className="form-label">GST No</label>
                <input
                  type="text"
                  name="suppliergst"
                  className="form-control"
                  value={formData.suppliergst}
                  onChange={(e) =>
                    setFormData({ ...formData, suppliergst: e.target.value })
                  }
                  disabled
                />
              </div>
            </div>

            <div className="row gy-4 p-2">
              <div className="col-xl-6 col-md-6">
                <label className="form-label">Supplier Email</label>
                <input
                  type="email"
                  name="supplieremail"
                  className="form-control"
                  value={formData.supplieremail}
                  onChange={(e) =>
                    setFormData({ ...formData, supplieremail: e.target.value })
                  }
                  disabled
                />
              </div>

              <div className="col-xl-6 col-md-6">
                <label className="form-label">Supplier Address</label>
                <input
                  type="text"
                  name="supplieraddress"
                  className="form-control"
                  value={formData.supplieraddress}
                  onChange={(e) =>
                    setFormData({ ...formData, supplieraddress: e.target.value })
                  }
                  disabled
                />
              </div>
            </div>

            <div className="row gy-4 p-2">
              <div className="col-xl-3 col-md-6">
                <label className="form-label">Description of Goods</label>
                <input
                  type="text"
                  name="descriptionofgoods"
                  className="form-control"
                  value={formData.descriptionofgoods}
                  onChange={handleChange}
                />
              </div>

              <div className="col-xl-3 col-md-6">
                <label className="form-label">Qty</label>
                <input
                  type="number"
                  name="qty"
                  className="form-control"
                  value={formData.qty}
                  onChange={handleChange}
                />
              </div>

              <div className="col-xl-3 col-md-6">
                <label className="form-label">Price (in ₹)</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>

              <div className="col-xl-3 col-md-6">
                <label className="form-label">Remarks</label>
                <input
                  type="text"
                  name="remarks"
                  className="form-control"
                  value={formData.remarks}
                  onChange={handleChange}
                />
              </div>
            </div>

             
            <button

className="btn btn-info waves-effect mx-2 responsive-btn"
onClick={handleAddEntry} // Do NOT generate a new GPNo
// onClick={handleSubmit} // Do NOT generate a new GPNo
>

  Add
</button>

          </form>
        </div>
      </div>
    </div>
  </div>
   
  <div className='p-3'>
          <GatepassTable data={ReturnGatePassData} onEdit={handleEdit} onDelete={handleDelete} />

        </div>



        <button

          className="btn btn-secondary waves-effect mx-2 m-2 responsive-btn"
          onClick={handleFinalSubmit} // Generate a new GPNo
        >
          Final Submit
        </button>
    </div>
  </div>
  )
}

export default NoneReturnablePass
