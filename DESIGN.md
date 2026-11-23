---
name: Artashes Kocharyan
description: Dark instrument panel for a personal QA portfolio, with one orange signal.
colors:
  signal-orange: "#ff7a18"
  signal-soft: "#ffab6b"
  signal-dim: "#7a3708"
  console-black: "#0a0b0d"
  console-surface: "#101216"
  console-elevated: "#15181e"
  hairline: "#23262e"
  hairline-strong: "#32363f"
  readout-white: "#f2f4f7"
  readout-muted: "#9ba1ad"
  readout-faint: "#808795"
typography:
  display:
    fontFamily: "'Inter Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "4.5rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Inter Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.11
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Inter Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "'Inter Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "'JetBrains Mono Variable', ui-monospace, 'SFMono-Regular', monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.18em"
rounded:
  tile: "1.25rem"
  xl: "0.75rem"
  lg: "0.5rem"
  full: "9999px"
  focus: "4px"
spacing:
  gutter: "20px"
  gutter-lg: "32px"
  section: "80px"
  section-lg: "112px"
  card: "24px"
  card-lg: "32px"
  gap: "20px"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.console-black}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.signal-soft}"
    textColor: "{colors.console-black}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.readout-white}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  button-secondary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.signal-orange}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  input:
    backgroundColor: "color-mix(in oklab, #15181e 60%, transparent)"
    textColor: "{colors.readout-white}"
    rounded: "{rounded.xl}"
    padding: "12px 16px"
  chip:
    backgroundColor: "color-mix(in oklab, #15181e 60%, transparent)"
    textColor: "{colors.readout-muted}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  chip-live:
    backgroundColor: "color-mix(in oklab, #ff7a18 12%, transparent)"
    textColor: "{colors.signal-orange}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  card:
    backgroundColor: "{colors.console-surface}"
    textColor: "{colors.readout-white}"
    rounded: "{rounded.tile}"
    padding: "24px"
  nav-link:
    textColor: "{colors.readout-muted}"
    rounded: "{rounded.full}"
    padding: "8px 14px"
  nav-link-active:
    textColor: "{colors.readout-white}"
    rounded: "{rounded.full}"
    padding: "8px 14px"
  monogram:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.console-black}"
    rounded: "{rounded.lg}"
    width: "32px"
    height: "32px"
---

# Design System: Artashes Kocharyan

## Overview

**Creative North Star: "The Night Console"**

The site is a dark instrument panel for a person, not a product. Console Black is the chassis. Inter carries the name, the roles, and the paragraphs a hiring manager actually reads. JetBrains Mono is the readout: dates, tags, and handles. Signal Orange is the one live indicator. It marks the title, the primary action, the active section, and the labels that say where you are.

The mood is technical but human. Restraint keeps the chrome thin, and the orange plus the personal record keep the page from turning into a dashboard. Tiles sit flat on the chassis until a pointer arrives; then they rise. Motion is short, eased, and removed when the visitor asks for less of it.

The system refuses generic startup landing pages: gradient headlines, purple-blue glows, and marketing chrome.

**Key Characteristics:**

- Dark chassis by default, with a light reassignment of the same tokens
- One chromatic signal, used rarely
- Mono for labels, sans for reading
- Pills for actions, 1.25rem tiles for content
- Flat at rest, lifted on hover
- Focus is always a 2px Signal Orange ring

## Colors

A near-black chassis, cool gray readouts, and one orange that is allowed to feel hot.

The values below are the dark default, which is what the theme block defines. Light mode does not add a second palette. The light theme reassigns the same custom properties: the chassis becomes `#f7f7f8` and white, ink becomes `#14161a`, and Signal Orange deepens to `#c24a00` so small text still holds. Signal Dim flips from a dark bronze to the pale tint `#ffd9bd`, because in light mode it is a wash rather than a shadow.

### Primary

- **Signal Orange** (`{colors.signal-orange}`): The live indicator. Primary buttons, the role line under the name, the active nav tick, link hover, selection fill, and focus rings.
- **Signal Soft** (`{colors.signal-soft}`): The hover fill of the primary button. Warmer and lighter than Signal Orange, still on Console Black text.
- **Signal Dim** (`{colors.signal-dim}`): The darkened orange used when a wash needs a stop that is still in the same hue. In light mode the same token becomes the pale tint.

### Neutral

