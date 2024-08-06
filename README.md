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

```plaintext
amazon_clone/
├── .gitattributes                    # Git attributes file
├── .gitignore                         # Git ignore file
├── LICENSE                            # License information
├── package.json                       # Project metadata and dependencies
├── public/
│   └── index.html                     # Main HTML file
│
└── src/
    ├── assets/
    │   ├── fonts/
    │   │   └── Amazon_Ember.ttf       # Custom font
    │   ├── images/
    │   │   ├── amazon_icon.png        # Amazon icon image
    │   │   ├── logo.png               # Project logo image
    │   │   └── location.png           # Location icon image
    │   └── assets.jsx                 # Assets handling file
    │
    ├── components/
    │   ├── About/
    │   │   ├── About.jsx              # About component
    │   │   └── About.css              # Styles for About component
    │   ├── Body/
    │   │   ├── Body.jsx               # Body component
    │   │   └── Body.css               # Styles for Body component
    │   ├── Footer/
    │   │   ├── Footer.jsx             # Footer component
    │   │   └── Footer.css             # Styles for Footer component
    │   ├── History/
    │   │   ├── History.jsx            # History component
    │   │   └── History.css            # Styles for History component
    │   ├── Home/
    │   │   ├── Home.jsx               # Home component
    │   │   └── Home.css               # Styles for Home component
    │   ├── NavbarHigher/
    │   │   ├── NavbarHigher.jsx       # Navbar (Higher) component
    │   │   └── NavbarHigher.css       # Styles for Navbar (Higher) component
    │   ├── NavbarLower/
    │   │   └── NavbarLower.jsx        # Navbar (Lower) component
    │   │   └── NavbarLower.css        # Styles for Navbar (Lower) component
    │   ├── Offers/
    │   │   ├── Offers.jsx             # Offers component
    │   │   └── Offers.css             # Styles for Offers component
    │   ├── Services/
    │   │   ├── Services.jsx           # Services component
    │   │   └── Services.css           # Styles for Services component
    │   ├── Modals/
    │   │   ├── PersonalDetailsModal/
    │   │   │   ├── PersonalDetailsModal.jsx  # Personal Details Modal component
    │   │   │   └── PersonalDetailsModal.css  # Styles for Personal Details Modal
    │   │   └── LanguageSelectionModal/
    │   │       ├── LanguageSelectionModal.jsx # Language Selection Modal component
    │   │       └── LanguageSelectionModal.css # Styles for Language Selection Modal
    │   └── Hooks/
    │       ├── LanguageHook.jsx        # Custom hook for language management
    │       └── LocationHook.jsx        # Custom hook for location management
    │
    ├── pages/
    │   └── HomePage.jsx                # Home Page component
    │
    ├── App.jsx                         # Main App component
    ├── App.css                         # Styles for App component
    ├── index.jsx                       # Entry point for React application
    └── index.css                       # Global styles
```

## Setup

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the project directory:**

   ```bash
   cd amazon_clone
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

This README provides a clear overview of your project, its features, technologies, file structure, setup instructions, and licensing information.