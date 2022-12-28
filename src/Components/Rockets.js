import React, { memo, useEffect } from 'react'
import '../Styles/rockets.css'
import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchRockets } from '../Actions/Actions'

function Rockets (props) {
  const { rockets } = props

  useEffect(() => {
    props.fetchRockets()
  }, [])

  return (
        <div className="rockets">
            <h1>SPACEX ROCKETS</h1>
            <div className="rocketbox">
                {rockets && rockets.length && rockets.map((r, i) => {
                  return (
                        <Card style={{ width: '18rem' }} key={i} className="rcard" >
                            <Card.Body>
                                <h2>{r.rocket_name}</h2>
                                <Card.Text>
                                    {r.description}
                                </Card.Text>
                                <h4>Specs</h4>
                                <ul>
                                    <li>Height: {`${r.height.meters}m`} </li>
                                    <li>Diameter: {`${r.diameter.meters}m`} </li>
                                    <li>Mass: {`${r.mass.kg}kg`} </li>
                                    <li>Booster: {r.boosters} </li>
                                    <li>Success Rate: {r.success_rate_pct} </li>
                                </ul>
                                <h4>Engines</h4>
                                <ul>
                                    <li>Engines: {r.engines.number} </li>
                                    <li>Type: {r.engines.type} </li>
                                    <li>Version: {r.engines.version} </li>
                                    <li>Propellant 1: {r.engines.propellant_1} </li>
                                    <li>Propellant 2: {r.engines.propellant_2} </li>
                                </ul>
                                <a href={r.wikipedia}>
                                    <Button variant="primary">Read about {r.rocket_name} on Wikipedia </Button>
                                </a>
                            </Card.Body>
                        </Card>
                  )
                })}
            </div>
        </div>
  )
}

const mapStateToProps = store => {
  return {
    rockets: store.rockets
  }
}

export default connect(mapStateToProps, {
  fetchRockets
})(memo(Rockets))
