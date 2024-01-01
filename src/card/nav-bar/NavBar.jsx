import { useEffect } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
    const {activeSection} = useSelector(state=> state.form)
    useEffect(()=>{
        const boxs = document.querySelectorAll(".box-num")
        boxs.forEach((b)=>{
            if(b.getAttribute("data-name") === activeSection){
                b.classList.add("active-step")
            }else{
                b.classList.remove('active-step')
            }
        })
    },[activeSection])
    return (
        /*active-step*/
    <div className="nav-bar">
        <div className="nav-box">
            <div className="box-num" data-name="your-info">
                1
            </div>
            <div className="box-info">
                <span className="step-num">step 1</span>
                <h4>your info</h4>
            </div>
        </div>
        <div className="nav-box">
            <div className="box-num" data-name="select-plan">
                2
            </div>
            <div className="box-info">
                <span className="step-num">step 2</span>
                <h4>select plan</h4>
            </div>
        </div>
        <div className="nav-box">
            <div className="box-num" data-name="add-ons">
                3
            </div>
            <div className="box-info">
                <span className="step-num">step 3</span>
                <h4>add-ons</h4>
            </div>
        </div>
        <div className="nav-box">
            <div className="box-num" data-name="summary">
                4
            </div>
            <div className="box-info">
                <span className="step-num">step 4</span>
                <h4>summary</h4>
            </div>
        </div>
    </div>
);
}
 
export default NavBar;