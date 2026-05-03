/**
 * Triggers a haptic vibration pulse on supporting devices (Android Chrome, etc.).
 * iOS Safari does not support the Vibration API — this fails silently.
 * @param pattern ms duration or array pattern e.g. [10, 30, 10]
 */
export function triggerHaptic(pattern: number | number[] = 20): void {
  if (typeof window !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(pattern);
  }
}
