import singleSpaReact from "single-spa-react";
import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";

const headerLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Menu,
    errorBoundary(err, info, props) {
        return <div>Can't load :( </div>;
    },
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;