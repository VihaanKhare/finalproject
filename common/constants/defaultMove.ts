// src/constants/defaultMove.ts
import { Move } from '../types/global';

// Importing a more refined color palette (assuming it's defined elsewhere, as in our previous example)
import { BRAND_ACCENTS, CORE_PALETTE } from '../styles/colors';

export const CANVAS_INITIAL_STATE: Move = { // Renamed for clarity
  // Geometric properties for different shapes
  circle: {
    centerX: 0, // Renamed cX to centerX for clarity
    centerY: 0, // Renamed cY to centerY for clarity
    radiusX: 0,
    radiusY: 0,
  },
  rectangle: { // Renamed rect to rectangle
    width: 0,
    height: 0,
  },
  pathData: [], // Renamed path to pathData for more specificity

  // Drawing and rendering options
  drawingOptions: { // Renamed options to drawingOptions
    type: 'freehand', // Renamed 'shape' to 'type', added a new default type
    mode: 'draw',
    strokeWidth: 2, // Changed default lineWidth from 1 to 2 for a bolder default line
    strokeColor: { r: 147, g: 51, b: 234, a: 1 }, // Changed default line color to a vibrant purple (BRAND_ACCENTS.PRIMARY_BRAND)
    fillColor: { r: 0, g: 0, b: 0, a: 0 },
    isFilled: false, // New property: determines if shape should be filled
    opacity: 1, // New property: default opacity
    fontFamily: 'Arial', // New property: default font family for text
    fontSize: 16, // New property: default font size for text
  },

  // Unique identifier and metadata
  id: '',
  timestamp: Date.now(), // Set a dynamic default timestamp

  // Image data
  imageData: { // Renamed img to imageData
    base64Content: '', // Renamed base64 to base64Content
    // Could add more image properties here later, e.g., 'mimeType', 'originalSize'
  },

  // Selection state (moved from options to top level for better access)
  selectionState: null, // Renamed selection to selectionState
};