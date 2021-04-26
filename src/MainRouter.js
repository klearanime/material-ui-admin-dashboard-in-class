import React from "react";
import { Switch, Route } from "react-router-dom";

// import Navbar from "./components/Navbar/Navbar";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import Home from "./components/Home/Home";

const Home = React.lazy(() => import("./components/Home/Home"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Signup = React.lazy(() => import("./components/Signup/Signup"));

function MainRouter() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default MainRouter;
