/* =====================================================================
   OPELY — icons, shared by every page

   A small set of line icons drawn on a 24 × 24 grid with rounded ends,
   in the spirit of Apple's SF Symbols. They take the colour of the text
   around them, so CSS decides their colour.

   icon("book")              a plain icon
   tile("book", "blue")      the icon in a small coloured rounded square,
                             like the icons in iPhone Settings
   ===================================================================== */

const ICON_PATHS = {
  // subjects and places
  cpu: '<rect x="5" y="5" width="14" height="14" rx="3"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  sparkles: '<path d="M11 3l1.6 4.4L17 9l-4.4 1.6L11 15l-1.6-4.4L5 9l4.4-1.6z"/><path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z"/>',
  shield: '<path d="M12 21s7.5-3.4 7.5-9.5V5.6L12 3 4.5 5.6v5.9C4.5 17.6 12 21 12 21z"/><path d="M9 11.8l2 2 4-4"/>',
  school: '<path d="M2 9.5L12 5l10 4.5L12 14z"/><path d="M6 11.5V16c3.5 2.6 8.5 2.6 12 0v-4.5"/><path d="M22 9.5V15"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  // content
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/><path d="M8.5 7.5h7"/>',
  doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>',
  slides: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8"/><path d="M10 8.5v4l3.5-2z"/>',
  link: '<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/>',
  flask: '<path d="M9.5 3.5h5M10.5 3.5v6L5 18.2A1.6 1.6 0 0 0 6.4 20.5h11.2a1.6 1.6 0 0 0 1.4-2.3L13.5 9.5v-6"/><path d="M7.5 15h9"/>',
  code: '<path d="M8.5 7.5L4 12l4.5 4.5M15.5 7.5L20 12l-4.5 4.5"/><path d="M13.5 5l-3 14"/>',
  picture: '<rect x="3.5" y="4.5" width="17" height="15" rx="3"/><circle cx="9" cy="9.5" r="1.6"/><path d="M4 17l4.5-4.5 3.5 3.5 2.5-2.5L20 19"/>',
  notebook: '<rect x="5" y="3.5" width="14" height="17" rx="2.5"/><path d="M5 8h-1.5M5 12h-1.5M5 16h-1.5"/><path d="M9.5 8.5h5M9.5 12h5"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l5.5-3.5z"/>',
  megaphone: '<path d="M4 10v4a1 1 0 0 0 1 1h2l6 4.5V4.5L7 9H5a1 1 0 0 0-1 1z"/><path d="M16.5 9a4 4 0 0 1 0 6"/><path d="M19 6.5a7.5 7.5 0 0 1 0 11"/>',
  bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2.2 2.2 0 0 0 4 0"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
  person: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c1.4-3.6 4.3-5.5 7.5-5.5s6.1 1.9 7.5 5.5"/>',
  people: '<circle cx="9" cy="8.5" r="3.5"/><path d="M2.5 19.5c1-3 3.6-4.7 6.5-4.7s5.5 1.7 6.5 4.7"/><path d="M15.5 5.2a3.5 3.5 0 0 1 0 6.6M17.5 14.9c2 .6 3.4 2.2 4 4.6"/>',
  // settings
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  appearance: '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  tray: '<path d="M3 13l2.5-7.2A2 2 0 0 1 7.4 4.5h9.2a2 2 0 0 1 1.9 1.3L21 13v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 13h5l1.5 2.5h5L16 13h5"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><path d="M12 7.6v.1"/>',
  key: '<circle cx="8" cy="15" r="4.5"/><path d="M11.2 11.8L20 3M16 7l3 3M14 9l2 2"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  // actions
  plus: '<path d="M12 5v14M5 12h14"/>',
  trash: '<path d="M4 7h16"/><path d="M10 11v6M14 11v6"/><path d="M6 7l1 12.5a2 2 0 0 0 2 1.5h6a2 2 0 0 0 2-1.5L18 7"/><path d="M9 7V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V7"/>',
  download: '<path d="M12 4v11"/><path d="M7.5 10.5L12 15l4.5-4.5"/><path d="M4.5 19.5h15"/>',
  upload: '<path d="M12 15V4"/><path d="M7.5 8.5L12 4l4.5 4.5"/><path d="M4.5 19.5h15"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  pencil: '<path d="M4 20h4L19.5 8.5a2.8 2.8 0 0 0-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
  signout: '<path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"/><path d="M15 16l4-4-4-4M19 12H9"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20.5 20.5L16 16"/>',
  chevron: '<path d="M9 5l7 7-7 7"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  wifioff: '<path d="M2 8.5a15 15 0 0 1 4.6-2.8M22 8.5A15 15 0 0 0 10 5.1"/><path d="M5 12a10 10 0 0 1 4-2.3M19 12a10 10 0 0 0-2.3-1.6"/><path d="M8.5 15.5a5 5 0 0 1 7 0"/><path d="M12 19.5v.1"/><path d="M3 3l18 18"/>'
};

// One icon. `extra` adds CSS classes.
function icon(name, extra) {
  return `<svg class="ic${extra ? " " + extra : ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ` +
    `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name] || ICON_PATHS.doc}</svg>`;
}

// An icon in a small coloured rounded square. `color` is one of the colour names in style.css.
function tile(name, color, extra) {
  return `<span class="tile ${color || "gray"}${extra ? " " + extra : ""}">${icon(name)}</span>`;
}

// The kind of a file or source, read from its address: [icon, colour]
function fileKind(url) {
  if (!url) return ["doc", "gray"];
  if (/youtu\.?be|vimeo|\.mp4$/i.test(url)) return ["play", "pink"];
  if (/^https?:/i.test(url)) return ["link", "blue"];
  if (/\.pdf$/i.test(url)) return ["doc", "red"];
  if (/\.ipynb$/i.test(url)) return ["notebook", "orange"];
  if (/\.(png|jpe?g|gif|webp|bmp|avif)$/i.test(url)) return ["picture", "green"];
  if (/\.(py|pyw|c|h|cpp|cc|cxx|hpp|cs|java|kt|swift|go|rs|rb|php|js|mjs|jsx|ts|tsx|html?|xml|css|scss|json|sql|sh|bash|ya?ml|r|lua|m)$/i.test(url)) return ["code", "teal"];
  if (/\.(pptx?|key|odp)$/i.test(url)) return ["slides", "orange"];
  return ["doc", "indigo"];
}
