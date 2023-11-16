import React from "react";
import "./assets/css/style.css";

const App: React.FC = () => {
    return (
        <div className="container">
            <div className="component-body">
                <div className="setup-header">
                    <a href="">← Back</a>
                    <h1 className="title">Setup Autopay</h1>
                    <p>UHC Gold Stanndard - HMO</p>
                    <hr />
                </div>
                <div className="member-info">
                    <h2 className="sub-header">Member Name</h2>
                    <p>Bryan Reynolds</p>
                    <h2 className="sub-header">Member ID</h2>
                    <p>1234567890</p>
                </div>
                <br />
                <hr />
                <div className="pay-info">
                    <h2 className="header-title">Autopay amount</h2>
                    <h2 className="sub-header">$6.48</h2>
                    <p>
                        This amount is based on your latest premium calcuation. If the amount
                        changes, we will let you know before you are charged.
                    </p>
                    <br />
                    <a href="#">Learn more about Autopay &gt;</a>
                    <br />
                    <br />
                    <hr />
                </div>
                <div className="date-info">
                    <h2 className="header-title">Start date</h2>
                    <h2 className="sub-header">12/01/2023</h2>
                    <p>
                        Your premium payment will automatically be withdrawn on the first day of
                        each month.
                    </p>
                </div>
                <br />
                <hr />
                <div className="payment-method-info">
                    <h2 className="header-title">Choose payment method</h2>
                    <h2 className="sub-header">Saved methods</h2>
                    <div className="saved-methods">
                        <div className="method-icon">
                            <input type="radio" />
                            <img className="master-png" src={"/images/master.png"} alt="Logo" />
                        </div>
                        <div className="method-content">
                            <p className="summary-card-number">Mastercard *5280</p>
                            <p>Nickname 30 Characters Maximun</p>
                            <p>
                                Exp: 01/25
                                <span>Default</span>
                            </p>
                        </div>
                    </div>
                    <div className="new-method">
                        <p>+ Add a payment method</p>
                    </div>
                    <br />
                </div>
                <hr />
                <div className="summary-info">
                    <h2 className="header-title">Summary</h2>
                    <div className="summary-content">
                        <div className="summary-amount">
                            <span className="summary-title">Amount: </span>
                            <span>$6.48</span>
                        </div>
                        <hr />
                        <div className="summary-date">
                            <span className="summary-title">Start date: </span>
                            <span>12/01/23</span>
                        </div>
                        <hr />
                        <div className="summary-card">
                            <img className="master-png" src={"/images/master.png"} alt="Logo" />
                            <p className="summary-card-number">Mastercard *5280</p>
                        </div>
                    </div>
                    <div className="autopay-setup">
                        <br />
                        <p>
                            By clicking &ldquo;Set up Autopay&ldquo; you agree to the<br></br>
                            <span>Electronic Payment Authorization</span>
                        </p>
                        <br />
                        <button className="setup-btn">Set up Autopay</button>
                        <button className="cancel-btn">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
