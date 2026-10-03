# Celine Ojo | Portfolio

Personal portfolio of Celine Ojo, a full-stack and mobile developer based in Nigeria. It showcases selected projects, my tech stack, and ways to get in touch.

**Live site:** [add your live link here]

## Pages

| Route | What it shows |
| --- | --- |
| `/` | Introduction, photo, and quick links to every section |
| `/projects` | Selected work with stack, key features, live demos, and code links |
| `/stack` | Technologies I use, grouped by area |
| `/about` | A short background and what I focus on |
| `/contact` | Email, GitHub, and LinkedIn |

## Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**

## Features

- Multi-page layout with a shared navbar and footer
- Active-page highlighting in the navigation
- Project cards driven by a single data file
- Responsive design with a mobile menu
- Consistent color palette and keyboard-visible focus states

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Shared layout: navbar, footer, fonts, metadata
│   ├── globals.css       # Theme colors and global styles
│   ├── page.tsx          # Home
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── stack/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
└── data/
    └── projects.ts       # Project content
public/
└── celine.jpg            # Profile photo
```

## Getting Started

```bash
# Clone the repository
git clone https://github.com/mhizalima/celine-portfolio.git
cd celine-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build:

```bash
npm run build
npm start
```

## Customizing

- **Add or edit projects:** update `src/data/projects.ts`. Each project supports a name, status, category, description, stack, features, learning notes, a GitHub link, and an optional live link.
- **Change colors:** edit the values in `src/app/globals.css`.
- **Update the photo:** replace `public/celine.jpg`.

## Color Palette

| Use | Color |
| --- | --- |
| Background | `#B3CFE5` |
| Call to action | `#FCA311` |
| Text and dark surfaces | `#0A1931` |
| Light surfaces and text on dark | `#F6FAFD` |

## Contact

- Email: [celinebless2002@gmail.com](mailto:celinebless2002@gmail.com)
- GitHub: [@mhizalima](https://github.com/mhizalima)
- LinkedIn: [Celine Ojo](https://www.linkedin.com/in/celine-ojo)
