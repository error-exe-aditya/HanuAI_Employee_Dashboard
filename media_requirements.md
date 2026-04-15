# Media Requirements & Upload Guide

This guide details exactly what static assets (images/videos) you need to upload to the `public/` directory of the application, and how they will be used for the scroll effects and animations.

## Directory Structure
Place all your final assets in the `public/` folder at the root of the project. We recommend creating a folder structure like this:
```
public/
  ├── images/
  │   ├── hero-bg.jpg
  │   ├── logo.png
  │   ├── team/
  │   │   ├── employee-1.jpg
  │   │   ├── employee-2.jpg
  │   │   └── employee-3.jpg
  │   └── projects/
  │       ├── project-1.jpg
  │       ├── project-2.jpg
  │       └── project-3.jpg
  └── videos/
      └── optional-bg.mp4
```

## Required Assets

### 1. Company Introduction (Hero Section)
- **`public/images/logo.png`**
  - **Type:** PNG (Transparent background)
  - **Dimensions:** Any size (will be constrained via CSS), preferably ~500x500px or wide depending on aspect ratio.
  - **Usage:** Fades in at the start of the presentation.
- **`public/images/hero-bg.jpg`** (or `.mp4`)
  - **Type:** High Quality JPG / WebP
  - **Dimensions:** 1920x1080 (16:9 minimum) 
  - **Usage:** Used as the background image. It will slowly zoom on load, and move with a **parallax effect** when scrolling down. Dark or abstract tech-focused images work best to maintain the "Cinematic" dark theme.

### 2. Team & Project Showcase
For each employee showcased in the dynamic alternating layout, you will need two images:

- **Employee Photo (`public/images/team/employee-1.jpg`)**
  - **Type:** JPG / PNG
  - **Dimensions:** 800x800 px (1:1 Square recommended) or 800x1000 px.
  - **Usage:** This image will slide in from the left or right when the team member's section comes into view.

- **Project Image / Screenshot (`public/images/projects/project-1.jpg`)**
  - **Type:** JPG / WebP
  - **Dimensions:** 1920x1080 px (16:9 Landscape)
  - **Usage:** This image represents the project they worked on. It will slide in sequentially. 
  - **Interaction:** It will have a hover effect (slight enlarge) and overlay text (e.g. "View Project") to open external links.

## How to Edit in the Code
Once you have uploaded these files, you will simply update the `src/data/team.ts` file to point to these paths:
```typescript
{
  name: "Jane Doe",
  photo: "/images/team/employee-1.jpg", 
  projectImage: "/images/projects/project-1.jpg",
  // ...
}
```
*Note: Because they are in the `public` folder, the paths in code start with `/`.*
