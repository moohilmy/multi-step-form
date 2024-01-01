import {Formik} from "formik"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import "./your-info.css"
import { fillFormData, setactiveSection } from "../../redux/Api/formApi"
import { useEffect } from "react"
const YourInfo = () => {
    const dispatch = useDispatch()
    const handleKeyDown = (e) => {
        // Check if the pressed key is Page Up or Page Down
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          // Prevent the default behavior (page scrolling)
          e.preventDefault();
        }
      };
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(setactiveSection('your-info'))
    }, []);
    return ( 
        <div className="step-section" id="your-info">
            <Formik
            initialValues={{ name: '', email: '', phoneNamber: '' }}
            validate={values => {
                const errors = {};
                if(!values.name){
                    errors.name = 'This field is required'
                }
                if (!values.email) {
                errors.email = 'This field is required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                if(!values.phoneNamber){
                    errors.phoneNamber = 'This field is required'
                }
                return errors;
            }}
            onSubmit={(values) => {
                dispatch(fillFormData(values))
                navigate("/select-plan")
            }}
            validateOnBlur ={false}
            validateOnChange ={false}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <>
                <form className="form-section" onSubmit={handleSubmit}>
                <div className="contant">
                <div className="header">
                    <h1 className="header-step">Personal info</h1>
                    <span className="header-info">Please provide your name, email address, and phone number.</span>
                </div>
                <div className="input-field">
                        <div className="int-info">
                            <label className="int-head" htmlFor="name">name</label>
                            <span className="err-msg">
                                {errors.name && touched.name && errors.name}
                            </span>
                        </div>
                        <input
                        type="text"
                        name="name"
                        id="name"
                        className={`int ${errors.name && touched.name && 'int-error'}`}
                        placeholder="e.g. Stephen King"
                        onChange={handleChange}
                        value={values.name}
                        />
                    </div>
                    <div className="input-field">
                        <div className="int-info">
                            <label className="int-head" htmlFor="email">email</label>
                            <span className="err-msg">
                            {errors.email && touched.email && errors.email}
                            </span>
                        </div>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className={`int ${errors.email && touched.email && 'int-error'}`}
                        placeholder="e.g. stephenking@lorem.com"
                        onChange={handleChange}
                        value={values.email}
                        />
                    </div>
                    <div className="input-field">
                        <div className="int-info">
                            <label className="int-head" htmlFor="phoneNamber">phone Namber</label>
                            <span className="err-msg">
                            {errors.phoneNamber && touched.phoneNamber && errors.phoneNamber}
                            </span>
                        </div>
                        <input
                        type="text"
                        name="phoneNamber"
                        id="phoneNamber"
                        min="0"
                        placeholder="e.g. +1 234 567 890"
                        className={`int ${errors.phoneNamber && touched.phoneNamber && 'int-error' }`}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        value={values.phoneNamber}
                        />
                    </div>
                </div>
                <div className="btn-container">
                    <button className="next-submit" type="submit" disabled={isSubmitting}>
                        Next Step
                    </button>
                </div>
                </form>

                </>
            )}
            </Formik>
        </div>
);
}
 
export default YourInfo;