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

### February 8, 2025 - Evening Updates  
- **Performance Optimization**: Implemented comprehensive performance improvements for faster loading
  - **Image Optimization**: Reduced image sizes with Cloudinary w_400 and c_scale parameters
  - **Video Optimization**: Added preload="none" and optimized poster thumbnails with q_auto:low compression
  - **Lazy Loading Component**: Created LazyImage component for intersection observer-based loading
  - **Consistent Play Buttons**: Added animated yellow play buttons to all video thumbnails across site
  - **Mobile Responsive**: Fixed "Circuito Cerrado" text wrapping on mobile devices
- **Email Notification System**: Implemented automatic email notifications for contact form submissions
  - **SendGrid Integration**: Added SendGrid email service for reliable email delivery
  - **Dual Email System**: Sends notification to photographer (miguelvazquez1202@gmail.com) and confirmation to client
  - **Professional Email Templates**: Custom HTML templates with brand colors and professional styling
  - **Robust Error Handling**: Form submission succeeds even if email fails, with proper logging
- **Video Gallery Enhancement**: Added permanent yellow play buttons to all video thumbnails
  - **Always Visible Play Buttons**: Yellow circular play buttons now visible on all video thumbnails
  - **Hover Animations**: Scale effects, glowing shadows, and pulsing ring animations
  - **Visual Feedback**: Clear indication that videos are clickable and interactive
- **Gallery Content Updates**: Added new photography content to enhance portfolio showcases
  - **Photography Section**: Replaced ocean landscape photo with new portrait image (DSC03612) for better section consistency
  - **Portrait Gallery Expansion**: Added 4 new professional portraits from Cloudinary collection (DSC03409, DSC03589, DSC03634, FOTOS_RANCHOSANJUAN_DIA01_30)
  - **Corporate Photography Addition**: Integrated new corporate photography image and updated section to use 4-column grid layout
  - **Animals Gallery Enhancement**: Added 2 new animal photography images from ranch collection maintaining complete photo display
  - **Image Optimization**: All new photos configured with width-only resizing (w_400) to preserve natural aspect ratios without cropping
  - **Navigation Enhancement**: Updated all gallery "Volver" buttons to link directly to "Servicios Creativos" section (#servicios) instead of homepage

### February 8, 2025 - Morning
- **Comprehensive Advanced SEO Optimization Implementation**: Complete SEO enhancement across all category pages and website infrastructure
  - **Enhanced Category Page SEO**: Updated all gallery pages (retratos, paisajes, animales, videoclips) with detailed titles, descriptions, and targeted keywords
  - **Expanded Structured Data**: Comprehensive JSON-LD schema.org markup including detailed contact information, geographic targeting, and professional service catalogs
  - **Professional Contact Integration**: Added complete contact details (phone: +52-55-3726-4582, email: miguelvazquez1202@gmail.com) throughout structured data
  - **Geographic SEO Targeting**: Implemented precise location targeting for Ciudad de México and México with coordinates and regional specificity
  - **Service Catalog Enhancement**: Detailed professional service offerings with specialized descriptions for each photography and videography category
  - **SEO Infrastructure Files**: Created comprehensive sitemap.xml and robots.txt for optimal search engine discovery and crawling
  - **HTML Head Optimization**: Enhanced base HTML with geographic meta tags, canonical URLs, and professional business schema
  - **Content Protection Integration**: Maintained video content protection (controlsList="nodownload", disablePictureInPicture) across all video galleries
  - **Specialized Category Keywords**: Targeted long-tail keywords for Mexican market including "Ciudad de México", "México", "disponibilidad para viajar"

### February 1, 2025
- **Advanced SEO Optimization Implementation**: Comprehensive SEO features added across all category pages
  - **Dynamic SEO Head Component**: Created reusable SEOHead component for managing meta tags, Open Graph, and structured data
  - **Category-Specific SEO**: Each gallery page (concerts, retratos, paisajes, animales, videoclips) has unique titles, descriptions, and keywords
  - **Structured Data**: JSON-LD schema.org markup for ImageGallery and VideoGallery types with professional photographer information
  - **Open Graph & Twitter Cards**: Social media optimization with category-specific images and descriptions
  - **Base HTML SEO**: Updated index.html with Spanish language, comprehensive meta tags, and professional service structured data
  - **SEO Infrastructure**: Added sitemap.xml and robots.txt for better search engine discovery
  - **Canonical URLs**: Implemented canonical links to prevent duplicate content issues
  - **Professional Service Schema**: Added comprehensive business schema with service catalog and geographic targeting for Latin America

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