# Amazon Clone

This is a full-stack Amazon clone project built using React, Express, and MongoDB, aiming to replicate the core features of Amazon's e-commerce platform. The application features a dynamic user interface with modals for personal details and language selection, and utilizes various libraries and tools to enhance functionality and user experience.

## Features

- **Dynamic Navbar**: Includes location details, user profile options, and a search bar with responsive design.
- **Language Selection Modal**: Allows users to choose from multiple languages, affecting the language of displayed text.
- **Personal Details Modal**: Enables users to update and manage their personal details such as name, city, and pincode.
- **Country Flag Display**: Shows the user's country flag based on their IP address.
- **Smooth Scrolling**: Implemented using Lenis for a better user experience.
- **Scroll Animations**: Utilizes AOS library to animate elements on scroll.

## Technologies

- **Frontend**: React, CSS
- **Backend**: Express
- **Database**: MongoDB
- **Libraries**: Lenis, AOS, react-router-dom

## File Structure

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
│   │   │   ├── About.css           # Styles for About component
│   │   │   ├── About.jsx           # About component
│   │   ├── Body/
│   │   │   ├── Body.css            # Styles for Body component
│   │   │   ├── Body.jsx            # Body component
│   │   ├── Footer/
│   │   │   ├── Footer.css          # Styles for Footer component
│   │   │   ├── Footer.jsx          # Footer component
│   │   ├── History/
│   │   │   ├── History.css         # Styles for History component
│   │   │   ├── History.jsx         # History component
│   │   ├── Home/
│   │   │   ├── Home.css            # Styles for Home component
│   │   │   ├── Home.jsx            # Home component
│   │   ├── Hooks/
│   │   │   ├── LanguageHook.jsx    # Hook for handling language logic
│   │   │   ├── LocationHook.jsx    # Hook for handling location logic
│   │   ├── Modals/
│   │   │   ├── LanguageSelectionModal.css # Styles for Language Selection Modal
│   │   │   ├── LanguageSelectionModal.jsx # Language Selection Modal component
│   │   │   ├── PersonalDetailsModal.css   # Styles for Personal Details Modal
│   │   │   ├── PersonalDetailsModal.jsx   # Personal Details Modal component
│   │   ├── NavbarHigher/
│   │   │   ├── NavbarHigher.css    # Styles for Navbar (Higher) component
│   │   │   ├── NavbarHigher.jsx    # Navbar (Higher) component
│   │   ├── NavbarLower/
│   │   │   ├── NavbarLower.css     # Styles for Navbar (Lower) component
│   │   │   ├── NavbarLower.jsx     # Navbar (Lower) component
│   │   ├── Offers/
│   │   │   ├── Offers.css          # Styles for Offers component
│   │   │   ├── Offers.jsx          # Offers component
│   │   ├── Services/
│   │   │   ├── Services.css        # Styles for Services component
│   │   │   ├── Services.jsx        # Services component
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