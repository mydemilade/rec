import Input from "../../components/Input";
import "./Price.css";

 function Price ({handleChange})  {
  return (
   <>
    <div className="ml">
     <h2 className="sidebar-title price-title">Price</h2>
     <label className="sidebar-label-container"> 
   <input onChange={handleChange} 
   type="radio" 
   value="" 
   name="test2"/>
<span className="checkmark"></span>All
   </label>

   <Input
   handleChange={handleChange}
   value = {20}
   title = "$0 - $20"
   name = "test2"
   />
      <Input
   handleChange={handleChange}
   value = {30}
   title = "$20 - $30"
   name = "test2"
   />
      <Input
   handleChange={handleChange}
   value = {40}
   title = "$30 - $40"
   name = "test2"
   />
      <Input
   handleChange={handleChange}
   value = {50}
   title = " Over $50"
   name = "test2"
   />
    </div>
    </>
  );
}

export default Price;