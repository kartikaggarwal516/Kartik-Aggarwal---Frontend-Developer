import React, { memo, useState } from 'react'
import '../Styles/searchComponent.css'
import { Dropdown, DropdownButton, InputGroup } from 'react-bootstrap'

const SearchComponent = (props) => {
  let { launchUrl, setLaunchUrl } = props

  const onLaunchChange = (e) => {
    const arr = launchUrl.split('')
    let index = launchUrl.indexOf('launch_year')
    if (index === -1) {
      launchUrl += '&launch_year=' + e
    } else {
      index += 12
      arr.splice(index, 4, e)
      launchUrl = arr.join('')
    }
    setLaunchUrl(launchUrl)
  }

  const onSuccessChange = (e) => {
    const arr = launchUrl.split('')
    let index = launchUrl.indexOf('launch_success')
    if (index === -1) {
      launchUrl += '&launch_success=' + e
    } else {
      index += 15
      const prev = launchUrl.substr(index, 4)
      if (prev === 'true') {
        arr.splice(index, 4, e)
      } else {
        arr.splice(index, 5, e)
      }
      launchUrl = arr.join('')
    }
    setLaunchUrl(launchUrl)
  }
  return (
        <div className='searchContainer'>
            <InputGroup className="searchField">
                <DropdownButton
                    variant="outline-secondary"
                    title="Launch Year"
                    onSelect={onLaunchChange}
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item eventKey='2014'>2014</Dropdown.Item>
                    <Dropdown.Item eventKey='2015'>2015</Dropdown.Item>
                    <Dropdown.Item eventKey='2016'>2016</Dropdown.Item>
                    <Dropdown.Item eventKey='2017'>2017</Dropdown.Item>
                    <Dropdown.Item eventKey='2018'>2018</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
            <InputGroup className="searchField">
                <DropdownButton
                    variant="outline-secondary"
                    title="Successful Launch"
                    onSelect={onSuccessChange}
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item eventKey='true'>True</Dropdown.Item>
                    <Dropdown.Item eventKey='false'>False</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
        </div>
  )
}

export default memo(SearchComponent)
