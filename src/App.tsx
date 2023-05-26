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
import ColorGray from "components/colorGray";
import ColorRatio from "components/colorRatio";

const App: React.FC = () => {
    return (
        <div className="container">
            <Logo />
            <Overview />
            <ColorUse />
            <ColorGray />
            <ColorRatio />
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
