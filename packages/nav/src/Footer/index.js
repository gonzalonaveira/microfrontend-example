import singleSpaReact from "single-spa-react";
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";

const footerLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Footer,
    errorBoundary(err, info, props) {
        return <div>Can't load :( </div>;
    },
});

export const bootstrap = footerLifecycles.bootstrap;
export const mount = footerLifecycles.mount;
export const unmount = footerLifecycles.unmount;
