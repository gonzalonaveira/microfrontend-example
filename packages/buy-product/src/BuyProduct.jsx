import React, {useEffect, useState} from "react";
import store from 'core/store'
const BuyProduct = () => {

    const [image, setImage] = useState(store.image);

    useEffect(() => {
        store.subscribe(() => {
            setImage(store.image);
        })
    }, []);

    const addToCart = () => {
        store.incrementCount();
    }

    return (
        <div className="mui-panel">
            <div style={{textAlign: "center"}}>
                {image && <img src={image} style={{maxHeight: "200px"}} alt={"Product image"}/> }
            </div>
            <button
                onClick={addToCart}
                className="mui-btn mui-btn--primary"
                style={{width: "100%"}}
            >
                Add To Cart
            </button>
        </div>
    );

}

export default BuyProduct;