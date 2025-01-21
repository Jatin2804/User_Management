import { useEffect, useState } from "react";
import "./App.css";
import CardsSection from "../../usersdashboard/src/components/CardsSection";
import axios from "axios";
import Header from "../../usersdashboard/src/components/Header";
import { SnackbarProvider, useSnackbar } from 'notistack'

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      
      const userDetails = res.data.map((user) => {
        if (user.id % 2 === 0) {
          user.department = "Software Developer";
          user.color = "#F40058";
        } else if (user.id % 3 === 0) {
          user.department = "Project Manager";
          user.color = "#41B853";
        } else {
          user.department = "HR";
          user.color = "#EFA500";
        }
        return user;
      });

      setUsers(userDetails); // Update the state with modified users
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <SnackbarProvider  anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}>
    <div className="App">
      <Header />
      <CardsSection users={users} setusers={setUsers}/>
    </div>
    </SnackbarProvider>
    
  );
}

export default App;
