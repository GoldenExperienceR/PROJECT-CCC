import React, { useState } from 'react'
import Header from '../sharedcomponents/header.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../scss/businesses.scss'



export default function Businenesses() {
 const [Filter, setFilter] = useState({
  Fashion: false,
  Food:false,
  Accesories:false,
  Service:false
})





  
const [closeSearch,setCS] = useState(true);
const [emptySearch, setES] = useState(true);

const handleChange = (event) => {
  console.log("The new value is:", event.target.value  )
  console.log(event.target.value  == '' )
  if(event.target.value  == ""){
    setES(true);
  } else 
  {setES(false);
  };
 
}
const searchResponse = () => { 
  console.log("Valid search") 
 }

 const brands =(
[{
name:'EcoBiz',  
province:"All",
image:"EcoBiz.png",
type:"Service",
website:""
},
{
name:"Geex",  
province:"Gauteng",
image:"Geex.png",
type:"Service",
website:""

},
{
name:"Pawsitive Pets",  
province:"Western Cape",
image:"PawsitivePets.png",
type:"Service",
website:""
},
{
name:"Fashion Bomb Daily",  
province:"Limpopo",
image:"Fashion-Bomb.png",
type:"Fashion",
website:""
},
{
name:"SELFI",  
province:"Western Cape",
image:'SELFI.webp',
type:'Fashion',
website:"",

},
{
name:"Fuata Moyo",  
province:"Western Cape",
image:"Fuatamoyo.jpg",
type:"Fashion",
website:""
},
{
name:"Iloni",  
province:"Northern Cape",
image:"Ilonidi.png",
type:"Accesories",
website:""
},
{
name:"Mamabolo Jewellers",  
province:"Northern Cape",
image:"MamaboloJewellers.jpg",
type:"Accesories",
website:""
},
{
name:"Maraki Jeweller",  
province:"Western Cape",
image:"MerakiJeweller.png",
type:"Accesories",
website:""
},
{
name:"Jonkershuis Eatery",  
province:"Free State",
image:"Jonkershuis.png",
type:"Food",
website:""
},
{
name:"Nanaga Farm Stall",  
province:"Eastern Cape",
image:'Nanaga.png',
type:"Food",
website:""
},
{
name:"Sakhumzi Restuarant",  
province:"Gauteng",
image:"Sakhumzi.png",
type:"Food",
website:""
},
{
name:"",  
province:"",
image:"",
type:"",
website:""
},
{
name:"",  
province:"",
image:"",
type:"",
website:""
},
{
name:"",  
province:"",
image:"",
type:"",
website:""
},
])

const filteredBrands = brands.filter(brand=> { 
    return ((brand.type == "Fashion" && Filter.Fashion == true )||(brand.type == "Accesories" && Filter.Accesories == true )||(brand.type == "Service" && Filter.Service == true )||(brand.type == "Food" && Filter.Food == true ))
})

  return (
    <div className="body" >
      <div className='header'>
       <Header/>  
      </div>
       
       <div className="page-welcome"  >
         <h1 style={{display : !(closeSearch & emptySearch) ? 'none' : 'block'}}>Local & Authentic Brands Suitable for All Needs</h1>
      </div> 
            
      <div className='searchBody'>
          <div className="box">
            <input type="checkbox" id="check"  checked = {(closeSearch & emptySearch)} />
            <div className='search-box'>
            <input type = "search" placeholder = "Type here..." onChange={handleChange}/>
            
            <div className="searchIcon" onClick={()=>setCS(!closeSearch)}>
            <label for="check">
              <FontAwesomeIcon icon = {faSearch} onClick={emptySearch?null:searchResponse} className={emptySearch?'':'fa-beat'}/>
              </label>
              </div>
            </div>
          </div>
      </div>
      <div className="filter-title" style={{display : (closeSearch & emptySearch) ? 'none' : 'flex'}}> <h1>Filter Brands</h1></div>
      <div className="filter-options"  style={{display : (closeSearch & emptySearch) ? 'none' : 'flex'}}>
        <button className={Filter.Fashion ?"selected":"unselected"} onClick={()=> setFilter({...Filter, Fashion:!Filter.Fashion})} >Clothing</button>
        <button className={Filter.Accesories?"selected":"unselected"} onClick={()=> setFilter({...Filter,Accesories:!Filter.Accesories})} >Accesories</button>
        <button className={Filter.Food?"selected":"unselected"}onClick={()=> setFilter({...Filter,Food:!Filter.Food})} >Food</button>
        <button className={Filter.Service?"selected":"unselected"}onClick={()=> setFilter({...Filter,Service:!Filter.Service})} >Service</button>
      </div>
     
      <div className="Filter" style={{display : (closeSearch & emptySearch) ? 'none' : 'flex'}}>
       
        
        {filteredBrands.map( brand => ( 
          <><div className="brand-image">
           
            <img src={"./src/assets/gallery/BusinessLogos/" + brand.image} alt={brand.name} />
          </div></>
        ))
        
        }
       
      </div>
    
    </div>


    

   
   
  )
}
