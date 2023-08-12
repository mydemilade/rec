import "./Recommended.css"
import Buttons from "../components/Buttons";
function Recommended({handleClick}) {
  return (<>
<div>
  <h2 className="recommended-title">Recommended</h2>
  <div className="recommended-flex">
  <Buttons onClickHandler={handleClick} value="" title="All Products"/>
<Buttons onClickHandler={handleClick} value="Amazon" title="Amazon"/>
<Buttons onClickHandler={handleClick} value="Shein" title="Shein"/>
<Buttons onClickHandler={handleClick} value="Aliexpress" title="Aliexpress"/>
<Buttons onClickHandler={handleClick} value="Ebay" title="Ebay"/>

  </div>

</div>

  </>

    
  )
}
export default  Recommended;