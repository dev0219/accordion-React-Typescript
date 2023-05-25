import React from "react";
import "../assets/css/logoClearSpace-style.css";

const LogoClearSpace: React.FC = () => (
    <>
        <div className="clear-component-body">
            <p className="margin-style header-title">Clear Space</p>
            <p className="logotypes margin-style">
                Separate logos from all other elements to ensure clarity and prominence.
            </p>
            <br />
            <div className="card-body margin-style">
                <div>
                    <div className="card">
                        <img className="group1" src={"/images/group1.png"} alt="Logo" />
                        <img className="group2" src={"/images/group2.png"} alt="Logo" />
                        <img className="group4" src={"/images/group4.png"} alt="Logo" />
                        <img className="group3" src={"/images/group3.png"} alt="Logo" />
                    </div>
                </div>
                <div className="logoCollect4">
                    <div>
                        <ul>
                            <li>
                                Keep at least 3X the cap height of the Logotype
                                <br />
                                clear between it and any other element
                            </li>
                            <li>
                                Maintain clear space of 1/3 the hight of the
                                <br />
                                Blue Box between it and any other element.
                            </li>
                            <li>
                                However, when approprigate, the Blue Box may
                                <br />
                                bleed off one edge.
                            </li>
                            <li>
                                If bleeding off the edge of a printed piece, consult
                                <br />
                                with your printer to ensure correct cropping.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
        </div>
    </>
);

export default LogoClearSpace;
