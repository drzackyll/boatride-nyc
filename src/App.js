import React from 'react'
require('smoothscroll-polyfill').polyfill()
import Photos from './components/photos'
import NavBar from './components/navbar'

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h4>
              <div style={{lineHeight: '18px', paddingBottom: '8px', textDecoration: 'underline'}}>
                The Urban Boating Adventure for New Yorkers by New Yorkers.
              </div>
              <div className="col-sm-6">
                Harbor Tours and Charters<br />
                Launch and Shuttle Service<br />
                VIP Transport<br />
                Special Events<br />
              </div>
              <div className="col-sm-6">
                Support Boat Service<br />
                Film Shoots<br />
                Drone Service<br />
              </div>
            </h4>
          </div>
          <div className="col-sm-6">
            <h4>
              Call, text, or email Captain John for rates and availability <br />
              <a href="mailto:john@boatridenyc.com">john@boatridenyc.com</a> | 914-772-7335
            </h4>
          </div>
        </div>
      </div>
      <img src={require("../public/images/background-2.jpg")} style={{width: "100%"}} alt="invisible" />

      <div className="container-fluid" id="about">
        <div className="row">
          <h2>About</h2>
          <div className="col-sm-8 col-sm-offset-2">
            Step on board one of Captain John's fast Rigid Hull Inflatable Boats ("RHIB") and get up close 
            and personal with the City's waterfront like you never imagined. Captain John has deep 
            knowledge of New York Harbor and the surrounding rivers, inlets, and waterways, as well as 
            broader NYC geography and history. He has been called upon to help with sailing events, photo 
            shoots, movie shoots, marriage proposals, wedding events, and private sightseeing tours. With 
            decades of experience navigating the area, Captain John can customize your BoatrideNYC 
            experience to hit your points of interest and maybe even some you didn't know were there.
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid" id="photos">
        <div className="row">
          <h2>Photos</h2>
          <div className="col-sm-8 col-sm-offset-2" style={{textAlign: 'center'}}>
            <Photos />
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid" id="video">
        <div className="row">
          <h2>Video</h2>
          <div className="col-sm-8 col-sm-offset-2">
            <iframe src="https://player.vimeo.com/video/343314248?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <p><a href="https://vimeo.com/343314248">Secret Proposal on a boat (BoatrideNYC.com) near Statue of Liberty</a> from <a href="https://vimeo.com/utcinema">Uladzimir Taukachou</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
          </div>
          <div className="col-sm-8 col-sm-offset-2">
            <iframe src="https://player.vimeo.com/video/284637372?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <p><a href="https://vimeo.com/284637372">Secret Proposal on a Boat, New York Harbor August 2018</a> from <a href="https://vimeo.com/utcinema">Uladzimir Taukachou</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid" id="rates">
        <div className="row">
          <h2>Rates</h2>
          <div className="col-sm-8 col-sm-offset-2">
            Captain John's signature 2-hour New York Harbor tour circumnavigates Manhattan. 
            He guides passengers through New Yorkers' long history with the water and how 
            New Yorkers have shaped their harbor. The rate is $750 for up to 6 passengers.
            <br /><br />
            Custom tours, photography, media and vessel support also available at rates 
            starting at $350 per hour.
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

      <div className="hide">
        governors island private boat service
        collective retreats governors island boat service
        collective retreats governors island ferry
        collective retreats governors island boat shuttle transport
        collective retreats governors island boat harbor tours
      </div>
    </div>
  );
}

export default App;
