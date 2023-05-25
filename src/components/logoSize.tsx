import React from "react";
import "../assets/css/logoSize-style.css";

const LogoSize: React.FC = () => (
    <>
        <div className="size-component-body">
            <p className="margin-style header-title">Sizing</p>
            <br />
            <p className="logotypes margin-style">
                The Logotypes have one scale version and no maximum scale limit. The Cap-Height is
                determind by the height
                <br />
                of a single line a capital letters.
            </p>
            <br />
            <br />
            <div className="card-body margin-style">
                <div>
                    <div className="card">
                        <img src={"/images/logo2.png"} alt="Logo" />
                        <p>
                            Minimum size of the Blue Box
                            <br />
                            Logo is ,325&quot; or 40 pixels.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img src={"/images/logo1.png"} alt="Logo" />
                        <p>
                            Minimum size of the Magnified Blue
                            <br />
                            Box Logo is ,175&quot; or 22 pixels.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img className="cap-height" src={"/images/logo3.png"} alt="Logo" />
                        <p>
                            Minimum size of the Logotype is
                            <br />
                            ,05&quot; or 7 pixels Cap-Height.
                        </p>
                    </div>
                </div>
            </div>
            <br />
        </div>
    </>
);

export default LogoSize;
