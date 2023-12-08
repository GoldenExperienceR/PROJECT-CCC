import React from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import '../scss/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisH, faXmark} from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'






export default function header() {
  
  const navigate = useNavigate()
  const [showDropdown,setshowDropdown] = useState(false)

  const [toggleMenu, setToggleMenu] = useState(false) /* only use brackets for useState*/
  return (
    
    <div id = "header">
        <Container>
        <Row > 

        
        <Col className='Logo'>
        <h1>PROJE</h1> 
        <div className = "image">
          <img src = "/src/assets/gallery/C logo .png" alt = "Logo" onClick={()=> navigate('/')}/>
        </div>
        <h1 id = "T">T</h1>
        </Col>


      <Col className = 'right' >

        <div className="menu">
          <div className="item" onClick={()=> navigate('/Stories')}>
            <h5 >Stories</h5>
          </div>
          <div className="item"onClick={()=> navigate('/Businesses')}>
            <h5>Businesses</h5>
          </div>
          <div className="item" onClick={()=> navigate('/Artists')}>
            <h5>Artists</h5>
          </div>
          <div className="item"onClick={()=> navigate('/Vision')}>
            <h5 id = "lastItem">Our Vision</h5>
          </div>
        </div>  

       <div class = "dropdown">

       <Dropdown className='menuButton' onClick={() => {setToggleMenu(!toggleMenu); setshowDropdown(!showDropdown);}} >
      <Dropdown.Toggle  >
      <FontAwesomeIcon icon = {toggleMenu?faXmark:faEllipsisH}  onClick={() => {setToggleMenu(!toggleMenu); setshowDropdown(!showDropdown);}} className='menuBar'/>
      </Dropdown.Toggle>

      <Dropdown.Menu className='smallmenu'>
        <Dropdown.Item href="/Stories">Stories</Dropdown.Item>
        <Dropdown.Item href="/Businesses">Bussineses</Dropdown.Item>
        <Dropdown.Item href="/Artists">Artists</Dropdown.Item>
        <Dropdown.Item href="/Vision">Our Vision</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

   
                      
        
      
       </div>

        </Col>
        

        </Row>
      </Container>
    </div>


  )
}
