import singleSpaReact from "single-spa-react";
import React from "react";
import ReactDOM from "react-dom";
import BuyProduct from "./BuyProduct";

const headerLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: BuyProduct,
    errorBoundary(err, info, props) {
        return <div>Can't load :( </div>;
    },
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;