- **Console Black** (`{colors.console-black}`): Page background and the text color sitting on Signal Orange. Selection text is this same value in both themes.
- **Console Surface** (`{colors.console-surface}`): Tiles, the hero stat strip, and any panel that needs to lift off the chassis without a shadow.
- **Console Elevated** (`{colors.console-elevated}`): Insets inside a tile: fields, skill wells, and the quiet status pill.
- **Hairline** (`{colors.hairline}`): Default borders, dividers, and the hero grid lines.
- **Hairline Strong** (`{colors.hairline-strong}`): The secondary button's resting border, and the hover border of an ordinary tile.
- **Readout White** (`{colors.readout-white}`): Names, headings, and primary labels.
- **Readout Muted** (`{colors.readout-muted}`): Body copy, nav at rest, and secondary button-adjacent text.
- **Readout Faint** (`{colors.readout-faint}`): Dates, placeholders, helper text, and the toolbox label. It is still a text color, not a decorative gray.

### Named Rules

**The One Signal Rule.** Signal Orange is the only chromatic color. It marks the live title, the primary action, active navigation, and selection. It does not fill large surfaces. The hero wash is a 16% mix that fades out, not a second background.

**The Contrast Floor Rule.** Text tokens are chosen to clear 4.5:1 against Console Black and Console Surface. Readout Faint is part of that floor because mono labels are small.

## Typography

**Display Font:** Inter Variable (with the system sans fallback)
**Body Font:** Inter Variable (same stack)
**Label/Mono Font:** JetBrains Mono Variable (with the system mono fallback)

**Character:** Inter is the voice of the person. JetBrains Mono is the instrument marking. The pairing stays human because the sentences that matter are never in the readout face.

### Hierarchy

- **Display** (600, 4.5rem at large widths, line-height 1, tracking -0.025em): The name in the first viewport. It steps down to 3.75rem, then 2.25rem, as the viewport narrows. Tight tracking, no uppercase.
- **Headline** (600, 2.25rem, line-height 1.11, tracking -0.025em): Section titles. 1.875rem below the small breakpoint.
- **Title** (600, 1.25rem, line-height 1.3, tracking -0.025em): Organization names, project names, and the hero highlight values.
- **Body** (400, 1rem, line-height 1.625): Section descriptions. The opening paragraph is 1.125rem. Copy inside tiles is 0.875rem, still in Inter, still relaxed leading. Measure for introductions and section headers stays near 42rem.
- **Label** (400, 11px, tracking 0.18em, uppercase): Dates, categories, tags, and handles, in JetBrains Mono. Toolbox skill names use 12px without the wide tracking. Section headings are Inter. They do not take a number.

### Named Rules

**The Readout Rule.** JetBrains Mono is for dates, meta, tags, and handles. Names, headings, and paragraphs stay in Inter.

## Layout

One chassis, one reading column. The page container is 72rem, with 20px of side padding that becomes 32px from the small breakpoint up. Sections are separated by a hairline and padded 80px vertically, 112px from the small breakpoint up. The sticky nav accounts for 5.5rem of scroll padding so anchored headings stay visible.

Inside a section, the header block sits in a 42rem measure, then the content starts 48px below (56px from the small breakpoint). Grids use a 20px gap. The project bento is 12 columns only at the large breakpoint; spans in a row add up to 12, and the first wide tile can run the full width. Below that, everything is one column. The experience list becomes a timeline with a vertical hairline only from the small breakpoint up.

Density is comfortable, not compact. A hiring manager is reading a record, not scanning a table.

### Named Rules

**The Single Chassis Rule.** New blocks join the 72rem column. They do not introduce a second max width, a full-bleed marketing band, or a sidebar.

## Elevation & Depth

Depth at rest is tonal, not shadowed. Console Black, then Console Surface, then Console Elevated, separated by Hairline borders. Shadows exist only as a response: a primary button and a featured or project tile pick up an orange glow and rise when hovered. An ordinary experience tile uses a dark shadow on hover instead, so the orange glow stays special.

The opening viewport is the one atmospheric exception. A 72px hairline grid, masked to a soft ellipse, sits under a radial wash of Signal Orange at 16% strength. It does not repeat behind later sections.

### Shadow Vocabulary

- **Action glow** (`box-shadow: 0 12px 32px -12px var(--color-accent)`): Primary button hover, paired with a 2px rise.
- **Featured glow** (`box-shadow: 0 20px 50px -24px var(--color-accent)`): Featured experience tile on hover.
- **Tile glow** (`box-shadow: 0 24px 60px -32px var(--color-accent)`): Project tile on hover. A blurred orange disc in the tile's corner fades in with it.
- **Resting lift** (`box-shadow: 0 20px 50px -30px rgba(0,0,0,0.7)`): Ordinary experience tile on hover, with no orange.

### Named Rules

**The Hover Lift Rule.** Surfaces are flat at rest. A shadow and a rise appear only as a hover response, and only on controls and tiles that already use them.

