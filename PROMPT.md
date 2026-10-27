# Aleywa Studios — Website Build

Build the main website for **Aleywa Studios** in the current directory.

The design already exists in **FigCraft**. I will provide the FigCraft project URL below.

**FigCraft URL:**
`<PASTE FIGCRAFT URL HERE>`

FigCraft is the primary visual source of truth for this project.

The FigCraft project also contains a **Page Core Foundation** and **Page Core Components**. These are important foundations of the design and should be inspected and understood before implementation.

FigCraft also exposes an MCP. Discover and use the available MCP tools yourself. Do not assume specific tool names or commands.

---

# 1. Objective

Create a premium, production-quality website for Aleywa Studios.

The immediate goal is **only the main studio website**.

Do not build a CMS, client portal, database, authentication system, backend, or other infrastructure.

The result should be:

- visually distinctive
- premium
- fast
- responsive
- accessible
- SEO-friendly
- maintainable
- heavily informed by the existing FigCraft design
- suitable for deployment as a static site on Cloudflare

The website should feel like the digital presence of a serious creative/design studio, not a generic agency template.

---

# 2. Technology

Use:

- **Astro**
- **TypeScript**
- **Tailwind CSS**
- **SolidJS** only where genuine client-side interactivity is required

Use Astro as the primary framework.

Astro should handle:

- routing
- layouts
- pages
- static generation
- content
- SEO
- rendering

SolidJS should only be used for genuinely interactive components.

Do not turn the website into a SPA.

Do not use React.

Do not introduce unnecessary state-management libraries.

Do not introduce a UI component library unless there is a compelling reason.

Keep dependencies minimal.

---

# 3. Inspect Before Building

Before writing significant amounts of code:

1. Inspect the existing directory.
2. Inspect the FigCraft project through MCP.
3. Inspect all relevant FigCraft pages/frames/designs.
4. Inspect the **Page Core Foundation**.
5. Inspect the **Page Core Components**.
6. Inspect typography.
7. Inspect colors.
8. Inspect spacing.
9. Inspect grids and layout rules.
10. Inspect responsive variants.
11. Inspect assets.
12. Inspect interactions.
13. Inspect animation and motion notes.
14. Understand how the different screens relate to each other.

There may be multiple designs/screens in the FigCraft project. Inspect all of them rather than implementing only one and guessing the rest.

Use the actual MCP capabilities available in the environment.

Do not ask me to manually describe information that can be obtained from FigCraft.

---

# 4. Create a Plan First

Before the main implementation, create a concise implementation plan.

The plan should determine:

- required pages
- page hierarchy
- component architecture
- content architecture
- design foundation
- Tailwind setup
- reusable Page Core components
- interactive components
- motion system
- responsive strategy
- asset strategy
- SEO
- deployment approach

Use your engineering judgment.

Do not blindly follow a predetermined architecture if the actual FigCraft project suggests something better.

Once the plan is clear, implement it.

---

# 5. FigCraft as Source of Truth

Treat FigCraft as the authoritative source for the visual design.

Inspect and reproduce:

- layout
- typography
- colors
- spacing
- grids
- proportions
- components
- image treatment
- buttons
- navigation
- cards
- responsive behavior
- hover states
- interaction states
- motion
- transitions

Do not invent a different visual direction.

Do not turn the website into a generic "modern agency" design.

Do not add:

- generic gradients
- unnecessary glassmorphism
- arbitrary shadows
- generic AI aesthetics
- design patterns that don't belong to the existing visual language

If the design contains an unusual or distinctive visual idea, preserve it.

---

# 6. Page Core Foundation

The FigCraft project contains a **Page Core Foundation**.

Study it carefully.

Identify the underlying design primitives such as:

- typography
- colors
- spacing
- layout
- grid
- containers
- breakpoints
- buttons
- links
- surfaces
- borders
- image treatments
- motion principles

Translate the useful parts into the Astro/Tailwind implementation.

Do not build a huge enterprise design system.

Create only the design foundation needed to make the website consistent and easy to maintain.

The goal is:

> a lightweight implementation of the existing design language.

Not:

> a massive reusable component framework.

---

# 7. Page Core Components

The FigCraft project also contains **Page Core Components**.

Inspect these carefully.

Where appropriate, map them into reusable Astro components.

For example:

```text
FigCraft Page Core
        ↓
Astro/Tailwind implementation

Header              → Header.astro
Button              → Button.astro
Project Card        → ProjectCard.astro
Section Heading     → SectionHeading.astro
Footer              → Footer.astro
```

Do not reproduce the FigCraft component hierarchy blindly.

