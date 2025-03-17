# E-Commerce Admin Panel

## Overview
This E-Commerce Admin Portal provides a comprehensive management system for online stores. It includes user authentication, dashboard analytics, product management, and order management features built with Angular, Ionic, and Tailwind CSS.

## Features

### 1. Authentication
- User registration with email and password
- Secure login/logout functionality
- Password recovery options
- Authentication guards for protected routes

### 2. Dashboard
- Stats cards displaying key metrics:
  - Total number of orders
  - Total number of products
  - Total number of users
- Latest additions table showing the 5 most recently added products
- Recent orders table showing the 5 most recent customer orders
- Visual data representation with charts and graphs

### 3. Product Management
- Complete CRUD operations for products:
  - List all products with search and filter capabilities
  - Create new products with image upload
  - Update existing product information
  - Delete products with confirmation dialog
- Product categorization and tagging
- Inventory management and stock level tracking

### 4. Order Management
- Complete CRUD operations for orders:
  - List all orders with search and filter options
  - Create new orders
  - Update order status and details
  - Delete orders with confirmation dialog
- Order status tracking
- Customer information display

### 5. Bonus Features
- Light and Dark mode toggle
- Responsive design for all device sizes

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v22.12.0 recommended)
- Node Version Manager (nvm)
- Visual Studio Code
- Git
- Docker (optional, for containerized deployment)

## Local Development Setup

### Step 1: Set up Node.js with NVM
Following the local development environment setup guide:

#### For Windows:
```bash
# Install Node.js using NVM
nvm install 22.12.0
nvm use 22.12.0
```

#### For macOS/Linux:
```bash
# Install Node.js using NVM
nvm install 22.12.0
nvm use 22.12.0
```

### Step 2: Clone the repository
```bash
git clone https://github.com/yourusername/ecommerce-admin-panel.git
cd ecommerce-admin-panel
```

### Step 3: Install dependencies
```bash
npm install
```

### Step 4: Install global packages
```bash
npm install -g @angular/cli @ionic/cli
```

### Step 5: Set up Environment Variables
Create a `.env` file in the root directory:
```
API_URL=http://localhost:3000/api
AUTH_SECRET=your_secret_key
```

### Step 6: Start the development server
```bash
ionic serve
```
The application will be available at `http://localhost:8100`.

## Code Quality Tools

This project uses the following code quality tools:

### ESLint
For JavaScript/TypeScript linting:
```bash
# Run ESLint
npm run lint
```

### Stylelint
For CSS/SCSS linting:
```bash
# Run Stylelint
npm run lint:styles
```

### Prettier
For code formatting:
```bash
# Format code
npm run format
```

### EditorConfig
An `.editorconfig` file is included to maintain consistent coding styles across different editors and IDEs.

## Project Structure
```
ecommerce-admin-panel/
├── src/
│   ├── app/
│   │   ├── auth/            # Authentication components
│   │   ├── dashboard/       # Dashboard components
│   │   ├── products/        # Product management components
│   │   ├── orders/          # Order management components
│   │   ├── shared/          # Shared components, services, and models
│   │   ├── theme/           # Theme configuration (light/dark mode)
│   │   └── app.module.ts
│   ├── assets/              # Static assets
│   ├── environments/        # Environment configurations
│   └── index.html
├── .editorconfig            # Editor configuration
├── .eslintrc                # ESLint configuration
├── .prettierrc              # Prettier configuration
├── .stylelintrc             # Stylelint configuration
├── angular.json             # Angular configuration
├── capacitor.config.ts      # Capacitor configuration
├── ionic.config.json        # Ionic configuration
├── package.json             # Package dependencies
└── README.md                # This file
```


### Common Issues:
- **Node version incompatibility**: Ensure you're using Node.js v22.12.0 by running `nvm use 22.12.0`
- **Build errors**: Run `npm clean-install` to refresh dependencies
