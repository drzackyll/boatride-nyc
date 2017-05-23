import React from 'react';
require('smoothscroll-polyfill').polyfill();

const App = () => {
  var imgStyle = {
    maxWidth: "100%"
  }

  var toSection = (event) => {
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

      <div className="container-fluid">
        <h2 style={{borderBottom: "solid"}} id="photos">Photos</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <div id="boatrideCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#boatrideCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#boatrideCarousel" data-slide-to="1"></li>
                  <li data-target="#boatrideCarousel" data-slide-to="2"></li>
                  <li data-target="#boatrideCarousel" data-slide-to="3"></li>
                  <li data-target="#boatrideCarousel" data-slide-to="4"></li>
                  <li data-target="#boatrideCarousel" data-slide-to="5"></li>
                  <li data-target="#boatrideCarousel" data-slide-to="6"></li>
                  <li data-target="#boatrideCarousel" data-slide-to="7"></li>
                  <li data-target="#boatrideCarousel" data-slide-to="8"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <img style={imgStyle} src={require("../public/images/boatride_1.jpg")} alt="First slide" />
                  </div>
                  <div className="item">
                    <img style={imgStyle} src={require("../public/images/boatride_2.jpg")} alt="Second slide" />
                  </div>
                  <div className="item">
                    <img style={imgStyle} src={require("../public/images/boatride_3.jpg")} alt="Third slide" />
                  </div>
                  <div className="item">
                    <img style={imgStyle} src={require("../public/images/boatride_4.jpg")} alt="Fourth slide" />
                  </div>
                  <div className="item">
                    <img style={imgStyle} src={require("../public/images/boatride_5.jpg")} alt="Fifth slide" />
                  </div>
                  <div className="item">
                    <img style={imgStyle} src={require("../public/images/boatride_6.jpg")} alt="Sixth slide" />
                  </div>
                  <div className="item">
                    <img style={imgStyle} src={require("../public/images/boatride_7.jpg")} alt="Seventh slide" />
                  </div>
                  <div className="item">
                    <img style={imgStyle} src={require("../public/images/boatride_8.jpg")} alt="Eighth slide" />
                  </div>
                </div>

                <a className="left carousel-control" href="#boatrideCarousel" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#boatrideCarousel" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
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
