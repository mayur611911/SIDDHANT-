# Siddhant ❤️ Leena - Wedding Invitation

A beautiful single-page Hindu wedding invitation website for **Siddhant & Leena**.

## 📅 Wedding Date: 20 June 2026 (Saturday)

## ✨ Features

- **Opening Animation**: Gold foil royal envelope with Indian patterns that opens on click with glowing light transition
- **Music**: Soft instrumental track plays when envelope opens
- **Royal Indian Theme**: Maroon/gold/ivory color palette with textured backdrop
- **Visual Effects**: Floating gold particles, falling rose petals, parallax scrolling, 3D tilt on cards
- **Hero Section**: "Siddhant ❤️ Leena" in large gold calligraphy with couple photo
- **Event Details**: Haldi Ceremony, Wedding Ceremony (main event), Reception with dates and venues
- **Photo Gallery**: Three couple photos with gold-framed cards
- **Love Story**: Inspirational quote section with Sanskrit verse
- **RSVP Form**: Interactive form with attendance confirmation
- **Hindu Symbols**: Om (ॐ), Lotus (🪷), Kalash (🪔), Diya (🪔) subtly integrated
- **Responsive**: Landscape-first design, fully mobile responsive

## 🛠️ Tech Stack

- **React 19** + TypeScript
- **Tailwind CSS v4** (with custom theme)
- **Framer Motion** (animations, parallax, 3D tilt)
- **Howler.js** (background music)
- **Vite** (build tool)
- **Vitest** (testing)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npx vitest run
```

## 📂 Project Structure

```
src/
├── App.tsx                    # Main app with envelope/invitation toggle
├── index.css                  # Tailwind + custom theme (colors, fonts)
├── main.tsx                   # Entry point
└── components/
    ├── EnvelopeScreen.tsx     # 3D gold envelope with opening animation
    ├── MainInvitation.tsx     # Main page layout with all sections
    ├── HeroSection.tsx        # Names, photo, date with parallax
    ├── EventDetails.tsx       # Wedding events cards (20 June 2026)
    ├── Gallery.tsx            # Couple photo gallery
    ├── StoryQuote.tsx         # Love story & quotes section
    ├── RSVPSection.tsx        # RSVP form
    ├── Footer.tsx             # Footer with date
    ├── FloatingParticles.tsx  # Gold floating particles effect
    ├── RosePetals.tsx         # Falling rose petals animation
    ├── TiltCard.tsx           # 3D tilt effect card wrapper
    └── __tests__/
        └── WeddingDate.test.tsx  # Tests verifying 20 June 2026 date
```

## 🎨 Fonts

- **Great Vibes** - Calligraphy for couple names
- **Cinzel** - Headings and labels
- **Cormorant Garamond** - Body text

Made with ❤️ for Siddhant & Leena's special day.
