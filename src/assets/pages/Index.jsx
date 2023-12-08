import React from 'react'
import Header from '../sharedcomponents/header.jsx'
import Footer from '../sharedcomponents/footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/index.scss'
import ImageSlider from '../complexcomponents/ImageSlider.jsx';




export default function index() {
  return (
    <div id = 'index'>
    <Header/>
  
    <div className='welcome-image '>
      <img src = './src/assets/gallery/Samarket.webp' />
      <h1  >
        Connection
      </h1>
      <h2>
        Collaboration
      </h2>
      <h3>
        Culture
      </h3>
    </div>

    <div id = 'Discover'>
      <h1>
        Discover
      </h1>
    <ImageSlider/>
    </div>
    <Footer/>
  </div>
  
)

  
}
