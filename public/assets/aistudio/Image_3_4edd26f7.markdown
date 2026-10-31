---
name: Neural Slate
colors:
  surface: '#10131b'
  surface-dim: '#10131b'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#181b23'
  surface-container: '#1d2027'
  surface-container-high: '#272a32'
  surface-container-highest: '#32353d'
  on-surface: '#e0e2ed'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e0e2ed'
  inverse-on-surface: '#2d3038'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#d0bcff'
  on-tertiary: '#3c0091'
  tertiary-container: '#a078ff'
  on-tertiary-container: '#340080'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#10131b'
  on-background: '#e0e2ed'
  surface-variant: '#32353d'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system defines an elite, modern software engineering showcase tailored specifically for an Artificial Intelligence and Machine Learning specialist. The brand narrative bridges high-level academic rigor with bleeding-edge deployment capability. The visual personality communicates mathematical precision, technological depth, and focused elegance. It projects absolute competence without visual clutter.

Targeted squarely at senior engineering recruiters, lab directors, and technical founders, the interface evokes the sensation of interacting with a high-end AI research console or telemetry hub. It avoids the chaotic clichés of cyberpunk in favor of a sleek, dark glassmorphic aesthetic characterized by deep space surfaces, refined ambient edge glows, ultra-crisp micro-borders, and high-legibility typographic craft.

## Colors

The palette is engineered around an immersive, low-noise dark space that elevates code blocks, model metrics, and project visualizers.

- **Primary (`#3B82F6` — Electric Blue):** Represents primary actions, active navigation states, interactive key points, and core execution signals. Emits an authoritative, intelligent energy.
- **Secondary (`#06B6D4` — Cyber Cyan):** Applied to telemetry data, benchmark badges, secondary metrics, live status pings, and model architecture highlights. Provides a complementary, analytic luminescence.
- **Tertiary (`#8B5CF6` — Neural Purple):** Used sparingly for AI-specific differentiators such as neural weights tags, synthetic benchmarks, and special research highlights.
- **Neutral Surface Palette:**
  - Base Canvas: Deep Midnight Black (`#080B12`) provides absolute contrast and zero light pollution.
  - Surface Tier 1 (Containers / Canvas Sections): Low Charcoal (`#111726`) at 70% to 85% opacity with backdrop blur.
  - Surface Tier 2 (Interactive Cards / Floating Modals): Elevated Charcoal (`#161F33`).
  - Text & Accents: Crisp Primary White (`#F8FAFC`), Muted Steel (`#94A3B8`), and Ghost Slate (`#475569`) for metadata.
- **Borders & Overlays:** Translucent hairline stroke rules using `rgba(255, 255, 255, 0.08)` to `rgba(59, 130, 246, 0.25)` to create pristine edge definitions.

## Typography

The type system blends mathematical constructivism with high-density utility:
- **Headings (Space Grotesk):** Provides structured geometric forms with subtle technical nuance, immediately signaling modern engineering and forward-looking AI theory.
- **Body Text (Inter):** Highly legible, neutral, and systematically tuned for dense project narratives, resume highlights, and analytical write-ups.
- **Metadata & Monospace (JetBrains Mono):** Elevates technical legitimacy across system metrics, loss curve markers, training parameters, repository links, and categorical tags.

## Layout & Spacing

The portfolio employs a fixed-width grid architecture capped at a modern max-width of `1280px` on desktop, centering content within atmospheric background glows.

- **Desktop (1024px+):** Standard 12-column layout with `1.5rem` gutters and `3rem` section margins. Ensures optimal scanning bandwidth for multi-column project cards, tech stacks, and split-screen bio/research sections.
- **Tablet (768px - 1023px):** Collapses to 6 or 8 columns with `1.5rem` gutters and `2rem` side margins.
- **Mobile (< 768px):** 4-column flow with `1rem` gutters and `1.25rem` outer canvas padding. Grids gracefully collapse into single vertical stacks without sacrificing touch target clearances (minimum 44px).
- **Rhythm:** Macro vertical spacing follows generous bounds (`4rem` to `6rem` between major showcase sections) to give deep models and complex diagrams room to breathe.

## Elevation & Depth

Visual hierarchy is achieved through disciplined translucent layering, frosted backdrop filters, and delicate ambient luminescent glows:

