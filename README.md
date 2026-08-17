# FreshCart

A modern and responsive E-Commerce web application built with Angular.

## Live Demo

[https://mohamed-ahmed147.github.io/freshCart/](https://mohamed-ahmed147.github.io/freshCart/)

## Project Overview

FreshCart is an E-Commerce web application developed using Angular. The project provides a complete shopping experience including product browsing, product details, categories, brands, shopping cart, wishlist, authentication, checkout, and order management.

The application is organized using reusable Angular components, services, route guards, HTTP interceptors, interfaces, and pipes.

## Features

* Responsive E-Commerce UI
* User Registration
* User Login
* Authentication and Authorization
* Guest Route Protection
* Product Listing
* Product Details
* Product Search
* Product Categories
* Product Brands
* Shopping Cart
* Add to Cart
* Remove from Cart
* Update Cart Items
* Wishlist
* Add and Remove Wishlist Items
* Checkout
* Payment Integration
* Order Management
* Change Password
* Forget Password
* Reset Password
* Form Validation
* Loading Spinner
* Error Handling
* Toast Notifications
* Responsive Navigation
* Responsive Footer
* Home Page Sliders
* Not Found Page
* HTTP Interceptors
* Route Guards
* API Integration

## Technologies

* Angular 19
* TypeScript
* HTML5
* SCSS / Sass
* Tailwind CSS
* Bootstrap
* Font Awesome
* RxJS
* Angular Router
* Angular HTTP Client
* ngx-toastr
* ngx-spinner
* ngx-owl-carousel-o
* Flowbite
* Git
* GitHub

## Project Structure

```text
freshCart/
│
├── public/
│
├── src/
│   │
│   ├── app/
│   │   │
│   │   ├── layout/
│   │   │   │
│   │   │   ├── additions/
│   │   │   │   ├── allorders/
│   │   │   │   ├── change-password/
│   │   │   │   ├── checkout/
│   │   │   │   ├── footer/
│   │   │   │   ├── forget-password/
│   │   │   │   ├── navbar/
│   │   │   │   ├── new-password/
│   │   │   │   ├── notfound/
│   │   │   │   ├── productdetails/
│   │   │   │   ├── sliders/
│   │   │   │   ├── submit-code/
│   │   │   │   └── wishlist/
│   │   │   │
│   │   │   └── pages/
│   │   │       ├── brands/
│   │   │       ├── cart/
│   │   │       ├── categories/
│   │   │       ├── home/
│   │   │       ├── login/
│   │   │       ├── products/
│   │   │       └── register/
│   │   │
│   │   ├── shared/
│   │   │   ├── guard/
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   ├── interfaces/
│   │   │   ├── pipes/
│   │   │   └── services/
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   │
│   ├── assets/
│   │   └── images/
│   │
│   ├── index.html
│   ├── main.ts
│   ├── main.server.ts
│   ├── server.ts
│   └── styles.scss
│
├── angular.json
├── package.json
├── package-lock.json
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── README.md
```

## Architecture

The application is organized into reusable Angular modules and components.

### Layout

Contains the main application pages and shared UI components.

#### Pages

* Home
* Products
* Product Details
* Categories
* Brands
* Cart
* Login
* Register

#### Additional Components

* Navbar
* Footer
* Checkout
* Wishlist
* Orders
* Change Password
* Forget Password
* New Password
* Submit Code
* Product Details
* Home Sliders
* Not Found Page

### Shared

Contains reusable application logic and utilities:

* Guards
* Interceptors
* Services
* Interfaces
* Pipes

## Authentication

The application includes authentication features such as:

* Register
* Login
* Logout
* Authentication Guard
* Guest Guard
* Forget Password
* Password Reset
* Change Password

Protected routes are handled using Angular route guards.

## HTTP Interceptors

The application uses HTTP interceptors to handle:

* Loading states
* HTTP errors
* Request headers
* Authentication-related requests

## Services

The project contains dedicated services for different application modules:

* Authentication Service
* Products Service
* Categories Service
* Brands Service
* Cart Service
* Wishlist Service
* Payment Service
* Theme Service
* Flowbite Service

## Styling

The project uses:

* SCSS / Sass
* Tailwind CSS
* Bootstrap
* Font Awesome

The application uses responsive layouts and reusable styling to provide a consistent user interface.

## Responsive Design

The application is designed to work across different screen sizes:

* Desktop
* Laptop
* Tablet
* Mobile

## Installation

Clone the repository:

```bash
git clone https://github.com/mohamed-ahmed147/freshCart.git
```

Navigate to the project directory:

```bash
cd freshCart
```

Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
ng serve
```

Open the application in your browser:

```text
http://localhost:4200
```

The application will automatically reload when source files are modified.

## Build

Create a production build:

```bash
ng build
```

The generated files will be available inside:

```text
dist/
```

## Testing

Run unit tests:

```bash
ng test
```

## Code Generation

Generate a new Angular component:

```bash
ng generate component component-name
```

Generate a service:

```bash
ng generate service service-name
```

For more Angular CLI commands:

```bash
ng generate --help
```

## Git Workflow

Check the current status:

```bash
git status
```

Add changes:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Update project"
```

Push changes:

```bash
git push
```

## Deployment

The project is deployed using GitHub Pages.

Live application:

[https://mohamed-ahmed147.github.io/freshCart/](https://mohamed-ahmed147.github.io/freshCart/)

## Browser Support

The application is designed to work with modern browsers including:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

## Future Improvements

* Advanced product filtering
* Advanced sorting
* Pagination improvements
* Improved checkout experience
* Enhanced order tracking
* Additional payment methods
* Performance optimization
* Progressive Web App support

## License

This project is intended for educational and portfolio purposes.

## Author

**Mohamed Ahmed**

GitHub:

[https://github.com/mohamed-ahmed147](https://github.com/mohamed-ahmed147)

Repository:

[https://github.com/mohamed-ahmed147/freshCart](https://github.com/mohamed-ahmed147/freshCart)
