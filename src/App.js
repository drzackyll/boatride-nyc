import React from 'react'
require('smoothscroll-polyfill').polyfill()
import Photos from './components/photos'

const App = () => {

  const toSection = (event) => {
    document.querySelector(event.target.hash).scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <div className="container-fluid" style={{backgroundColor: "rgb(35, 1, 1)"}}>
        <div className="row">
          <div className="col-sm-7">
            <h1>BoatrideNYC</h1>
          </div>
          <div className="col-sm-5">
            <h4 style={{color: "rgb(131, 13, 7)"}}>
              Call or email Captain John for rates and availability <br />
              john@boatridenyc.com | 914-772-7335
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-7">
            <h4>Harbor Tours and Charters</h4>
          </div>
          <div onClick={toSection} className="col-sm-1">
            <a href="#photos">Photos</a>
          </div>
          <div onClick={toSection} className="col-sm-4">
            <a href="#about">About</a>
          </div>
        </div>
      </div>

      <div>
        <img src={require("../public/images/background.jpg")} style={{width: "100%"}} alt="invisible" />
      </div>

      <div className="container-fluid" id="photos">
        <h2 style={{borderBottom: "solid"}}>Photos</h2>
        <Photos />
      </div>

      <div className="container-fluid" id="about">
        <h2 style={{borderBottom: "solid"}}>About</h2>
        Captain John is a maestro of New York Harbor and the surrounding rivers,
        inlets, and waterfronts, as well as broader NYC geography and history.
      </div>
    </div>
  );
}

export default App;
