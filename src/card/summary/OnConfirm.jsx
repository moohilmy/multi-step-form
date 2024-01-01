import thankYouIcon from "../../assets/icon-thank-you.svg"

const OnConfirm = () => {
    return (
    <>
        <div className="step-section">
            <div className="contant-onConfirm">
                <div className="on-confirm-container">
                    <img className="confirm-icon" src={thankYouIcon} alt="" />
                    <h1 className="on-confirm-head">thanck you!</h1>
                    <p className="on-confirm-msg">
                        thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                    </p>
                </div>
            </div>
        </div>
    </> );
}
 
export default OnConfirm;