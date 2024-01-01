import { useEffect, useState } from "react"
import "./add-ons.css"
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { reloadISYearly, setAddOns, setactiveSection } from "../../redux/Api/formApi"

const AddOns = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [selcted, setSelcted] = useState([]); 
    useEffect(()=>{
        dispatch(setactiveSection('add-ons'))
    },[])
    const {isYearly} = useSelector(state => state.form)
    const [selectedItems, setSelectedItems] = useState([]);
    const onClickHandler = (value,nun)=>{
        const valueBox = value
        const boxNum = parseInt(nun);
        if (selectedItems.includes(boxNum)) {
            const updatedItems = selectedItems.filter(item => item !== boxNum);
            setSelectedItems(updatedItems);
        } else {
            // If not, add it to the array
            setSelectedItems([...selectedItems, boxNum]);
        }
            setSelcted([...selcted, valueBox]);
            selcted.map(b => {
                if(b.name === value.name){
                    const updatedItems = selcted.filter(item => item.name !== value.name);
                    setSelcted(updatedItems);
                }
            })
    }
    return ( 
        <div className="step-section">
            <div className="contant">
            <div className="header">
                <h1 className="header-step">Pick add-ons</h1>
                <span className="header-info">Add-ons help enhance your gaming experience.</span>
            </div>
            <div className="select-form">
                <div className="add-ons-container">
                    <div data-name="Online service" data-value={isYearly ? "+$10/yr" : "+$1/mo"} className={`add-select-box ${selectedItems.includes(1) && `active-add-box`}`} data-boxnum="1" onClick={(e)=>onClickHandler({name: e.currentTarget.getAttribute("data-name"),price: e.currentTarget.getAttribute('data-value')},e.currentTarget.getAttribute("data-boxnum"))}>
                        <div className="check-mark">{selectedItems.includes(1) && <div className="icon"><i className="bi bi-check"></i></div>}</div>
                        <div className="info-container">
                            <div className="add-select-box-info">
                                <h5 className="header-add-box">Online service</h5>
                                <span className="add-box-details">Access to multiplayer games</span>
                            </div>
                            <div className="add-box-price">{isYearly ? "+$10/yr" : "+$1/mo"}</div>
                        </div>
                    </div>
                    <div data-name="Larger storage" data-value={isYearly ? "+$20/yr" : "+$2/mo"} className={`add-select-box ${selectedItems.includes(2) && `active-add-box`}`} data-boxnum="2" onClick={(e)=>onClickHandler({name: e.currentTarget.getAttribute("data-name"),price: e.currentTarget.getAttribute('data-value')},e.currentTarget.getAttribute("data-boxnum"))}>
                        <div className="check-mark">{selectedItems.includes(2) && <div className="icon"><i className="bi bi-check"></i></div>}</div>
                        <div className="info-container">
                            <div className="add-select-box-info">
                                <h5 className="header-add-box">Larger storage</h5>
                                <span className="add-box-details">Extra 1TB of cloud save</span>
                            </div>
                            <div className="add-box-price">{isYearly ? "+$20/yr" : "+$2/mo"}</div>
                        </div>
                    </div>
                    <div data-name="Customizable Profile" data-value={isYearly ? "+$20/yr" : "+$2/mo"} className={`add-select-box ${selectedItems.includes(3) && `active-add-box`}`} data-boxnum="3" onClick={(e)=>onClickHandler({name: e.currentTarget.getAttribute("data-name"),price: e.currentTarget.getAttribute('data-value')},e.currentTarget.getAttribute("data-boxnum"))}>
                        <div className="check-mark">{selectedItems.includes(3) && <div className="icon"><i className="bi bi-check"></i></div>}</div>
                        <div className="info-container">
                            <div className="add-select-box-info">
                                <h5 className="header-add-box">Customizable Profile</h5>
                                <span className="add-box-details">Custom theme on your profile</span>
                            </div>
                            <div className="add-box-price">{isYearly ? "+$20/yr" : "+$2/mo"}</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                <div className="btn-container">
                    <button className="next-submit" type="submit" onClick={()=>{
                        dispatch(setAddOns(selcted))
                        navigate("/summary")
                    }}>
                        Next Step
                    </button>
                    <button className="back-submit" type="submit" onClick={()=>{
                        navigate("/select-plan")
                        
                    }}>
                        go back
                    </button>
                </div>
        </div>
     );
}
 
export default AddOns;