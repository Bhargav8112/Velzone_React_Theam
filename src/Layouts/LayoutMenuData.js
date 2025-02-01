import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isReturnGatepass, setIsReturnGatepass] = useState(false);
    const [isNonReturnGatepass, setIsNonReturnGatepass] = useState(false);
    const [isJobWorkGatepass, setIsJobWorkGatepass] = useState(false);
    const [isDetailsJobWorkGatepass, setIsDetailsJobWorkGatepass] = useState(false);
    const [isHistoryGatepass, setHistoryGatepass] = useState(false);
    const [isReciveGatepass, setReciveGatepass] = useState(false);
    const [isReportGatepass, setReportGatepass] = useState(false);
    const [isVersionGatepass, setVersionGatepass] = useState(false);
    const [isQappGatepass, setQappGatepass] = useState(false);

    

    

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboards",
            icon: "ri-dashboard-2-line",
            link: "/Home",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
              
                updateIconSidebar(e);
            },
            
        },
        {
            id: "returnable_gatepass",
            label: "Returnable Gatepass",
            icon: "ri-dashboard-2-line",
            link: "/Returnablegatepass",
            stateVariables: isReturnGatepass,
            click: function (e) {
                e.preventDefault();
                setIsReturnGatepass(!isReturnGatepass);
               
                updateIconSidebar(e);
            },
            
        },
        {
            id: "non_returnable_gatepass",
            label: "Non Returnable Gatepass",
            icon: "ri-dashboard-2-line",
            link: "/NonReturnablegatepass",
            stateVariables: isNonReturnGatepass,
            click: function (e) {
                e.preventDefault();
                setIsNonReturnGatepass(!isNonReturnGatepass);
                
                updateIconSidebar(e);
            },
            
        },
        {
            id: "JobWork",
            label: "JobWork",
            icon: "ri-dashboard-2-line",
            link: "/JobWork",
            stateVariables: isJobWorkGatepass,
            click: function (e) {
                e.preventDefault();
                setIsJobWorkGatepass(!isJobWorkGatepass);
              
                updateIconSidebar(e);
            },
            
        },
        {
            id: "DetailJobWork",
            label: "Details Of JobWork",
            icon: "ri-dashboard-2-line",
            link: "/DetailsOfJobWork",
            stateVariables: isDetailsJobWorkGatepass,
            click: function (e) {
                e.preventDefault();
                setIsDetailsJobWorkGatepass(!isDetailsJobWorkGatepass);
              
                updateIconSidebar(e);
            },
            
        },
        {
            id: "History",
            label: "History",
            icon: "ri-dashboard-2-line",
            link: "/History",
            stateVariables: isHistoryGatepass,
            click: function (e) {
                e.preventDefault();
                setHistoryGatepass(!isHistoryGatepass);
              
                updateIconSidebar(e);
            },
            
        },
        {
            id: "Recive",
            label: "Recive",
            icon: "ri-dashboard-2-line",
            link: "/Recive",
            stateVariables: isReciveGatepass,
            click: function (e) {
                e.preventDefault();
                setReciveGatepass(!isReciveGatepass);
              
                updateIconSidebar(e);
            },
            
        },
        {
            id: "Report",
            label: "Report",
            icon: "ri-dashboard-2-line",
            link: "/Report",
            stateVariables: isReportGatepass,
            click: function (e) {
                e.preventDefault();
                setReportGatepass(!isReportGatepass);
              
                updateIconSidebar(e);
            },
            
        },
     
        {
            id: "Query_For_App",
            label: "Query For App",
            icon: "ri-dashboard-2-line",
            link: "/Qapp",
            stateVariables: isQappGatepass,
            click: function (e) {
                e.preventDefault();
                setQappGatepass(!isQappGatepass);
              
                updateIconSidebar(e);
            },
            
        },
     
        {
            id: "Version",
            label: "Version",
            icon: "ri-dashboard-2-line",
            link: "/Version",
            stateVariables: isVersionGatepass,
            click: function (e) {
                e.preventDefault();
                setVersionGatepass(!isVersionGatepass);
              
                updateIconSidebar(e);
            },
            
        },
     

       
         
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;