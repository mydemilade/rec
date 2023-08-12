import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
// import Products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Card from "./components/Card";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";


//Datbase
import products from './db/data'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

  //input filter
  const handleInputChange = (event)=> {
    setQuery(event.target.value)
  };
  const filteredItems = products.filter(products => 
    products.title.toLocaleLowerCase
    ().indexOf(query.toLocaleLowerCase())!== -1
    );

    // radio  filter
    const handleChange = (event) => {
      setSelectedCategory(event.target.value)
    }
  
     // button  filter
     const handleClick = (event) => {
      setSelectedCategory(event.target.value)
     }

     function filteredData(products,selected,query){
      let filteredProducts = products

      //filtering Input Items
      if (query) {
   
          filteredProducts = filteredItems;
        }
     

      //selected fiter
      // using the destructuring method
      if (selected) {
        filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => category === selected || 
        color === selected || company === selected || newPrice === selected || title === selected)
      }return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice}) =>
      (<Card
       key ={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      />
      ));

     }
const result = filteredData(products, selectedCategory,query);
  return(
    <>
    {/* parsing the data's into the components as props */}
    <Sidebar handleChange={handleChange}/> 
    <Navigation query= {query}handleInputChange={handleInputChange}/>
    <Recommended handleClick = {handleClick}/>
    <Products result ={result} />
   
    
    </>
  );
 
}

export default App;