## Shapes

Two silhouettes do almost all the work. Actions, status, nav links, and icon buttons are full pills. Content containers — experience entries, projects, about panels, contact panels — use the 1.25rem tile. Nested insets, fields, and icon wells use 0.75rem. The monogram is 0.5rem. Focus outlines use a 4px corner even when the control is a pill, so the ring reads as a ring rather than a second shape.

Borders are 1px hairlines. Nothing is clipped into a circle except the timeline node and the availability dot.

### Named Rules

**The Pill and Tile Rule.** If it is an action or a status, it is a pill. If it holds a paragraph, it is a tile. Do not mix those jobs.

## Components

Controls feel tactile and confident: a pill that lifts, a tile that rises, a clear change of border when a field is active. The orange control is the hot one. Everything else stays on the chassis until the pointer arrives.

### Buttons

- **Shape:** Full pill (`{rounded.full}`), 14px Inter at weight 600, 12px by 20px of padding, with a 16px icon.
- **Primary:** Signal Orange fill, Console Black text. Hover shifts the fill to Signal Soft, rises 2px, and takes the action glow. The icon nudges in the direction of the action.
- **Hover / Focus:** Hover is 200ms. Focus uses the global ring: 2px Signal Orange, 3px offset.
- **Secondary:** Transparent fill, Readout White text, Hairline Strong border. Hover rises 2px, turns the border and the text to Signal Orange.

### Chips

- **Style:** Full pills in JetBrains Mono at 11px. The quiet tag has a Hairline border, a Console Elevated fill at 60% strength, and Readout Muted text. The stack tag inside a project is the same idea with tighter padding.
- **State:** A featured status (the live kind of work) drops the border and fills with Signal Orange at 12% strength, text in Signal Orange. A resting status uses solid Console Elevated and Readout Faint.

### Cards / Containers

- **Corner Style:** Tile radius (`{rounded.tile}`).
- **Background:** Console Surface. Toolbox groups use the surface at 60% strength.
- **Shadow Strategy:** None at rest. See Elevation for the hover glows. Featured work uses a Signal Orange border at 40% strength that becomes solid on hover.
- **Border:** 1px Hairline. Ordinary tiles strengthen to Hairline Strong on hover.
- **Internal Padding:** 24px, becoming 28px or 32px from the small breakpoint. Inner lists are separated from the title by a hairline, not by a change of surface.

### Inputs / Fields

- **Style:** 0.75rem corners, 1px Hairline, Console Elevated at 60% strength, 12px by 16px padding, 14px Inter, Readout Faint placeholder.
- **Focus:** The border becomes Signal Orange and the browser outline is suppressed, so the field's own stroke is the focus state. Hover, before focus, strengthens the border to Hairline Strong.
- **Error / Disabled:** No separate error or disabled palette is defined. Required fields rely on the browser's constraint behavior.

### Navigation

The bar is transparent until the page moves, then it picks up Console Black at 90% with a light blur and a Hairline bottom edge. Links are 14px Inter, Readout Muted at rest, Readout White on hover and when current. The current section draws a 1px Signal Orange tick under the label, scaled from the left. The monogram is a 32px Signal Orange square at 0.5rem radius with the initials in JetBrains Mono, weight 700, Console Black. The theme and menu buttons are 36px pills with a Hairline border. Below the medium breakpoint the section links leave the bar and stack in a panel on Console Black.

### Hero wash

The first viewport carries the masked 72px grid and the 16% Signal Orange wash. An availability pill (Hairline border, surface at 70%, a pulsing Signal Orange dot) sits above the name. The pulse is decorative and is turned off when reduced motion is requested. This wash is not a component to repeat.

## Do's and Don'ts

### Do:

- **Do** keep Signal Orange as the only chromatic color, and keep it off large fills.
- **Do** leave dark as the default. Light mode reassigns the same tokens; it does not introduce a second palette.
- **Do** use Inter for reading and JetBrains Mono for labels.
- **Do** lift primary buttons and tiles on hover, and leave them flat at rest.
- **Do** draw focus as a 2px Signal Orange outline, 3px outside the control, with a 4px corner.
- **Do** gate entrance motion, smooth scrolling, and the availability pulse behind a reduced-motion preference.

### Don't:

- **Don't** use gradient headlines, purple-blue glows, or marketing chrome.
- **Don't** add a second accent, a gradient text treatment, or a resting drop shadow on tiles.
- **Don't** set paragraphs or the person's name in JetBrains Mono.
- **Don't** invent a new resting shadow. The hover shadows already on buttons and tiles are the whole vocabulary.
- **Don't** repeat the hero grid behind later sections.
