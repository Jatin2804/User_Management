
# User Management Dashboard

This is a user management dashboard that allows administrators to view, add, edit, and delete users. It is built using React.js, Material UI for the frontend, and Axios to make API calls to a backend service. The project leverages the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for simulating user data fetching and manipulation.

## Features

- **Display User List**: Displays a list of users with information like ID, Name, Email, Department, and Address.
- **Add User**: A modal form to add a new user to the list.
- **Edit User**: A modal form to edit existing user information.
- **Delete User**: Ability to delete a user from the list.
- **Snackbar Notifications**: Feedback to the user on successful or failed actions (e.g., adding, editing, or deleting users).
- **Responsive Design**: The dashboard is designed to be responsive and user-friendly on all screen sizes.

## Live Demo

You can check the live version of the application here:

[Live Demo - User Management Dashboard](https://usersdashboard-seven.vercel.app/)

## Getting Started

To run the project locally on your machine, follow the instructions below.

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager) or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Jatin2804/User_Management.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd User_Management
   ```

3. **Install the dependencies**

   ```bash
   npm install
   ```

   Or if you're using yarn:

   ```bash
   yarn install
   ```

### Running the Application

To start the development server:

```bash
npm start
```

This will open the app in your default browser at `http://localhost:3000`.

### Building the Application

To create a production build:

```bash
npm run build
```

This will bundle the application for production into the `build` folder.

## File Structure

```plaintext
public/
  ├── images/               # Folder containing images for the app
src/
  ├── components/           # Folder containing React components
  │   ├── Header.js         # Header component with app title
  │   ├── CardsSection.js   # Component displaying the list of user cards
  │   ├── Card.js           # Component for displaying an individual user
  │   ├── AddModal.js       # Modal for adding a new user
  │   ├── EditModal.js      # Modal for editing an existing user
  ├── App.js                # Main app component
  ├── index.js              # Entry point for React application
```

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Material UI**: UI framework that provides React components with Material Design.
- **Axios**: Promise-based HTTP client for making API requests.
- **JSONPlaceholder API**: Fake online REST API for testing and prototyping.

## API Endpoints

The application interacts with the following endpoints from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/):

- **GET /users**: Fetch all users.
- **POST /users**: Add a new user.
- **PUT /users/:id**: Edit an existing user by ID.
- **DELETE /users/:id**: Delete a user by ID.

### Example of API request for adding a user

```javascript
const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
  department: 'HR',
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  address: {
    city: 'New York',
    zipcode: '10001',
  },
  phone: '123-456-7890'
});
```

## Contributing

Feel free to fork this repository and submit pull requests. If you have any ideas for new features or improvements, feel free to create an issue or submit a pull request.

### How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for providing a fake API for testing and prototyping.
- Thanks to [Material UI](https://mui.com/) for providing the UI components.
- Thanks to [React.js](https://reactjs.org/) for making UI development simple and fun.
