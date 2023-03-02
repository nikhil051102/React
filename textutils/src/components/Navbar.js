import React from 'react'
import PropTypes from 'prop-types' 
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">{props.about} <span className="sr-only">(current)</span></Link>
          </li>
        </ul>
        <form className="form-inline mx-3 my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Mode</label>
    </div>
    </nav>
    </>
  )
}

//This will always check that exporting type of prop is same as defined below
Navbar.propTypes = {
  title: PropTypes.string.isRequired,   //isRequired : title must be defined or else it will throw error in console
  about: PropTypes.string
}

//Default Props - If value of props is not set then it will take default value
Navbar.defaultProps = {
  title : "Title not set",
  about : "About not set"
}