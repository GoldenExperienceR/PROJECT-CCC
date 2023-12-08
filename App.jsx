import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from "./assets/pages/Index"
import Artists from "./assets/pages/Artists"
import Businesses from "./assets/pages/Businesses"
import Stories from "./assets/pages/Stories"
import Vision from "./assets/pages/Vision"
import Filter from "./assets/pages/Filter"



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element = {<Index/>}/>/* when we setting index you are settig the welcoing page */
    <Route path='/Artists' element = {<Artists/>}/> 
    <Route path="/Businesses" element = {<Businesses/>}/>
    <Route path='/Stories' element = {<Stories/>}/> 
    <Route path='/Vision' element = {<Vision/>}/>
    <Route path="/Businesses/Filter" element = {<Filter/>}/>
    
    </Routes>
    </BrowserRouter>
  )
}

