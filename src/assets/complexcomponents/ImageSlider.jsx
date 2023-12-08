import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


import "../scss/imageslider.scss"



export default function ImageSlider() {
    return (
        <Carousel >
          <Carousel.Item>
            
          <img 
          src = '../src/assets/gallery/african accesories.jpg'
          />
          
          <Carousel.Caption>
            <div className="carousel-caption">
            <h3>Accessories</h3>
            </div>
          
        </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img 
          src = '../src/assets/gallery/fashion2.jpg'/>
          <Carousel.Caption>
          <div className="carousel-caption">
          <h3>Fashion</h3>
              </div>
          
        </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            
          <img
          src = '../src/assets/gallery/art.jpg'/>
        
          <Carousel.Caption>
          <div className="carousel-caption">
          <h3>Art</h3>
              </div>
          
        </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