Translate the design into clean frontend architecture.

If a component is static, keep it an Astro component.

If it genuinely requires client-side state or interaction, consider SolidJS.

---

# 8. Tailwind Architecture

Use Tailwind CSS.

Configure Tailwind around the actual design.

Represent appropriate design tokens through the Tailwind theme/configuration:

- colors
- typography
- spacing
- breakpoints
- radii
- shadows
- other recurring values

Avoid excessive arbitrary values.

Do not create giant class strings that become impossible to maintain.

Use reusable components for recurring patterns.

Keep styling predictable and clean.

The Tailwind implementation should feel like a coherent system rather than hundreds of unrelated utility combinations.

---

# 9. Lightweight Design Foundation

Create a small internal design foundation based on the FigCraft project.

Include only what is actually useful.

For example:

```text
Typography
Colors
Spacing
Container
Grid
Buttons
Links
Images
Section primitives
Motion primitives
```

Do not build a full design-system package.

Do not spend time creating components that the website doesn't need.

The foundation exists to make the implementation consistent and maintainable.

---

# 10. Pages

Determine the required pages from the actual FigCraft designs.

Do not invent pages simply because agency websites normally have them.

Implement the pages represented by the design.

If there is a portfolio/work section, make it easy to add additional projects later.

If there are case-study pages, use structured content rather than duplicating page markup.

---

# 11. Content Architecture

Separate content from presentation where useful.

Use Astro's content capabilities where appropriate.

For projects/work, create a scalable content structure.

For example:

```text
content/
└── work/
    ├── project-a/
    ├── project-b/
    └── ...
```

The exact implementation should be determined from the actual website requirements.

A new project should be easy to add without rewriting the portfolio page.

Do not over-abstract simple content.

---

# 12. Project / Work Section

If the FigCraft design contains a work/portfolio section, treat it as one of the most important parts of the website.

Implement:

- project listing
- project cards
- project metadata
- project imagery
- project detail pages if present in the design

Preserve the visual storytelling of the designs.

Project cards should have the intended hover/interaction behavior from FigCraft.

If appropriate, use subtle motion to make project browsing feel tactile and premium.

---

# 13. Assets

Use the actual assets available from FigCraft whenever possible.

Do not substitute designed assets with generic stock imagery.

If FigCraft exposes downloadable/exportable assets through MCP, use them.

Optimize assets appropriately.

Use Astro's image capabilities where useful.

Pay attention to:

- dimensions
- aspect ratios
- image quality
- loading behavior
- responsive images
- alt text

Avoid shipping unnecessarily huge assets.

---

# 14. Responsive Design

Implement the responsive behavior from FigCraft.

Do not simply shrink the desktop version.

Inspect how the design changes between:

- mobile
- tablet
- desktop
- large desktop

Pay attention to:

- typography scaling
- spacing
- grids
- navigation
- image crops
- content ordering
- touch targets
- motion
- interactions

The responsive version should feel intentionally designed.

---

# 15. Motion & Creative Direction

Motion is an important part of the Aleywa Studios website.

The site should have **a lot of tasteful motion**, but it must never feel chaotic or exhausting.

The desired feeling is:

> **calm → expressive → calm → expressive**

rather than:

> animation → animation → animation → animation

Motion should feel art-directed.

It should make the website feel alive and premium without distracting from the content.

---

# 16. Inspect FigCraft Motion

Before implementing animation, inspect the existing FigCraft motion notes and interaction designs.

Look for:

- entrance animations
- hover effects
- image transitions
- scroll behavior
- staggered animations
- text reveals
- navigation transitions
- page transitions
- cursor interactions
- component state transitions
- easing
- duration
- interaction feedback

Preserve the strongest existing motion ideas.

Do not simply reproduce every animation mechanically.

Use creative judgment.

---

# 17. Motion Hierarchy

Use three levels of motion.

### Level 1 — Micro-interactions

Subtle feedback such as:

- button hover
- link movement
- underline transitions
- icon movement
- image scale
- navigation states
- menu transitions
- small opacity/transform changes

These should feel immediate and refined.

### Level 2 — Section motion

More noticeable motion such as:

- scroll reveals
- image reveals
- staggered content
- typography entrances
- project-card transitions
- subtle parallax
- section transitions

Use these to create rhythm.

### Level 3 — Signature moments

Use sparingly.

Examples:

- an expressive hero transition
- a memorable portfolio interaction
- a dramatic image reveal
- a distinctive typography animation
- an elegant page transition
- an unusual but tasteful hover experience

A few exceptional interactions are better than dozens of mediocre ones.

