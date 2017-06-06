import React from 'react'
require('smoothscroll-polyfill').polyfill()
import Photos from './components/photos'

const App = () => {

  const titleStyle = {
    margin: "0.2em 0"
  }

  const toSection = (event) => {
    document.querySelector(event.target.hash).scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h1 style={titleStyle}>BoatrideNYC</h1>
            <h4 style={titleStyle}>Harbor Tours and Charters</h4>
          </div>
          <div onClick={toSection} className="col-sm-1 col-sm-offset-2">
            <h4><a href="#about">About</a></h4>
          </div>
          <div onClick={toSection} className="col-sm-1">
            <h4><a href="#photos">Photos</a></h4>
          </div>
        </div>
        <div className="row">
          <h4 className="col-sm-6">
            The Urban Boating Adventure for New Yorkers by New Yorkers.
          </h4>
          <h4 className="col-sm-6">
            Call or email Captain John for rates and availability <br />
            john@boatridenyc.com | 914-772-7335
          </h4>
        </div>
      </div>

      <img src={require("../public/images/background-2.jpg")} style={{width: "100%"}} alt="invisible" />

      <div className="container-fluid" id="about">
        <h2 style={{borderBottom: "solid", color: "rgb(51, 122, 183)"}}>About</h2>
        Captain John has deep knowledge of New York Harbor and the surrounding rivers,
        inlets, and waterfronts, as well as broader NYC geography and history. He
        has been called upon to help with sporting events, photo shoots, movie shoots,
        wedding events, and private sightseeing tours. With decades of experience
        navigating the area, Captain John can customize your BoatrideNYC experience
        to hit your points of interest and maybe even some you didn't know were
        there. See New York from a whole new perspective.
      </div>

      <div className="container-fluid" id="photos">
        <h2 style={{borderBottom: "solid", color: "rgb(51, 122, 183)"}}>Photos</h2>
        <Photos />
      </div>
    </div>
  );
}

export default App;
