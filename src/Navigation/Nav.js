import {FiHeart} from "react-icons/fi";
import {AiOutlineShoppingCart, AiOutlineUserAdd, 
    } from "react-icons/ai";


import "./Nav.css";

 function Nav({handleInputChange, query}) {
  return  <nav>
    <div className="nav-container">
      <input type="text" 
      className="search-input" 
      placeholder="Enter your search"
      value={query} //Bind the value of the input to the query state
      onChange={handleInputChange} // Attach handleInputChange to the onChange event
/>
    </div>

  <div className="profile-container">
    <a href="#">
    <FiHeart className="nav-icons"/>
    </a>

    <a href="#">
    <AiOutlineShoppingCart className="nav-icons"/>
    </a>

    <a href="#">
    <AiOutlineUserAdd className="nav-icons"/>
    </a>

  </div>
    </nav>
}
export default Nav;