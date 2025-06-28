# Medical Treatment Web app

MedTreats is a responsive front-end application for a skincare and aesthetics clinic. This project serves as a modern, single-page website to showcase the clinic's services, display testimonials, and allow users to make enquiries. It's built with React, TypeScript, and Vite, featuring a component-based architecture and styling with Sass.

## Features

*   **Component-Based Architecture**: The application is built using reusable React components for each section of the page, such as the Header, Hero, Treatments, Gallery, and Footer.
*   **Dynamic Content**: All text and image data is loaded from local JSON files (`src/data`), making content updates easy without touching the component logic.
*   **Interactive UI**:
    *   **Treatments Section**: Users can hover over or click on different treatment icons to view a detailed description and preview image.
    *   **Testimonials Carousel**: An auto-playing carousel displays customer feedback, providing social proof.
    *   **Enquiry Form**: A functional enquiry form with input fields for user details and messages.
*   **Modern Styling**: Styled with Sass (SCSS) using variables, mixins, and a structured file system for maintainability.
*   **TypeScript Integration**: Fully typed codebase for improved developer experience and code quality.

## Tech Stack

*   **Frontend**: React 18, TypeScript
*   **Build Tool**: Vite
*   **Styling**: Sass (SCSS)
*   **Icons**: React Icons
*   **Linting**: ESLint
*   **Formatting**: Prettier

## Project Structure

The project follows a standard Vite + React structure, with key directories organized as follows:

```
medtreats/
├── public/
│   └── images/            # Static image assets
├── src/
│   ├── assets/
│   │   └── styles/        # Global SCSS files (variables, mixins, etc.)
│   ├── components/        # Reusable React components
│   ├── data/              # JSON files for site content
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── package.json
└── vite.config.ts
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/aulanchik/medtreats.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd medtreats
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run the following command. The application will be available at `http://localhost:5173`.

```sh
npm run dev
```

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the TypeScript and TSX files using ESLint.
*   `npm run preview`: Serves the production build locally to preview it.
