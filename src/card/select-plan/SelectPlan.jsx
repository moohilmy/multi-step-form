import "./select-plan.css"
import {useNavigate} from "react-router-dom"
import proIcon from "../../assets/icon-pro.svg"
import arcadeIcon from "../../assets/icon-arcade.svg"
import advancedIcon from "../../assets/icon-advanced.svg"
import SwipePlan from "./SwipePlan.jsx"
import {useDispatch,useSelector} from "react-redux"
import { useEffect, useState } from "react"
import { clearselectorPlan, setactiveSection, setselectorPlan } from "../../redux/Api/formApi.js"
import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const SelectPlan = () => {
    const [isActive, setIsActive] = useState(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isYearly,selectorPlan} = useSelector(state => state.form)
    useEffect(()=>{
        updateValue()
        dispatch(setactiveSection('select-plan'))
    },[isYearly])
    const onClickBox = (boxId,value) =>{
        if(isActive === boxId){
            setIsActive(null)
            dispatch(clearselectorPlan())
        }else{
            setIsActive(boxId)
            dispatch(setselectorPlan(value))
        }
    }
    const updateValue = () =>{
        setIsActive(false)
        dispatch(clearselectorPlan())
    }
    return (
        <>
        <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
        <div className="step-section">
            <div className="contant">
                <div className="header">
                    <h1 className="header-step">Select your plan</h1>
                    <span className="header-info">You have the option of monthly or yearly billing.</span>
                </div>
                <div className="select-form">
                        
                <div className="select-container">
                    <div className={`select-box ${isActive === "box1" ? "active-box" : ""}`} onClick={(e)=> {onClickBox("box1",{name: "arcade",price: e.currentTarget.getAttribute("data-value")})}}
                    data-value={isYearly ? '$90/yr' : "$9/mo"}>
                        <img className="select-icon" src={arcadeIcon} alt="" />
                        <div className="select-info">
                            <h5 className="select-header">arcade</h5>
                            <span className="select-details">{isYearly ? '$90/yr' : "$9/mo"}</span>
                            {isYearly && <span className="free-month">2 months free</span>}
                        </div>
                    </div>
                    <div className={`select-box ${isActive === "box2" ? "active-box" : ""}`}
                    onClick={(e)=> {onClickBox("box2",{name: "advanced",price: e.currentTarget.getAttribute("data-value")})}}
                    data-value={isYearly ? '$120/yr' : "$12/mo"}>
                        <img className="select-icon" src={advancedIcon} alt="" />
                        <div className="select-info">
                            <h5 className="select-header">advanced</h5>
                            <span className="select-details">{isYearly ? '$120/yr' : "$12/mo"}</span>
                            {isYearly && <span className="free-month">2 months free</span>}
                        </div>
                    </div>
                    <div className={`select-box ${isActive === "box3" ? "active-box" : ""}`} onClick={(e)=> {onClickBox("box3",{name: "pro",price: e.currentTarget.getAttribute("data-value")})}} data-value={isYearly ? '$150/yr' : "$15/mo"}>
                        <img className="select-icon" src={proIcon} alt="" />
                        <div className="select-info">
                            <h5 className="select-header">pro</h5>
                            <span className="select-details">{isYearly ? '$150/yr' : "$15/mo"}</span>
                            {isYearly && <span className="free-month">2 months free</span>}
                        </div>
                    </div>
                </div>
                <SwipePlan />
                    </div>
            </div>
            <div className="btn-container">
                    <button className="next-submit" type="submit" onClick={()=>{
                        if(selectorPlan !== null){
                            navigate("/add-ons")
                        }else{
                            toast.error('please choose plan!', {
                                position: "top-center",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: false,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",
                                })
                        }
                    }}>
                        Next Step
                    </button>
                    <button className="back-submit" type="submit" onClick={()=>{
                        navigate("/")
                    }}>
                        go back
                    </button>
            </div>
        </div>
        </>
     );
}
 
export default SelectPlan;