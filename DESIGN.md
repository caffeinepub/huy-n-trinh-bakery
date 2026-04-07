# Design Brief: Huyền Trinh Coffee & Bake

## Tone & Purpose
Refined, minimal Vietnamese bakery + coffee shop. Gallery-like editorial presentation. Premium, welcoming, calm. Soft pastel aesthetic with generous breathing room and high-quality imagery.

## Color Palette (OKLCH)
| Semantic | Light | Dark | Usage |
|----------|-------|------|-------|
| Background | 0.97 0.02 60 | 0.18 0.03 55 | Page base, breathing room |
| Foreground | 0.25 0.05 60 | 0.92 0.02 65 | Body text, contrast |
| Card | 0.98 0.02 65 | 0.22 0.03 60 | Product cards, elevated surfaces |
| Primary (Brown) | 0.58 0.16 15 | 0.75 0.12 20 | Buttons, CTA, accent |
| Secondary (Beige) | 0.88 0.08 40 | 0.35 0.06 50 | Subtle backgrounds, section breaks |
| Accent (Blush Pink) | 0.72 0.12 340 | 0.82 0.10 345 | Interactive focus, highlights |
| Muted | 0.93 0.03 50 | 0.3 0.05 55 | Disabled, tertiary |
| Destructive | 0.55 0.22 25 | 0.65 0.19 22 | Errors, warnings |

## Typography
- **Display**: Fraunces (serif, 400-900). Headlines, hero section.
- **Body**: Lora (serif, 400-700). Copy, product descriptions, supporting text.
- **Scale**: Display (3xl/5xl), Heading (xl/2xl), Subheading (lg), Body (base), Small (sm).

## Elevation & Depth
- **Shadows**: Card shadow (4px 12px @ 0.08), Hover shadow (8px 20px @ 0.12).
- **Cards**: 12-16px border-radius, 0.75rem default. Lifted on hover.
- **Layering**: Background < Card < Popover. Subtle depth, no stacking shadows.

## Structural Zones
| Zone | Treatment | Rationale |
|------|-----------|-----------|
| Header | bg-card, border-b, soft brown | Navigation anchor, clear hierarchy |
| Hero | Full-width image, centered text overlay | Showcase bakery imagery, emotional entry |
| Content | bg-background, alternating bg-muted/30 sections | Breathing room, rhythm |
| Product Grid | Card-based, 4-6 items per row, rounded 12px | Gallery presentation, minimal clutter |
| Footer | bg-muted/20, border-t, centered text | Subtle close, contact info |

## Spacing & Rhythm
- **Grid**: 24px/32px horizontal, 32px/48px vertical between sections.
- **Internal padding**: Cards 24px, buttons 16px H / 12px V.
- **Density**: Loose — ample whitespace. Never full-bleed to edge.

## Component Patterns
- **Buttons**: Primary (brown bg), Secondary (beige bg), Ghost (border-only). All 12px radius, smooth hover (opacity shift). No multiple colors on one button.
- **Cards**: Product cards rounded 12px, shadow-card. Image: 100% width, object-cover. Title: Fraunces serif. Price: Subtle gray.
- **Forms**: Minimal styling, soft border, focus ring (pink accent).
- **Links**: Underline on hover (beige/brown), no color change.

## Motion
- **Interaction**: Smooth 0.3s cubic-bezier(0.4, 0, 0.2, 1) on hover, focus, active states.
- **Entrance**: None — premium, not toy-like. Let typography and imagery speak.
- **Transitions**: Opacity shifts on buttons/links, shadow lift on cards. No scale/rotate animations.

## Constraints
- No generic Bootstrap blue, no default Tailwind colors.
- No full-page gradients, no rainbow palettes.
- All colors via OKLCH tokens in index.css, consumed by Tailwind utilities.
- Rounded corners intentional (0, 8px, 12px, 16px, full) — not uniform.
- Vietnamese language, 100% UI copy localized.

## Signature Detail
Soft pastel color layering with intentional negative space. Blush pink accent used sparingly for focus states and call-to-action highlights. Premium serif fonts (Fraunces + Lora) convey editorial sophistication and craftsmanship. Generous card shadows with subtle blur create depth without heaviness.
