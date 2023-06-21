import React, {useEffect, useState} from "react";
import productService from 'core/productService';
import store from 'core/store'
import { useParams } from "react-router-dom";
import {ImageList, ImageListItem} from "@mui/material";

const ProductImage = () => {

    const [productData, setProductData] = useState();
    const { category } = useParams();

    useEffect(() => {
        async function getData(category) {
            if(category === undefined){
                const data = await productService.getAll();
                setProductData(data);
            }else{
                const data = await productService.getAllByCategory(category);
                setProductData(data);
            }
        }

        getData(category);
    }, [category])

    if (!productData) {
        return <span>Loading...</span>
    }

    return (
        <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
            {productData.products.map((product) => (
                <ImageListItem key={product.thumbnail}>
                    <img
                        src={`${product.thumbnail}`}
                        srcSet={`${product.thumbnail}`}
                        alt={product.title}
                        loading="lazy"
                        style={{overflow:"hidden"}}
                        onClick={(e) => {
                            store.image = e.target.currentSrc;

                        }}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );

}

export default ProductImage;