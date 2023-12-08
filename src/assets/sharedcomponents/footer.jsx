import React from 'react'
import '../scss/footer.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';




export default function footer() {
  return (
    <div id = 'footer'>
      <Container>
        <Row>
          <Col id = "Slogan" >
          <img src = "/src/assets/gallery/C logo .png"  className ='Logo'></img>
          <h1>
            Inspiring Your Expression  
          </h1>
          
          </Col>
          <Col id = "newsletter">
          <h2>
            SUBSCRIBE TO OUR WEEKLY NEWSLETTER 
          </h2>
          <div className="subscription">
          <input type='text' placeholder='YOUR-EMAIL'></input>
          <button id = "subscribeButton"> Subscribe </button>
          </div>
          
          </Col>
          <Col id = "findUs">
            <Container className="FollowUs">
              <Row>
              <h1>
                Follow Us
              </h1>
              </Row>
              <Row id = "icons"> 
               
                <Col >
                <FontAwesomeIcon icon = {faInstagram} className='icon'/>
               </Col>
               <Col >
               <FontAwesomeIcon icon = {faXTwitter} className='icon'/>
               </Col>
               <Col >
               <FontAwesomeIcon icon = {faYoutube} className='icon'/>
               </Col>
              
                </Row>
              </Container>
             
            
            <Container className="GetInTouch">
              <h1>
                Get in Touch
              </h1>
              <h4>
                0782507560
              </h4>
              <h4>
                enquires@projectccc.co.za
              </h4>
            </Container>
          </Col>

        </Row>
      </Container>
   </div>
  )
}
