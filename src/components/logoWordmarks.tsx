import React from "react";
import "../assets/css/logoWorkmarks-style.css";

const LogoWordmarks: React.FC = () => (
    <>
        <div className="wordmark-component-body">
            <p className="margin-style header-title">Wordmarks</p>
            <p className="logotypes margin-style">
                A wordmark is a typographical tool used to indentify products, services, and
                business areas within American Express.
                <br />
                Wordmarks can be one, tow, or three-word names, and are set in Benton Sans title
                case.
                <br />
                They can appear as a lockup
                <br />
                (two elements placed closer together than normally allowed due to clear space rules)
                for the Blue Box), as standalone
                <br />
                type, or as a lockup with the American Express name.
            </p>
            <br />
            <br />
            <div className="card-body margin-style">
                <div>
                    <div className="card">
                        <img src={"/images/logo2.png"} alt="Logo" />
                    </div>
                </div>
                <div className="logoCollect5">
                    <div>
                        <p>Considerations:</p>
                        <ul>
                            <li>
                                No new American Express logos may be created for internal
                                <br />
                                or external use. Only wordmarks permitted.
                            </li>
                            <li>
                                Limit use of wordmarks to maintain consistent brand images
                                <br />
                                and avoid competing graphics.
                            </li>
                            <li>
                                Wordmarks are not permitted for individual teams or
                                <br />
                                initiatives without approval.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <p className="margin-style">
                Wordmarks may not be developed without approval. If you think you have a business
                need for a wordmark,
                <br />
                please contact
                <a href="mailto:globalbrandsupport@aexp.com"> globalbrandsupport@aexp.com.</a>
            </p>
        </div>
    </>
);

export default LogoWordmarks;
