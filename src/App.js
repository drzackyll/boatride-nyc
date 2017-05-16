import React from 'react';

const App = () => {
  var imgStyle = {
    maxWidth: "100%"
  }

  return (
    <div>
      <h2>BoatrideNYC</h2>
      Harbor Tours and Charters <br />
      Call or email Captain John for rates and availability <br />
      john@boatridenyc.com | 914-772-7335 <br />

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
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
  );
}

export default App;
