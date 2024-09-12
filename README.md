# E-Commerce Product Catalog

## Overview

This project is a fully functional e-commerce product catalog application built with Next.js and Tailwind CSS. It includes features such as product listing, product detail view, shopping cart, checkout process, and an admin panel for managing products. The backend is powered by Node.js and Express, handling CRUD operations via a RESTful API.

## Features

- **Product Listing Page:** Displays products with images, names, prices, and descriptions. Includes filters and sorting options.
- **Product Detail Page:** Provides detailed information about each product with an "Add to Cart" button.
- **Shopping Cart:** Allows users to view and manage items in their cart, including updating quantities and removing items.
- **Checkout Process:** Simulates a checkout with form validation for shipping details.
- **Admin Panel:** Interface for adding, updating, or deleting products.

## Technologies Used

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Node.js, Express
- **Database (optional):** SQLite, MongoDB, or any other database for persistent storage

## Setup

### Prerequisites

- Node.js and npm installed
- A code editor (e.g., VS Code)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hemu1808/Products.git


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features in Progress

- **Search Functionality:** Adding a search bar to filter products by name or category.
- **User Authentication:** Implementing login and signup functionalities for a personalized shopping experience.

## API Documentation

### Product Endpoints

- **GET /api/products**
  - Description: Fetch all products
  - Response: JSON array of product objects

- **POST /api/products**
  - Description: Add a new product
  - Body: JSON object containing product details
  - Response: JSON object of the created product

- **PUT /api/products/:id**
  - Description: Update product by ID
  - Body: JSON object with updated product details
  - Response: JSON object of the updated product

- **DELETE /api/products/:id**
  - Description: Delete product by ID
  - Response: JSON object confirming deletion

## Development

### Frontend Development

- The frontend is built with Next.js and Tailwind CSS.
- Components are organized in the `components` directory.
- Styling is managed using Tailwind's utility classes.

### Backend Development

- The backend is powered by Node.js and Express.
- API routes are located in the `backend` directory.
- Data is temporarily stored in memory for development purposes.

## Deployment

To deploy the application, follow these steps:

1. Set up your deployment platform (e.g., Vercel for frontend, Heroku for backend).
2. Configure environment variables as needed.
3. Push your code to the respective platforms.

## Troubleshooting

- **Error fetching products:** Ensure the backend server is running and accessible.
- **Styling issues:** Verify that Tailwind CSS is correctly set up in your Next.js project.

## Acknowledgments

- Tailwind CSS for providing a flexible and powerful utility-first CSS framework.
- Next.js for its robust React framework that facilitates server-side rendering and static site generation.



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
