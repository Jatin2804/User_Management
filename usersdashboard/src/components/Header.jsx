import React from "react";
import Button from "@mui/material/Button";
import { Box, TextField, Typography } from "@mui/material";
import "../App.css";

const Header = () => {
  
  return (
    <>
    {/* <Box margin={1}><img src="company.png" alt="" height="50px" /></Box> */}
    <Box boxShadow={3}  sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <Box margin={2}><img src="company.png" alt="" height="50px" /></Box>
      <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <Box id="logo">
        <img src="logo.png" alt="" />
      </Box>
        <Typography sx={{margin:"10px"}}>User Management Dashboard</Typography>
      </Box>
    </Box>
    </>
  );
};

export default Header;
