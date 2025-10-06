# Wedding Website Design Guidelines for Christiana & Tambari

## Design Approach: Reference-Based (Premium Wedding Platforms)

**Primary References**: The Knot, Zola, Joy, Minted wedding websites
**Design Philosophy**: Romantic elegance meets modern interactivity - create an emotionally engaging digital celebration that feels personal, sophisticated, and timeless.

**Justification**: All 5 factors point to experience-focused design: emotional engagement is paramount, content is photo-rich, visual identity differentiates in the wedding industry, should reflect 2025 trends, and requires custom interactive components.

---

## Core Design Elements

### A. Color Palette

**Primary Colors (Light Mode)**:
- Champagne Base: 40 15% 92%
- Rose Gold: 15 45% 75%
- Ivory: 45 20% 96%
- Deep Plum (accents): 330 25% 35%
- Warm Charcoal (text): 0 0% 20%

**Primary Colors (Dark Mode)**:
- Rich Charcoal: 0 0% 12%
- Muted Rose: 15 30% 45%
- Soft Gold: 40 35% 60%
- Deep Wine (accents): 330 35% 25%
- Cream (text): 45 20% 90%

### B. Typography

**Font Families**:
- **Display/Headings**: Playfair Display (Google Fonts) - elegant serif for couple names, section headers
- **Body Text**: Inter (Google Fonts) - clean, readable sans-serif
- **Accent/Script**: Great Vibes (Google Fonts) - cursive for special moments like "& Tambari"

**Hierarchy**:
- Hero Names: text-6xl to text-8xl, font-playfair, font-bold
- Section Headers: text-4xl to text-5xl, font-playfair
- Subheadings: text-2xl to text-3xl, font-inter, font-semibold
- Body: text-base to text-lg, font-inter
- Captions: text-sm, font-inter, italic

### C. Layout System

**Spacing Primitives**: Use Tailwind units of **4, 8, 12, 16, 20, 24, 32** for consistency
- Component padding: p-8, p-12, p-16
- Section spacing: py-20, py-24, py-32
- Card gaps: gap-8, gap-12
- Margins: m-4, m-8, m-12

**Container Strategy**:
- Full-width hero sections with inner max-w-7xl
- Content sections: max-w-6xl mx-auto
- Text content: max-w-4xl for readability
- Forms: max-w-2xl

---

## Component Library

### D. Core Components

**1. Password Gate Entry**
- Full-screen overlay with romantic background (soft floral pattern or couple silhouette)
- Centered password input with elegant styling
- "Enter Password" label in Playfair Display
- Subtle unlock animation on successful entry
- Password hint: "Event password from your invitation"

**2. Hero Section**
- Full-viewport height (min-h-screen)
- Large hero image: Romantic couple photo or elegant venue shot (soft focus, warm tones)
- Overlay gradient: from-black/40 to-transparent
- Centered content with couple names in large Playfair Display
- Ampersand "&" in Great Vibes script between names
- Two-line date display: "Traditional Engagement: 11.07.2024" and "Wedding Day: 13.07.2024"
- Live countdown timer (days, hours, minutes)
- Subtle scroll indicator with down arrow animation

**3. Navigation**
- Sticky top nav with glass-morphism effect (backdrop-blur-lg, bg-white/80 dark:bg-charcoal/80)
- Logo/Initials on left: "C & T"
- Horizontal menu items: Home, Invitation, Our Story, Bridal Party, RSVP, Registry, Gallery, FAQ
- Mobile: Hamburger menu with slide-in drawer
- Active section indicator with underline accent

**4. Invitation Section**
- Split layout: Left side with elegant invitation card design (border, ornamental corners)
- Right side with interactive timeline showing both events
- Venue details with embedded Google Maps
- "Add to Calendar" buttons for both events
- Dress code and theme information

**5. Our Story Timeline**
- Vertical timeline with alternating left/right content cards
- Each milestone: photo, date, description
- Connecting line with heart icons at milestones
- Animate cards on scroll (fade-in from sides)
- Final card: "And now we're getting married!"

