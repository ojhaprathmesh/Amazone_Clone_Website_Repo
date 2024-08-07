# Amazon Clone

This is a full-stack Amazon clone project built using React, Express, and MongoDB, aiming to replicate the core features of Amazon's e-commerce platform. The application features a dynamic user interface with modals for personal details and language selection, and utilizes various libraries and tools to enhance functionality and user experience.

## Features

- **Dynamic Navbar**: Includes location details, user profile options, and a search bar with responsive design.
- **Language Selection Modal**: Allows users to choose from multiple languages, affecting the language of displayed text.
- **Personal Details Modal**: Enables users to update and manage their personal details such as name, city, and pincode.
- **Country Flag Display**: Shows the user's country flag based on their IP address.

## Technologies

- **Frontend**: React, CSS
- **Backend**: Express
- **Database**: MongoDB
- **Libraries**: Lenis, AOS, react-router-dom

## File Structure

# File Structure

```plaintext
Amazon_Clone_Website_Repo/
├── public/
│   ├── redirect                    # File for redirect logic
│   ├── index.html                  # Main HTML file
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── Amazon_Ember.ttf    # Custom font
│   │   ├── images/
│   │   │   ├── amazon_icon.png     # Amazon icon image
│   │   │   ├── logo.png            # Project logo image
│   │   │   ├── location.png        # Location icon image
│   │   ├── assets.jsx              # Assets handling file
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.css           # About component
│   │   │   ├── About.jsx           # Styles for About component
│   │   ├── Body/
│   │   │   ├── Body.css            # Body component
│   │   │   ├── Body.jsx            # Styles for Body component
│   │   ├── Footer/
│   │   │   ├── Footer.css          # Footer component
│   │   │   ├── Footer.jsx          # Styles for Footer component
│   │   ├── History/
│   │   │   ├── History.css         # History component
│   │   │   ├── History.jsx         # Styles for History component
│   │   ├── Home/
│   │   │   ├── Home.css            # Home component
│   │   │   ├── Home.jsx            # Styles for Home component
│   │   ├── Hooks/
│   │   │   ├── LanguageHook.jsx    # Hook for handling language logic
│   │   │   ├── LocationHook.jsx    # Hook for handling location logic
│   │   ├── Modals/
│   │   │   ├── LanguageSelectionModal.css # Language Selection Modal component
│   │   │   ├── LanguageSelectionModal.jsx # Styles for Language Selection Modal
│   │   │   ├── PersonalDetailsModal.css   # Personal Details Modal component
│   │   │   ├── PersonalDetailsModal.jsx   # Styles for Personal Details Modal
│   │   ├── NavbarHigher/
│   │   │   ├── NavbarHigher.jsx    # Navbar (Higher) component
│   │   │   ├── NavbarHigher.css    # Styles for Navbar (Higher) component
│   │   ├── NavbarLower/
│   │   │   ├── NavbarLower.jsx     # Navbar (Lower) component
│   │   │   ├── NavbarLower.css     # Styles for Navbar (Lower) component
│   │   ├── Offers/
│   │   │   ├── Offers.jsx          # Offers component
│   │   │   ├── Offers.css          # Styles for Offers component
│   │   ├── Services/
│   │   │   ├── Services.jsx        # Services component
│   │   │   ├── Services.css        # Styles for Services component
│   ├── pages/
│   │   ├── HomePage.jsx            # Home Page component
│   ├── App.jsx                     # Main App component
│   ├── App.css                     # Styles for App component
│   ├── index.jsx                   # Entry point for React application
│   ├── index.css                   # Global styles
├── LICENSE
├── package.json
├── README.md
```

## Setup

1. **Clone the repository:**

   ```cmd
   git clone <repository_url>
   ```

2. **Navigate to the project directory:**
   ```cmd
   cd Amazon_Clone_Website_Repo
   ```

3. **Install dependencies:**
   ```cmd
   npm install
   ```

4. **Run the application:**
   ```cmd
   npm start
   ```

## License
This project is licensed under the MIT License - see the LICENSE file for details.
