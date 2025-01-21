import React from "react";
import "./Card.css";
import { Box, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



const Card = ({ userdetails,editUser,deleteUser }) => {
  
  // console.log(userdetails);
  return (
    <Box id="card" boxShadow={3}>
      <div style={{backgroundColor: userdetails.color}} id="image-area">{/* <img src="user.png" alt="user.png" /> */}</div>
      <div>{userdetails.department}</div>
      <div
        id="detail-area"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "fit-content",
          margin: "auto",
          flexWrap:"wrap"
        }}
      >
        <div> EmployerId : {userdetails.id}</div>
        <div> Name : {userdetails.name}</div>
        <div> Email : {userdetails.email}</div>
        <div> Mob.no : {userdetails.phone}</div>
        <div> Address :{`${userdetails.address.city}, ${userdetails.address.zipcode}`}</div>
        
      </div>
      <div id="action-area">
        <Button onClick={()=>editUser(userdetails.id)}><EditIcon/></Button>
        <Button onClick={()=>deleteUser(userdetails.id)}><DeleteIcon/></Button>
      </div>
     
    </Box>
  );
};

export default Card;
