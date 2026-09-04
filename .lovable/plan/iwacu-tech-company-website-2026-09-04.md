# Iwacu Tech — company website

A one-page site with smooth scroll animations, built section by section so you can check each part as it appears.

## Look and feel

- Teal-to-green gradient as the signature color, flowing smoothly between sections (no hard dark-navy block).
- Your logo appears in the top bar and in the footer.
- Hero styled like the reference you shared: full-width image with a dark overlay, huge company name across the middle, tagline underneath, menu on top, social icons above the title. Background photo: a real-feeling software engineering scene (code on screens / developer workspace), not an obviously AI-looking image.
- Animations on scroll throughout, plus polished hover effects on buttons, cards and links.

## Sections, in build order

1. **Top bar** — stays visible while scrolling, logo on the left, links on the right, a "Get a Quote" button, hamburger menu on phones. No cart or search.
2. **Hero** — company name, short line about building apps and solutions for everyday problems, social icons linking to:
   Facebook (Iwacu Technologi), Email iwacutech2026@gmail.com, X (@iwacuTechh), LinkedIn (Iwacu Tech), Instagram (iwacutech2026).
3. **Side dots** — small dashes down the right edge, one per section; each grows and glows as you reach that section, and clicking one jumps there.
4. **Stats** — three numbers that count up (Projects Completed, Satisfied Clients, Years Coding) with thin dividers between them.
5. **Services** — four cards: Custom Software, Web Development, Mobile Apps, Consulting — each with icon, title, short text, "Learn more".
6. **Why Us** — four icon cards (Fast Delivery, Secure Solutions, Expert Team, Tailored Approach) over the smooth gradient.
7. **About** — picture arrangement on one side, heading, description and a checklist of strengths on the other.
8. **Team** — grid of five leadership cards, each with a rounded photo, name and role, revealing one after another:
   - KAMANA Urbain — CEO
   - MUKIZA Allick — Vice CEO
   - MUGISHA Nick Collin — CTO
   - Ihuzuwizera Louna — COO — clearly marked empty photo slot for you to fill later
   - Queen Belle Joyce — CFO
9. **Testimonials** — three client quotes with name and role (sample text you can replace).
10. **FAQ** — expandable questions about services, timelines and pricing.
11. **Contact** — "Ready to start?" headline, WhatsApp button, phone 68402589 / 61677160, email iwacutech2026@gmail.com, available 24/7, Bujumbura, Burundi.
12. **Footer** — logo and a simple copyright line.
13. **Final pass** — tune all animations, timing and phone/tablet layout.

## Photos

Every photo sits in one clearly-labelled list at the top of its section's file (team members, hero background, about pictures), so a photo can be swapped or removed without touching anything else. Photos are cropped to fill their cards evenly, faces centered.

## Notes

- All text in English only.
- Testimonial quotes, stat numbers, service descriptions and FAQ answers are written as realistic samples — send me the real ones and I will drop them in.
- The COO photo slot stays visibly empty until you provide the picture.

## Technical notes

Single TanStack Start route at `/` composed of section components in `src/components/`, teal→green tokens added to `src/styles.css`, scroll reveals and counters via Motion for React with an IntersectionObserver-driven scroll-spy for the side rail, shadcn Accordion for the FAQ, uploaded photos published as CDN asset pointers in `src/assets/`.
