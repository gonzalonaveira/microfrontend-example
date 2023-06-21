import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProductImage from "./ProductImage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/products">
                    <Route path=":category" element={<ProductImage/>} />
                </Route>
                <Route path="*" element={<ProductImage/>} />
            </Routes>
        </Router>
    );
};

export default App;
