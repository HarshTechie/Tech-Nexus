# TechNexus – AI-Powered E-Commerce Platform

TechNexus is a full-stack e-commerce platform designed for electronics and gadgets, providing a seamless shopping experience from product discovery to order delivery. The platform combines modern web technologies, secure payment processing, intelligent product recommendations, and robust order management into a single scalable solution.

## Overview

TechNexus addresses common challenges faced by online shoppers, such as finding the right products, comparing alternatives, and managing orders efficiently. The platform integrates AI-powered recommendations using Google Gemini to help users discover products that best match their requirements and budget.

## Key Features

### User Authentication & Security
- JWT-based authentication
- Access Tokens (1 hour) and Refresh Tokens (7 days)
- Argon2id password hashing
- Role-based access control (User/Admin)
- Secure API authorization

### Product Management
- Browse products by category
- Product search and filtering
- Product specifications and ratings
- Inventory management
- Product image support

### Shopping Cart & Checkout
- Add, update, and remove cart items
- Persistent cart management
- Coupon and discount support
- GST and shipping calculations
- Stripe payment integration

### Order Management
- Order placement and tracking
- Multiple order status stages
- Order history dashboard
- Delivery address management
- Payment status tracking

### AI-Powered Recommendations
- Google Gemini integration
- Natural language product search
- Budget-aware recommendations
- Intelligent product ranking
- Conversational shopping assistant

### Admin Dashboard
- Product CRUD operations
- Category management
- Coupon management
- Order monitoring
- Inventory control

## System Architecture

```
┌─────────────────────────────┐
│      React Frontend         │
└──────────────┬──────────────┘
               │ REST APIs
               ▼
┌─────────────────────────────┐
│   Node.js + Express API     │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│      MongoDB Atlas          │
└──────────────┬──────────────┘
               │
        ┌──────┴───────┐
        ▼              ▼
   Stripe API     Gemini API
```

## Technology Stack

| Layer             | Technologies                                                                 |
| ----------------- | ---------------------------------------------------------------------------- |
| **Frontend**      | React.js, Tailwind CSS, React Router DOM, Axios, React Icons, Stripe.js      |
| **Backend**       | Node.js, Express.js, JWT Authentication, Argon2, Joi Validation, Helmet, Express Rate Limit |
| **Database**      | MongoDB, Mongoose, MongoDB Atlas                                             |
| **External APIs** | Stripe Payment Gateway, Google Gemini AI                                     |

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (or a local MongoDB instance)
- A [Stripe](https://dashboard.stripe.com/) account (test keys are fine)
- A [Google Gemini](https://ai.google.dev/) API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd TECHNEXUS-M-main
   ```

2. **Configure environment variables**

   Create `backend/.env` and `frontend/.env` from the provided templates:
   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```
   Then fill in your own values (MongoDB URL, JWT secret, Stripe keys, Gemini API key, etc.).
   > **Security:** never commit real secrets. The Gemini API key belongs only in `backend/.env` — never in the frontend.

3. **Install and run the backend**
   ```bash
   cd backend
   npm install
   npm run dev        # starts the API with nodemon (default: http://localhost:5000)
   ```

4. **Install and run the frontend** (in a separate terminal)
   ```bash
   cd frontend
   npm install
   npm start          # starts the React app (default: http://localhost:3000)
   ```

### Useful Scripts

**Backend** (`backend/`)
| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm start`            | Start the API server                     |
| `npm run dev`          | Start the API with hot reload (nodemon)  |
| `npm run seed:products`| Seed the products collection             |
| `npm run seed:coupons` | Seed discount coupons                    |
| `npm test`             | Run backend tests                        |

**Frontend** (`frontend/`)
| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm start`     | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm test`      | Run frontend tests                   |

## Database Design

### Collections

| Collection   | Description                                                                       |
| ------------ | --------------------------------------------------------------------------------- |
| `Users`      | User accounts, authentication details, and refresh tokens.                        |
| `Products`   | Product information, pricing, inventory, and specifications.                      |
| `Categories` | Product categories and metadata.                                                  |
| `Orders`     | Order details, payment information, delivery data, and purchased item snapshots.  |
| `Addresses`  | User shipping addresses.                                                          |
| `Coupons`    | Discount coupons and usage information.                                           |
| `CartItems`  | Cart contents before checkout.                                                    |
| `Reviews`    | Product reviews and ratings.                                                      |

## Authentication Flow

1. User logs in.
2. Server generates an **Access Token** (1 hour) and a **Refresh Token** (7 days).
3. The access token is used for protected API requests.
4. When the access token expires, the refresh token generates a new one.
5. The user remains logged in without re-authentication.

## Payment Workflow

```
User Checkout
      │
      ▼
Create Stripe Session
      │
      ▼
Stripe Hosted Payment Page
      │
      ▼
Payment Success
      │
      ▼
Order Creation
      │
      ▼
Order Tracking
```

## AI Recommendation Workflow

```
User Query
      │
      ▼
Fetch Product Catalog
      │
      ▼
Send Data to Gemini
      │
      ▼
AI Ranking & Analysis
      │
      ▼
Recommended Products
      │
      ▼
Display Results
```

## Security Features
- Argon2id password hashing
- JWT authentication
- Role-based authorization
- Helmet security headers
- CORS protection
- Rate limiting
- Input validation using Joi
- Environment variable protection
- HTTPS support in production

## Performance Optimizations
- MongoDB indexing
- Product pagination
- Category caching
- Connection pooling
- Retry mechanisms for database connectivity
- Lazy loading on the frontend
- Optimized React rendering

## Project Structure

```
TechNexus
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   ├── services
│   │   └── hooks
│   └── public
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middlewares
│   ├── services
│   ├── utils
│   └── config.js
│
└── database
    └── seed scripts
```

## Future Enhancements
- Redis caching for AI recommendations
- Elasticsearch-based search
- Product recommendation personalization
- Real-time order notifications
- Microservices architecture
- Docker containerization
- Kubernetes deployment
- Advanced analytics dashboard

## Learning Outcomes

Through TechNexus, the following concepts were implemented and explored:
- Full-Stack Web Development
- REST API Design
- Authentication & Authorization
- Payment Gateway Integration
- AI Integration using LLMs
- NoSQL Database Design
- Security Best Practices
- Scalable System Design
- State Management in React
- Cloud Database Management

## Author

**Harsh Tak**

TechNexus was developed as a full-stack e-commerce platform to demonstrate modern web development, secure payment processing, scalable backend architecture, and AI-powered product recommendation systems. 🚀
