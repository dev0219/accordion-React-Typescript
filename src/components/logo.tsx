import React from "react";
import "../assets/css/logo-style.css";

const Logo: React.FC = () => (
    <>
        <div className="component-body">
            <p className="margin-style header-title">OVERVIEW</p>

            <div className="div-title">
                <div className="logo-title">
                    <h1 className="title">Logos</h1>
                    <hr />
                </div>
            </div>
            <br />
            <p className="margin-style">
                Our logo is an essential brand element and must be used in every communication.
            </p>
            <br />
            <p className="margin-style">
                The<span> Blue Box Logo</span>, the <span>Magnified Blue Box Logo</span>, and the
                <span> Logotype</span> are the three logo options for
                <br />
                identify American Express. The Blue Box Logo is the most recognizable and therefore,
                preferred.
            </p>
            <br />
            <br />
            <div className="card-body margin-style">
                <div>
                    <div className="card">
                        <img src={"/images/logo2.png"} alt="Logo" />
                    </div>
                    <p>Blue Box Logo →</p>
                </div>
                <div>
                    <div className="card">
                        <img src={"/images/logo1.png"} alt="Logo" />
                    </div>
                    <p>Magnified Blue Box Logo →</p>
                </div>
                <div>
                    <div className="card">
                        <img className="cap-height" src={"/images/logo3.png"} alt="Logo" />
                    </div>
                    <p>Logotype →</p>
                </div>
            </div>
            <br />
            <div className="footer">
                <p className="margin-style">
                    <span>Please note: </span>No new logos may be created for internal or external
                    use, and the Blue Box Logos and
                    <br />
                    Logotype should never be modified.
                </p>
            </div>
        </div>
    </>
);

export default Logo;
