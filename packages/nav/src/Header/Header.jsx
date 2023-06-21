import React, { useState, useEffect } from 'react';
import store from 'core/store';
import {AppBar, Button, Link, Toolbar, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const [count, setCount] = useState(store.count);
  useEffect(() => {
    store.subscribe(() => {
      setCount(store.count);
    });
  }, []);
  return (
      <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link href={"/"}>My Store</Link>
          </Typography>


          <Button>
            <ShoppingCartIcon/> {count}</Button>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
