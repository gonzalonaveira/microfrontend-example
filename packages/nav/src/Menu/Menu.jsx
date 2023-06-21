import React, {useState, useEffect} from 'react';
import {Box, Link, List, ListItem} from "@mui/material";
import productCategoryService from "core/productCategoryService"

const Menu = props => {

    const [menuData, setMenuData] = useState();

    useEffect(() => {
        async function getData(){
            const data = await productCategoryService.getAll();
            setMenuData(data);
        }
        getData();
    }, [])

    if(!menuData) {
        return <span>Loading...</span>
    }

    return (
    <Box sx={{ width: '100%', maxWidth: 120, float: 'left', background: (theme) => `${theme.palette.primary.light}` }}>
            <nav>
                <List>
                    {menuData.map(item => {
                        return (
                            <ListItem key={item}>
                                <Link href={`#/products/${item}`}
                                      underline="none"
                                >
                                    {item}
                                </Link>
                            </ListItem>
                        )
                    })}
                </List>
            </nav>
        </Box>)
};

export default Menu;
