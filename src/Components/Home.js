import React, { memo, useEffect } from 'react'
import '../Styles/home.css'
import { connect } from 'react-redux'
import { fetchInfo } from '../Actions/Actions'

function Home (props) {
  const { info } = props

  useEffect(() => {
    props.fetchInfo()
  }, [])

  return (
        <div className="home">
            <div className="homebox">
                <div className="about">
                    <h2>ABOUT SPACEX</h2>
                    <p>{info && info.summary}</p>
                </div>
                <div className="cinfo">
                    <h2>COMPANY INFO</h2>
                    <ul>
                        <li>Founded: {info && info.founded}</li>
                        <li>Employees: {info && info.employees}</li>
                        <li>Launch Sites: {info && info.launch_sites}</li>
                        <li>Test Sites: {info && info.test_sites}</li>
                        <li>Vehicles: {info && info.vehicles}</li>
                    </ul>
                </div>
                <div className="cleaders">
                    <h2>COMPANY LEADERSHIP</h2>
                    <ul>
                        <li>CEO: {info && info.ceo}</li>
                        <li>COO: {info && info.coo}</li>
                        <li>CTO: {info && info.cto}</li>
                        <li>CTO of Propulsion: {info && info.cto_propulsion}</li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

const mapStateToProps = store => {
  return {
    info: store.info
  }
}

export default connect(mapStateToProps, {
  fetchInfo
})(memo(Home))
