import React from 'react'
import '../Styles/header.css'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
        <div className="hcontainer">
            <div className="hlogo">
                <Link to="/">
                    <img src="https://www.spacexwiki.com/static/media/spacex-logo.9250222f.svg" alt="SpaceX logo" loading='lazy' width="280px" />
                </Link>
            </div>
            <div className="hmenu">
                <Link to="/launches">LAUNCHES</Link>
                <Link to="/rockets">ROCKETS</Link>
                <Link to="/dragons">DRAGONS</Link>
            </div>
        </div>
  )
}

export default Header
