import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
 
 
//AuthenticationInner pages
import BasicSignIn from '../pages/AuthenticationInner/Login/BasicSignIn';
 
import BasicPasswReset from '../pages/AuthenticationInner/PasswordReset/BasicPasswReset';
 
import BasicLogout from '../pages/AuthenticationInner/Logout/BasicLogout';
 
import Alt404 from '../pages/AuthenticationInner/Errors/Alt404';
import Error500 from '../pages/AuthenticationInner/Errors/Error500';

import BasicPasswCreate from "../pages/AuthenticationInner/PasswordCreate/BasicPasswCreate";
import CoverPasswCreate from "../pages/AuthenticationInner/PasswordCreate/CoverPasswCreate";
import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

import ReturnablePass from "../pages/Home/ReturnablePass";
import NonReturnablePass from "../pages/Home/NoneReturnablePass";

 
 
// User Profile
import UserProfile from "../pages/Authentication/user-profile";
import Home from "../pages/Home/Home";
import JobWorkPass from "../pages/Home/JobWorkPass";
import DetailOfJobWork from "../pages/Home/DetailOfJobWork";
import History from "../pages/Home/History";
import Recive from "../pages/Home/Recive";
import Report from "../pages/Home/Report";
import Version from "../pages/Home/Version";
import QueryForApp from "../pages/Home/QueryForApp";
// import Home from "../pages/";

  
const authProtectedRoutes = [
  { path: "/Home", component: <Home /> },
  { path: "/Returnablegatepass", component: <ReturnablePass /> },
  { path: "/NonReturnablegatepass", component: <NonReturnablePass /> },
  { path: "/JobWork", component: <JobWorkPass /> },
  { path: "/DetailsOfJobWork", component: <DetailOfJobWork /> },
  { path: "/History", component: <History /> },
  { path: "/Recive", component: <Recive /> },
  { path: "/Report", component: <Report /> },
  { path: "/Qapp", component: <QueryForApp /> },
  { path: "/Version", component: <Version /> },


  { path: "/profile", component: <UserProfile /> },
  {
    path: "/",
    exact: true,
    component: <Navigate to="/Home" />,
  },
  { path: "*", component: <Navigate to="/Home" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
 
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },
  //AuthenticationInner pages
  { path: "/auth-signin-basic", component: <BasicSignIn /> },
    { path: "/auth-logout-basic", component: <BasicLogout /> },
     { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },
    { path: "/auth-pass-change-basic", component: <BasicPasswCreate /> },
  { path: "/auth-pass-change-cover", component: <CoverPasswCreate /> },
  { path: "/auth-offline", component: <Offlinepage /> },

];

export { authProtectedRoutes, publicRoutes };