**6. Bridal Party Grid**
- 2-column layout (desktop), single column (mobile)
- Separate sections: "Groomsmen" and "Bridesmaids"
- Profile cards with circular photo, name, title, and expandable story
- Story reveals how they met the bride/groom
- Hover effect: slight scale and shadow increase

**7. Interactive RSVP Form**
- Multi-step form with progress indicator
- Step 1: Guest name and email
- Step 2: Attendance for both events (checkboxes)
- Step 3: Meal preferences (dropdown)
- Step 4: Dietary restrictions (textarea)
- Step 5: Plus-one details
- Step 6: Song request for reception
- Submit button: "Confirm Attendance" with loading state
- Success message with confetti animation

**8. Gift Registry**
- Card layout with three options:
  1. Traditional Registry (link to external site)
  2. Savings Pot Donation (direct link from invitation)
  3. Honeymoon Fund
- Each card: icon, title, description, CTA button
- Elegant border and hover lift effect

**9. Photo Gallery**
- Masonry grid layout (3-4 columns desktop, 2 mobile)
- Lightbox on click with navigation
- "Upload Your Photos" section with QR code
- Categories: Engagement, Pre-wedding, Events
- Lazy loading for performance

**10. FAQ Accordion**
- Elegant accordion with Playfair headings
- Questions about: Venue, Accommodation, Travel, Dress Code, Gifts, Schedule
- Smooth expand/collapse with subtle animation
- Search filter at top

**11. Live Updates Section**
- Real-time announcement feed (simulated)
- Card-based layout with timestamp
- "Subscribe for SMS updates" option
- Weather widget for wedding day

**12. Digital Guestbook**
- Text and video message submission
- Grid of submitted messages (latest first)
- Heart reaction feature
- Moderation notice

**13. Footer**
- Three columns: Quick Links, Contact Info, Social Media
- Newsletter signup: "Stay updated on wedding news"
- Copyright: "Christiana & Tambari 2024"
- "Made with ❤️ for our special day"

### E. Animations

**Subtle, Romantic Animations Only**:
- Countdown timer: Smooth number transitions
- Timeline milestones: Fade-in on scroll (intersection observer)
- Photo gallery: Staggered grid reveal
- Form submission: Success confetti (brief, 2 seconds)
- Navigation: Smooth scroll to sections
- Cards: Gentle hover lift (translate-y-1)

**Avoid**: Excessive parallax, spinning elements, distracting motion

---

## Images

**Critical Image Placements**:

1. **Hero Image**: Full-width, high-quality couple photo - romantic setting (sunset, elegant venue, or engagement shoot). Soft focus background, couple in center-left. Warm, golden-hour tones. Overlay: subtle gradient for text readability.

2. **Our Story Section**: 5-7 milestone photos showing relationship progression (first date location, proposal, engagement shoot, candid moments). Mix of landscape and portrait orientations.

3. **Bridal Party**: Individual circular headshot photos for each groomsman and bridesmaid. Consistent style - outdoor natural light or studio portraits with neutral backgrounds.

4. **Venue Photos**: 2-3 images showing ceremony and reception locations in Invitation section. Elegant architecture, decorated spaces.

5. **Gallery Section**: 15-20 engagement and pre-wedding photos. High-quality, professionally shot. Mix of formal poses and candid moments.

6. **Background Patterns**: Subtle floral watercolor patterns for section dividers. Soft, semi-transparent overlays in champagne/rose gold tones.

All images should have: Consistent color grading (warm tones), high resolution (1920px+ width), optimized file sizes, alt text for accessibility.

---

## Special Considerations

- **Mobile-First**: 70% of guests will view on phones - prioritize mobile UX
- **Performance**: Optimize images (WebP format), lazy loading, minimal animations
- **Accessibility**: WCAG AA contrast ratios, keyboard navigation, screen reader support
- **Password Protection**: Client-side validation for "tlc4ever" with session storage
- **Multi-Event Support**: Clear visual distinction between Traditional Engagement and Wedding Day
- **Cultural Sensitivity**: Respect for traditional engagement customs alongside modern wedding elements

This design creates an elegant, emotionally resonant digital experience that celebrates Christiana & Tambari's love story while providing practical event information and interactive features for their guests.