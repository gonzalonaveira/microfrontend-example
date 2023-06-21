import React from 'react';
import {Box, Typography} from "@mui/material";

const Footer = () => (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
      >
        Example of micro frontends.
      </Typography>
    </Box>
);

export default Footer;
