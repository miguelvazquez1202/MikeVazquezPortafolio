# Photography Portfolio Application

## Overview

This is a modern full-stack photography portfolio application built for professional photographers. It features a clean, elegant design showcasing photography galleries across different categories (concerts, social events, portraits), a demo reel section for video content, and a contact system for client inquiries. The entire website is now implemented in Spanish (Latin America) for the target audience.

## User Preferences

Preferred communication style: Simple, everyday language.
Language preference: Spanish (Latin America) for all website content.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement with Vite integration

### Design System
- **Typography**: Google Fonts (Playfair Display, Montserrat, Source Sans Pro)
- **Color Scheme**: Updated palette featuring vibrant yellow (#ffc20f) and dark grey (#2e2e2e) with custom CSS variables
- **Primary Colors**: Vibrant Yellow (#ffc20f), Dark Grey (#2e2e2e), Pure White, Deep Black
- **Style Guide**: "New York" variant from shadcn/ui with custom color overrides
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Photography Gallery System
- **Gallery Sections**: Concert photography, social events, and portrait photography
- **Image Management**: Structured data with categories and metadata
- **Lightbox**: Custom lightbox component for image viewing with keyboard navigation
- **Responsive Grid**: Masonry-style layout that adapts to different screen sizes

### Contact Management
- **Form Handling**: React Hook Form with Zod validation
- **Data Storage**: Contact messages stored in PostgreSQL database
- **API Integration**: RESTful endpoints for form submission and message retrieval
- **User Feedback**: Toast notifications for form submission status

### Content Sections
- **Hero Section**: Full-screen landing with call-to-action buttons
- **Services Overview**: Cards showcasing different photography services
- **Demo Reel**: Video showcase section with thumbnail previews
- **About Section**: Professional bio with downloadable portfolio option
- **Navigation**: Smooth scrolling navigation with mobile hamburger menu

### UI/UX Features
- **Smooth Scrolling**: Navigation between sections with smooth scroll behavior
- **Loading States**: Skeleton loaders and loading indicators
- **Mobile Responsive**: Fully responsive design with mobile-optimized interactions
- **Accessibility**: ARIA labels and keyboard navigation support

## Data Flow

### Client-Side Data Flow
1. React components fetch data using TanStack Query
2. Form submissions handled through React Hook Form with validation
3. State managed locally with React hooks and globally with TanStack Query
4. Navigation handled by Wouter with programmatic routing

### Server-Side Data Flow
1. Express server handles incoming HTTP requests
2. Route handlers validate data using Zod schemas
3. Database operations performed through Drizzle ORM
4. Responses sent as JSON with appropriate HTTP status codes

### Database Schema
- **Contact Messages Table**: Stores client inquiries with fields for name, email, service type, and message
- **Timestamps**: Automatic creation timestamps for data tracking
- **Validation**: Schema validation both client and server-side using Drizzle Zod

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **@radix-ui/***: Accessible UI primitives
- **wouter**: Lightweight routing
- **date-fns**: Date manipulation utilities

### Development Dependencies
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **ESBuild**: Fast JavaScript bundler for production

### Database & Storage
- **PostgreSQL**: Primary database via Neon serverless
- **Drizzle Kit**: Database migration tool
- **Memory Storage**: Fallback in-memory storage implementation

## Deployment Strategy

### Production Build
- **Client**: Vite builds optimized static assets to `dist/public`
- **Server**: ESBuild bundles Node.js server code to `dist/index.js`
- **Assets**: Static assets served from build directory in production

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment detection for development/production modes
- **Replit Integration**: Special handling for Replit development environment

### Development Setup
- **Hot Reload**: Vite middleware integrated with Express for development
- **TypeScript**: Real-time type checking during development
- **Database Migrations**: Drizzle Kit for schema changes and migrations

The application is designed to be easily deployable on various platforms while maintaining a smooth development experience with hot reloading and TypeScript support.

## Recent Changes

### January 22, 2025
- **Complete Spanish Translation**: Implemented comprehensive Spanish (Latin America) translation across all website sections
  - Navigation menu: All items translated (Inicio, Conciertos, Eventos Sociales, Retratos, Reel Demo, Acerca de, Contacto)
  - Hero section: Main headline and call-to-action buttons translated
  - Services overview: All service titles and descriptions translated
  - Gallery sections: Titles, descriptions, and image alt text translated
  - Demo reel section: Section title and video descriptions translated
  - About section: Bio content, specializations, and button text translated
  - Contact section: Form labels, placeholders, success/error messages, and contact information translated
  - Footer: Description and copyright notice translated
  - Data files: All image alt text and video descriptions translated to Spanish
- **Maintained Design System**: All vibrant yellow (#ffc20f) and dark grey (#2e2e2e) color scheme preserved throughout translation
- **User Experience**: Forms, notifications, and interactive elements fully localized for Spanish-speaking users