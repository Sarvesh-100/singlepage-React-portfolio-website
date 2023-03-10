import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import MyProjects from "./components/MyProjects";
import Followme from "./components/Followme";
import ContactUs from "./components/Contactus";
import Skillbar from "./components/Skillbar";
// import Skill2 from './components/Skill2'



function App() {
  return (
    <div className="App">
      <Header />
      <div className="f-heading">
        <h1>Features</h1>
        <p>here are some features of react js</p>
      </div>
      <Features/>
      <Skillbar />
      <MyProjects/>
      <ContactUs/>
      <Followme />
    </div>
  );
}

export default App;
