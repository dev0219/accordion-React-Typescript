import React from "react";
import "../assets/css/colorRatio-style.css";

const ColorRatio: React.FC = () => (
    <>
        <div className="colorration-component-body">
            <p className="margin-style header-title">Color Ratio</p>
            <br />
            <p className="margin-style">
                This shows the approximate ratio of colors that should be used on brand
                communications.
            </p>
            <br />
            <br />
            <div className="card-body margin-style">
                <div className="color-card card6"></div>
                <div className="color-card card3"></div>
                <div className="color-card card4"></div>
                <div className="color-card card2"></div>
                <div className="color-card card5"></div>
                <div className="color-card card1"></div>
            </div>
            <br />
            <p className="margin-style color-ratio">Color Ratio</p>
            <br />
            <div className="margin-style">
                <ul>
                    <li>
                        White is most dominant, followed by the American Expess blues: Bright Deep,
                        and Light Blue can
                        <br />
                        be used as accent color on up to 20% of communication.
                    </li>
                    <li>Gray supports the palette when a neutral is useful.</li>
                    <li>
                        Emphatic use of white space is a core principle of clear message hierarchy,
                        design, style, and
                        <br />
                        breathability.
                    </li>
                    <li>
                        In print, PMS is preferred. When budget constraints prohibit the use of PMS
                        colors, CMYK
                        <br />
                        equivalents should be used.
                    </li>
                    <li>
                        Printing with CMYK can produce varied results. Please work with your printer
                        to ensure the CMYK
                        <br />
                        values are as close a match to the PMS as possible.
                    </li>
                </ul>
            </div>
            <br />
            <p className="margin-style">
                The <span>brand color ratio</span> applies to the brand as a whole. Individual
                applications for businesses, products, or
                <br />
                programs may have a need to vary the ratio. For example, Platinum marketing uses
                approximately 75% cool
                <br />
                grays with 25% Bright Blue or Deep Blues, including black and white to balance the
                layout.
            </p>
            <br />
            <br />
            <p className="margin-style header-title">COLOR</p>
            <div className="div-title">
                <div className="logo-title">
                    <h1 className="title">Do&apos;s & Don&apos;ts</h1>
                    <hr />
                </div>
            </div>
            <br />
        </div>
    </>
);

export default ColorRatio;
