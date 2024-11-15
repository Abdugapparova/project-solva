# SWAPI React Application

This project is a React-based web application that uses the Star Wars API (SWAPI) to display information about characters, planets, and starships. It includes user authentication, a navigation bar, and detailed pages for each entity with editable information.

## Features

- **User Authentication**: Users must log in to access the main pages.
- **Navigation**: A responsive navigation bar that appears after logging in, with links to People, Planets, and Starships pages.
- **People Page**: A paginated table displaying characters from the SWAPI.
- **Entity Details**: A detailed page for each character, allowing users to edit and save changes locally.
- **Routing**: React Router is used for navigation between pages.

## Technologies Used

- **React** with TypeScript
- **React Router** for routing
- **React-Redux** for state management
- **Axios** for API requests
- **React Hook Form** for form handling
- **Bootstrap** for styling

## Getting Started

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/swapi-react-app.git
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   or, if you prefer yarn:

   ```bash
   yarn install
   ```

### Running the Project

1. **Start the development server**:

   ```bash
   npm start
   ```

   or, if using yarn:

   ```bash
   yarn start
   ```

2. **Open the application**:

   The app will be available at [http://localhost:3000](http://localhost:3000) in your browser.

   Username: admin
   Password: password

### Project Structure

- **src/components/Navbar.tsx**: The navigation bar component.
- **src/pages/LoginPage.tsx**: The login page component.
- **src/pages/MainPage.tsx**: The main page that users see after logging in.
- **src/pages/PeoplePage.tsx**: Displays a list of characters from the SWAPI.
- **src/pages/PersonDetails.tsx**: Detailed page for editing character information.
- **src/pages/PlanetsPage.tsx**: Displays a list of planets (not implemented in this guide).
- **src/pages/StarshipsPage.tsx**: Displays a list of starships (not implemented in this guide).
- **src/App.tsx**: Main application component with routes and authentication logic.
- **src/styles/people.css**: CSS file for styling the People Page and buttons.

## Editing Entity Information

- On the **Person Details** page, you can edit the character's height, mass, and gender.
- Click **"Save Changes"** to save the updated data locally and return to the People Page.
- Use the **"Back to People List"** button to navigate back without saving.

## Additional Notes

- The **Save Changes** feature updates information only in the local state; it does not make any changes to the SWAPI.
- The **pagination** on the People Page allows you to navigate through pages of characters, displaying 10 characters per page.