- **Surface Layers:**
  - Base: Canvas floor (`#080B12`).
  - Tier 1 Glass: Backdrop blur `16px`, fill `rgba(17, 23, 38, 0.75)`, 1px border `rgba(255, 255, 255, 0.06)`.
  - Tier 2 Interactive Surface: Backdrop blur `20px`, fill `rgba(22, 31, 51, 0.85)`, 1px border `rgba(255, 255, 255, 0.1)`.
- **Glow & Shadow Philosophy:**
  - Ambient Elevation: Card rest state features an extra-diffused, shadow envelope: `0 12px 32px -8px rgba(0, 0, 0, 0.6)`.
  - Electric Hover Glow: Dynamic elevation utilizes a dual-layer drop: `0 20px 40px -12px rgba(8, 11, 18, 0.8)`, paired with an ethereal radial accent blur `0 0 24px -4px rgba(59, 130, 246, 0.25)`.
  - Border Highlights: Active cards and focused interactive controls transition their 1px hairline border from muted white (`rgba(255, 255, 255, 0.08)`) to vibrant cyan/blue gradient strokes (`rgba(59, 130, 246, 0.5)` to `rgba(6, 182, 212, 0.5)`).

## Shapes

The geometric form system leans into modern high-tech balance using Level 2 (Rounded) geometry:
- Standard UI containers and project cards feature `0.75rem` to `1rem` (`rounded-lg`) corner radii, smoothing the harsh edges of traditional technical interfaces while preserving structural integrity.
- Chips, metadata badges, and pill buttons utilize fully rounded profiles (`rounded-full`) to deliver clean visual contrast against sharp rectilinear grids and technical charts.
- Form inputs, code blocks, and micro-controls maintain a consistent `0.5rem` (`rounded-md`) radius.

## Components

### Buttons
- **Primary Action (Deploy / Contact / View Live):** Solid gradient fill from `#3B82F6` to `#2563EB`, text color pure white, with an inline shadow `0 0 20px rgba(59, 130, 246, 0.35)`. Subtle `translate-y(-1px)` and intensified bloom on hover.
- **Secondary / Outline (View Code / Paper PDF):** Frosted glass background `rgba(22, 31, 51, 0.6)` with a 1px border `rgba(255, 255, 255, 0.12)`. On hover, the border brightens to `#06B6D4` with text color shifting to Cyber Cyan.
- **Icon / Ghost:** Transparent background with `#94A3B8` icon stroke, switching to `#F8FAFC` and `rgba(59, 130, 246, 0.1)` circular glow on interaction.

### Cards & Project Showcase
- Built with Tier 1 Glassmorphic surfaces (`#111726` at 80% opacity, `backdrop-filter: blur(12px)`).
- Bound by a hairline border: `1px solid rgba(255, 255, 255, 0.08)`.
- Features an interior top gradient shimmer (`linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)`).
- Incorporates dedicated zones for architecture diagrams, live GitHub metrics, and tech stack tokens.

### Badges & Chips
- **Model Status / Technology Chips (e.g., PyTorch, CUDA, Transformer):** `JetBrains Mono` label font, uppercase, `letterSpacing: 0.06em`. Filled with `rgba(6, 182, 212, 0.08)` background, cyan border `rgba(6, 182, 212, 0.3)`, and text color `#06B6D4`.
- **Live State Ping:** Micro badge equipped with a pulsating radial green/cyan indicator for model availability or active employment status.

### Form Inputs & Terminal Controls
- Inverted deep surface fill (`#080B12`) with a clean `1px solid rgba(255, 255, 255, 0.1)` container.
- Focused state transitions to a prominent electric blue stroke (`#3B82F6`) with an ambient outer glow (`box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2)`).
- Placeholder copy rendered in Ghost Slate (`#475569`).

### Interactive AI Model Metrics Bar
- Designed for displaying training loss, accuracy, latency, and context lengths.
- High-contrast figures set in `Space Grotesk`, accompanied by micro-labels in `JetBrains Mono`.
- Miniature progress indicators utilize vibrant dual-color gradient fills (Cyan to Electric Blue) atop recessed tracks (`rgba(255, 255, 255, 0.05)`).