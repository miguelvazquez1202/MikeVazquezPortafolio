# Photography Portfolio Application

## Overview
This is a modern full-stack photography portfolio application designed for professional photographers. Its purpose is to elegantly showcase photography galleries across various categories (concerts, social events, portraits), feature a dedicated demo reel section for video content, and provide a contact system for client inquiries. The application is entirely in Spanish (Latin America) to cater to its target audience.

## User Preferences
Preferred communication style: Simple, everyday language.
Language preference: Spanish (Latin America) for all website content.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **Animations**: Framer Motion
- **Build Tool**: Vite

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js (REST API)
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Design System
- **Typography**: Google Fonts (Playfair Display, Montserrat, Source Sans Pro)
- **Color Scheme**: Vibrant yellow (#ffc20f) and dark grey (#2e2e2e) with custom CSS variables. Uses "New York" variant from shadcn/ui with custom color overrides.
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints.

### Core Features
- **Photography Gallery System**: Structured image data with categories, custom lightbox for viewing, and responsive masonry-style layouts. Includes concert, social event, and portrait photography.
- **Contact Management**: React Hook Form with Zod validation, messages stored in PostgreSQL, RESTful API endpoints, and toast notifications. Email notifications via SendGrid.
- **Content Sections**: Hero section, services overview, demo reel, about section with downloadable portfolio, and smooth-scrolling navigation.
- **UI/UX Features**: Smooth scrolling, skeleton loaders, full responsiveness, and accessibility (ARIA labels, keyboard navigation).
- **SEO Optimization**: Dynamic SEOHead component, category-specific meta tags, Open Graph, Twitter Cards, JSON-LD schema.org (ImageGallery, VideoGallery, professional photographer info), sitemap.xml, robots.txt, canonical URLs, and professional business schema with geographic targeting for Latin America.
- **Image/Video Optimization**: Image sizes reduced using Cloudinary, video optimization with `preload="none"`, optimized poster thumbnails, and lazy loading. Intelligent face centering for portraits.

## External Dependencies

### Core
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **@radix-ui/***: Accessible UI primitives
- **wouter**: Lightweight routing
- **date-fns**: Date manipulation utilities
- **SendGrid**: Email service for notifications

### Development
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **ESBuild**: Fast JavaScript bundler for production

### Database & Storage
- **PostgreSQL**: Primary database via Neon serverless
- **Drizzle Kit**: Database migration tool