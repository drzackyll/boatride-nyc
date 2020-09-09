import React from 'react'

const toSection = (event) => {
  document.querySelector(event.target.hash).scrollIntoView({
    behavior: 'smooth'
  })
}

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#"><h1>BoatrideNYC</h1></a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <div className="nav navbar-nav navbar-right"><br />
            <a onClick={toSection} className="btn-default" href="#about">About</a> &nbsp; &nbsp;
            <a onClick={toSection} className="btn-default" href="#photos">Photos</a> &nbsp; &nbsp;
            <a onClick={toSection} className="btn-default" href="#video">Videos</a> &nbsp; &nbsp;
            <a onClick={toSection} className="btn-default" href="#rates">Rates</a> &nbsp; &nbsp;
            <a onClick={toSection} className="btn-default" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