---

# 18. Motion Principles

Never animate something simply because it can be animated.

Every meaningful animation should improve at least one of:

- hierarchy
- storytelling
- feedback
- orientation
- visual delight

If an animation doesn't serve a purpose, remove it.

Use stillness intentionally.

Negative space and static moments are part of the motion design.

---

# 19. Portfolio Motion

Give the work/portfolio section special attention.

Potential interactions include:

- image reveals
- image scale
- image crop transitions
- title movement
- metadata transitions
- subtle depth
- cursor interactions
- project transition effects
- tasteful parallax

Use the FigCraft design as the starting point.

The portfolio should feel tactile and memorable without becoming difficult to navigate.

---

# 20. Typography Motion

Typography can be an important part of the studio's visual identity.

Where appropriate, use:

- line reveals
- masked text
- staggered words
- subtle movement
- clipping
- position transitions
- variable-font animation where appropriate

Do not overuse character-by-character animations.

Large typography should feel confident and editorial rather than gimmicky.

---

# 21. Image Motion

Use image motion selectively.

Potential techniques include:

- hover scaling
- masked reveals
- clip-path transitions
- object-position transitions
- subtle parallax
- grayscale/color transitions
- tasteful displacement effects

Do not introduce WebGL, canvas, or heavy GPU effects unless there is a compelling design reason.

If an effect is expensive, test whether the visual value justifies the cost.

---

# 22. Cursor Interactions

If the FigCraft design suggests custom cursor interactions, consider implementing them.

However:

- preserve usability
- don't replace the cursor unnecessarily
- don't make the cursor distracting
- disable/reduce complex cursor behavior on touch devices
- respect reduced-motion preferences

Cursor effects should feel like a premium enhancement.

---

# 23. Page Transitions

Consider Astro's native page-transition capabilities where appropriate.

Page transitions should feel smooth and intentional.

Never make navigation feel slow.

If a transition delays the user unnecessarily, simplify it.

---

# 24. Animation Technology

Prefer the simplest appropriate technology.

Use:

- CSS transitions
- CSS animations
- transforms
- opacity
- IntersectionObserver
- Astro
- lightweight SolidJS islands

before reaching for heavy animation libraries.

Do not add an animation library simply because it is popular.

If the FigCraft design genuinely requires sophisticated animation, choose an appropriate solution based on the actual requirement.

Do not introduce unnecessary complexity.

---

# 25. Performance

Motion must not destroy performance.

Prefer compositor-friendly properties such as:

```text
transform
opacity
```

Avoid unnecessary layout-triggering animations.

Avoid:

- constantly running JavaScript loops
- unnecessary DOM manipulation
- excessive observers
- huge animation libraries
- excessive hydration
- GPU-heavy effects without justification

Measure performance.

The website should remain fast even with its motion system.

---

# 26. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Users who prefer reduced motion should receive an intentional alternate experience.

Reduce or remove:

- parallax
- cursor effects
- large transforms
- complex page transitions
- unnecessary entrance animations
- continuous motion

Preserve essential interaction feedback.

The website should remain beautiful and usable without motion.

---

# 27. Forms

If the FigCraft design contains forms, implement them properly.

Use:

- semantic HTML
- accessible labels
- correct input types
- appropriate validation
- useful error messages
- loading state
- success state
- failure state

Use a clean form-validation approach.

Do not scatter validation logic throughout the UI.

Keep form components clean and reusable.

Do not implement any backend, API, email service, database, or submission infrastructure at this stage.

The form only needs its frontend experience implemented unless the project explicitly requires otherwise.

---

# 28. SEO

Create a proper SEO foundation.

Handle:

- page titles
- descriptions
- canonical URLs
- Open Graph metadata
- social metadata
- robots.txt
- sitemap

Use semantic HTML.

Make the website highly crawlable without relying on JavaScript.

---

# 29. Accessibility

Build with accessibility in mind.

Ensure:

- semantic HTML
- correct heading hierarchy
- keyboard navigation
- visible focus states
- accessible forms
- appropriate button/link usage
- alt text
- adequate contrast
- reduced-motion support

Use ARIA only when necessary.

Do not let motion compromise usability.

---

# 30. Performance

The website should ship as little JavaScript as possible.

Prefer:

```text
Astro
↓
Static HTML
↓
CSS
↓
minimal interactive JavaScript
```

Avoid unnecessary client hydration.

Use Astro client directives intelligently.

If something can be implemented without JavaScript, do that.

---

# 31. Cloudflare

The eventual deployment target is Cloudflare.

The initial website should remain a static website.

