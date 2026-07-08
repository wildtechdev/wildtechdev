/**
 * Format an ISO date string (e.g. "2026-06-08") for display.
 *
 * Forces UTC so a date-only string never shifts a day depending on the
 * server's timezone (date-only ISO strings parse as UTC midnight; formatting
 * them in a negative-offset timezone would render the previous day).
 */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
