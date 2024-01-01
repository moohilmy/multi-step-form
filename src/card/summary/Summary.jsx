import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./summary.css"

import { useEffect,useState } from "react";
import { calcPricing, calcTotalPrice, setactiveSection } from "../../redux/Api/formApi";
import OnConfirm from "./OnConfirm.jsx";
const Summary = () => {
    const [confirm, setConfirm] = useState();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {selectorPlan,isYearly,addOns,pricing} = useSelector(state => state.form)
    useEffect(()=>{
        dispatch(setactiveSection('summary'))
            dispatch(calcTotalPrice())
            dispatch(calcPricing())
    },[])
    return ( 
            confirm ? <OnConfirm/> :
            <>
            <div className="step-section">
                <div className="contant">
                    <div className="header">
                        <h1 className="header-step">Finishing up</h1>
                        <span className="header-info">Double-check everything looks OK before confirming.</span>
                    </div>
                    <div className="select-form-summary">
                        <div className="selected-plan">
                            <div className="selected-info">
                                <h5 className="selected-plan-header">{selectorPlan?.name} ({isYearly ? "Yearly": "Montly"})</h5>
                                <Link className="change-link" to={"/select-plan"}>change</Link>
                            </div>
                            <div className="selected-price">
                                {selectorPlan?.price}
                            </div>
                        </div>
                        <div className="add-ons-container">
                        {addOns?.map((box,index)=>(
                            <div key={index + 24} className="selected-add-ons" >
                                <span className="name-add-ons">{box?.name}</span>
                                <div className="price-add-ons">{box?.price}</div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="total-container">
                        <span className="total-head">total (per {isYearly ? "year": "month"})</span>
                        <span className="total-price">{`+$${pricing}/`}{isYearly ? "yr" : "mo"}</span>
                    </div>
                </div>
                <div className="btn-container">
                        <button className="confirm-submit" type="submit" onClick={()=>{
                            setConfirm(true)
                        }}>
                            confirm
                        </button>
                        <button className="back-submit" type="submit" onClick={()=>{
                            navigate("/add-ons")
                        }}>
                            go back
                        </button>
                </div>
            </div>
            </>
        
);
}
 
export default Summary;