# Brand Pivot Guide

Quick guide for switching this driving school template to a new brand.

## Quick Start (2 Files Only!)

### 1. Edit `brand.config.ts`

This is the **single source of truth** for all brand content. Update these sections:

```typescript
// CORE BRAND IDENTITY
export const BRAND = {
  name: "Your Driving School",      // Full company name
  shortName: "Your Driving",         // Short name for navbar
  logoLetter: "Y",                   // Single letter for logo
  tagline: "Your tagline here.",

  phone: "123-456-7890",
  email: "info@example.com",
  address: "123 Main St, City, BC",

  city: "Vancouver",                 // Primary city
  region: "Lower Mainland",          // Region name
  province: "BC",
  certification: "ICBC Certified",
  highway: "Highway 1",              // Local highway reference
};
```

### 2. Edit `index.html`

Update these 3 things:

#### A. Title & Meta (lines 10-11)
```html
<title>Your Driving School | Professional Driver Training in City, BC</title>
<meta name="description" content="City's trusted driving school..." />
```

#### B. Color Palette (lines 28-39)
Use [uicolors.app](https://uicolors.app) to generate a palette from your brand color:

```javascript
primary: {
  50: '#f0f5f3',   // Lightest
  100: '#d9e8e1',
  200: '#b3d1c4',
  300: '#84b5a0',
  400: '#5a967d',
  500: '#4a7d68',
  600: '#3d6654',  // <-- Main brand color (buttons, links)
  700: '#345647',
  800: '#2d463c',
  900: '#263b33',  // Darkest
},
```

#### C. Selection Color (line 76)
Match to your primary-600:
```css
::selection {
  background-color: #3d6654;
}
```

#### D. Font (optional, line 63)
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

And update font-family in `<style>` block.

---

## What Each Section Controls

### `brand.config.ts` Sections:

| Section | Controls |
|---------|----------|
| `BRAND` | Company name, contact info, location |
| `COLORS` | Color palette (used by SuccessGallery SVG) |
| `SERVICE_AREAS` | List of neighborhoods/areas served |
| `TESTIMONIALS` | Customer reviews (name, location, quote) |
| `FAQS` | FAQ section questions and answers |
| `PACKAGES` | Pricing cards (name, price, description) |
| `STATS` | Numbers shown (pass rate, students, years, rating) |
| `HERO` | Hero section text (badge, headline, subheadline) |
| `ABOUT` | About section text (headline, description, benefits) |

---

## Common Brand Pivots

### Change Colors Only
1. Go to [uicolors.app](https://uicolors.app)
2. Enter your brand's primary color
3. Copy the generated palette
4. Paste into `index.html` (lines 28-39)
5. Update `COLORS` in `brand.config.ts`
6. Update `::selection` color in `index.html`

### Change Location Only
1. Update `BRAND.city`, `BRAND.region`, `BRAND.highway` in `brand.config.ts`
2. Update `SERVICE_AREAS` array with local neighborhoods
3. Update testimonial locations in `TESTIMONIALS`

### Change Contact Info Only
1. Update `BRAND.phone`, `BRAND.email`, `BRAND.address` in `brand.config.ts`

### Change Pricing Only
1. Update `PACKAGES` array in `brand.config.ts`

---

## Font Suggestions by Vibe

| Vibe | Font | Google Fonts Link |
|------|------|-------------------|
| Modern/Clean | Inter | `Inter:wght@400;500;600;700;800` |
| Friendly | Poppins | `Poppins:wght@400;500;600;700;800` |
| Professional | DM Sans | `DM+Sans:wght@400;500;600;700` |
| Bold/Strong | Montserrat | `Montserrat:wght@400;500;600;700;800` |
| Elegant | Outfit | `Outfit:wght@400;500;600;700` |

---

## Color Palette Examples

### Blue (Default Corporate)
```javascript
600: '#2563eb'  // Primary
```

### Green (Nature/Eco)
```javascript
600: '#3d6654'  // Primary
```

### Orange (Energetic)
```javascript
600: '#ea580c'  // Primary
```

### Purple (Premium)
```javascript
600: '#7c3aed'  // Primary
```

### Red (Bold)
```javascript
600: '#dc2626'  // Primary
```

---

## Files Overview

```
├── brand.config.ts      # ALL brand content (edit this!)
├── index.html           # Colors, fonts, meta (edit colors here!)
├── BRAND_PIVOT.md       # This guide
└── components/
    ├── Navbar.tsx       # Uses BRAND
    ├── Hero.tsx         # Uses BRAND, HERO, STATS
    ├── Services.tsx     # Uses BRAND
    ├── Packages.tsx     # Uses BRAND, PACKAGES
    ├── SuccessGallery.tsx # Uses BRAND, STATS, ABOUT, SERVICE_AREAS, COLORS
    ├── Testimonials.tsx # Uses TESTIMONIALS, STATS
    ├── FAQ.tsx          # Uses BRAND, FAQS
    ├── Contact.tsx      # Uses BRAND, SERVICE_AREAS
    └── FloatingCTA.tsx  # Uses BRAND
```

---

## AI Assistant Instructions

When asked to do a brand pivot:

1. **Get brand info**: Ask for company name, phone, email, address, city, and brand color
2. **Get reference**: Ask for a screenshot or website for color/vibe reference
3. **Edit 2 files**:
   - `brand.config.ts` - Update BRAND object and content sections
   - `index.html` - Update title, meta, color palette, and selection color
4. **Generate color palette**: Use the primary brand color to generate full palette at uicolors.app
5. **Update areas**: Replace service areas with local neighborhoods
6. **Test**: Run `npm run dev` to verify changes

That's it! The template is designed so brand pivots only require editing these 2 files.
