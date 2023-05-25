import React from "react";
import "../assets/css/logoTrademarks-style.css";

const LogoTrademarks: React.FC = () => (
    <>
        <div className="trademark-component-body">
            <p className="margin-style header-title">Registered Trademarks</p>
            <p className="logotypes margin-style">
                The registered trademark next to the Blue Box is mandantory in some countries,
                including emerging markets where the
                <br />
                trademark is less established.
            </p>
            <br />
            <br />
            <div className="card-body margin-style">
                <div>
                    <div className="card">
                        <img src={"/images/logo1.png"} alt="Logo" />
                    </div>
                </div>
                <div className="logoCollect4">
                    <div>
                        <p>In these countries, the registration mark is required:</p>
                        <ul>
                            <li>China</li>
                            <li>Costa Rica</li>
                            <li>El Salvador</li>
                            <li>Guatemala</li>
                            <li>Honduras</li>
                            <li>Mexico</li>
                            <li>Nicaragua</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <p className="margin-style">
                In China only, the registered trademakr shoud appear on the right side of the Blue
                Box instead of on the left.
                <br />
                <span>Please note: </span>The registered trademarks is required to appear with the
                Blue Box on ALL American Express Cards.
            </p>
        </div>
    </>
);

export default LogoTrademarks;
