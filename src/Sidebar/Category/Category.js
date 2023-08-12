import "./Category.css";
import Input from "../../components/Input";
function Category({ handleChange }) {
  return (
    <div>
     <h2 className="sidebar-title">Category</h2>
     <div>
   <label className="sidebar-label-container"> 
   <input onChange={handleChange} 
   type="radio" 
   value="" 
   name="test"/>
<span className="checkmark"></span>All
   </label>

<Input
handleChange={handleChange}
value = "Phone Acessory"
title = "Phone Acessory"
name = "test"
/>

<Input
handleChange={handleChange}
value = "Tripods/Ringlight"
title = "Tripods/Ringlight"
name = "test"
/>
<Input
handleChange={handleChange}
value = "Airpods"
title = "Airpods"
name = "test"
/>
<Input
handleChange={handleChange}
value = "Watches"
title = "Watches"
name = "test"
/>
     </div>
    </div>
  )
}

export default  Category;
