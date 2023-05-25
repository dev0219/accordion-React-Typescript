import React from "react";
import "../assets/css/logoUse-style.css";

const LogoUse: React.FC = () => (
    <>
        <div>
            <div className="logo1 logouse-component-body">
                <p className="margin-style header-title">LOGOS</p>

                <div className="div-title">
                    <div className="logo-title">
                        <h1 className="title">How To Use</h1>
                        <hr />
                    </div>
                    {/* <img src={"/images/logo.png"} alt="Logo" /> */}
                </div>
                <br />
                <p className="margin-style">
                    The<span> Blue Box Logo</span>, is the core virtual expression of American
                    Express. It should be used prominently on
                    <br />
                    all American Express communications.
                </p>
                <br />
                <br />
                <div className="card-body margin-style">
                    <div>
                        <div className="card">
                            <img src={"/images/logo2.png"} alt="Logo" />
                        </div>
                        <br />
                        <p>Blue Box Logo collection →</p>
                    </div>
                    <div>
                        <div className="logoCollect1">
                            <p>
                                The&nbsp;
                                <span>Blue Box Logo collection</span>
                                &nbsp;includes:
                            </p>
                            <ul>
                                <li>Blue Box</li>
                                <li>Blue Box with registration mark</li>
                                <li>Magnified Blue Box</li>
                                <li>Magnified Blue Box with registration mark</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />
                <p className="margin-style">
                    These markets require the Blue Box logo to appear with a registered trademarks.
                </p>
            </div>
            <div className="logo2 logouse-component-body">
                <p className="margin-style">
                    The<span> Manifiled Blue Box Logo</span> was created to make a powerful
                    impression in a small space and to
                    <br />
                    ensure our logo is legible from afar.
                </p>
                <br />
                <br />
                <div className="card-body margin-style">
                    <div>
                        <div className="card">
                            <img src={"/images/logo1.png"} alt="Logo" />
                        </div>
                        <br />
                        <p>Magnified Blue Box Logo →</p>
                    </div>
                    <div>
                        <div className="logoCollect2">
                            <ul>
                                <li>
                                    Use Magnified Blue Box Logo for small space / viewed from a
                                    distance
                                    <br />
                                    only. According to research, &quot;American Express&quot; is
                                    preferred over
                                    <br />
                                    &quot;Amex&quot; in all market and is stronger on brand
                                    attributes.
                                </li>
                                <li>
                                    The Magnified Logo may be used together with Blue Box Logo when
                                    <br />
                                    multiple logos are needed and there are legibility challenges in
                                    some
                                    <br />
                                    placments. Always choose based on legibility.
                                </li>
                                <li>
                                    The Logotype may be used instead of Blue Box Logo or in
                                    addition. The
                                    <br />
                                    Logotype Collection of assets includes the Logotype in blue,
                                    deep blue,
                                    <br />
                                    white, and black. Each color has stacked and signle line
                                    versions.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />
            </div>
            <div className="logo2 logouse-component-body">
                <p className="margin-style">
                    Either version os the <span>Logotype </span> may be used on any application,
                    according to preference and space requirements.
                    <br />
                    The Blue Box is our most recognizable asset, but sometimes Logotype may be
                    preferred because:
                </p>
                <br />
                <br />
                <div className="card-body margin-style">
                    <div>
                        <div className="card">
                            <img className="cap-height" src={"/images/logo3.png"} alt="Logo" />
                        </div>
                        <br />
                        <p>Logotype →</p>
                    </div>
                    <div>
                        <div className="logoCollect3">
                            <ul>
                                <li>
                                    The Logotype&apos;s two format options provide creative
                                    flexibility.
                                </li>
                                <li>
                                    The Logotype can float, the Blue Box works best when anchored
                                    <br />
                                    to a corner.
                                </li>
                                <li>
                                    Thin the events and experience space, the Logotype can seem
                                    <br />
                                    more friendly and less &apos;corporate&apos; than the Blue Box.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />
            </div>
            <div className="footer logouse-component-body">
                <div className="margin-style">
                    <span>
                        Either version of the Logotype may be used on any application, according to
                        preference and space requirements.
                        <br />
                        The Blue Box is our most recognizable asset, but sometimes Logotype may be
                        preferred because:
                    </span>
                    <br />
                    <ul>
                        <li>
                            The Logotype&apos;s two format options provide creative flexibility.
                        </li>
                        <li>
                            The Logotype can float, the Blue Box works best when anchored to a
                            corner.
                        </li>
                        <li>
                            In the events and experiences space, the Logotype can seem more friendly
                            and less &apos;corporate&apos; than the Blue Box.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
);

export default LogoUse;
