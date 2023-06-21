import singleSpaReact from "single-spa-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const headerLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    errorBoundary(err, info, props) {
        return <div>Can't load :( </div>;
    },
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;