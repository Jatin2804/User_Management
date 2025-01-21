import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import axios from 'axios';
import { SnackbarProvider, useSnackbar } from 'notistack'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditModal({
  open,
  handleClose,
  users,
  setusers,
  selectedUser,
}) {
      const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [formData, setFormData] = React.useState({
    department: "",
    id: "",
    name: "",
    email: "",
    address: {
      city: "",
      zipcode: "",
    },
    phone: "",
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser); // Preload selected user's data into form
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "city" || name === "zipcode") {
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const performAPICall = async(formData)=>{
    try{
      let res = await axios.put(`https://jsonplaceholder.typicode.com/users/${formData.id}`,formData);
      if(res.status === 200){
        enqueueSnackbar('User edited seccessfully', { variant: 'success' })
      }
    }catch(e){
      enqueueSnackbar('Error in editing user', { variant: 'danger' })
      console.log(e);
    }
   
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setusers(
      users.map((user) =>
        user.id === formData.id ? { ...user, ...formData } : user
      )
    );
    performAPICall(formData);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="ID"
            name="id"
            value={formData.id}
            disabled // Disable ID to prevent editing
          />
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="City"
            name="city"
            value={formData.address.city}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Zipcode"
            name="zipcode"
            value={formData.address.zipcode}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Save Changes
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
