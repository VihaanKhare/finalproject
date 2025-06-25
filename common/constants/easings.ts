// src/animation/easingConstants.ts

/**
 * Type definition for a cubic-bezier easing array: [x1, y1, x2, y2].
 */
export type BezierEasing = [number, number, number, number];

/**
 * A curated collection of standard and custom cubic-bezier easing functions.
 * Use these to control the acceleration and deceleration of animations for a consistent feel.
 */
export const AppEasing = { // Renamed EASING_CURVES to AppEasing
  /** A slightly snappier ease-out with a subtle bounce for interactive elements. */
  SPRING_OUT: [0.34, 1.56, 0.64, 1] as BezierEasing, // Renamed EASE_OUT_SUDDEN to SPRING_OUT for a more evocative "design" name
  /** Smooth acceleration from start, smooth deceleration to end. */
  SMOOTH_IN_OUT: [0.42, 0, 0.58, 1] as BezierEasing, // Renamed EASE_IN_OUT
  /** Decelerates quickly at the end, good for elements appearing. */
  QUICK_OUT: [0.2, 0.8, 0.8, 0.2] as BezierEasing, // Renamed EASE_OUT
  /** Accelerates quickly at the start, good for elements disappearing. */
  QUICK_IN: [0.8, 0.2, 0.2, 0.8] as BezierEasing, // Renamed EASE_IN
  /** Constant speed throughout the animation. */
  LINEAR: [0, 0, 1, 1] as BezierEasing,
  /** The legacy ease-out curve, preserved for compatibility or specific legacy animations. */
  LEGACY_EASE_OUT: [0.6, 0.01, -0.05, 0.9] as BezierEasing, // Renamed ORIGINAL_EASE to LEGACY_EASE_OUT
};

/**
 * @constant {BezierEasing} DEFAULT_APPLICATION_EASING
 * @description The primary easing curve recommended for most new animations across the application.
 * Chosen for its lively and modern feel.
 */
export const DEFAULT_APPLICATION_EASING = AppEasing.SPRING_OUT; // Uses the more evocatively named SPRING_OUT

/**
 * Exports all easing curves for easy access.
 * @example
 * import Easing from './easingConstants';
 * const animationDuration = 300;
 * animate(element, { opacity: 1 }, { duration: animationDuration, easing: Easing.SMOOTH_IN_OUT });
 */
export default AppEasing;