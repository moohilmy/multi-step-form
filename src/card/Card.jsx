import NavBar from "./nav-bar/NavBar.jsx";
import "./card.css"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import YourInfo from "./yourInfo/YourInfo.jsx";
import SelectPlan from "./select-plan/SelectPlan.jsx";
import AddOns from "./add-ons/AddOns.jsx";
import Summary from "./summary/Summary.jsx";
const Card = () => {
    return ( 
        <BrowserRouter>
        <div className="card">
        <NavBar/>
        <Routes>
            <Route path="/" element={<YourInfo/>}/>
            <Route path="/select-plan" element={<SelectPlan/>}/>
            <Route path="/add-ons" element={<AddOns/>}/>
            <Route path="/summary" element={<Summary/>}/>
        </Routes>
        </div>
        </BrowserRouter>
     );
}
 
export default Card;