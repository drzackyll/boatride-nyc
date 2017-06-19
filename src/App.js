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
          <div onClick={toSection} className="col-sm-1 col-sm-offset-1">
            <h4><a href="#about">About</a></h4>
          </div>
          <div onClick={toSection} className="col-sm-1">
            <h4><a href="#rates">Rates</a></h4>
          </div>
          <div onClick={toSection} className="col-sm-1">
            <h4><a href="#photos">Photos</a></h4>
          </div>
          <div onClick={toSection} className="col-sm-1">
            <h4><a href="#contact">Contact</a></h4>
          </div>
        </div>
        <div className="row">
          <h4 className="col-sm-6">
            The Urban Boating Adventure for New Yorkers by New Yorkers.
          </h4>
          <h4 className="col-sm-6">
            Call or email Captain John for rates and availability <br />
            <a href="mailto:john@boatridenyc.com">john@boatridenyc.com</a> | 914-772-7335
          </h4>
        </div>
      </div>

      <img src={require("../public/images/background-2.jpg")} style={{width: "100%"}} alt="invisible" />

      <div className="container-fluid" id="about">
        <div className="row">
          <h2>About</h2>
          <div className="col-sm-8 col-sm-offset-2">
            Step on board this fast Rigid Hull Inflatable Boat ("RHIB") and get
            up close and personal with the City's waterfront like you never imagined.
            Captain John has deep knowledge of New York Harbor and the surrounding
            rivers, inlets, and waterfronts, as well as broader NYC geography and
            history. He has been called upon to help with sailing events, photo
            shoots, movie shoots, wedding events, and private sightseeing tours.
            With decades of experience navigating the area, Captain John can customize
            your BoatrideNYC experience to hit your points of interest and maybe
            even some you didn't know were there.
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid" id="rates">
        <div className="row">
          <h2>Rates</h2>
          <div className="col-sm-8 col-sm-offset-2">
            Captain John's signature New York Harbor tour circumnavigates Manhattan.
            He guides passengers through New Yorker's long history with the water and
            how New Yorkers have shaped their harbor. The rate is $550 for up to 6
            passengers.
            <br /><br />
            Custom tours, photography, media and vessel support also available at rates
            starting at $250 per hour.
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid" id="photos">
        <div className="row">
          <h2>Photos</h2>
          <div className="col-sm-8 col-sm-offset-2">
            <Photos />
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid" id="contact">
        <div className="row">
          <h2>Contact</h2>
          <div className="col-sm-8 col-sm-offset-2">
            Call or email Captain John for rates and availability <br />
            <a href="mailto:john@boatridenyc.com">john@boatridenyc.com</a> | 914-772-7335
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
