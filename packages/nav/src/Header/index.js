import singleSpaReact from "single-spa-react";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

const headerLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Header,
    errorBoundary(err, info, props) {
        return <div>Can't load :( </div>;
    },
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;