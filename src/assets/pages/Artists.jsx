import React, { useState } from 'react'
import Header from '../sharedcomponents/header.jsx'
import Footer from '../sharedcomponents/footer.jsx'
import { Container,Modal,ModalBody,Row } from 'react-bootstrap'
import '../scss/artists.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Artists() {
  const [Artist,setArtist] = useState(0) /*Depending on which picture is pressed, showArtist is set to different numbers*/
   
  
  return (
    
    <div>
        <Header/>   
        
        <div className="heading">
          <h1> Explore Amazing Artistic Talent </h1>
        </div>
    

      
        <Modal show = {(1 == Artist)} onHide = {()=> setArtist(0)} className='artist1' >
          <ModalBody>
            <div className="closebutton">
              <FontAwesomeIcon icon={faXmark} className='fa-beat' onClick={()=>setArtist(0)}/>
            </div>
               <div className="artist">
               <div className="image">
                 <img src="./src/assets/gallery/Artists/GreatJoy (@ngreatjoy1).png" alt="GreatJoy" />
               </div>
               <div className="info">
                 <div className="heading1">
                   <h1>GreatJoy (@ngreatjoy1)</h1>
                 </div>
                 <div className="text">
                   <p1>GreatJoy Ndlovu is a Zimbabwe-born, Johannesburg-based artist whose figurative work often centres around portraiture. Often depicting the artists’ own inner emotional world through these portraits, rather than depicting an external reality, GreatJoy’s works brim with expressive brushstrokes, pencil-work, splashes of colour and dynamic movement. The young artist (b. 1993) has already participated in a residency granted by the Southern African Foundation of Contemporary Art (SAFFCA) and is collected by various private and corporate art collections, such as the collection of famous comedian and TV host Trevor Noah, ABSA Bank, South African Horizons, Envisionit Capital Solutions, and more, making GreatJoy a one-to-watch artist in the contemporary African art market.</p1>
                 </div>
               </div>
               </div>  
          </ModalBody>
         </Modal> 
      
         <Modal show = {(2 == Artist)} onHide = {()=> setArtist(0)} className='artist1' >
          <ModalBody>
          <div className="closebutton">
              <FontAwesomeIcon icon={faXmark} className='fa-beat' onClick={()=>setArtist(0)}/>
            </div>
               <div className="artist">
               <div className="image">
                 <img src="./src/assets/gallery/Artists/Kris Rossouw (@krisrossouw).jpg" alt="GreatJoy" />
               </div>
               <div className="info">
                 <div className="heading2">
                   <h1>Kris Rossouw (@krisrossouw)</h1>
                 </div>
                 <div className="text">
                   <p1>Krisjan Rossouw is a Cape Town photographer whose recent oeuvre, Culture Club, is a play on African Pop Art and traditional ritual clay. Rossouw’s work is technicolour, exploring and defying notions of imposed and imagined identities in colour and light. A key aspect to Rossouw’s work is the collaborative element between model and photographer, emphasising the dialogue and relationship within the creative process, which results in powerful and diversified portraits that celebrate the people and communities in South Africa.</p1>
                 </div>
               </div>
               </div>  
          </ModalBody>
         </Modal> 
      
         <Modal show = {(3 == Artist)} onHide = {()=> setArtist(0)} className='artist1' >
          <ModalBody>
          <div className="closebutton">
              <FontAwesomeIcon icon={faXmark} className='fa-beat' onClick={()=>setArtist(0)}/>
            </div>
               <div className="artist">
               <div className="image">
                 <img src="./src/assets/gallery/Artists/Patrick Bongoy (@patrickbongoy).png" alt="GreatJoy" />
               </div>
               <div className="info">
                 <div className="heading3">
                   <h1>Patrick Bongoy (@patrickbongoy)</h1>
                 </div>
                 <div className="text">
                   <p1>Patrick Bongoy is a painter and sculptor, born in Kinshasa, the Democratic Republic of Congo, and now based in Cape Town. Bongoy takes a mixed-media approach to his creations, using paint, strips of weaved hessian and rubber, and other materials to create sculptures or sculptural works on canvas. His practice addresses literal and figurative environmental pollution, often also commenting on the hard labour undertaken by women in the DRC to make ends meet. His works are full of movement, structure, and are charged with powerful emotion.</p1>
                 </div>
               </div>
               </div>  
          </ModalBody>
         </Modal> 
      
        <Container className='Pagecontent'> 
         <Row >
         <h1>GreatJoy</h1>
        <img src="./src/assets/gallery/Artists/GreatJoy (@ngreatjoy1).png" alt="GreatJoy" onClick={()=>setArtist(1)}/>
          
        </Row> 
        <Row>
       <h1>Kris Rossouw</h1>
          <img src="./src/assets/gallery/Artists/Kris Rossouw (@krisrossouw).jpg" alt="Kris Rossouw" onClick={()=>setArtist(2)} />
          
        </Row> 
        <Row>
        <h1>Patrick Bongoy</h1>
          <img src="./src/assets/gallery/Artists/Patrick Bongoy (@patrickbongoy).png" alt="Patrick Bongoy" onClick={()=>setArtist(3)}/>
          
        </Row> 
        </Container>  
        <div>
        <Footer/>
        </div>
      </div>
    
        
      
  )
}
