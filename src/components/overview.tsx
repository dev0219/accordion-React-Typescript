import React from "react";
import "../assets/css/logoOverview-style.css";

const Overview: React.FC = () => (
    <>
        <div className="overview-component-body">
            <p className="margin-style header-title">COLOR</p>
            <div className="div-title">
                <div className="logo-title">
                    <h1 className="title">Overview</h1>
                    <hr />
                </div>
            </div>
            <br />
            <p className="margin-style">
                Our brand colors is one of our brand&apos;s four essential elements - logo, tagline,
                brand colors and brand
                <br />
                typography - and must be used on every communication.
            </p>
            <br />
            <br />
            <div className="card-body margin-style">
                <div className="color-card card1"></div>
                <div className="color-card card2"></div>
                <div className="color-card card3"></div>
                <div className="color-card card4"></div>
                <div className="color-card card5"></div>
                <div className="color-card card6"></div>
            </div>
            <br />
            <p className="margin-style color-ratio">Color Ratio</p>
            <br />
            <br />
            <div className="footer footer-overview">
                <p className="margin-style">
                    See the DLS for more information about using our color palette in digital. The
                    Design Language System has
                    <br />
                    some highlight colors referred to as &quot;Status&quot;,&quot;FICO&quot; and
                    &quot;Cobrands&quot;. These are for digital servicing alerts ONLY.
                </p>
            </div>
        </div>
    </>
);

export default Overview;
