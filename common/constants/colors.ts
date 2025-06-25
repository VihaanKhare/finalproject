// src/styles/colors.ts

// Core brand and content colors
export const CORE_PALETTE = {
  // Blues (e.g., for headers, primary buttons)
  DARK_BLUE: '#1C3E6D',
  OCEAN_BLUE: '#226090',
  SKY_BLUE: '#6DD4FF',

  // Greens (e.g., for positive indicators, illustrations)
  FOREST_GREEN: '#086F6C',
  LIME_GREEN: '#65A30D',
  EMERALD_GREEN: '#06945E',

  // Reds & Pinks (e.g., for warnings, alerts, strong highlights)
  CRIMSON_RED: '#C02020',
  ROSE_PINK: '#DB2777',
  SUNSET_RED: '#EF4444',

  // Oranges & Browns (e.g., for secondary accents, earthy tones)
  GOLDEN_AMBER: '#FBBF24',
  TERRACOTTA: '#B45309',
  DESERT_SAND: '#D6AD66',

  // Neutrals (e.g., for text, backgrounds, borders)
  GRAPHITE: '#374151',
  CHARCOAL: '#6B7280', // New neutral shade
  SILVER: '#9CA3AF',
  PLATINUM: '#E5E7EB', // New light neutral shade
  SNOW_WHITE: '#F9FAFB', // New very light neutral
};

// Application-specific utility and accent colors
export const UTILITY_COLORS = {
  // Feedback states
  SUCCESS: '#22C55E',
  WARNING: '#FACC15',
  ERROR: '#EF4444',
  INFO: '#3B82F6',

  // UI States
  DISABLED: '#D1D5DB',
  FOCUSED: '#9333EA', // Renamed PRIMARY_ACCENT to FOCUSED for a clearer purpose
};

// Primary accent colors derived from CORE_PALETTE or a specific brand guideline
export const BRAND_ACCENTS = {
  PRIMARY_BRAND: UTILITY_COLORS.FOCUSED, // Our chosen purple as the primary brand accent
  SECONDARY_BRAND: CORE_PALETTE.ROSE_PINK, // Our chosen pink as a secondary brand accent
  HIGHLIGHT: CORE_PALETTE.GOLDEN_AMBER, // An amber for highlights
};

// Export all available colors as a single, flattened object for convenience
export const ALL_COLORS = {
  ...CORE_PALETTE,
  ...UTILITY_COLORS,
  ...BRAND_ACCENTS,
};

// Export an array of all hex values
export const ALL_COLOR_HEX_VALUES = Object.values(ALL_COLORS);

// A palette of visually distinct colors for user avatars
export const COLORS_ARRAY = [
  '#6366f1', // Indigo
  '#f472b6', // Pink
  '#fbbf24', // Amber
  '#34d399', // Green
  '#60a5fa', // Blue
  '#f87171', // Red
  '#a78bfa', // Purple
  '#facc15', // Yellow
  '#38bdf8', // Sky
  '#f472b6', // Pink (repeat for more users)
];

// Optional: Export specific palettes if components only need a subset
export default {
  CORE_PALETTE,
  UTILITY_COLORS,
  BRAND_ACCENTS,
  ALL_COLORS,
  ALL_COLOR_HEX_VALUES,
  COLORS_ARRAY,
};