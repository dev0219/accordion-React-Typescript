import React from "react";
import "../assets/css/logoLuckups-style.css";

const LogoLockups: React.FC = () => (
    <>
        <div className="lockup-component-body">
            <p className="margin-style header-title">Blue Box Logo Lockups</p>
            <p className="logotypes margin-style">
                Blue Box logo lockups consist of the Blue Box Logo combined with words. The Blue Box
                Logo Lockup collection
                <br />
                has these approved lockups:
            </p>
            <br />
            <div className="panels margin-style">
                <div className="panel-item">
                    <div className="panel-card">
                        <p className="presented-by">Presented by</p>
                        <img src={"/images/logo2.png"} alt="Logo" />
                    </div>
                    <div className="panel-card">
                        <p className="sponsored-by">Sponsored by</p>
                        <img src={"/images/logo2.png"} alt="Logo" />
                    </div>
                    <div className="panel-card">
                        <img src={"/images/logo2.png"} alt="Logo" />
                        <p className="wamly-by">Wamly Welcomed</p>
                    </div>
                </div>
                <div className="panel-list">
                    <ul>
                        <li>
                            The Blue Box Logo is always flush left, never above, beneath, or to the
                            right of the type.
                        </li>
                        <li>
                            Two and three-word names can stack, provided they don&apos;t sit higher
                            or lower that the Blue Box.
                        </li>
                        <li>
                            The Warmly Welcomed Blue Box Lockup signifies that Card Members can use
                            their Cards. It is used on signage,
                            <br />
                            digital, and environmental assets.
                        </li>
                        <li>
                            Presented Bu and Sponsored By Lockups can be used when paid sponsorships
                            are promoted in sponsorship partners&apos; channels.
                        </li>
                    </ul>
                </div>
            </div>
            <br />
            <p className="margin-style header-title">American Express Name Lockups</p>
            <p className="logotypes margin-style">
                Name lockups consist of American Express name (not logytype or logo) combined with a
                business or products
                <br />
                name. Membership Rewards name lockups are in the Membership Rewards logo collection
                . For more info see
                <br />
                Membership Rewards Positioning Guide.
            </p>
            <br />
            <br />
            <div className="card-body margin-style">
                <div>
                    <div className="card">
                        <img src={"/images/logo6.png"} alt="Logo" />
                    </div>
                    <p>Membership Rewards Lockup →</p>
                </div>
                <div className="logoCollect6">
                    <div>
                        <p>
                            The American Express name artwork is always
                            <br />
                            centered above type. All type is centered, never
                            <br />
                            left / right aligned or vertical.
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="footer">
                <div className="margin-style">
                    <p>
                        Follow all other <span>Blue Box logo guidelines</span> for logotype, color
                        and size.
                        <br />
                        Contact your Express Company marketing representative for assets or for more
                        information.
                    </p>
                </div>
            </div>
        </div>
    </>
);

export default LogoLockups;
