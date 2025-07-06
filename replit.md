# Plastic Surgery & Skin Cancer Specialist Website

## Overview

This is a professional medical website for a plastic surgeon specializing in routine plastic surgery and skin cancer operations within Buckinghamshire Healthcare NHS Trust. The application is built using a modern full-stack architecture with React frontend and Express backend, featuring a contact form for patient inquiries and informational sections about services and facilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom medical-themed color palette
- **UI Components**: Radix UI with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: In-memory storage with fallback to PostgreSQL
- **API Pattern**: RESTful API with JSON responses

### Styling and Design System
- **Design Language**: Medical professional theme with blue color palette
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Component Library**: shadcn/ui components for consistent UI patterns
- **Typography**: Inter font family for modern, clean appearance

## Key Components

### Frontend Components
1. **Navigation**: Sticky header with smooth scrolling navigation
2. **Hero Section**: Landing area with call-to-action buttons
3. **About Section**: Professional background and credentials
4. **Services Section**: Detailed service offerings with imagery
5. **Facilities Section**: Showcase of medical facilities
6. **Contact Section**: Patient inquiry form with validation
7. **Footer**: Additional navigation and contact information

### Backend Services
1. **Contact API**: Handles patient inquiry submissions with validation
2. **Storage Service**: Manages contact inquiries (currently in-memory)
3. **Route Registration**: Express route handlers with error management
4. **Development Server**: Vite integration for hot module replacement

### Database Schema
- **Contact Inquiries Table**: Stores patient contact form submissions
  - Fields: id, firstName, lastName, email, phone, service, message, createdAt
  - Validation: Zod schema validation for data integrity

## Data Flow

1. **User Interaction**: Patients browse services and fill contact form
2. **Form Submission**: Client-side validation followed by API request
3. **Server Processing**: Express routes handle requests with Zod validation
4. **Data Storage**: Contact inquiries stored via Drizzle ORM
5. **Response Handling**: Success/error responses with user feedback via toast notifications
6. **Admin Access**: Backend endpoint for retrieving contact inquiries

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database operations
- **zod**: Runtime schema validation
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets
2. **Backend Build**: esbuild bundles Express server with external packages
3. **Output Structure**: 
   - Frontend assets: `dist/public/`
   - Backend bundle: `dist/index.js`

### Environment Configuration
- **Development**: Vite dev server with HMR and Express API
- **Production**: Static file serving with Express backend
- **Database**: PostgreSQL connection via environment variable

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Database schema synchronization

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```