import React, { useState, useEffect } from 'react';
import { isEmpty } from "lodash";

import { useSelector,useDispatch } from 'react-redux';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { editProfile, resetProfileFlag } from "../../store/actions";

//import images
import avatar1 from "../../assets/images/users/avatar-1.jpg";

const ProfileDropdown = () => {

    const dispatch = useDispatch();          
    const { user } = useSelector(state => ({
        user: state.Profile.user,
    }));

    const [userName, setUserName] = useState(" ");
  const [possition, setpossition] = useState("1");

    // useEffect(() => {
    //     if (sessionStorage.getItem("authUser")) {
    //         const obj = JSON.parse(sessionStorage.getItem("authUser"));
    //         setUserName(process.env.REACT_APP_DEFAULTAUTH === "fake" ? obj.username === undefined ? user.first_name ? user.first_name : obj.data.first_name : "Admin" || "Admin" :
    //             process.env.REACT_APP_DEFAULTAUTH === "firebase" ? obj.providerData[0].email : "Admin"
    //         );
    //     }
    // }, [userName, user]);

    //Dropdown Toggle
    const [isProfileDropdown, setIsProfileDropdown] = useState(false);
    const toggleProfileDropdown = () => {
        setIsProfileDropdown(!isProfileDropdown);
    };

    useEffect(() => {
        if (sessionStorage.getItem("authUser")) {
          const obj = JSON.parse(sessionStorage.getItem("authUser"));
    
          if (!isEmpty(user)) {
            obj.data.first_name = user.first_name;
            sessionStorage.removeItem("authUser");
            sessionStorage.setItem("authUser", JSON.stringify(obj));
          }
    
          setUserName(obj.data.username);
        
     
          setpossition(obj.data.position || " ");
    
          setTimeout(() => {
            dispatch(resetProfileFlag());
          }, 3000);
        }
      }, [dispatch, user]);
      const nameParts = userName.split(".");
// const auth = nameParts.map(name => name.charAt(0).toUpperCase()+ name.slice(1)).join(" ");

const initials = nameParts.map(name => name.charAt(0).toUpperCase()).join("");
    
    return (
        <React.Fragment>
            <Dropdown isOpen={isProfileDropdown} toggle={toggleProfileDropdown} className="ms-sm-3 header-item topbar-user">
                <DropdownToggle tag="button" type="button" className="btn">
                    <span className="d-flex align-items-center">
                    <div className="rounded-circle header-profile-user d-flex align-items-center justify-content-center" 
     style={{
         width: "40px", 
         height: "40px", 
         backgroundColor: "#0E3857", 
         color: "#fff", 
         fontWeight: "bold", 
         fontSize: "18px"
     }}>
    {initials}
</div>
                        <span className="text-start ms-xl-2">
                            <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{userName}</span>
                            <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">{possition}</span>
                        </span>
                    </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                    <h6 className="dropdown-header">Welcome {userName} !</h6>
                    <DropdownItem href={process.env.PUBLIC_URL + "/profile"}><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                        <span className="align-middle">Profile</span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "/apps-chat"}><i
                        className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Messages</span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "#"}><i
                        className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Taskboard</span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "/pages-faqs"}><i
                        className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Help</span></DropdownItem>
                    <div className="dropdown-divider"></div>
                    <DropdownItem href={process.env.PUBLIC_URL + "/pages-profile"}><i
                        className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Balance : <b>$5971.67</b></span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "/pages-profile-settings"}><span
                        className="badge bg-soft-success text-success mt-1 float-end">New</span><i
                            className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span
                                className="align-middle">Settings</span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "/auth-lockscreen-basic"}><i
                        className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Lock screen</span></DropdownItem>
                    <DropdownItem href={process.env.PUBLIC_URL + "/logout"}><i
                        className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle" data-key="t-logout">Logout</span></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default ProfileDropdown;