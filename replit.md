# Wedding Website - Yemisi & Bisoye

## Overview

A romantic, elegant wedding website for Yemisi and Bisoye featuring event details, RSVP management, photo gallery, digital guestbook, and bridal party showcases. The application provides an emotionally engaging digital celebration platform with password-protected access and modern interactive features.

**Wedding Details:**
- Date: Saturday 21st March 2026 at 3:00 PM
- Venue: Kirkleatham Walled Garden, Plantation Road, Redcar, TS10 4QT
- Location: Just off the A174/B1269 roundabout, nearest station is Redcar Central
- Color scheme: Teal (primary), Gold/Amber (secondary), Orange (accent)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React 18+ with TypeScript for type-safe component development
- Wouter for lightweight client-side routing
- Single-page application (SPA) with component-based architecture

**State Management**
- TanStack Query (React Query) for server state management and caching
- React Hook Form for complex form state with Zod validation
- Context API for theme management (light/dark mode)

**UI Component System**
- Shadcn/ui components built on Radix UI primitives for accessible, customizable UI
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system with wedding-specific color palettes (Teal, Gold/Amber, Orange)
- Typography hierarchy using Google Fonts: Playfair Display (serif), Inter (sans-serif), Great Vibes (script)

**Key Features**
- Password-gated access with session-based authentication
- Active countdown timer to March 21, 2026 (wedding date)
- Couple's photo gallery featuring 8 professional photos with masonry layout
- Multi-step RSVP form with validation
- User photo gallery with upload capabilities via Uppy
- Digital guestbook with message posting and reactions
- Bridal party member profiles with expandable stories
- FAQ accordion section
- Responsive design with mobile-first approach
- Elegant animations (fade-in, slide-up, float, pulse-glow, shimmer)

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for API routes
- Vite development server with HMR in development mode
- RESTful API design pattern

**Data Layer**
- Drizzle ORM configured for PostgreSQL (via Neon serverless driver)
- In-memory storage fallback (MemStorage class) for development/testing
- Schema-first design with Zod validation for all data operations

**Database Schema**
- RSVPs: Guest responses with meal preferences, dietary restrictions, plus-one details
- Bridal Party Members: Team profiles with photos and relationship stories
- Guest Messages: Digital guestbook entries with heart reactions
- Gallery Photos: User-uploaded images with captions
- Story Milestones: Couple's timeline events

**API Endpoints**
- `/api/rsvps` - RSVP submission and retrieval
- `/api/bridal-party` - Bridal party member data
- `/api/guest-messages` - Guestbook messages with heart increment functionality
- `/api/gallery-photos` - Photo gallery management
- `/api/story-milestones` - Relationship timeline data
- `/api/verify-password` - Password gate authentication

### External Dependencies

**Cloud Services**
- Google Cloud Storage for image/file hosting via `@google-cloud/storage`
- Object storage integration with Replit Sidecar endpoint for credential management

**Database**
- PostgreSQL via Neon serverless (`@neondatabase/serverless`)
- Drizzle ORM for type-safe database operations
- Connection pooling and edge-ready configuration

**File Upload System**
- Uppy dashboard for client-side file uploads
- AWS S3 protocol via `@uppy/aws-s3` plugin
- Direct-to-storage upload flow with presigned URLs
- Image optimization and validation (max 10MB, image types only)

**Third-Party Libraries**
- QRCode generation for gallery upload sharing
- React Hook Form + Zod for form validation
- Radix UI primitives for accessible component foundations
- Lucide React for icon system

**Development Tools**
- Vite for build tooling and development server
- TypeScript for type safety across client and server
- ESBuild for server-side bundling in production
- Replit-specific plugins for runtime error handling and dev experience

**Design System**
- Tailwind CSS with custom configuration
- Design guidelines reference premium wedding platforms (The Knot, Zola, Joy, Minted)
- Custom CSS variables for theme switching
- Shadcn/ui component library with New York style preset