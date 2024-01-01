import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { changeDuration, clearIsYearly } from "../../redux/Api/formApi";

const SwipePlan = () => {
    const [IsRight, setIsRight] = useState(false);
    const {isYearly} = useSelector(state => state.form)
    useEffect(()=>{
        dispatch(clearIsYearly())
    },[])
    const dispatch = useDispatch()

    return ( 
        <div className="swipe-plan">
            <div className={`plan-duration ${!IsRight  ? 'active' : ''}`}>monthly</div>
            <div onClick={()=> {setIsRight(!IsRight)
            dispatch(changeDuration())
            }} className={`swipe-btn`}>
                <span className={`swipe-ball ${IsRight  ? 'active-ball-right' : 'active-ball-left'}`}></span>
            </div>
            <div className={`plan-duration ${IsRight  ? 'active' : ''}`}>yearly</div>
        </div>
);
}
 
export default SwipePlan;