Do not introduce Cloudflare-specific backend infrastructure unless explicitly required.

The project should simply be capable of producing a production-ready static build.

---

# 32. Project Structure

Use your judgment, but create a clean architecture.

Something along the lines of:

```text
src/
├── components/
│   ├── core/
│   ├── layout/
│   ├── sections/
│   └── interactive/
├── layouts/
├── pages/
├── content/
├── data/
├── styles/
└── assets/
```

The exact structure should follow the actual requirements.

Do not create folders simply for the sake of having folders.

---

# 33. Code Quality

Use:

- strict TypeScript
- meaningful naming
- small components
- clean Tailwind
- semantic HTML
- minimal dependencies
- reusable patterns
- no unnecessary abstractions

Avoid:

- `any`
- duplicated logic
- giant components
- giant page files
- dead code
- unnecessary global state
- premature architecture

---

# 34. Git and Project Setup

Create or preserve a clean Git setup.

Ensure appropriate:

```text
.gitignore
README.md
.env.example
```

Do not commit secrets.

Document:

- installation
- development
- build
- preview
- deployment
- content workflow
- asset workflow
- environment variables if any

---

# 35. Development Commands

The final project should support appropriate commands such as:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```

Use the package manager already established in the environment if one exists.

Do not switch package managers unnecessarily.

---

# 36. Browser Validation

After implementation, inspect the website in a real browser.

Verify:

- every page
- every route
- navigation
- mobile navigation
- responsive layouts
- typography
- images
- animations
- hover states
- forms
- keyboard navigation
- focus states
- reduced motion
- console errors
- broken links
- network errors

Fix issues rather than merely reporting them.

---

# 37. Visual Validation

Compare the implementation against the FigCraft design.

Pay particular attention to:

- proportions
- typography
- spacing
- alignment
- image treatment
- responsive behavior
- animation timing
- hover behavior
- transitions

If the implementation doesn't visually match the design, iterate.

Do not settle for a rough approximation when the design information is available through FigCraft.

---

# 38. Do Not Over-Engineer

This is important.

The immediate objective is a **single, excellent studio website**.

Do not build the future Aleywa platform now.

Do not build:

- CMS
- admin dashboard
- CRM
- database
- authentication
- client portal
- complex API
- VPS backend
- unnecessary infrastructure

The architecture should be clean and maintainable, but the implementation should remain lean.

---

# 39. Final Creative Standard

The finished website should feel:

- premium
- confident
- editorial
- expressive
- contemporary
- distinctive
- technically excellent
- fast
- intentionally designed

It should not feel like:

- a template
- a SaaS dashboard
- a generic startup website
- an over-engineered developer project
- an animation showcase

The visual design comes from FigCraft.

The implementation should make that design feel even better on the web.

---

# 40. Execution

Follow this sequence:

### Step 1
Inspect the existing directory.

### Step 2
Inspect FigCraft through MCP.

### Step 3
Inspect all relevant designs, including Page Core Foundation and Page Core Components.

### Step 4
Create the implementation plan.

### Step 5
Scaffold the Astro + TypeScript + Tailwind + SolidJS project.

### Step 6
Implement the design foundation.

### Step 7
Implement the pages and components.

### Step 8
Implement the motion system and key interactions.

### Step 9
Implement forms and validation where required.

### Step 10
Implement SEO and accessibility.

### Step 11
Run type checking, linting, formatting, and production build.

### Step 12
Test in the browser.

### Step 13
Compare against FigCraft and refine.

### Step 14
Fix all obvious issues.

### Step 15
Leave the project clean and ready for deployment.

At the end, provide a concise report covering:

1. What was built
2. Pages created
3. Main components
4. FigCraft integration
5. Motion implemented
6. Dependencies added
7. Commands to run
8. Build/deployment instructions
9. Anything requiring manual attention

---

# Final Instruction

Use engineering and creative judgment throughout the project.

**Do not ask me to specify every implementation detail.**

Inspect the FigCraft project and MCP and determine the appropriate implementation yourself.

The supplied FigCraft design, Page Core Foundation, and Page Core Components are the primary references.

Use **Astro + Tailwind + TypeScript**, with **SolidJS only where necessary**.

Build a **static-first website**.

Use **clean architecture**.

Use **proper form validation** where forms exist.

Use **substantial but tasteful motion**.

Keep the site fast.

Respect accessibility.

Do not over-engineer.

Most importantly:

> **Make Aleywa Studios feel like a premium creative studio on the web, not like a developer demo.**

Begin by inspecting the project and FigCraft, then create the implementation plan before starting the main build.