import React, { memo, useEffect, useState } from 'react'
import '../Styles/launches.css'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchLaunches } from '../Actions/Actions'
import SearchComponent from './SearchComponent'

const baseUrl = 'https://api.spacexdata.com/v3/launches?limit=100'

function Launches (props) {
  const { launches, activePage } = props
  const [launchUrl, setLaunchUrl] = useState(baseUrl)

  useEffect(() => {
    props.fetchLaunches(launchUrl)
  }, [launchUrl])

  return (
    <div className="launches">
      <div className='launchHeader'>
        <h1>SPACEX LAUNCHES</h1>
        <SearchComponent
          launchUrl={launchUrl}
          setLaunchUrl={setLaunchUrl}
        />
      </div>
      <div className='launchContainer'>
        <div className="launchbox">
            {launches && launches.length && launches.map((l, i) => {
              return (
                <Card style={{ width: '18rem' }} key={i} className="lcard" >
                  <Card.Img variant="top" src={l.links.mission_patch_small} height="150px" loading='lazy' />
                  <Card.Body>
                    <h2>{l.mission_name}</h2>
                    <Card.Title>Mission Details:</Card.Title>
                    <ul>
                      <li>Mission Ids: {l.rocket.rocket_name}</li>
                      <li>Launch Year: {l.launch_year} </li>
                      <li>Successful Launch: {`${l.launch_success}`} </li>
                      <li>Successful Landing: {`${l.land_success}`} </li>
                    </ul>
                  </Card.Body>
                </Card>
              )
            })}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    launches: store.launches,
    activePage: store.activePage
  }
}

export default connect(mapStateToProps, {
  fetchLaunches
})(memo(Launches))
