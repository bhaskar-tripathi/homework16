import React, { useEffect, useState } from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import Projects from "./component/projects";
import Blogs from "./component/myBlogs";
import ProfileContext from "./component/utils/profileData";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import MainPage from "./component/pages/main";
import API from "./component/utils/API";

function App() {

  var [profileState, setProfileState] = useState({
    profileData: {}
  });

  // When the component mounts, a call will be made to get profile data
  useEffect(() => {
    API.getProfileData("bhaskar")
      .then(res => {
        setProfileState(res)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);



  return (
      <HashRouter basename="/">
      <ProfileContext.Provider value={{ profileData: profileState }}>
        <Header />
        <div className="container-fluid wrapper">

          <Route exact path="/" component={MainPage} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blogs" component={Blogs} />

        </div>
        <Footer />
      </ProfileContext.Provider>

    </HashRouter>   

);
}

export default App;
