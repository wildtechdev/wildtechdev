/** URL-safe id from heading text. Shared by the Prose renderer and the
 *  journal table of contents so anchors always agree. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
