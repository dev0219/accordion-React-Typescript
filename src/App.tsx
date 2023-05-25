import React from "react";
import Logo from "components/logo";
import LogoUse from "components/logoUse";
import LogoSize from "components/logoSize";
import LogoClearSpace from "components/logoClearSpace";
import LogoTrademarks from "components/logoTrademarks";
import LogoWordmarks from "components/logoWordmarks";
import LogoLockups from "components/logoLockups";
import Overview from "components/overview";
import ColorUse from "components/colorUse";

const App: React.FC = () => {
    return (
        <div className="container">
            <Logo />
            <Overview />
            <ColorUse />
            <LogoUse />
            <LogoSize />
            <LogoClearSpace />
            <LogoTrademarks />
            <LogoWordmarks />
            <LogoLockups />
        </div>
    );
};

export default App;
