import { Box, Button, Grid, TextField } from "@mui/material";
import Card from "./Card";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import axios from "axios"
import { SnackbarProvider, useSnackbar } from 'notistack'


const CardsSection = ({ users, setusers }) => {
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredUsers, setFilteredUsers] = React.useState(users);
   const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const handleOpenEdit = (user) => {
    setSelectedUser(user);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setSelectedUser(null);
    setOpenEdit(false);
  
  };

  const addUser = () =>{
    handleOpenAdd();
  
  }
  const editUser = (user) =>{
   handleOpenEdit(user);

  }

  
  const performAPICall = async(userId)=>{
    try{
      let res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if(res.status === 200){
        enqueueSnackbar('User deleted seccessfully', { variant: 'success' })
      }
    }catch(e){
      enqueueSnackbar('Error in deleting user', { variant: 'danger' })
      console.log(e);
    }
   
  }

  const deleteUser = (userId) => {
    setusers(users.filter((user) => user.id !== userId));
    performAPICall();
    
  };


  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(query)
      );
      setFilteredUsers(filtered);
    }, 300); // 300ms debounce delay

    return () => clearTimeout(timeoutId); 
  }, [searchQuery, users]);

  return (
    <Box>
     
      <Box sx={{ display: "flex", justifyContent: "center", margin: "20px", }}>
        <TextField
          placeholder="Search users by name ...."
          variant="outlined"
          size="small"
          sx={{ width: "300px", marginRight: "10px" ,backgroundColor:"#43BEE5",color:"black"}}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          sx={{ color: "#43BEE5", backgroundColor: "black" }}
          variant="contained"
          onClick={addUser}
        >
          <AddIcon /> Add user
        </Button>
      </Box>
      <AddModal
        handleClose={handleCloseAdd}
        open={openAdd}
        users={users}
        setusers={setusers}
      />
      <EditModal
        handleClose={handleCloseEdit}
        open={openEdit}
        users={users}
        setusers={setusers}
        selectedUser={selectedUser}
      />
      <Grid container spacing={2} sx={{ margin: "10px" }}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
            <Card
              userdetails={user}
              editUser={() => editUser(user)}
              deleteUser={() => deleteUser(user.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardsSection;
